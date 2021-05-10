<template>
    <div v-if="team !== null">
        <table>
            <tr><th>{{team.name}}</th></tr>
            <tr v-for="member in team.members">
                <td v-if="schedule.assigntag === 'none'">{{member.name}}</td>
                <td v-else><a :href="link + member.memberid">{{member.name}}</a></td>
            </tr>
        </table>
        <p class="cl-schedule-team-email"><a :href="email">email</a></p>
    </div>
    <div v-else class="cl-schedule-team-fetching">
        <p>Fetching...</p>
    </div>
</template>

<script>

  export default {
      'extends': Site.UserVueBase,
      props: ['view-slot', 'schedule'],
      data: function() {
          return {
              team: null,
              email: 'mailto:',
              link: null
          }
      },
      mounted() {
        if(this.schedule.assigntag !== 'none') {
          this.link = this.root + '/cl/console/grading/' + this.schedule.assigntag + '/'
        }

          this.site.api.get('/api/team/' + +this.viewSlot.teamId)
              .then((response) => {
                  if (!response.hasError()) {
                      this.take(response.getData('team').attributes);
                  } else {
                      this.site.toast(this, response);
                  }

              })
              .catch((error) => {
                  this.site.toast(this, error);
              });

      },
      methods: {
          take(team) {
              this.team = team;
              let first = true;
              this.email = '';

              for(const teamMember of team.members) {
                  if(teamMember.email !== '') {
                      if(first) {
                          this.email = 'mailto:';
                          first = false;
                      } else {
                          this.email += ';';
                      }

                      this.email += teamMember.email;
                  }
              }

              if(this.email !== '') {
                  const name = encodeURIComponent(team.name);
                  this.email += '?subject=Team%20' + name;
              }
          }
      }
  }

</script>

<style lang="scss">
    div.cl-schedule-team-fetching {
        p {
            text-align: center;
            font-size: 1.2em;
            font-style: italic;
            padding: 4em 1em;
            color: hotpink
        }
    }

    p.cl-schedule-team-email {
        text-align: right;
        padding: 0 2.4em 1em 2em;
        font-size: 0.9em;
    }
</style>
