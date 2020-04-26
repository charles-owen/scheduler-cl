<template>
  <div style="padding: 0 1em" class="dialog-cl-column">
    <div>
      <form>
        <p><label>Tag<br><input ref="tag" type="text" v-model="schedule.tag"></label></p>
        <p><label>Name<br><input type="text" v-model="schedule.name"></label></p>
        <p v-if="teamings !== null"><label>Teaming</label><br>
          <select v-model="schedule.teaming">
            <option :value="0">None</option>
            <option v-for="teaming in teamings" :value="teaming.id">{{teaming.name}}</option>
          </select>
        </p>
        <p v-if="teamings !== null"><label>Assignment</label><br>
          <select v-model="schedule.assigntag">
            <option :value="'none'">None</option>
            <option v-for="assignment in assignments" :value="assignment.tag">{{assignment.name}}</option>
          </select>
        </p>
      </form>
    </div>
  </div>
</template>

<script>

  export default {
  	props: ['schedule', 'teamings', 'assignments'],
  	mounted() {
  		this.$refs['tag'].focus();
    }
  }
</script>
