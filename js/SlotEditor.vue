<template>
  <div class="dialog-cl-column">
    <div>
      <form>
        <template v-if="!locationOnly">
          <p class="flatpickr">
            <label>Date and Time<br>
            <flat-pickr v-model="time" :config="fpConfig" data-input></flat-pickr>
            <a data-toggle title="Toggle Calendar"><span class="icons-cl icons-cl-calendar"></span></a>
            </label>
          </p>
          <p><label>Duration (minutes): <input class="narrow" type="text" v-model="scheduleSlot.duration"></label></p>
        </template>
        <p><label>Location<br><input type="text" v-model="scheduleSlot.location"></label></p>
        <p class="center" v-if="scheduleSlot.id === 0"><label>Repeat: <input class="narrow" type="text" v-model="scheduleSlot.repeat"></label></p>
      </form>
    </div>
  </div>
</template>

<script>
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

  export default {
    props: ['schedule-slot', 'location-only'],
    data: function () {
      return {
        time: null,
        fpConfig: {
          enableTime: true,
          dateFormat: "m-d-Y h:iK",
          wrap: true
        }
      }
    },
    components: {
      'flatPickr': flatPickr
    },
    mounted() {
      this.time = this.scheduleSlot.time !== 0 ? this.scheduleSlot.time * 1000 : null;
    },
    updated() {
      if (this.time === null || (typeof this.time) === 'number') {
        return;
      }

      const matches = this.time.match(/([0-9]*)-([0-9]*)-([0-9]*)\s([0-9]*):([0-9]*)([AP])/);
      let hours = +matches[4];
      if (matches[6] === 'P') {
        if (hours < 12) {
          hours += 12;
        }
      } else {
        if (hours === 12) {
          hours = 0;
        }
      }
      const date = new Date(matches[3], matches[1] - 1, matches[2], hours, matches[5]);
      this.scheduleSlot.time = this.time !== '' ? Math.floor(date.getTime() / 1000) : 0;
    }
  }
</script>

<style lang="scss" scoped>
  .flatpickr-input[readonly] {
    text-align: center;
  }

  .narrow {
    width: 3em;
  }
</style>
