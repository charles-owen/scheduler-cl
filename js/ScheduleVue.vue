<template>
  <div class="content cl-schedule-view">
    <div v-for="day of days"><h2>{{day.day}} <span class="cl-info">{{day.slots.length}} slots/{{day.slots.length - ownedForDay(day)}} open</span></h2>
      <table>
        <tr v-for="slot of day.slots" :class="slot.booked() ? (owned(slot) ? 'booked owned' : 'booked') : ''">
          <td>{{timeFormat(slot.time)}}<template v-if="staff"><br>
            <a @click.prevent="editer(slot)"><img :src="root + '/vendor/cl/site/img/pencil16.png'" alt="Edit" title="Edit"></a><br>
            <a @click.prevent="deleter(slot)"><img :src="root + '/vendor/cl/site/img/x.png'" alt="Delete" title="Delete"></a>
            </template>
          </td>
          <td><span v-if="slot.booked()" class="booked">{{slot.teamName}}</span>
            <a v-if="!slot.booked() && slot.time > time" @click.prevent="book(slot)">Click to Book</a>
            <span class="location">{{slot.location}}</span>
            <span v-if="slot.booked() && (staff || (owned(slot) && slot.time > time))" class="unbook"><a @click.prevent="unbook(slot)"><img :src="root + '/vendor/cl/site/img/x.png'" alt="Unbook" title="Unbook"></a>
            </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import Dialog from 'dialog-cl';
  import {Member} from 'course-cl/js/Members/Member';
  import {Schedule} from './Schedule';
  import {Slot} from './Slot';
  import UserVueBase from 'users-cl/js/Vue/UserVueBase.vue';
  import SlotEditorVue from './SlotEditor.vue';
  import {TimeFormatter} from 'site-cl/js/TimeFormatter';
  import {StickyNav} from 'site-cl/js/Util/StickyNav';

  export default {
    'extends': UserVueBase,
    props: ['json'],
    data: function () {
      return {
        schedule: null,
        days: [],
        teamMode: false,
        team: null,
        staff: false,
        latest: 0,
        time: 0,
        timer: 0
      }
    },
    mounted() {
      new StickyNav('nav.cl-nav');
      this.clearMenu();
      this.schedule = new Schedule(this.json.schedule);
      this.setTime();

      this.timer = setInterval(() => {
        this.setTime();
      }, 1000)

      this.newSlots(this.json.slots);

      if (this.json.team !== undefined) {
        this.teamMode = true;
        this.team = this.json.team;
      }

      this.setTitle(this.schedule.name);

      this.staff = this.user.atLeast(Member.STAFF);

      if (this.staff) {
        this.addMenu('Add Slot', () => {
          this.add();
        });
      }

      this.$site.polling.addClient('scheduler', (params) => {
        params.scheduler = {
          scheduleId: this.schedule.id,
          after: this.latest
        };
      }, (response) => {
        this.take(response);
      });

    },
    destroyed() {
      clearInterval(this.timer);
      this.timer = 0;
    },
    methods: {
      take(response) {
        const slots = response.getData('slots');
        if (slots !== null) {
          const data = slots.attributes;
          this.newSlots(data);
        }
      },
      owned(slot) {
        if (this.teamMode) {
          return this.team !== null && slot.teamId === this.team.id;
        }

        return this.user.member.id === slot.memberId;
      },
      ownedForDay(day) {
        let cnt = 0;
        for(let slot of day.slots) {
          if(slot.booked()) {
            cnt++;
          }
        }

        return cnt;
      },
      setTime() {
        this.time = Math.round((new Date()).getTime() / 1000);
      },
      book(slot) {
        let params = {id: slot.id, teamMode: this.teamMode ? 1 : 0};
        if (this.teamMode) {
          if (this.team !== null) {
            params['teamId'] = this.team.id;
          } else {
            this.$site.toast(this, 'Not a member of a team!');
            return;
          }
        }


        this.$site.api.post('/api/scheduler/slots/' + this.schedule.id + '/book', params)
                .then((response) => {
                  if (!response.hasError()) {
                    this.take(response);
                  } else {
                    this.$site.toast(this, response);
                  }

                })
                .catch((error) => {
                  this.$site.toast(this, error);
                });

      },
      unbook(slot) {
        this.$site.api.post('/api/scheduler/slots/' + this.schedule.id + '/unbook', {id: slot.id})
                .then((response) => {
                  if (!response.hasError()) {
                    this.take(response);
                  } else {
                    this.$site.toast(this, response);
                  }

                })
                .catch((error) => {
                  this.$site.toast(this, error);
                });
      },
      newSlots(slots) {
        //
        // Collect up slots by days
        //
        this.days = [];

        let lastDay = null;
        let daySlots = [];
        for (let slotData of slots) {
          let slot = new Slot(slotData);
          if (slot.updated > this.latest) {
            this.latest = slot.updated;
          }

          let day = TimeFormatter.absoluteUNIX(slot.time, 'long-date');
          if (day !== lastDay) {
            // We have a new day
            if (daySlots.length > 0) {
              this.days.push({
                day: lastDay,
                slots: daySlots
              });
            }
            lastDay = day;
            daySlots = [];
          }

          daySlots.push(slot);
        }

        if (daySlots.length > 0) {
          this.days.push({
            day: lastDay,
            slots: daySlots
          });
        }
      },
      add() {
        const slot = new Slot();

        new Dialog({
          title: 'New Slot',
          content: '<div id="cl-schedule-slot"></div>',
          addClass: 'cl-schedule-dialog',
          buttons: [
            {
              contents: 'Add',
              focus: true,
              click: (dialog) => {
                if (slot.time === '' || slot.time === 0) {
                  new Dialog.MessageBox('Must enter time', 'You must provide a date and time',
                          Dialog.MessageBox.OK);
                  return;
                }

                let params = {
                  time: slot.time,
                  duration: slot.duration,
                  location: slot.location,
                  repeat: slot.repeat
                }

                this.$site.api.post('/api/scheduler/slots/' + this.schedule.id + '/new', params)
                        .then((response) => {
                          if (!response.hasError()) {
                            this.take(response);
                            dialog.close();
                          } else {
                            this.$site.toast(this, response);
                          }

                        })
                        .catch((error) => {
                          this.$site.toast(this, error);
                        });

              }
            },
            {
              contents: 'Cancel',
              click: (dialog) => {
                dialog.close();
              }
            }
          ]
        });

        this.dialogVue(slot);
      },
      editer(slot) {
        slot = slot.clone();

        new Dialog({
          title: 'Edit Slot',
          content: '<div id="cl-schedule-slot"></div>',
          addClass: 'cl-schedule-dialog',
          buttons: [
            {
              contents: 'Update',
              focus: true,
              click: (dialog) => {
                if (slot.time === '' || slot.time === 0) {
                  new Dialog.MessageBox('Must enter time', 'You must provide a date and time',
                          Dialog.MessageBox.OK);
                  return;
                }

                let params = {
                  id: slot.id,
                  time: slot.time,
                  duration: slot.duration,
                  location: slot.location
                }

                this.$site.api.post('/api/scheduler/slots/' + this.schedule.id + '/update', params)
                        .then((response) => {
                          if (!response.hasError()) {
                            this.take(response);
                            dialog.close();
                          } else {
                            this.$site.toast(this, response);
                          }

                        })
                        .catch((error) => {
                          this.$site.toast(this, error);
                        });

              }
            },
            {
              contents: 'Cancel',
              click: (dialog) => {
                dialog.close();
              }
            }
          ]

        });

        this.dialogVue(slot);
      },
      dialogVue(slot) {
        // Create a Vue inside the dialog box

        new this.$site.Vue({
          el: '#cl-schedule-slot',
          site: this.$site,
          data: function () {
            return {
              slot: slot
            }
          },
          template: `<editor :schedule-slot="slot"></editor>`,
          components: {
            editor: SlotEditorVue
          }
        })
      },
      deleter(slot) {
        new Dialog.MessageBox('Are you sure?', 'Are you sure you want to delete?',
                Dialog.MessageBox.OKCANCEL, () => {
                  this.$site.api.post('/api/scheduler/slots/' + this.schedule.id + '/delete', {id: slot.id})
                          .then((response) => {
                            if (!response.hasError()) {
                              this.take(response);
                              dialog.close();
                            } else {
                              this.$site.toast(this, response);
                            }

                          })
                          .catch((error) => {
                            this.$site.toast(this, error);
                          });
                });
      },
      timeFormat(time) {
        return TimeFormatter.absoluteUNIX(time, 'short-time');
      }
    }
  }
