<template>
  <div class="content cl-schedule-view">
    <div class="time">{{timeStr}}</div>
    <div class="full" v-for="day of days"><h2><input type="checkbox" v-model="day.open"> {{day.day}} <span class="cl-info">{{day.slots.length}} slots/{{day.slots.length - ownedForDay(day)}} open</span></h2>
      <table v-if="day.open">
        <template v-for="slot of day.slots">
          <tr v-if="!slot.contiguous" class="gap"><td>&nbsp</td><td>&nbsp;</td></tr>
          <tr :class="slotClass(slot)">
            <td><span class="time">{{timeFormat(slot.time)}}</span><template v-if="staff"><br>
              <a @click.prevent="editor(slot)"><img :src="root + '/vendor/cl/site/img/pencil16.png'" alt="Edit" title="Edit"></a><br>
              <a @click.prevent="deleter(slot)"><img :src="root + '/vendor/cl/site/img/x.png'" alt="Delete" title="Delete"></a>
              </template>
            </td>
            <td><span v-if="!staff && slot.booked()" class="booked">{{slot.teamName}}</span>
              <span v-if="staff && slot.booked()" class="booked"><a @click.prevent="showTeam(slot)">{{slot.teamName}}</a></span>
              <a v-if="!slot.booked() && slot.time > time" @click.prevent="book(slot)">Click to Book</a>
              <span class="location">{{slot.location}}</span>
              <span v-if="staff && slot.booked()" class="counter">{{slot.count}}</span>
              <span v-if="staff" class="check"><input v-model="slot.checked" type="checkbox"></span>
              <span v-if="slot.booked() && (staff || (owned(slot) && slot.time > time))" class="unbook"><a @click.prevent="unbook(slot)"><img :src="root + '/vendor/cl/site/img/x.png'" alt="Unbook" title="Unbook"></a>
              </span>
            </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>

