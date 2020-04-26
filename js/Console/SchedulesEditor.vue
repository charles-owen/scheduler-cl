<template>
  <div class="content">
    <div v-if="schedules !== null" class="full">
      <table v-if="schedules.length > 0">
        <tr>
          <th></th>
          <th>Tag</th>
          <th>Name</th>
          <th v-if="teamings !== null">Teaming</th>
        </tr>
        <tr v-for="schedule in schedules" :key="schedule.id">
          <td><a @click.prevent="editor(schedule)"><img :src="root + '/vendor/cl/site/img/pencil16.png'" alt="Edit" title="Edit"></a>
            <a @click.prevent="deleter(schedule)"><img :src="root + '/vendor/cl/site/img/x.png'" alt="Delete" title="Delete"></a>
          </td>
          <td><a :href="root + '/cl/schedule/' + schedule.tag">{{schedule.tag}}</a></td>
          <td>{{schedule.name}}</td>
          <td v-if="teamings !== null">{{teamingName(schedule.teaming)}}</td>
        </tr>
      </table>
      <div v-else class="center">
        <p>There are currently no defined schedules.</p>
        <p>Choose Add Schedule to add a new schedule.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {Schedule} from '../Schedule';
  import ScheduleEditorVue from './ScheduleEditor.vue';

  export default {
    extends: Site.ConsoleComponentBase,
    data: function () {
      return {
        teamings: null,
        schedules: null
      }
    },
    mounted() {
      this.setTitle(': Schedules');
      this.addNav2('Add Schedule', 5, () => {
        this.add();
      });

      this.$site.api.get('/api/scheduler/schedules', {})
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
    methods: {
      teamingName(teamingid) {
        for (const teaming of this.teamings) {
          if (+teaming.id === +teamingid) {
            return teaming.name;
          }
        }

        return 'None';
      },
      take(response) {
        const data = response.getData('schedules').attributes;

        this.schedules = [];

        const teamCounter = {};

        for (let row of data) {
          this.schedules.push(new Schedule(row));
        }

        const teamings = response.getData('teamings');
        if (teamings !== null) {
          this.teamings = teamings.attributes;
        }

      },
      add() {
        const schedule = new Schedule();
        const Dialog = this.$site.Dialog;

        new Dialog({
          title: 'New Schedule',
          content: '<div id="cl-schedule"></div>',
          buttons: [
            {
              contents: 'Add',
              focus: true,
              click: (dialog) => {
                if (!this.$site.Tags.validate(schedule.tag)) {
                  return;
                }

                if (schedule.name.trim() === '') {
                  new Dialog.MessageBox('Must enter name', 'You must provide a non-empty name',
                          Dialog.MessageBox.OK);
                  return;
                }

                let params = {
                  tag: schedule.tag.trim(),
                  name: schedule.name.trim(),
                  teaming: schedule.teaming,
                  assigntag: schedule.assigntag !== 'none' ? schedule.assigntag : null
                }

                this.$site.api.post('/api/scheduler/schedules/new', params)
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

        this.dialogVue(schedule);
      },
      editor(schedule) {
        schedule = schedule.clone();
        const Dialog = this.$site.Dialog;

        new Dialog({
          title: 'Edit Schedule',
          content: '<div id="cl-schedule"></div>',
          buttons: [
            {
              contents: 'Update',
              focus: true,
              click: (dialog) => {
                if (!this.$site.Tags.validate(schedule.tag)) {
                  return;
                }

                if (schedule.name.trim() === '') {
                  new Dialog.MessageBox('Must enter name', 'You must provide a non-empty name',
                          Dialog.MessageBox.OK);
                  return;
                }

                let params = {
                  id: schedule.id,
                  tag: schedule.tag.trim(),
                  name: schedule.name.trim(),
                  teaming: schedule.teaming,
                  assigntag: schedule.assigntag !== 'none' ? schedule.assigntag : null
                }

                this.$site.api.post('/api/scheduler/schedules/update', params)
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

        this.dialogVue(schedule);
      },
      dialogVue(schedule) {
        // Create a Vue inside the dialog box
        const teamings = this.teamings;

        const user = this.$store.state.user.user;
        const member = user.member;

        const section = this.$store.getters['course/section'](member.semester, member.section);

        let assignments = [];
        for(const category of section.assignments.categories) {
          for(const assignment of category.assignments) {
            assignments.push(assignment);
          }
        }

        assignments.sort(function(a, b) {
          if(a.name < b.name) {
            return -1;
          } else if(a.name > b.name) {
            return 1;
          }

          return 0;
        });

        new this.$site.Vue({
          el: '#cl-schedule',
          data: function () {
            return {
              schedule: schedule,
              teamings: teamings,
              assignments: assignments
            }
          },
          template: `<editor :schedule="schedule" :teamings="teamings" :assignments="assignments"></editor>`,
          components: {
            editor: ScheduleEditorVue
          }
        })
      },
      deleter(schedule) {
        const Dialog = this.$site.Dialog;

        new Dialog.MessageBox('Are you sure?', 'Are you sure you want to delete ' + schedule.name,
                Dialog.MessageBox.OKCANCEL, () => {
                  this.$site.api.post('/api/scheduler/schedules/delete', {id: schedule.id})
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
      }
    }

  }

</script>