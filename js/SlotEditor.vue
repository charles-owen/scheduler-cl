<template>
  <div class="dialog-cl-column">
    <div>
      <form>
        <p class="flatpickr">
          <label>Date and Time<br>
          <flat-pickr v-model="time" :config="fpConfig"
                      @on-change="change($event)" data-input></flat-pickr>
          <a data-toggle title="Toggle Calendar"><span class="icons-cl icons-cl-calendar"></span></a>
          </label>
        </p>
        <p><label>Duration (minutes): <input class="narrow" type="text" v-model="scheduleSlot.duration"></label></p>
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
	  props: ['schedule-slot'],
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
    methods: {
      change(event, user) {
        let str = event[0];
        this.scheduleSlot.time = str !== '' ? Math.floor((new Date(str)).getTime() / 1000) : 0;
      }
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