<script>
  import {Schedule} from './Schedule';
  import {Slot} from './Slot';
  import SlotEditorVue from './SlotEditor.vue';
  import TeamViewerVue from './TeamViewer.vue';

  const Member = Site.Member;

  export default {
    'extends': Site.UserVueBase,
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
        timeStr: '',
        timer: 0
      }
    },
    mounted() {
      // Make the navigation bar sticky.
      new this.$site.StickyNav('nav.cl-nav');

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

        this.addMenu('Check Future', () => {
          this.checkFuture()
        })
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
        this.timeStr = this.$site.TimeFormatter.absoluteUNIX(this.time, 'long-time');
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

        const teamCounter = {};

        let lastDay = null;
        let daySlots = [];
        for (let slotData of slots) {
          let slot = new Slot(slotData);
          if(slot.teamId !== null) {
            if(teamCounter[slot.teamId] === undefined) {
              slot.count = 1;
              teamCounter[slot.teamId] = 1;
            } else {
              teamCounter[slot.teamId]++;
              slot.count = teamCounter[slot.teamId];
            }
          }

          if (slot.updated > this.latest) {
            this.latest = slot.updated;
          }

          let day = this.$site.TimeFormatter.absoluteUNIX(slot.time, 'long-date');
          if (day !== lastDay) {
            // We have a new day
            if (daySlots.length > 0) {
              this.addDay(lastDay, daySlots);
            }
            lastDay = day;
            daySlots = [];
          }

          // Determine if this slot is contiguous with the last one
          if(daySlots.length > 0) {
            const prev = daySlots[daySlots.length - 1];
            if(prev.time + prev.duration * 60 >= slot.time) {
              slot.contiguous = true;
            }
          }
          daySlots.push(slot);
        }

        if (daySlots.length > 0) {
          this.addDay(lastDay, daySlots);
        }
      },
      addDay(day, daySlots) {
        // Days in the past should not be open
        const now = Math.round(new Date().getTime()/1000);
        const nowDay = this.$site.TimeFormatter.absoluteUNIX(now, 'long-date');
        const open = Date.parse(day) >= Date.parse(nowDay);

        this.days.push({
          day: day,
          open: open,
          slots: daySlots
        });
      },
      add() {
        const slot = new Slot();

        new this.$site.Dialog({
          title: 'New Slot',
          content: '<div id="cl-schedule-slot"></div>',
          addClass: 'cl-schedule-dialog',
          buttons: [
            {
              contents: 'Add',
              focus: true,
              click: (dialog) => {
                if (slot.time === '' || slot.time === 0) {
                  new this.$site.Dialog.MessageBox('Must enter time', 'You must provide a date and time',
                          this.$site.Dialog.MessageBox.OK);
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
      editor(slot) {
        const checked = this.checked()
        slot = checked.length > 0 ? checked[0].clone : slot.clone();

        new this.$site.Dialog({
          title: 'Edit Slot',
          content: '<div id="cl-schedule-slot"></div>',
          addClass: 'cl-schedule-dialog',
          buttons: [
            {
              contents: 'Update',
              focus: true,
              click: (dialog) => {
                if (slot.time === '' || slot.time === 0) {
                  new this.$site.Dialog.MessageBox('Must enter time', 'You must provide a date and time',
                          this.$site.Dialog.MessageBox.OK);
                  return;
                }

                if(checked.length === 0) {
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
                } else {
                  dialog.close();

                  for(const slot1 of checked) {
                    let params = {
                      id: slot1.id,
                      time: slot1.time,
                      duration: slot1.duration,
                      location: slot.location
                    }

                    this.$site.api.post('/api/scheduler/slots/' + this.schedule.id + '/update', params)
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
                  }
                }




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

        this.dialogVue(slot, checked.length > 0)
      },
      dialogVue(slot, locationOnly=false) {
        // Create a Vue inside the dialog box
        const lo = locationOnly ? true : false

        new this.$site.Vue({
          el: '#cl-schedule-slot',
          site: this.$site,
          data: function () {
            return {
              slot: slot,
              lo: lo
            }
          },
          template: `<editor :schedule-slot="slot" :location-only="lo"></editor>`,
          components: {
            editor: SlotEditorVue
          }
        })
      },
      deleter(slot) {
        new this.$site.Dialog.MessageBox('Are you sure?', 'Are you sure you want to delete?',
                this.$site.Dialog.MessageBox.OKCANCEL, () => {
                  const checked = this.checked()
                  if(checked.length === 0) {
                      // Delete a single slot
                      this.deleteSlot(slot)
                  } else {
                    for(const slot of checked) {
                      this.deleteSlot(slot)
                    }
                  }
                });
      },
      deleteSlot(slot) {
        this.$site.api.post('/api/scheduler/slots/' + this.schedule.id + '/delete', {id: slot.id})
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
      /**
       * Get all checked slots
       */
      checked() {
        let ret = [];
        for(const day of this.days) {
          for(const slot of day.slots) {
            if(slot.checked) {
              ret.push(slot)
            }
          }
        }

        return ret;
      },
      slotClass(slot) {
        return slot.booked() ? (this.owned(slot) ? 'booked owned' : 'booked') : '';
      },
      showTeam(slot) {
        const Dialog = this.$site.Dialog;

        new Dialog({
          title: 'Team',
          content: '<div id="cl-schedule-team"></div>',
          addClass: 'cl-dialog-narrow',
          buttons: [
            {
              contents: 'Ok',
              click: (dialog) => {
                dialog.close();
              }
            }
          ]

        });

        const schedule = this.schedule

        new this.$site.Vue({
          el: '#cl-schedule-team',
          data: function () {
            return {
              slot: slot,
              schedule: schedule
            }
          },
          template: `<viewer :view-slot="slot" :schedule="schedule"></viewer>`,
          components: {
            viewer: TeamViewerVue
          }
        })

      },
      // Check all slots that are in the future
      checkFuture() {
        const time = Math.floor(Date.now() / 1000)

        for(const day of this.days) {
          for(const slot of day.slots) {
            if(slot.time > time) {
              slot.checked = true
            }
          }
        }
      },
      timeFormat(time) {
        return this.$site.TimeFormatter.absoluteUNIX(time, 'short-time');
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
    div.time {
      text-align: center;
      margin: 0 0 0 85px;
      font-size: 3em;
    }

    h2 {
      border: 0;
      text-align: center;
      padding-left: 3.5em;
    }

    span.cl-info {
      font-weight: normal;
      font-size: 0.7em;
    }

    span.check {
      position: absolute;
      left: 4px;
      top: 1px;
      padding: 0;
    }

    table {
      border: 0;
      box-shadow: none;

      td:first-child {
        width: 6em;
        text-align: right;
        vertical-align: top;
        border: 0;
        font-size: 1em;
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
        
        >a {
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
            height: 2.0em;
            padding: 0.25em 32px 0 0;
            text-align: center;
            font-style: normal;
            font-weight: bold;
            font-size: 1.4em;
            color: black;
            overflow: hidden;

            a, a:link, a:visited {
              color: black;
              text-decoration: none;
            }

            a:hover {
              color: #ff0000;
            }
          }

          span.unbook {
            position: absolute;
            right: 2px;
            top: 2px;
            width: 32px;
            height: 32px;
            padding: 0;

            a {
              padding: 0;
            }

            img {
              width: 32px;
              height: 32px;
            }
          }


        }

        span.counter {
          position: absolute;
          right: 2px;
          bottom: 0;

        }
      }

      tr.owned {
        td:nth-child(2) {
          background-color: #faa;
        }
      }

      tr.gap {

        td {
          height: 10px;
          padding: 0;
          border: 0;
          line-height: 0;
        }

        td:nth-child(2) {
          border-top: 1px solid black;
        }
      }
    }


  }
</style>