</script>

<style lang="scss">
  /* Not scoped */
  div.cl-schedule-dialog {
    width: 300px;
  }

  div.cl-schedule-view {
    h2 {
      border: 0;
      text-align: center;
      padding-left: 3.5em;
    }

    span.cl-info {
      font-weight: normal;
      font-size: 0.7em;
    }

    table {
      border: 0;
      box-shadow: none;

      td:first-child {
        width: 6em;
        text-align: right;
        vertical-align: top;
        border: 0;
        font-size: 0.85em;
        padding-right: 3px;
      }

      td:nth-child(2) {
        position: relative;
        width: 20em;
        height: 4.5em;
        text-align: center;
        border-left: 1px solid black;
        border-right: 1px solid black;
        border-top: 1px solid black;
        border-bottom: none;


        span.location {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          text-align: center;
          font-style: italic;
          font-size: 0.9em;
        }
        
        a {
          text-decoration: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 0.45em 0 0 0;
          text-align: center;
          font-style: normal;
          font-weight: bold;
          font-size: 1.3em;
          color: #2a2;
        }
      }

      tr:last-child {
        td:nth-child(2) {
          border-bottom: 1px solid black;
        }
      }

      tr.booked {
        td:nth-child(2) {
          background-color: lime;
          color: black;


          span.booked {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0.25em 0 0 0;
            text-align: center;
            font-style: normal;
            font-weight: bold;
            font-size: 1.5em;
            color: black;
          }

          span.unbook {
            position: absolute;
            right: 2px;
            top: -3px;
            width: 16px;
            height: 16px;
            padding: 0;

            a {
              padding: 0;
            }
          }
        }
      }

      tr.owned {
        td:nth-child(2) {
          background-color: #faa;
        }
      }
    }


  }
</style>