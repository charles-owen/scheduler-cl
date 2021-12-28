/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['schedule', 'teamings', 'assignments'],
  mounted: function mounted() {
    this.$refs['tag'].focus();
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Schedule */ "./vendor/cl/scheduler/js/Schedule.js");
/* harmony import */ var _ScheduleEditor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduleEditor.vue */ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "extends": Site.ConsoleComponentBase,
  data: function data() {
    return {
      teamings: null,
      schedules: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.setTitle(': Schedules');
    this.addNav2('Add Schedule', 5, function () {
      _this.add();
    });
    this.$site.api.get('/api/scheduler/schedules', {}).then(function (response) {
      if (!response.hasError()) {
        _this.take(response);
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  },
  methods: {
    teamingName: function teamingName(teamingid) {
      var _iterator = _createForOfIteratorHelper(this.teamings),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var teaming = _step.value;

          if (+teaming.id === +teamingid) {
            return teaming.name;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return 'None';
    },
    take: function take(response) {
      var data = response.getData('schedules').attributes;
      this.schedules = [];
      var teamCounter = {};

      var _iterator2 = _createForOfIteratorHelper(data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var row = _step2.value;
          this.schedules.push(new _Schedule__WEBPACK_IMPORTED_MODULE_0__.Schedule(row));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var teamings = response.getData('teamings');

      if (teamings !== null) {
        this.teamings = teamings.attributes;
      }
    },
    add: function add() {
      var _this2 = this;

      var schedule = new _Schedule__WEBPACK_IMPORTED_MODULE_0__.Schedule();
      var Dialog = this.$site.Dialog;
      new Dialog({
        title: 'New Schedule',
        content: '<div id="cl-schedule"></div>',
        buttons: [{
          contents: 'Add',
          focus: true,
          click: function click(dialog) {
            if (!_this2.$site.Tags.validate(schedule.tag)) {
              return;
            }

            if (schedule.name.trim() === '') {
              new Dialog.MessageBox('Must enter name', 'You must provide a non-empty name', Dialog.MessageBox.OK);
              return;
            }

            var params = {
              tag: schedule.tag.trim(),
              name: schedule.name.trim(),
              teaming: schedule.teaming,
              assigntag: schedule.assigntag !== 'none' ? schedule.assigntag : null
            };

            _this2.$site.api.post('/api/scheduler/schedules/new', params).then(function (response) {
              if (!response.hasError()) {
                _this2.take(response);

                dialog.close();
              } else {
                _this2.$site.toast(_this2, response);
              }
            })["catch"](function (error) {
              _this2.$site.toast(_this2, error);
            });
          }
        }, {
          contents: 'Cancel',
          click: function click(dialog) {
            dialog.close();
          }
        }]
      });
      this.dialogVue(schedule);
    },
    editor: function editor(schedule) {
      var _this3 = this;

      schedule = schedule.clone();
      var Dialog = this.$site.Dialog;
      new Dialog({
        title: 'Edit Schedule',
        content: '<div id="cl-schedule"></div>',
        buttons: [{
          contents: 'Update',
          focus: true,
          click: function click(dialog) {
            if (!_this3.$site.Tags.validate(schedule.tag)) {
              return;
            }

            if (schedule.name.trim() === '') {
              new Dialog.MessageBox('Must enter name', 'You must provide a non-empty name', Dialog.MessageBox.OK);
              return;
            }

            var params = {
              id: schedule.id,
              tag: schedule.tag.trim(),
              name: schedule.name.trim(),
              teaming: schedule.teaming,
              assigntag: schedule.assigntag !== 'none' ? schedule.assigntag : null
            };

            _this3.$site.api.post('/api/scheduler/schedules/update', params).then(function (response) {
              if (!response.hasError()) {
                _this3.take(response);

                dialog.close();
              } else {
                _this3.$site.toast(_this3, response);
              }
            })["catch"](function (error) {
              _this3.$site.toast(_this3, error);
            });
          }
        }, {
          contents: 'Cancel',
          click: function click(dialog) {
            dialog.close();
          }
        }]
      });
      this.dialogVue(schedule);
    },
    dialogVue: function dialogVue(schedule) {
      // Create a Vue inside the dialog box
      var teamings = this.teamings;
      var user = this.$store.state.user.user;
      var member = user.member;
      var section = this.$store.getters['course/section'](member.semester, member.section);
      var assignments = [];

      var _iterator3 = _createForOfIteratorHelper(section.assignments.categories),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var category = _step3.value;

          var _iterator4 = _createForOfIteratorHelper(category.assignments),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var assignment = _step4.value;
              assignments.push(assignment);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      assignments.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        }

        return 0;
      });
      new this.$site.Vue({
        el: '#cl-schedule',
        data: function data() {
          return {
            schedule: schedule,
            teamings: teamings,
            assignments: assignments
          };
        },
        template: "<editor :schedule=\"schedule\" :teamings=\"teamings\" :assignments=\"assignments\"></editor>",
        components: {
          editor: _ScheduleEditor_vue__WEBPACK_IMPORTED_MODULE_1__.default
        }
      });
    },
    deleter: function deleter(schedule) {
      var _this4 = this;

      var Dialog = this.$site.Dialog;
      new Dialog.MessageBox('Are you sure?', 'Are you sure you want to delete ' + schedule.name, Dialog.MessageBox.OKCANCEL, function () {
        _this4.$site.api.post('/api/scheduler/schedules/delete', {
          id: schedule.id
        }).then(function (response) {
          if (!response.hasError()) {
            _this4.take(response);

            dialog.close();
          } else {
            _this4.$site.toast(_this4, response);
          }
        })["catch"](function (error) {
          _this4.$site.toast(_this4, error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Schedule */ "./vendor/cl/scheduler/js/Schedule.js");
/* harmony import */ var _Slot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slot */ "./vendor/cl/scheduler/js/Slot.js");
/* harmony import */ var _SlotEditor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlotEditor.vue */ "./vendor/cl/scheduler/js/SlotEditor.vue");
/* harmony import */ var _TeamViewer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeamViewer.vue */ "./vendor/cl/scheduler/js/TeamViewer.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var Member = Site.Member;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'extends': Site.UserVueBase,
  props: ['json'],
  data: function data() {
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
    };
  },
  mounted: function mounted() {
    var _this = this;

    // Make the navigation bar sticky.
    new this.$site.StickyNav('nav.cl-nav');
    this.clearMenu();
    this.schedule = new _Schedule__WEBPACK_IMPORTED_MODULE_0__.Schedule(this.json.schedule);
    this.setTime();
    this.timer = setInterval(function () {
      _this.setTime();
    }, 1000);
    this.newSlots(this.json.slots);

    if (this.json.team !== undefined) {
      this.teamMode = true;
      this.team = this.json.team;
    }

    this.setTitle(this.schedule.name);
    this.staff = this.user.atLeast(Member.STAFF);

    if (this.staff) {
      this.addMenu('Add Slot', function () {
        _this.add();
      });
      this.addMenu('Check Future', function () {
        _this.checkFuture();
      });
    }

    this.$site.polling.addClient('scheduler', function (params) {
      params.scheduler = {
        scheduleId: _this.schedule.id,
        after: _this.latest
      };
    }, function (response) {
      _this.take(response);
    });
  },
  destroyed: function destroyed() {
    clearInterval(this.timer);
    this.timer = 0;
  },
  methods: {
    take: function take(response) {
      var slots = response.getData('slots');

      if (slots !== null) {
        var data = slots.attributes;
        this.newSlots(data);
      }
    },
    owned: function owned(slot) {
      if (this.teamMode) {
        return this.team !== null && slot.teamId === this.team.id;
      }

      return this.user.member.id === slot.memberId;
    },
    ownedForDay: function ownedForDay(day) {
      var cnt = 0;

      var _iterator = _createForOfIteratorHelper(day.slots),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var slot = _step.value;

          if (slot.booked()) {
            cnt++;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return cnt;
    },
    setTime: function setTime() {
      this.time = Math.round(new Date().getTime() / 1000);
      this.timeStr = this.$site.TimeFormatter.absoluteUNIX(this.time, 'long-time');
    },
    book: function book(slot) {
      var _this2 = this;

      var params = {
        id: slot.id,
        teamMode: this.teamMode ? 1 : 0
      };

      if (this.teamMode) {
        if (this.team !== null) {
          params['teamId'] = this.team.id;
        } else {
          this.$site.toast(this, 'Not a member of a team!');
          return;
        }
      }

      this.$site.api.post('/api/scheduler/slots/' + this.schedule.id + '/book', params).then(function (response) {
        if (!response.hasError()) {
          _this2.take(response);
        } else {
          _this2.$site.toast(_this2, response);
        }
      })["catch"](function (error) {
        _this2.$site.toast(_this2, error);
      });
    },
    unbook: function unbook(slot) {
      var _this3 = this;

      this.$site.api.post('/api/scheduler/slots/' + this.schedule.id + '/unbook', {
        id: slot.id
      }).then(function (response) {
        if (!response.hasError()) {
          _this3.take(response);
        } else {
          _this3.$site.toast(_this3, response);
        }
      })["catch"](function (error) {
        _this3.$site.toast(_this3, error);
      });
    },
    newSlots: function newSlots(slots) {
      //
      // Collect up slots by days
      //
      this.days = [];
      var teamCounter = {};
      var lastDay = null;
      var daySlots = [];

      var _iterator2 = _createForOfIteratorHelper(slots),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var slotData = _step2.value;
          var slot = new _Slot__WEBPACK_IMPORTED_MODULE_1__.Slot(slotData);

          if (slot.teamId !== null) {
            if (teamCounter[slot.teamId] === undefined) {
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

          var day = this.$site.TimeFormatter.absoluteUNIX(slot.time, 'long-date');

          if (day !== lastDay) {
            // We have a new day
            if (daySlots.length > 0) {
              this.addDay(lastDay, daySlots);
            }

            lastDay = day;
            daySlots = [];
          } // Determine if this slot is contiguous with the last one


          if (daySlots.length > 0) {
            var prev = daySlots[daySlots.length - 1];

            if (prev.time + prev.duration * 60 >= slot.time) {
              slot.contiguous = true;
            }
          }

          daySlots.push(slot);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (daySlots.length > 0) {
        this.addDay(lastDay, daySlots);
      }
    },
    addDay: function addDay(day, daySlots) {
      // Days in the past should not be open
      var now = Math.round(new Date().getTime() / 1000);
      var nowDay = this.$site.TimeFormatter.absoluteUNIX(now, 'long-date');
      var open = Date.parse(day) >= Date.parse(nowDay);
      this.days.push({
        day: day,
        open: open,
        slots: daySlots
      });
    },
    add: function add() {
      var _this4 = this;

      var slot = new _Slot__WEBPACK_IMPORTED_MODULE_1__.Slot();
      new this.$site.Dialog({
        title: 'New Slot',
        content: '<div id="cl-schedule-slot"></div>',
        addClass: 'cl-schedule-dialog',
        buttons: [{
          contents: 'Add',
          focus: true,
          click: function click(dialog) {
            if (slot.time === '' || slot.time === 0) {
              new _this4.$site.Dialog.MessageBox('Must enter time', 'You must provide a date and time', _this4.$site.Dialog.MessageBox.OK);
              return;
            }

            var params = {
              time: slot.time,
              duration: slot.duration,
              location: slot.location,
              repeat: slot.repeat
            };

            _this4.$site.api.post('/api/scheduler/slots/' + _this4.schedule.id + '/new', params).then(function (response) {
              if (!response.hasError()) {
                _this4.take(response);

                dialog.close();
              } else {
                _this4.$site.toast(_this4, response);
              }
            })["catch"](function (error) {
              _this4.$site.toast(_this4, error);
            });
          }
        }, {
          contents: 'Cancel',
          click: function click(dialog) {
            dialog.close();
          }
        }]
      });
      this.dialogVue(slot);
    },
    editor: function editor(slot) {
      var _this5 = this;

      var checked = this.checked();
      slot = checked.length > 0 ? checked[0].clone : slot.clone();
      new this.$site.Dialog({
        title: 'Edit Slot',
        content: '<div id="cl-schedule-slot"></div>',
        addClass: 'cl-schedule-dialog',
        buttons: [{
          contents: 'Update',
          focus: true,
          click: function click(dialog) {
            if (slot.time === '' || slot.time === 0) {
              new _this5.$site.Dialog.MessageBox('Must enter time', 'You must provide a date and time', _this5.$site.Dialog.MessageBox.OK);
              return;
            }

            if (checked.length === 0) {
              var params = {
                id: slot.id,
                time: slot.time,
                duration: slot.duration,
                location: slot.location
              };

              _this5.$site.api.post('/api/scheduler/slots/' + _this5.schedule.id + '/update', params).then(function (response) {
                if (!response.hasError()) {
                  _this5.take(response);

                  dialog.close();
                } else {
                  _this5.$site.toast(_this5, response);
                }
              })["catch"](function (error) {
                _this5.$site.toast(_this5, error);
              });
            } else {
              dialog.close();

              var _iterator3 = _createForOfIteratorHelper(checked),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var slot1 = _step3.value;
                  var _params = {
                    id: slot1.id,
                    time: slot1.time,
                    duration: slot1.duration,
                    location: slot.location
                  };

                  _this5.$site.api.post('/api/scheduler/slots/' + _this5.schedule.id + '/update', _params).then(function (response) {
                    if (!response.hasError()) {
                      _this5.take(response);
                    } else {
                      _this5.$site.toast(_this5, response);
                    }
                  })["catch"](function (error) {
                    _this5.$site.toast(_this5, error);
                  });
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        }, {
          contents: 'Cancel',
          click: function click(dialog) {
            dialog.close();
          }
        }]
      });
      this.dialogVue(slot, checked.length > 0);
    },
    dialogVue: function dialogVue(slot) {
      var locationOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Create a Vue inside the dialog box
      var lo = locationOnly ? true : false;
      new this.$site.Vue({
        el: '#cl-schedule-slot',
        site: this.$site,
        data: function data() {
          return {
            slot: slot,
            lo: lo
          };
        },
        template: "\n          <editor :schedule-slot=\"slot\" :location-only=\"lo\"></editor>",
        components: {
          editor: _SlotEditor_vue__WEBPACK_IMPORTED_MODULE_2__.default
        }
      });
    },
    deleter: function deleter(slot) {
      var _this6 = this;

      new this.$site.Dialog.MessageBox('Are you sure?', 'Are you sure you want to delete?', this.$site.Dialog.MessageBox.OKCANCEL, function () {
        var checked = _this6.checked();

        if (checked.length === 0) {
          // Delete a single slot
          _this6.deleteSlot(slot);
        } else {
          var _iterator4 = _createForOfIteratorHelper(checked),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _slot = _step4.value;

              _this6.deleteSlot(_slot);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      });
    },
    deleteSlot: function deleteSlot(slot) {
      var _this7 = this;

      this.$site.api.post('/api/scheduler/slots/' + this.schedule.id + '/delete', {
        id: slot.id
      }).then(function (response) {
        if (!response.hasError()) {
          _this7.take(response);
        } else {
          _this7.$site.toast(_this7, response);
        }
      })["catch"](function (error) {
        _this7.$site.toast(_this7, error);
      });
    },

    /**
     * Get all checked slots
     */
    checked: function checked() {
      var ret = [];

      var _iterator5 = _createForOfIteratorHelper(this.days),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var day = _step5.value;

          var _iterator6 = _createForOfIteratorHelper(day.slots),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var slot = _step6.value;

              if (slot.checked) {
                ret.push(slot);
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return ret;
    },
    slotClass: function slotClass(slot) {
      return slot.booked() ? this.owned(slot) ? 'booked owned' : 'booked' : '';
    },
    showTeam: function showTeam(slot) {
      var Dialog = this.$site.Dialog;
      new Dialog({
        title: 'Team',
        content: '<div id="cl-schedule-team"></div>',
        addClass: 'cl-dialog-narrow',
        buttons: [{
          contents: 'Ok',
          click: function click(dialog) {
            dialog.close();
          }
        }]
      });
      var schedule = this.schedule;
      new this.$site.Vue({
        el: '#cl-schedule-team',
        data: function data() {
          return {
            slot: slot,
            schedule: schedule
          };
        },
        template: "\n          <viewer :view-slot=\"slot\" :schedule=\"schedule\"></viewer>",
        components: {
          viewer: _TeamViewer_vue__WEBPACK_IMPORTED_MODULE_3__.default
        }
      });
    },
    // Check all slots that are in the future
    checkFuture: function checkFuture() {
      var time = Math.floor(Date.now() / 1000);

      var _iterator7 = _createForOfIteratorHelper(this.days),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var day = _step7.value;

          var _iterator8 = _createForOfIteratorHelper(day.slots),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var slot = _step8.value;

              if (slot.time > time) {
                slot.checked = true;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    },
    timeFormat: function timeFormat(time) {
      return this.$site.TimeFormatter.absoluteUNIX(time, 'short-time');
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./.yarn/__virtual__/vue-flatpickr-component-virtual-df4b4e8342/0/cache/vue-flatpickr-component-npm-8.1.7-9ea0d6a111-ed5c6f546b.zip/node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./.yarn/cache/flatpickr-npm-4.6.9-9928816e33-4702ad1825.zip/node_modules/flatpickr/dist/flatpickr.css");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['schedule-slot', 'location-only'],
  data: function data() {
    return {
      time: null,
      fpConfig: {
        enableTime: true,
        dateFormat: "m-d-Y h:iK",
        wrap: true
      }
    };
  },
  components: {
    'flatPickr': (vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default())
  },
  mounted: function mounted() {
    this.time = this.scheduleSlot.time !== 0 ? this.scheduleSlot.time * 1000 : null;
  },
  updated: function updated() {
    if (this.time === null || typeof this.time === 'number') {
      return;
    }

    var matches = this.time.match(/([0-9]*)-([0-9]*)-([0-9]*)\s([0-9]*):([0-9]*)([AP])/);
    var hours = +matches[4];

    if (matches[6] === 'P') {
      if (hours < 12) {
        hours += 12;
      }
    } else {
      if (hours === 12) {
        hours = 0;
      }
    }

    var date = new Date(matches[3], matches[1] - 1, matches[2], hours, matches[5]);
    this.scheduleSlot.time = this.time !== '' ? Math.floor(date.getTime() / 1000) : 0;
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'extends': Site.UserVueBase,
  props: ['view-slot', 'schedule'],
  data: function data() {
    return {
      team: null,
      email: 'mailto:',
      link: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.schedule.assigntag !== 'none') {
      this.link = this.root + '/cl/console/grading/' + this.schedule.assigntag + '/';
    }

    this.site.api.get('/api/team/' + +this.viewSlot.teamId).then(function (response) {
      if (!response.hasError()) {
        _this.take(response.getData('team').attributes);
      } else {
        _this.site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.site.toast(_this, error);
    });
  },
  methods: {
    take: function take(team) {
      this.team = team;
      var first = true;
      this.email = '';

      var _iterator = _createForOfIteratorHelper(team.members),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var teamMember = _step.value;

          if (teamMember.email !== '') {
            if (first) {
              this.email = 'mailto:';
              first = false;
            } else {
              this.email += ';';
            }

            this.email += teamMember.email;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.email !== '') {
        var name = encodeURIComponent(team.name);
        this.email += '?subject=Team%20' + name;
      }
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['menu'],
  data: function data() {
    return {
      homeLink: Site.root + '/'
    };
  }
});

/***/ }),

/***/ "./vendor/cl/course/js/Members/Member.js":
/*!***********************************************!*\
  !*** ./vendor/cl/course/js/Members/Member.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Member": () => (/* binding */ Member)
/* harmony export */ });
/* harmony import */ var _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../users/js/Users/Membership.js */ "./vendor/cl/users/js/Users/Membership.js");

/**
 * Member of a course
 * Attaches to a user Object
 * @constructor
 */

var Member = function Member(json) {
  _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__.Membership.call(this);
  var role = 'G';

  if (json !== undefined) {
    this.id = json.id;
    this.semester = json.semester;
    this.section = json.section;
    this.created = json.created !== undefined ? json.created : null;
    role = json.role;
  } else {
    this.id = 0; // System membership ID

    this.semester = null; // Semester code

    this.section = null; // Section Id

    this.created = null; // When user was created

    role = null; // Membership role
  }

  this.role = function () {
    return role;
  };

  this.setRole = function (role_) {
    role = role_;
  };
};

Member.prototype = Object.create(_users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__.Membership.prototype);
Member.prototype.constructor = Member;
/**
 * Get the course section for a member
 * @param store Vuex store
 * @returns {*}
 */

Member.prototype.getSection = function (store) {
  return store.getters['course/section'](this.semester, this.section);
};
/**
 * Get an assignment for a member
 * @param store Vuex store
 * @param assigntag Assignment tag
 */


Member.prototype.getAssignment = function (store, assigntag) {
  var section = this.getSection(store);
  return section.getAssignment(assigntag);
}; // The possible member roles
// Must match values in Member.php


Member.GUEST = 'G'; ///< Guest user visiting the site

Member.USER = 'U'; ///< Standard user from User, don't use for Member

Member.DROPPED = 'D'; ///< User has dropped the course

Member.STUDENT = 'T'; ///< Enrolled student in course

Member.STAFF = 'S'; ///< Any course staff

Member.GRADER = 'R'; ///< Graders

Member.ULA = 'L'; ///< Undergraduate Learning Assistant

Member.TA = 'E'; ///< Teaching assistant

Member.INSTRUCTOR = 'I'; ///< Course instructor

Member.ADMIN = 'A'; ///< Admin

Member.prototype.getRoles = function () {
  var roles = {};
  roles[Member.GUEST] = {
    name: 'Guest',
    priority: 1
  };
  roles[Member.DROPPED] = {
    name: 'Dropped',
    priority: 2
  };
  roles[Member.USER] = {
    name: 'User',
    priority: 3,
    skip: true
  };
  roles[Member.STUDENT] = {
    name: 'Student',
    priority: 4
  };
  roles[Member.STAFF] = {
    name: 'Staff',
    priority: 5,
    skip: true
  };
  roles[Member.GRADER] = {
    name: 'Grader',
    priority: 6
  };
  roles[Member.ULA] = {
    name: 'Undergraduate Learning Assistant',
    "short": 'ULA',
    priority: 7
  };
  roles[Member.TA] = {
    name: 'Teaching Assistant',
    "short": 'TA',
    priority: 8
  };
  roles[Member.INSTRUCTOR] = {
    name: 'Instructor',
    priority: 9
  };
  roles[Member.ADMIN] = {
    name: 'Admin',
    priority: 100
  };
  return roles;
};



/***/ }),

/***/ "./vendor/cl/scheduler/index.js":
/*!**************************************!*\
  !*** ./vendor/cl/scheduler/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_ScheduleFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ScheduleFactory */ "./vendor/cl/scheduler/js/ScheduleFactory.js");
/* harmony import */ var _js_Console_SchedulerConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Console/SchedulerConsole */ "./vendor/cl/scheduler/js/Console/SchedulerConsole.js");
/**
 * @file
 * The main Scheduler entry point
 */

 //
// Create the scheduler runtime component
//

_js_ScheduleFactory__WEBPACK_IMPORTED_MODULE_0__.ScheduleFactory.create(Site.Site); //
// Install the console components
//

if (Site.Site.console !== undefined) {
  _js_Console_SchedulerConsole__WEBPACK_IMPORTED_MODULE_1__.SchedulerConsole.setup(Site.Site.console);
}

/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/SchedulerConsole.js":
/*!************************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/SchedulerConsole.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulerConsole": () => (/* binding */ SchedulerConsole)
/* harmony export */ });
/* harmony import */ var course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! course-cl/js/Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _SchedulesEditor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchedulesEditor.vue */ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue");


/**
 * @file
 * Scheduler system console components
 */

var SchedulerConsole = function SchedulerConsole() {};

SchedulerConsole.setup = function (Console) {
  Console.tables.add({
    title: 'Scheduler',
    order: 100,
    api: '/api/scheduler/tables'
  });
  var page = {
    title: 'Main',
    route: '',
    order: 1
  };
  Console.components.addOption({
    atLeast: course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__.Member.TA,
    page: page,
    section: {
      title: 'Course',
      order: 5
    },
    title: 'Schedules',
    order: 11,
    route: '/schedules',
    routes: [{
      route: '/schedules',
      component: _SchedulesEditor_vue__WEBPACK_IMPORTED_MODULE_1__.default
    }]
  });
};

/***/ }),

/***/ "./vendor/cl/scheduler/js/Schedule.js":
/*!********************************************!*\
  !*** ./vendor/cl/scheduler/js/Schedule.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Schedule": () => (/* binding */ Schedule)
/* harmony export */ });
/**
 * Object the represents a schedule
 * @param data
 * @constructor
 */
var Schedule = function Schedule(data) {
  if (data !== undefined) {
    this.id = data.id;
    this.tag = data.tag;
    this.name = data.name;
    this.teaming = data.teaming;
    this.assigntag = data.assigntag === null ? 'none' : data.assigntag;
  } else {
    this.id = 0;
    this.tag = '';
    this.name = '';
    this.teaming = 0;
    this.assigntag = 'none';
  }

  this.clone = function () {
    return new Schedule(this);
  };
};

/***/ }),

/***/ "./vendor/cl/scheduler/js/ScheduleFactory.js":
/*!***************************************************!*\
  !*** ./vendor/cl/scheduler/js/ScheduleFactory.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleFactory": () => (/* binding */ ScheduleFactory)
/* harmony export */ });
/* harmony import */ var site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/Vue/PageVue */ "./vendor/cl/site/js/Vue/PageVue.js");
/* harmony import */ var site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-cl/js/Vue/PageNav.vue */ "./vendor/cl/site/js/Vue/PageNav.vue");
/* harmony import */ var _ScheduleVue_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScheduleVue.vue */ "./vendor/cl/scheduler/js/ScheduleVue.vue");
/**
 * @file
 * The Schedule system creation factory.
 */



var ScheduleFactory = function ScheduleFactory() {};

ScheduleFactory.create = function (site) {
  site.ready(function () {
    site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__.PageVue.create('div.cl-schedule-view', 'Schedule', _ScheduleVue_vue__WEBPACK_IMPORTED_MODULE_2__.default, site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_1__.default);
  });
};

/***/ }),

/***/ "./vendor/cl/scheduler/js/Slot.js":
/*!****************************************!*\
  !*** ./vendor/cl/scheduler/js/Slot.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slot": () => (/* binding */ Slot)
/* harmony export */ });
/**
 * Represents a single slot in the schedule.
 * @param data Optional data to load into the object.
 * @constructor
 */
var Slot = function Slot(data) {
  if (data !== undefined) {
    this.id = data.id;
    this.time = data.time;
    this.duration = data.duration;
    this.updated = data.updated;
    this.location = data.location;
    this.teamId = data.teamId;
    this.teamName = data.teamName;
    this.memberId = data.memberId;
  } else {
    this.id = 0;
    this.time = 0;
    this.duration = 10;
    this.updated = 0;
    this.location = '';
    this.teamName = null;
    this.teamId = null;
    this.memberId = null;
  } // Does this slot repeat?


  this.repeat = 1; // Is this slot contiguous with the previous slot?

  this.contiguous = false; // Is this slot checked?

  this.checked = false;

  this.clone = function () {
    return new Slot(this);
  };

  this.booked = function () {
    return this.teamId !== null || this.memberId !== null;
  };
};

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageVue.js":
/*!******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageVue.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageVue": () => (/* binding */ PageVue)
/* harmony export */ });
/**
 * Basic Vue-based site page starter
 *
 * How to use:
 * @code
 * site.ready(() => {
 *    PageVue.create('div.cl-grade-assignment', 'Assignment Grade', GradeAssignmentVue);
 *    PageVue.create('div.cl-grades', 'Grades', GradesVue);
 * });
 * @endcode
 *
 * @constructor PageVue
 */
var PageVue = function PageVue() {};
/**
 * Create a page in a given component, replacing the provided
 * selector. The selector is assumed to contain JSON data that is
 * then provided to the component in the json property.
 *
 * @param sel Selector for a div to replace with the view.
 * @param title Initial title to apply to the page
 * @param component Component to display (Vue)
 * @param nav Optional navigation component, like PageNav
 */

PageVue.create = function (sel, title, component, nav) {
  var element = document.querySelector(sel);

  if (element === null) {
    return;
  }

  var navtag = nav !== undefined ? '<page-nav :menu="menu"></page-nav>' : '';
  var template = "<div><site-header :title=\"title\">".concat(navtag, "</site-header>\n<page-vue :json=\"json\"></page-vue><site-footer></site-footer>\n</div>");
  var Header = Site.info.header.component();
  var Footer = Site.info.footer.component();
  var json = JSON.parse(element.textContent);
  var store = Site.store;
  var site = Site.Site;
  var components = {
    'site-header': Header,
    'site-footer': Footer,
    'page-vue': component
  };

  if (nav !== undefined) {
    components['page-nav'] = nav;
  }

  new Site.Vue({
    el: element,
    site: site,
    store: store,
    data: {
      title: title,
      json: json,
      menu: []
    },
    template: template,
    components: components,
    methods: {
      /**
       * Set the site title. This can be used from
       * the child Vue's using this.$parent.setTitle('')
       * @memberof PageVue
       * @instance
       * @param {string} title Title to set
       */
      setTitle: function setTitle(title) {
        this.title = title;
        document.title = Site.info.siteName + ' ' + title;
      },
      setMenu: function setMenu(menu) {
        this.menu = menu;
      },
      getMenu: function getMenu() {
        return this.menu;
      }
    }
  });
};

/***/ }),

/***/ "./vendor/cl/users/js/Users/Membership.js":
/*!************************************************!*\
  !*** ./vendor/cl/users/js/Users/Membership.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Membership": () => (/* binding */ Membership)
/* harmony export */ });
/**
 * @file
 * A membership associated with a user.
 *
 * This is a base object that will be inherited by
 * actual membership objects.
 */
var Membership = function Membership() {
  /// The User object for this membership
  this.user = null;
};



/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Not scoped */\ndiv.cl-schedule-dialog {\n  width: 300px;\n}\ndiv.cl-schedule-view div.cl-time {\n  text-align: center;\n  margin: 0 0 0 85px;\n  font-size: 3em;\n  position: sticky;\n  top: 25px;\n  z-index: 100;\n  background: white;\n}\ndiv.cl-schedule-view h2 {\n  border: 0;\n  text-align: center;\n  padding-left: 3.5em;\n}\ndiv.cl-schedule-view span.cl-info {\n  font-weight: normal;\n  font-size: 0.7em;\n}\ndiv.cl-schedule-view span.check {\n  position: absolute;\n  left: 4px;\n  top: 1px;\n  padding: 0;\n}\ndiv.cl-schedule-view table {\n  border: 0;\n  box-shadow: none;\n}\ndiv.cl-schedule-view table td:first-child {\n  width: 6em;\n  text-align: right;\n  vertical-align: top;\n  border: 0;\n  font-size: 1em;\n  padding-right: 3px;\n}\ndiv.cl-schedule-view table td:nth-child(2) {\n  position: relative;\n  width: 20em;\n  height: 4.5em;\n  text-align: center;\n  border-left: 1px solid black;\n  border-right: 1px solid black;\n  border-top: 1px solid black;\n  border-bottom: none;\n}\ndiv.cl-schedule-view table td:nth-child(2) span.location {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  font-style: italic;\n  font-size: 0.9em;\n}\ndiv.cl-schedule-view table td:nth-child(2) > a {\n  text-decoration: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 0.45em 0 0 0;\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 1.3em;\n  color: #2a2;\n}\ndiv.cl-schedule-view table tr:last-child td:nth-child(2) {\n  border-bottom: 1px solid black;\n}\ndiv.cl-schedule-view table tr.booked td:nth-child(2) {\n  background-color: lime;\n  color: black;\n}\ndiv.cl-schedule-view table tr.booked td:nth-child(2) span.booked {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2em;\n  padding: 0.25em 32px 0 0;\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 1.4em;\n  color: black;\n  overflow: hidden;\n}\ndiv.cl-schedule-view table tr.booked td:nth-child(2) span.booked a, div.cl-schedule-view table tr.booked td:nth-child(2) span.booked a:link, div.cl-schedule-view table tr.booked td:nth-child(2) span.booked a:visited {\n  color: black;\n  text-decoration: none;\n}\ndiv.cl-schedule-view table tr.booked td:nth-child(2) span.booked a:hover {\n  color: #ff0000;\n}\ndiv.cl-schedule-view table tr.booked td:nth-child(2) span.unbook {\n  position: absolute;\n  right: 2px;\n  top: 2px;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n}\ndiv.cl-schedule-view table tr.booked td:nth-child(2) span.unbook a {\n  padding: 0;\n}\ndiv.cl-schedule-view table tr.booked td:nth-child(2) span.unbook img {\n  width: 32px;\n  height: 32px;\n}\ndiv.cl-schedule-view table tr.booked span.counter {\n  position: absolute;\n  right: 2px;\n  bottom: 0;\n}\ndiv.cl-schedule-view table tr.owned td:nth-child(2) {\n  background-color: #faa;\n}\ndiv.cl-schedule-view table tr.gap td {\n  height: 10px;\n  padding: 0;\n  border: 0;\n  line-height: 0;\n}\ndiv.cl-schedule-view table tr.gap td:nth-child(2) {\n  border-top: 1px solid black;\n}", "",{"version":3,"sources":["webpack://./vendor/cl/scheduler/js/ScheduleVue.vue"],"names":[],"mappings":"AAueA,eAAA;AACA;EACE,YAAA;AAteF;AA0eE;EACE,kBAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,iBAAA;AAveJ;AA0eE;EACE,SAAA;EACA,kBAAA;EACA,mBAAA;AAxeJ;AA2eE;EACE,mBAAA;EACA,gBAAA;AAzeJ;AA4eE;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;AA1eJ;AA6eE;EACE,SAAA;EACA,gBAAA;AA3eJ;AA6eI;EACE,UAAA;EACA,iBAAA;EACA,mBAAA;EACA,SAAA;EACA,cAAA;EACA,kBAAA;AA3eN;AA8eI;EACE,kBAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,4BAAA;EACA,6BAAA;EACA,2BAAA;EACA,mBAAA;AA5eN;AA+eM;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;AA7eR;AAgfM;EACE,qBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,qBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,WAAA;AA9eR;AAmfM;EACE,8BAAA;AAjfR;AAsfM;EACE,sBAAA;EACA,YAAA;AApfR;AAufQ;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,wBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;AArfV;AAufU;EACE,YAAA;EACA,qBAAA;AArfZ;AAwfU;EACE,cAAA;AAtfZ;AA0fQ;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AAxfV;AA0fU;EACE,UAAA;AAxfZ;AA2fU;EACE,WAAA;EACA,YAAA;AAzfZ;AAggBM;EACE,kBAAA;EACA,UAAA;EACA,SAAA;AA9fR;AAogBM;EACE,sBAAA;AAlgBR;AAwgBM;EACE,YAAA;EACA,UAAA;EACA,SAAA;EACA,cAAA;AAtgBR;AAygBM;EACE,2BAAA;AAvgBR","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Not scoped */\ndiv.cl-schedule-dialog {\n  width: 300px;\n}\n\ndiv.cl-schedule-view {\n  div.cl-time {\n    text-align: center;\n    margin: 0 0 0 85px;\n    font-size: 3em;\n    position: sticky;\n    top: 25px;\n    z-index: 100;\n    background: white;\n  }\n\n  h2 {\n    border: 0;\n    text-align: center;\n    padding-left: 3.5em;\n  }\n\n  span.cl-info {\n    font-weight: normal;\n    font-size: 0.7em;\n  }\n\n  span.check {\n    position: absolute;\n    left: 4px;\n    top: 1px;\n    padding: 0;\n  }\n\n  table {\n    border: 0;\n    box-shadow: none;\n\n    td:first-child {\n      width: 6em;\n      text-align: right;\n      vertical-align: top;\n      border: 0;\n      font-size: 1em;\n      padding-right: 3px;\n    }\n\n    td:nth-child(2) {\n      position: relative;\n      width: 20em;\n      height: 4.5em;\n      text-align: center;\n      border-left: 1px solid black;\n      border-right: 1px solid black;\n      border-top: 1px solid black;\n      border-bottom: none;\n\n\n      span.location {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        text-align: center;\n        font-style: italic;\n        font-size: 0.9em;\n      }\n      \n      >a {\n        text-decoration: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        padding: 0.45em 0 0 0;\n        text-align: center;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 1.3em;\n        color: #2a2;\n      }\n    }\n\n    tr:last-child {\n      td:nth-child(2) {\n        border-bottom: 1px solid black;\n      }\n    }\n\n    tr.booked {\n      td:nth-child(2) {\n        background-color: lime;\n        color: black;\n\n\n        span.booked {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 2.0em;\n          padding: 0.25em 32px 0 0;\n          text-align: center;\n          font-style: normal;\n          font-weight: bold;\n          font-size: 1.4em;\n          color: black;\n          overflow: hidden;\n\n          a, a:link, a:visited {\n            color: black;\n            text-decoration: none;\n          }\n\n          a:hover {\n            color: #ff0000;\n          }\n        }\n\n        span.unbook {\n          position: absolute;\n          right: 2px;\n          top: 2px;\n          width: 32px;\n          height: 32px;\n          padding: 0;\n\n          a {\n            padding: 0;\n          }\n\n          img {\n            width: 32px;\n            height: 32px;\n          }\n        }\n\n\n      }\n\n      span.counter {\n        position: absolute;\n        right: 2px;\n        bottom: 0;\n\n      }\n    }\n\n    tr.owned {\n      td:nth-child(2) {\n        background-color: #faa;\n      }\n    }\n\n    tr.gap {\n\n      td {\n        height: 10px;\n        padding: 0;\n        border: 0;\n        line-height: 0;\n      }\n\n      td:nth-child(2) {\n        border-top: 1px solid black;\n      }\n    }\n  }\n\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flatpickr-input[readonly][data-v-6f2f3240] {\n  text-align: center;\n}\n.narrow[data-v-6f2f3240] {\n  width: 3em;\n}", "",{"version":3,"sources":["webpack://./vendor/cl/scheduler/js/SlotEditor.vue"],"names":[],"mappings":"AAiEA;EACE,kBAAA;AAhEF;AAmEA;EACE,UAAA;AAhEF","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.flatpickr-input[readonly] {\n  text-align: center;\n}\n\n.narrow {\n  width: 3em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.cl-schedule-team-fetching p {\n  text-align: center;\n  font-size: 1.2em;\n  font-style: italic;\n  padding: 4em 1em;\n  color: hotpink;\n}\np.cl-schedule-team-email {\n  text-align: right;\n  padding: 0 2.4em 1em 2em;\n  font-size: 0.9em;\n}", "",{"version":3,"sources":["webpack://./vendor/cl/scheduler/js/TeamViewer.vue"],"names":[],"mappings":"AA8EI;EACI,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;AA7ER;AAiFA;EACI,iBAAA;EACA,wBAAA;EACA,gBAAA;AA9EJ","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndiv.cl-schedule-team-fetching {\n    p {\n        text-align: center;\n        font-size: 1.2em;\n        font-style: italic;\n        padding: 4em 1em;\n        color: hotpink\n    }\n}\n\np.cl-schedule-team-email {\n    text-align: right;\n    padding: 0 2.4em 1em 2em;\n    font-size: 0.9em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./ScheduleVue.vue?vue&type=style&index=0&lang=scss& */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_style_index_0_id_6f2f3240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_style_index_0_id_6f2f3240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_style_index_0_id_6f2f3240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamViewer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./TeamViewer.vue?vue&type=style&index=0&lang=scss& */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamViewer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamViewer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./ScheduleEditor.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SchedulesEditor.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./ScheduleVue.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SlotEditor.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./TeamViewer.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./PageNav.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_cjs_js_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./ScheduleVue.vue?vue&type=style&index=0&lang=scss& */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_cjs_js_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_style_index_0_id_6f2f3240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&");


/***/ }),

/***/ "./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_cjs_js_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamViewer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./TeamViewer.vue?vue&type=style&index=0&lang=scss& */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./ScheduleEditor.vue?vue&type=template&id=581a201e& */ "./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e&");


/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8&":
/*!*******************************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SchedulesEditor.vue?vue&type=template&id=fcccece8& */ "./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8&");


/***/ }),

/***/ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./ScheduleVue.vue?vue&type=template&id=51a40e0a& */ "./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a&");


/***/ }),

/***/ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true& */ "./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true&");


/***/ }),

/***/ "./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=template&id=59d41604&":
/*!******************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=template&id=59d41604& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamViewer_vue_vue_type_template_id_59d41604___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamViewer_vue_vue_type_template_id_59d41604___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamViewer_vue_vue_type_template_id_59d41604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./TeamViewer.vue?vue&type=template&id=59d41604& */ "./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=template&id=59d41604&");


/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_8066144fa6_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");


/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "dialog-cl-column", staticStyle: { padding: "0 1em" } },
    [
      _c("div", [
        _c("form", [
          _c("p", [
            _c("label", [
              _vm._v("Tag"),
              _c("br"),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.schedule.tag,
                    expression: "schedule.tag"
                  }
                ],
                ref: "tag",
                attrs: { type: "text" },
                domProps: { value: _vm.schedule.tag },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.schedule, "tag", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("p", [
            _c("label", [
              _vm._v("Name"),
              _c("br"),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.schedule.name,
                    expression: "schedule.name"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.schedule.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.schedule, "name", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _vm.teamings !== null
            ? _c("p", [
                _c("label", [_vm._v("Teaming")]),
                _c("br"),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.schedule.teaming,
                        expression: "schedule.teaming"
                      }
                    ],
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.schedule,
                          "teaming",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { domProps: { value: 0 } }, [_vm._v("None")]),
                    _vm._v(" "),
                    _vm._l(_vm.teamings, function(teaming) {
                      return _c("option", { domProps: { value: teaming.id } }, [
                        _vm._v(_vm._s(teaming.name))
                      ])
                    })
                  ],
                  2
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.teamings !== null
            ? _c("p", [
                _c("label", [_vm._v("Assignment")]),
                _c("br"),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.schedule.assigntag,
                        expression: "schedule.assigntag"
                      }
                    ],
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.schedule,
                          "assigntag",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { domProps: { value: "none" } }, [
                      _vm._v("None")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.assignments, function(assignment) {
                      return _c(
                        "option",
                        { domProps: { value: assignment.tag } },
                        [_vm._v(_vm._s(assignment.name))]
                      )
                    })
                  ],
                  2
                )
              ])
            : _vm._e()
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _vm.schedules !== null
      ? _c("div", { staticClass: "full" }, [
          _vm.schedules.length > 0
            ? _c(
                "table",
                [
                  _c("tr", [
                    _c("th"),
                    _vm._v(" "),
                    _c("th", [_vm._v("Tag")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Name")]),
                    _vm._v(" "),
                    _vm.teamings !== null
                      ? _c("th", [_vm._v("Teaming")])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.schedules, function(schedule) {
                    return _c("tr", { key: schedule.id }, [
                      _c("td", [
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.editor(schedule)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src:
                                  _vm.root + "/vendor/cl/site/img/pencil16.png",
                                alt: "Edit",
                                title: "Edit"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.deleter(schedule)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: _vm.root + "/vendor/cl/site/img/x.png",
                                alt: "Delete",
                                title: "Delete"
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.root + "/cl/schedule/" + schedule.tag
                            }
                          },
                          [_vm._v(_vm._s(schedule.tag))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(schedule.name))]),
                      _vm._v(" "),
                      _vm.teamings !== null
                        ? _c("td", [
                            _vm._v(_vm._s(_vm.teamingName(schedule.teaming)))
                          ])
                        : _vm._e()
                    ])
                  })
                ],
                2
              )
            : _c("div", { staticClass: "center" }, [
                _c("p", [_vm._v("There are currently no defined schedules.")]),
                _vm._v(" "),
                _c("p", [_vm._v("Choose Add Schedule to add a new schedule.")])
              ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content cl-schedule-view" },
    [
      _c("div", { staticClass: "cl-time" }, [_vm._v(_vm._s(_vm.timeStr))]),
      _vm._v(" "),
      _vm._l(_vm.days, function(day) {
        return _c("div", { staticClass: "full" }, [
          _c("h2", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: day.open,
                  expression: "day.open"
                }
              ],
              attrs: { type: "checkbox" },
              domProps: {
                checked: Array.isArray(day.open)
                  ? _vm._i(day.open, null) > -1
                  : day.open
              },
              on: {
                change: function($event) {
                  var $$a = day.open,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && _vm.$set(day, "open", $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        _vm.$set(
                          day,
                          "open",
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        )
                    }
                  } else {
                    _vm.$set(day, "open", $$c)
                  }
                }
              }
            }),
            _vm._v(" " + _vm._s(day.day) + " "),
            _c("span", { staticClass: "cl-info" }, [
              _vm._v(
                _vm._s(day.slots.length) +
                  " slots/" +
                  _vm._s(day.slots.length - _vm.ownedForDay(day)) +
                  " open"
              )
            ])
          ]),
          _vm._v(" "),
          day.open
            ? _c(
                "table",
                [
                  _vm._l(day.slots, function(slot) {
                    return [
                      !slot.contiguous
                        ? _c("tr", { staticClass: "gap" }, [
                            _c("td", [_vm._v(" ")]),
                            _c("td", [_vm._v(" ")])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("tr", { class: _vm.slotClass(slot) }, [
                        _c(
                          "td",
                          [
                            _c("span", { staticClass: "time" }, [
                              _vm._v(_vm._s(_vm.timeFormat(slot.time)))
                            ]),
                            _vm.staff
                              ? [
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.editor(slot)
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            _vm.root +
                                            "/vendor/cl/site/img/pencil16.png",
                                          alt: "Edit",
                                          title: "Edit"
                                        }
                                      })
                                    ]
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.deleter(slot)
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            _vm.root +
                                            "/vendor/cl/site/img/x.png",
                                          alt: "Delete",
                                          title: "Delete"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("td", [
                          !_vm.staff && slot.booked()
                            ? _c("span", { staticClass: "booked" }, [
                                _vm._v(_vm._s(slot.teamName))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.staff && slot.booked()
                            ? _c("span", { staticClass: "booked" }, [
                                _c(
                                  "a",
                                  {
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.showTeam(slot)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(slot.teamName))]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          !slot.booked() && slot.time > _vm.time
                            ? _c(
                                "a",
                                {
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.book(slot)
                                    }
                                  }
                                },
                                [_vm._v("Click to Book")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("span", { staticClass: "location" }, [
                            _vm._v(_vm._s(slot.location))
                          ]),
                          _vm._v(" "),
                          _vm.staff && slot.booked()
                            ? _c("span", { staticClass: "counter" }, [
                                _vm._v(_vm._s(slot.count))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.staff
                            ? _c("span", { staticClass: "check" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: slot.checked,
                                      expression: "slot.checked"
                                    }
                                  ],
                                  attrs: { type: "checkbox" },
                                  domProps: {
                                    checked: Array.isArray(slot.checked)
                                      ? _vm._i(slot.checked, null) > -1
                                      : slot.checked
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = slot.checked,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              slot,
                                              "checked",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              slot,
                                              "checked",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(slot, "checked", $$c)
                                      }
                                    }
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          slot.booked() &&
                          (_vm.staff ||
                            (_vm.owned(slot) && slot.time > _vm.time))
                            ? _c("span", { staticClass: "unbook" }, [
                                _c(
                                  "a",
                                  {
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.unbook(slot)
                                      }
                                    }
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src:
                                          _vm.root +
                                          "/vendor/cl/site/img/x.png",
                                        alt: "Unbook",
                                        title: "Unbook"
                                      }
                                    })
                                  ]
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    ]
                  })
                ],
                2
              )
            : _vm._e()
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dialog-cl-column" }, [
    _c("div", [
      _c(
        "form",
        [
          !_vm.locationOnly
            ? [
                _c("p", { staticClass: "flatpickr" }, [
                  _c(
                    "label",
                    [
                      _vm._v("Date and Time"),
                      _c("br"),
                      _vm._v(" "),
                      _c("flat-pickr", {
                        attrs: { config: _vm.fpConfig, "data-input": "" },
                        model: {
                          value: _vm.time,
                          callback: function($$v) {
                            _vm.time = $$v
                          },
                          expression: "time"
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(0)
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("label", [
                    _vm._v("Duration (minutes): "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.scheduleSlot.duration,
                          expression: "scheduleSlot.duration"
                        }
                      ],
                      staticClass: "narrow",
                      attrs: { type: "text" },
                      domProps: { value: _vm.scheduleSlot.duration },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.scheduleSlot,
                            "duration",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _c("p", [
            _c("label", [
              _vm._v("Location"),
              _c("br"),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.scheduleSlot.location,
                    expression: "scheduleSlot.location"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.scheduleSlot.location },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.scheduleSlot, "location", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _vm.scheduleSlot.id === 0
            ? _c("p", { staticClass: "center" }, [
                _c("label", [
                  _vm._v("Repeat: "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.scheduleSlot.repeat,
                        expression: "scheduleSlot.repeat"
                      }
                    ],
                    staticClass: "narrow",
                    attrs: { type: "text" },
                    domProps: { value: _vm.scheduleSlot.repeat },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.scheduleSlot,
                          "repeat",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ])
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-toggle": "", title: "Toggle Calendar" } }, [
      _c("span", { staticClass: "icons-cl icons-cl-calendar" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=template&id=59d41604&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=template&id=59d41604& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.team !== null
    ? _c("div", [
        _c(
          "table",
          [
            _c("tr", [_c("th", [_vm._v(_vm._s(_vm.team.name))])]),
            _vm._v(" "),
            _vm._l(_vm.team.members, function(member) {
              return _c("tr", [
                _vm.schedule.assigntag === "none"
                  ? _c("td", [_vm._v(_vm._s(member.name))])
                  : _c("td", [
                      _c("a", { attrs: { href: _vm.link + member.memberid } }, [
                        _vm._v(_vm._s(member.name))
                      ])
                    ])
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("p", { staticClass: "cl-schedule-team-email" }, [
          _c("a", { attrs: { href: _vm.email } }, [_vm._v("email")])
        ])
      ])
    : _c("div", { staticClass: "cl-schedule-team-fetching" }, [
        _c("p", [_vm._v("Fetching...")])
      ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-8066144fa6/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "cl-nav" }, [
    _c("div", [
      _c(
        "ul",
        { staticClass: "dividers" },
        [
          _c("li", [
            _c("a", { attrs: { href: _vm.homeLink } }, [
              _c("span", { staticClass: "home" }, [_vm._v("Home")])
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.menu, function(item) {
            return _c("li", [
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return item.click()
                    }
                  }
                },
                [_vm._v(_vm._s(item.name))]
              )
            ])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue":
/*!***********************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/ScheduleEditor.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduleEditor.vue?vue&type=template&id=581a201e& */ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e&");
/* harmony import */ var _ScheduleEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduleEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ScheduleEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__.render,
  _ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/scheduler/js/Console/ScheduleEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue":
/*!************************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/SchedulesEditor.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SchedulesEditor.vue?vue&type=template&id=fcccece8& */ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8&");
/* harmony import */ var _SchedulesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchedulesEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SchedulesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__.render,
  _SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/scheduler/js/Console/SchedulesEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/scheduler/js/ScheduleVue.vue":
/*!************************************************!*\
  !*** ./vendor/cl/scheduler/js/ScheduleVue.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduleVue.vue?vue&type=template&id=51a40e0a& */ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a&");
/* harmony import */ var _ScheduleVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduleVue.vue?vue&type=script&lang=js& */ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=script&lang=js&");
/* harmony import */ var _ScheduleVue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScheduleVue.vue?vue&type=style&index=0&lang=scss& */ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ScheduleVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/scheduler/js/ScheduleVue.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/scheduler/js/SlotEditor.vue":
/*!***********************************************!*\
  !*** ./vendor/cl/scheduler/js/SlotEditor.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true& */ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true&");
/* harmony import */ var _SlotEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlotEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _SlotEditor_vue_vue_type_style_index_0_id_6f2f3240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& */ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SlotEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6f2f3240",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/scheduler/js/SlotEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/scheduler/js/TeamViewer.vue":
/*!***********************************************!*\
  !*** ./vendor/cl/scheduler/js/TeamViewer.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TeamViewer_vue_vue_type_template_id_59d41604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamViewer.vue?vue&type=template&id=59d41604& */ "./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=template&id=59d41604&");
/* harmony import */ var _TeamViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamViewer.vue?vue&type=script&lang=js& */ "./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=script&lang=js&");
/* harmony import */ var _TeamViewer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamViewer.vue?vue&type=style&index=0&lang=scss& */ "./vendor/cl/scheduler/js/TeamViewer.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _TeamViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TeamViewer_vue_vue_type_template_id_59d41604___WEBPACK_IMPORTED_MODULE_0__.render,
  _TeamViewer_vue_vue_type_template_id_59d41604___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/scheduler/js/TeamViewer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
/* harmony import */ var _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageNav.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-a7d4b4cf76/0/cache/vue-loader-npm-15.9.8-438f4d0ff0-ca4c99b261.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_a7d4b4cf76_0_cache_vue_loader_npm_15_9_8_438f4d0ff0_ca4c99b261_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/site/js/Vue/PageNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Scheduler": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcourselib"] = self["webpackChunkcourselib"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./vendor/cl/scheduler/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VsaWIvdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9Db25zb2xlL1NjaGVkdWxlRWRpdG9yLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9Db25zb2xlL1NjaGVkdWxlc0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2NoZWR1bGVWdWUudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1Nsb3RFZGl0b3IudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1RlYW1WaWV3ZXIudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9NZW1iZXJzL01lbWJlci5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2luZGV4LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvQ29uc29sZS9TY2hlZHVsZXJDb25zb2xlLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2NoZWR1bGUuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9TY2hlZHVsZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9TbG90LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlVnVlLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC91c2Vycy9qcy9Vc2Vycy9NZW1iZXJzaGlwLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2NoZWR1bGVWdWUudnVlPzgwYTUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9TbG90RWRpdG9yLnZ1ZT9jNmJlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvVGVhbVZpZXdlci52dWU/MTUyZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1NjaGVkdWxlVnVlLnZ1ZT8zYzJiIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2xvdEVkaXRvci52dWU/YzZmMCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1RlYW1WaWV3ZXIudnVlP2RhNTciLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9Db25zb2xlL1NjaGVkdWxlRWRpdG9yLnZ1ZT8zNzA3Iiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvQ29uc29sZS9TY2hlZHVsZXNFZGl0b3IudnVlPzNmNDkiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9TY2hlZHVsZVZ1ZS52dWU/NWYyZiIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1Nsb3RFZGl0b3IudnVlPzcyNzUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9UZWFtVmlld2VyLnZ1ZT81NmI4Iiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZT8xOTIxIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvQ29uc29sZS9TY2hlZHVsZUVkaXRvci52dWU/ZDUwZiIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL0NvbnNvbGUvU2NoZWR1bGVzRWRpdG9yLnZ1ZT85ZjcyIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2NoZWR1bGVWdWUudnVlPzhhNjAiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9TbG90RWRpdG9yLnZ1ZT8wYjg1Iiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvVGVhbVZpZXdlci52dWU/MWRiNCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWU/ZWE3MSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL0NvbnNvbGUvU2NoZWR1bGVFZGl0b3IudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvQ29uc29sZS9TY2hlZHVsZXNFZGl0b3IudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2NoZWR1bGVWdWUudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2xvdEVkaXRvci52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9UZWFtVmlld2VyLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIk1lbWJlciIsImpzb24iLCJNZW1iZXJzaGlwIiwicm9sZSIsInVuZGVmaW5lZCIsImlkIiwic2VtZXN0ZXIiLCJzZWN0aW9uIiwiY3JlYXRlZCIsInNldFJvbGUiLCJyb2xlXyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiZ2V0U2VjdGlvbiIsInN0b3JlIiwiZ2V0dGVycyIsImdldEFzc2lnbm1lbnQiLCJhc3NpZ250YWciLCJHVUVTVCIsIlVTRVIiLCJEUk9QUEVEIiwiU1RVREVOVCIsIlNUQUZGIiwiR1JBREVSIiwiVUxBIiwiVEEiLCJJTlNUUlVDVE9SIiwiQURNSU4iLCJnZXRSb2xlcyIsInJvbGVzIiwibmFtZSIsInByaW9yaXR5Iiwic2tpcCIsIlNjaGVkdWxlRmFjdG9yeSIsIlNpdGUiLCJjb25zb2xlIiwiU2NoZWR1bGVyQ29uc29sZSIsInNldHVwIiwiQ29uc29sZSIsInRhYmxlcyIsImFkZCIsInRpdGxlIiwib3JkZXIiLCJhcGkiLCJwYWdlIiwicm91dGUiLCJjb21wb25lbnRzIiwiYWRkT3B0aW9uIiwiYXRMZWFzdCIsInJvdXRlcyIsImNvbXBvbmVudCIsIlNjaGVkdWxlc0VkaXRvclZ1ZSIsIlNjaGVkdWxlIiwiZGF0YSIsInRhZyIsInRlYW1pbmciLCJjbG9uZSIsInNpdGUiLCJyZWFkeSIsIlBhZ2VWdWUiLCJTY2hlZHVsZVZ1ZSIsIlBhZ2VOYXYiLCJTbG90IiwidGltZSIsImR1cmF0aW9uIiwidXBkYXRlZCIsImxvY2F0aW9uIiwidGVhbUlkIiwidGVhbU5hbWUiLCJtZW1iZXJJZCIsInJlcGVhdCIsImNvbnRpZ3VvdXMiLCJjaGVja2VkIiwiYm9va2VkIiwic2VsIiwibmF2IiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdnRhZyIsInRlbXBsYXRlIiwiSGVhZGVyIiwiaW5mbyIsImhlYWRlciIsIkZvb3RlciIsImZvb3RlciIsIkpTT04iLCJwYXJzZSIsInRleHRDb250ZW50IiwiVnVlIiwiZWwiLCJtZW51IiwibWV0aG9kcyIsInNldFRpdGxlIiwic2l0ZU5hbWUiLCJzZXRNZW51IiwiZ2V0TWVudSIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQSxnREFEQTtBQUVBLFNBRkEscUJBRUE7QUFDQTtBQUNBO0FBSkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0dBO0FBQ0E7QUFFQTtBQUNBLHNDQURBO0FBRUE7QUFDQTtBQUNBLG9CQURBO0FBRUE7QUFGQTtBQUlBLEdBUEE7QUFRQSxTQVJBLHFCQVFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUlBLHVEQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FQQSxXQVFBO0FBQ0E7QUFDQSxLQVZBO0FBV0EsR0F6QkE7QUEwQkE7QUFDQSxlQURBLHVCQUNBLFNBREEsRUFDQTtBQUFBLGlEQUNBLGFBREE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FB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QTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQzlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InNjaGVkdWxlci5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDAgMWVtXCIgY2xhc3M9XCJkaWFsb2ctY2wtY29sdW1uXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8cD48bGFiZWw+VGFnPGJyPjxpbnB1dCByZWY9XCJ0YWdcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJzY2hlZHVsZS50YWdcIj48L2xhYmVsPjwvcD5cclxuICAgICAgICA8cD48bGFiZWw+TmFtZTxicj48aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic2NoZWR1bGUubmFtZVwiPjwvbGFiZWw+PC9wPlxyXG4gICAgICAgIDxwIHYtaWY9XCJ0ZWFtaW5ncyAhPT0gbnVsbFwiPjxsYWJlbD5UZWFtaW5nPC9sYWJlbD48YnI+XHJcbiAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJzY2hlZHVsZS50ZWFtaW5nXCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gOnZhbHVlPVwiMFwiPk5vbmU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cInRlYW1pbmcgaW4gdGVhbWluZ3NcIiA6dmFsdWU9XCJ0ZWFtaW5nLmlkXCI+e3t0ZWFtaW5nLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIHYtaWY9XCJ0ZWFtaW5ncyAhPT0gbnVsbFwiPjxsYWJlbD5Bc3NpZ25tZW50PC9sYWJlbD48YnI+XHJcbiAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJzY2hlZHVsZS5hc3NpZ250YWdcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCInbm9uZSdcIj5Ob25lPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJhc3NpZ25tZW50IGluIGFzc2lnbm1lbnRzXCIgOnZhbHVlPVwiYXNzaWdubWVudC50YWdcIj57e2Fzc2lnbm1lbnQubmFtZX19PC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gIFx0cHJvcHM6IFsnc2NoZWR1bGUnLCAndGVhbWluZ3MnLCAnYXNzaWdubWVudHMnXSxcclxuICBcdG1vdW50ZWQoKSB7XHJcbiAgXHRcdHRoaXMuJHJlZnNbJ3RhZyddLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICA8ZGl2IHYtaWY9XCJzY2hlZHVsZXMgIT09IG51bGxcIiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgPHRhYmxlIHYtaWY9XCJzY2hlZHVsZXMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgPHRoPlRhZzwvdGg+XHJcbiAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICA8dGggdi1pZj1cInRlYW1pbmdzICE9PSBudWxsXCI+VGVhbWluZzwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHIgdi1mb3I9XCJzY2hlZHVsZSBpbiBzY2hlZHVsZXNcIiA6a2V5PVwic2NoZWR1bGUuaWRcIj5cclxuICAgICAgICAgIDx0ZD48YSBAY2xpY2sucHJldmVudD1cImVkaXRvcihzY2hlZHVsZSlcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvcGVuY2lsMTYucG5nJ1wiIGFsdD1cIkVkaXRcIiB0aXRsZT1cIkVkaXRcIj48L2E+XHJcbiAgICAgICAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwiZGVsZXRlcihzY2hlZHVsZSlcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcveC5wbmcnXCIgYWx0PVwiRGVsZXRlXCIgdGl0bGU9XCJEZWxldGVcIj48L2E+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkPjxhIDpocmVmPVwicm9vdCArICcvY2wvc2NoZWR1bGUvJyArIHNjaGVkdWxlLnRhZ1wiPnt7c2NoZWR1bGUudGFnfX08L2E+PC90ZD5cclxuICAgICAgICAgIDx0ZD57e3NjaGVkdWxlLm5hbWV9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQgdi1pZj1cInRlYW1pbmdzICE9PSBudWxsXCI+e3t0ZWFtaW5nTmFtZShzY2hlZHVsZS50ZWFtaW5nKX19PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDxwPlRoZXJlIGFyZSBjdXJyZW50bHkgbm8gZGVmaW5lZCBzY2hlZHVsZXMuPC9wPlxyXG4gICAgICAgIDxwPkNob29zZSBBZGQgU2NoZWR1bGUgdG8gYWRkIGEgbmV3IHNjaGVkdWxlLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtTY2hlZHVsZX0gZnJvbSAnLi4vU2NoZWR1bGUnO1xyXG4gIGltcG9ydCBTY2hlZHVsZUVkaXRvclZ1ZSBmcm9tICcuL1NjaGVkdWxlRWRpdG9yLnZ1ZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGV4dGVuZHM6IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVhbWluZ3M6IG51bGwsXHJcbiAgICAgICAgc2NoZWR1bGVzOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLnNldFRpdGxlKCc6IFNjaGVkdWxlcycpO1xyXG4gICAgICB0aGlzLmFkZE5hdjIoJ0FkZCBTY2hlZHVsZScsIDUsICgpID0+IHtcclxuICAgICAgICB0aGlzLmFkZCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJHNpdGUuYXBpLmdldCgnL2FwaS9zY2hlZHVsZXIvc2NoZWR1bGVzJywge30pXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICB0ZWFtaW5nTmFtZSh0ZWFtaW5naWQpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRlYW1pbmcgb2YgdGhpcy50ZWFtaW5ncykge1xyXG4gICAgICAgICAgaWYgKCt0ZWFtaW5nLmlkID09PSArdGVhbWluZ2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZWFtaW5nLm5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJ05vbmUnO1xyXG4gICAgICB9LFxyXG4gICAgICB0YWtlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ3NjaGVkdWxlcycpLmF0dHJpYnV0ZXM7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHRlYW1Db3VudGVyID0ge307XHJcblxyXG4gICAgICAgIGZvciAobGV0IHJvdyBvZiBkYXRhKSB7XHJcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlcy5wdXNoKG5ldyBTY2hlZHVsZShyb3cpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRlYW1pbmdzID0gcmVzcG9uc2UuZ2V0RGF0YSgndGVhbWluZ3MnKTtcclxuICAgICAgICBpZiAodGVhbWluZ3MgIT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMudGVhbWluZ3MgPSB0ZWFtaW5ncy5hdHRyaWJ1dGVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZCgpIHtcclxuICAgICAgICBjb25zdCBzY2hlZHVsZSA9IG5ldyBTY2hlZHVsZSgpO1xyXG4gICAgICAgIGNvbnN0IERpYWxvZyA9IHRoaXMuJHNpdGUuRGlhbG9nO1xyXG5cclxuICAgICAgICBuZXcgRGlhbG9nKHtcclxuICAgICAgICAgIHRpdGxlOiAnTmV3IFNjaGVkdWxlJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICc8ZGl2IGlkPVwiY2wtc2NoZWR1bGVcIj48L2Rpdj4nLFxyXG4gICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudHM6ICdBZGQnLFxyXG4gICAgICAgICAgICAgIGZvY3VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNsaWNrOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuJHNpdGUuVGFncy52YWxpZGF0ZShzY2hlZHVsZS50YWcpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2NoZWR1bGUubmFtZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnTXVzdCBlbnRlciBuYW1lJywgJ1lvdSBtdXN0IHByb3ZpZGUgYSBub24tZW1wdHkgbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0spO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgdGFnOiBzY2hlZHVsZS50YWcudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBzY2hlZHVsZS5uYW1lLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgdGVhbWluZzogc2NoZWR1bGUudGVhbWluZyxcclxuICAgICAgICAgICAgICAgICAgYXNzaWdudGFnOiBzY2hlZHVsZS5hc3NpZ250YWcgIT09ICdub25lJyA/IHNjaGVkdWxlLmFzc2lnbnRhZyA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3NjaGVkdWxlci9zY2hlZHVsZXMvbmV3JywgcGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudHM6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgIGNsaWNrOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlhbG9nVnVlKHNjaGVkdWxlKTtcclxuICAgICAgfSxcclxuICAgICAgZWRpdG9yKHNjaGVkdWxlKSB7XHJcbiAgICAgICAgc2NoZWR1bGUgPSBzY2hlZHVsZS5jbG9uZSgpO1xyXG4gICAgICAgIGNvbnN0IERpYWxvZyA9IHRoaXMuJHNpdGUuRGlhbG9nO1xyXG5cclxuICAgICAgICBuZXcgRGlhbG9nKHtcclxuICAgICAgICAgIHRpdGxlOiAnRWRpdCBTY2hlZHVsZScsXHJcbiAgICAgICAgICBjb250ZW50OiAnPGRpdiBpZD1cImNsLXNjaGVkdWxlXCI+PC9kaXY+JyxcclxuICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnRzOiAnVXBkYXRlJyxcclxuICAgICAgICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRzaXRlLlRhZ3MudmFsaWRhdGUoc2NoZWR1bGUudGFnKSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNjaGVkdWxlLm5hbWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ011c3QgZW50ZXIgbmFtZScsICdZb3UgbXVzdCBwcm92aWRlIGEgbm9uLWVtcHR5IG5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5NZXNzYWdlQm94Lk9LKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBzY2hlZHVsZS5pZCxcclxuICAgICAgICAgICAgICAgICAgdGFnOiBzY2hlZHVsZS50YWcudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBzY2hlZHVsZS5uYW1lLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgdGVhbWluZzogc2NoZWR1bGUudGVhbWluZyxcclxuICAgICAgICAgICAgICAgICAgYXNzaWdudGFnOiBzY2hlZHVsZS5hc3NpZ250YWcgIT09ICdub25lJyA/IHNjaGVkdWxlLmFzc2lnbnRhZyA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3NjaGVkdWxlci9zY2hlZHVsZXMvdXBkYXRlJywgcGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudHM6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgIGNsaWNrOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlhbG9nVnVlKHNjaGVkdWxlKTtcclxuICAgICAgfSxcclxuICAgICAgZGlhbG9nVnVlKHNjaGVkdWxlKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgVnVlIGluc2lkZSB0aGUgZGlhbG9nIGJveFxyXG4gICAgICAgIGNvbnN0IHRlYW1pbmdzID0gdGhpcy50ZWFtaW5ncztcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlcjtcclxuICAgICAgICBjb25zdCBtZW1iZXIgPSB1c2VyLm1lbWJlcjtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10obWVtYmVyLnNlbWVzdGVyLCBtZW1iZXIuc2VjdGlvbik7XHJcblxyXG4gICAgICAgIGxldCBhc3NpZ25tZW50cyA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCBjYXRlZ29yeSBvZiBzZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICAgIGZvcihjb25zdCBhc3NpZ25tZW50IG9mIGNhdGVnb3J5LmFzc2lnbm1lbnRzKSB7XHJcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3NpZ25tZW50cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgIGlmKGEubmFtZSA8IGIubmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9IGVsc2UgaWYoYS5uYW1lID4gYi5uYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBuZXcgdGhpcy4kc2l0ZS5WdWUoe1xyXG4gICAgICAgICAgZWw6ICcjY2wtc2NoZWR1bGUnLFxyXG4gICAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHNjaGVkdWxlOiBzY2hlZHVsZSxcclxuICAgICAgICAgICAgICB0ZWFtaW5nczogdGVhbWluZ3MsXHJcbiAgICAgICAgICAgICAgYXNzaWdubWVudHM6IGFzc2lnbm1lbnRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogYDxlZGl0b3IgOnNjaGVkdWxlPVwic2NoZWR1bGVcIiA6dGVhbWluZ3M9XCJ0ZWFtaW5nc1wiIDphc3NpZ25tZW50cz1cImFzc2lnbm1lbnRzXCI+PC9lZGl0b3I+YCxcclxuICAgICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgZWRpdG9yOiBTY2hlZHVsZUVkaXRvclZ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZXIoc2NoZWR1bGUpIHtcclxuICAgICAgICBjb25zdCBEaWFsb2cgPSB0aGlzLiRzaXRlLkRpYWxvZztcclxuXHJcbiAgICAgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KCdBcmUgeW91IHN1cmU/JywgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJyArIHNjaGVkdWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuTWVzc2FnZUJveC5PS0NBTkNFTCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3NjaGVkdWxlci9zY2hlZHVsZXMvZGVsZXRlJywge2lkOiBzY2hlZHVsZS5pZH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtc2NoZWR1bGUtdmlld1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjbC10aW1lXCI+e3t0aW1lU3RyfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiIHYtZm9yPVwiZGF5IG9mIGRheXNcIj48aDI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJkYXkub3BlblwiPiB7e2RheS5kYXl9fSA8c3BhbiBjbGFzcz1cImNsLWluZm9cIj57e2RheS5zbG90cy5sZW5ndGh9fSBzbG90cy97e2RheS5zbG90cy5sZW5ndGggLSBvd25lZEZvckRheShkYXkpfX0gb3Blbjwvc3Bhbj48L2gyPlxuICAgICAgPHRhYmxlIHYtaWY9XCJkYXkub3BlblwiPlxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJzbG90IG9mIGRheS5zbG90c1wiPlxuICAgICAgICAgIDx0ciB2LWlmPVwiIXNsb3QuY29udGlndW91c1wiIGNsYXNzPVwiZ2FwXCI+PHRkPiZuYnNwPC90ZD48dGQ+Jm5ic3A7PC90ZD48L3RyPlxuICAgICAgICAgIDx0ciA6Y2xhc3M9XCJzbG90Q2xhc3Moc2xvdClcIj5cbiAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzcz1cInRpbWVcIj57e3RpbWVGb3JtYXQoc2xvdC50aW1lKX19PC9zcGFuPjx0ZW1wbGF0ZSB2LWlmPVwic3RhZmZcIj48YnI+XG4gICAgICAgICAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwiZWRpdG9yKHNsb3QpXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3BlbmNpbDE2LnBuZydcIiBhbHQ9XCJFZGl0XCIgdGl0bGU9XCJFZGl0XCI+PC9hPjxicj5cbiAgICAgICAgICAgICAgPGEgQGNsaWNrLnByZXZlbnQ9XCJkZWxldGVyKHNsb3QpXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nJ1wiIGFsdD1cIkRlbGV0ZVwiIHRpdGxlPVwiRGVsZXRlXCI+PC9hPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD48c3BhbiB2LWlmPVwiIXN0YWZmICYmIHNsb3QuYm9va2VkKClcIiBjbGFzcz1cImJvb2tlZFwiPnt7c2xvdC50ZWFtTmFtZX19PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwic3RhZmYgJiYgc2xvdC5ib29rZWQoKVwiIGNsYXNzPVwiYm9va2VkXCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJzaG93VGVhbShzbG90KVwiPnt7c2xvdC50ZWFtTmFtZX19PC9hPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGEgdi1pZj1cIiFzbG90LmJvb2tlZCgpICYmIHNsb3QudGltZSA+IHRpbWVcIiBAY2xpY2sucHJldmVudD1cImJvb2soc2xvdClcIj5DbGljayB0byBCb29rPC9hPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxvY2F0aW9uXCI+e3tzbG90LmxvY2F0aW9ufX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJzdGFmZiAmJiBzbG90LmJvb2tlZCgpXCIgY2xhc3M9XCJjb3VudGVyXCI+e3tzbG90LmNvdW50fX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJzdGFmZlwiIGNsYXNzPVwiY2hlY2tcIj48aW5wdXQgdi1tb2RlbD1cInNsb3QuY2hlY2tlZFwiIHR5cGU9XCJjaGVja2JveFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInNsb3QuYm9va2VkKCkgJiYgKHN0YWZmIHx8IChvd25lZChzbG90KSAmJiBzbG90LnRpbWUgPiB0aW1lKSlcIiBjbGFzcz1cInVuYm9va1wiPjxhIEBjbGljay5wcmV2ZW50PVwidW5ib29rKHNsb3QpXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nJ1wiIGFsdD1cIlVuYm9va1wiIHRpdGxlPVwiVW5ib29rXCI+PC9hPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge1NjaGVkdWxlfSBmcm9tICcuL1NjaGVkdWxlJztcbmltcG9ydCB7U2xvdH0gZnJvbSAnLi9TbG90JztcbmltcG9ydCBTbG90RWRpdG9yVnVlIGZyb20gJy4vU2xvdEVkaXRvci52dWUnO1xuaW1wb3J0IFRlYW1WaWV3ZXJWdWUgZnJvbSAnLi9UZWFtVmlld2VyLnZ1ZSc7XG5cbmNvbnN0IE1lbWJlciA9IFNpdGUuTWVtYmVyO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICdleHRlbmRzJzogU2l0ZS5Vc2VyVnVlQmFzZSxcbiAgcHJvcHM6IFsnanNvbiddLFxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjaGVkdWxlOiBudWxsLFxuICAgICAgZGF5czogW10sXG4gICAgICB0ZWFtTW9kZTogZmFsc2UsXG4gICAgICB0ZWFtOiBudWxsLFxuICAgICAgc3RhZmY6IGZhbHNlLFxuICAgICAgbGF0ZXN0OiAwLFxuICAgICAgdGltZTogMCxcbiAgICAgIHRpbWVTdHI6ICcnLFxuICAgICAgdGltZXI6IDBcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgLy8gTWFrZSB0aGUgbmF2aWdhdGlvbiBiYXIgc3RpY2t5LlxuICAgIG5ldyB0aGlzLiRzaXRlLlN0aWNreU5hdignbmF2LmNsLW5hdicpO1xuXG4gICAgdGhpcy5jbGVhck1lbnUoKTtcbiAgICB0aGlzLnNjaGVkdWxlID0gbmV3IFNjaGVkdWxlKHRoaXMuanNvbi5zY2hlZHVsZSk7XG4gICAgdGhpcy5zZXRUaW1lKCk7XG5cbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUaW1lKCk7XG4gICAgfSwgMTAwMClcblxuICAgIHRoaXMubmV3U2xvdHModGhpcy5qc29uLnNsb3RzKTtcblxuICAgIGlmICh0aGlzLmpzb24udGVhbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRlYW1Nb2RlID0gdHJ1ZTtcbiAgICAgIHRoaXMudGVhbSA9IHRoaXMuanNvbi50ZWFtO1xuICAgIH1cblxuICAgIHRoaXMuc2V0VGl0bGUodGhpcy5zY2hlZHVsZS5uYW1lKTtcblxuICAgIHRoaXMuc3RhZmYgPSB0aGlzLnVzZXIuYXRMZWFzdChNZW1iZXIuU1RBRkYpO1xuXG4gICAgaWYgKHRoaXMuc3RhZmYpIHtcbiAgICAgIHRoaXMuYWRkTWVudSgnQWRkIFNsb3QnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hZGRNZW51KCdDaGVjayBGdXR1cmUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tGdXR1cmUoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLiRzaXRlLnBvbGxpbmcuYWRkQ2xpZW50KCdzY2hlZHVsZXInLCAocGFyYW1zKSA9PiB7XG4gICAgICBwYXJhbXMuc2NoZWR1bGVyID0ge1xuICAgICAgICBzY2hlZHVsZUlkOiB0aGlzLnNjaGVkdWxlLmlkLFxuICAgICAgICBhZnRlcjogdGhpcy5sYXRlc3RcbiAgICAgIH07XG4gICAgfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnRha2UocmVzcG9uc2UpO1xuICAgIH0pO1xuXG4gIH0sXG4gIGRlc3Ryb3llZCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgIHRoaXMudGltZXIgPSAwO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdGFrZShyZXNwb25zZSkge1xuICAgICAgY29uc3Qgc2xvdHMgPSByZXNwb25zZS5nZXREYXRhKCdzbG90cycpO1xuICAgICAgaWYgKHNsb3RzICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzbG90cy5hdHRyaWJ1dGVzO1xuICAgICAgICB0aGlzLm5ld1Nsb3RzKGRhdGEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb3duZWQoc2xvdCkge1xuICAgICAgaWYgKHRoaXMudGVhbU1vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVhbSAhPT0gbnVsbCAmJiBzbG90LnRlYW1JZCA9PT0gdGhpcy50ZWFtLmlkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy51c2VyLm1lbWJlci5pZCA9PT0gc2xvdC5tZW1iZXJJZDtcbiAgICB9LFxuICAgIG93bmVkRm9yRGF5KGRheSkge1xuICAgICAgbGV0IGNudCA9IDA7XG4gICAgICBmb3IgKGxldCBzbG90IG9mIGRheS5zbG90cykge1xuICAgICAgICBpZiAoc2xvdC5ib29rZWQoKSkge1xuICAgICAgICAgIGNudCsrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbnQ7XG4gICAgfSxcbiAgICBzZXRUaW1lKCkge1xuICAgICAgdGhpcy50aW1lID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgICB0aGlzLnRpbWVTdHIgPSB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIuYWJzb2x1dGVVTklYKHRoaXMudGltZSwgJ2xvbmctdGltZScpO1xuICAgIH0sXG4gICAgYm9vayhzbG90KSB7XG4gICAgICBsZXQgcGFyYW1zID0ge2lkOiBzbG90LmlkLCB0ZWFtTW9kZTogdGhpcy50ZWFtTW9kZSA/IDEgOiAwfTtcbiAgICAgIGlmICh0aGlzLnRlYW1Nb2RlKSB7XG4gICAgICAgIGlmICh0aGlzLnRlYW0gIT09IG51bGwpIHtcbiAgICAgICAgICBwYXJhbXNbJ3RlYW1JZCddID0gdGhpcy50ZWFtLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgJ05vdCBhIG1lbWJlciBvZiBhIHRlYW0hJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS9zY2hlZHVsZXIvc2xvdHMvJyArIHRoaXMuc2NoZWR1bGUuaWQgKyAnL2Jvb2snLCBwYXJhbXMpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcbiAgICAgICAgICB9KTtcblxuICAgIH0sXG4gICAgdW5ib29rKHNsb3QpIHtcbiAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvc2NoZWR1bGVyL3Nsb3RzLycgKyB0aGlzLnNjaGVkdWxlLmlkICsgJy91bmJvb2snLCB7aWQ6IHNsb3QuaWR9KVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XG4gICAgICAgICAgICAgIHRoaXMudGFrZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgfSxcbiAgICBuZXdTbG90cyhzbG90cykge1xuICAgICAgLy9cbiAgICAgIC8vIENvbGxlY3QgdXAgc2xvdHMgYnkgZGF5c1xuICAgICAgLy9cbiAgICAgIHRoaXMuZGF5cyA9IFtdO1xuXG4gICAgICBjb25zdCB0ZWFtQ291bnRlciA9IHt9O1xuXG4gICAgICBsZXQgbGFzdERheSA9IG51bGw7XG4gICAgICBsZXQgZGF5U2xvdHMgPSBbXTtcbiAgICAgIGZvciAobGV0IHNsb3REYXRhIG9mIHNsb3RzKSB7XG4gICAgICAgIGxldCBzbG90ID0gbmV3IFNsb3Qoc2xvdERhdGEpO1xuICAgICAgICBpZiAoc2xvdC50ZWFtSWQgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAodGVhbUNvdW50ZXJbc2xvdC50ZWFtSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNsb3QuY291bnQgPSAxO1xuICAgICAgICAgICAgdGVhbUNvdW50ZXJbc2xvdC50ZWFtSWRdID0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVhbUNvdW50ZXJbc2xvdC50ZWFtSWRdKys7XG4gICAgICAgICAgICBzbG90LmNvdW50ID0gdGVhbUNvdW50ZXJbc2xvdC50ZWFtSWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzbG90LnVwZGF0ZWQgPiB0aGlzLmxhdGVzdCkge1xuICAgICAgICAgIHRoaXMubGF0ZXN0ID0gc2xvdC51cGRhdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRheSA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVgoc2xvdC50aW1lLCAnbG9uZy1kYXRlJyk7XG4gICAgICAgIGlmIChkYXkgIT09IGxhc3REYXkpIHtcbiAgICAgICAgICAvLyBXZSBoYXZlIGEgbmV3IGRheVxuICAgICAgICAgIGlmIChkYXlTbG90cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkZERheShsYXN0RGF5LCBkYXlTbG90cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhc3REYXkgPSBkYXk7XG4gICAgICAgICAgZGF5U2xvdHMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERldGVybWluZSBpZiB0aGlzIHNsb3QgaXMgY29udGlndW91cyB3aXRoIHRoZSBsYXN0IG9uZVxuICAgICAgICBpZiAoZGF5U2xvdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHByZXYgPSBkYXlTbG90c1tkYXlTbG90cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAocHJldi50aW1lICsgcHJldi5kdXJhdGlvbiAqIDYwID49IHNsb3QudGltZSkge1xuICAgICAgICAgICAgc2xvdC5jb250aWd1b3VzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF5U2xvdHMucHVzaChzbG90KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRheVNsb3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5hZGREYXkobGFzdERheSwgZGF5U2xvdHMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWRkRGF5KGRheSwgZGF5U2xvdHMpIHtcbiAgICAgIC8vIERheXMgaW4gdGhlIHBhc3Qgc2hvdWxkIG5vdCBiZSBvcGVuXG4gICAgICBjb25zdCBub3cgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgICBjb25zdCBub3dEYXkgPSB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIuYWJzb2x1dGVVTklYKG5vdywgJ2xvbmctZGF0ZScpO1xuICAgICAgY29uc3Qgb3BlbiA9IERhdGUucGFyc2UoZGF5KSA+PSBEYXRlLnBhcnNlKG5vd0RheSk7XG5cbiAgICAgIHRoaXMuZGF5cy5wdXNoKHtcbiAgICAgICAgZGF5OiBkYXksXG4gICAgICAgIG9wZW46IG9wZW4sXG4gICAgICAgIHNsb3RzOiBkYXlTbG90c1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBhZGQoKSB7XG4gICAgICBjb25zdCBzbG90ID0gbmV3IFNsb3QoKTtcblxuICAgICAgbmV3IHRoaXMuJHNpdGUuRGlhbG9nKHtcbiAgICAgICAgdGl0bGU6ICdOZXcgU2xvdCcsXG4gICAgICAgIGNvbnRlbnQ6ICc8ZGl2IGlkPVwiY2wtc2NoZWR1bGUtc2xvdFwiPjwvZGl2PicsXG4gICAgICAgIGFkZENsYXNzOiAnY2wtc2NoZWR1bGUtZGlhbG9nJyxcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnRzOiAnQWRkJyxcbiAgICAgICAgICAgIGZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgY2xpY2s6IChkaWFsb2cpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNsb3QudGltZSA9PT0gJycgfHwgc2xvdC50aW1lID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV3IHRoaXMuJHNpdGUuRGlhbG9nLk1lc3NhZ2VCb3goJ011c3QgZW50ZXIgdGltZScsICdZb3UgbXVzdCBwcm92aWRlIGEgZGF0ZSBhbmQgdGltZScsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUuRGlhbG9nLk1lc3NhZ2VCb3guT0spO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgdGltZTogc2xvdC50aW1lLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBzbG90LmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBzbG90LmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIHJlcGVhdDogc2xvdC5yZXBlYXRcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvc2NoZWR1bGVyL3Nsb3RzLycgKyB0aGlzLnNjaGVkdWxlLmlkICsgJy9uZXcnLCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50czogJ0NhbmNlbCcsXG4gICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xuICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRpYWxvZ1Z1ZShzbG90KTtcbiAgICB9LFxuICAgIGVkaXRvcihzbG90KSB7XG4gICAgICBjb25zdCBjaGVja2VkID0gdGhpcy5jaGVja2VkKClcbiAgICAgIHNsb3QgPSBjaGVja2VkLmxlbmd0aCA+IDAgPyBjaGVja2VkWzBdLmNsb25lIDogc2xvdC5jbG9uZSgpO1xuXG4gICAgICBuZXcgdGhpcy4kc2l0ZS5EaWFsb2coe1xuICAgICAgICB0aXRsZTogJ0VkaXQgU2xvdCcsXG4gICAgICAgIGNvbnRlbnQ6ICc8ZGl2IGlkPVwiY2wtc2NoZWR1bGUtc2xvdFwiPjwvZGl2PicsXG4gICAgICAgIGFkZENsYXNzOiAnY2wtc2NoZWR1bGUtZGlhbG9nJyxcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnRzOiAnVXBkYXRlJyxcbiAgICAgICAgICAgIGZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgY2xpY2s6IChkaWFsb2cpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNsb3QudGltZSA9PT0gJycgfHwgc2xvdC50aW1lID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV3IHRoaXMuJHNpdGUuRGlhbG9nLk1lc3NhZ2VCb3goJ011c3QgZW50ZXIgdGltZScsICdZb3UgbXVzdCBwcm92aWRlIGEgZGF0ZSBhbmQgdGltZScsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUuRGlhbG9nLk1lc3NhZ2VCb3guT0spO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjaGVja2VkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICBpZDogc2xvdC5pZCxcbiAgICAgICAgICAgICAgICAgIHRpbWU6IHNsb3QudGltZSxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBzbG90LmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHNsb3QubG9jYXRpb25cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3NjaGVkdWxlci9zbG90cy8nICsgdGhpcy5zY2hlZHVsZS5pZCArICcvdXBkYXRlJywgcGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNsb3QxIG9mIGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBzbG90MS5pZCxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogc2xvdDEudGltZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHNsb3QxLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogc2xvdC5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3NjaGVkdWxlci9zbG90cy8nICsgdGhpcy5zY2hlZHVsZS5pZCArICcvdXBkYXRlJywgcGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZShyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50czogJ0NhbmNlbCcsXG4gICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xuICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cblxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlhbG9nVnVlKHNsb3QsIGNoZWNrZWQubGVuZ3RoID4gMClcbiAgICB9LFxuICAgIGRpYWxvZ1Z1ZShzbG90LCBsb2NhdGlvbk9ubHkgPSBmYWxzZSkge1xuICAgICAgLy8gQ3JlYXRlIGEgVnVlIGluc2lkZSB0aGUgZGlhbG9nIGJveFxuICAgICAgY29uc3QgbG8gPSBsb2NhdGlvbk9ubHkgPyB0cnVlIDogZmFsc2VcblxuICAgICAgbmV3IHRoaXMuJHNpdGUuVnVlKHtcbiAgICAgICAgZWw6ICcjY2wtc2NoZWR1bGUtc2xvdCcsXG4gICAgICAgIHNpdGU6IHRoaXMuJHNpdGUsXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2xvdDogc2xvdCxcbiAgICAgICAgICAgIGxvOiBsb1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICA8ZWRpdG9yIDpzY2hlZHVsZS1zbG90PVwic2xvdFwiIDpsb2NhdGlvbi1vbmx5PVwibG9cIj48L2VkaXRvcj5gLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgZWRpdG9yOiBTbG90RWRpdG9yVnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBkZWxldGVyKHNsb3QpIHtcbiAgICAgIG5ldyB0aGlzLiRzaXRlLkRpYWxvZy5NZXNzYWdlQm94KCdBcmUgeW91IHN1cmU/JywgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/JyxcbiAgICAgICAgICB0aGlzLiRzaXRlLkRpYWxvZy5NZXNzYWdlQm94Lk9LQ0FOQ0VMLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdGhpcy5jaGVja2VkKClcbiAgICAgICAgICAgIGlmIChjaGVja2VkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAvLyBEZWxldGUgYSBzaW5nbGUgc2xvdFxuICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVNsb3Qoc2xvdClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3Qgc2xvdCBvZiBjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTbG90KHNsb3QpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIGRlbGV0ZVNsb3Qoc2xvdCkge1xuICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS9zY2hlZHVsZXIvc2xvdHMvJyArIHRoaXMuc2NoZWR1bGUuaWQgKyAnL2RlbGV0ZScsIHtpZDogc2xvdC5pZH0pXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgY2hlY2tlZCBzbG90c1xuICAgICAqL1xuICAgIGNoZWNrZWQoKSB7XG4gICAgICBsZXQgcmV0ID0gW107XG4gICAgICBmb3IgKGNvbnN0IGRheSBvZiB0aGlzLmRheXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBzbG90IG9mIGRheS5zbG90cykge1xuICAgICAgICAgIGlmIChzbG90LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHNsb3QpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBzbG90Q2xhc3Moc2xvdCkge1xuICAgICAgcmV0dXJuIHNsb3QuYm9va2VkKCkgPyAodGhpcy5vd25lZChzbG90KSA/ICdib29rZWQgb3duZWQnIDogJ2Jvb2tlZCcpIDogJyc7XG4gICAgfSxcbiAgICBzaG93VGVhbShzbG90KSB7XG4gICAgICBjb25zdCBEaWFsb2cgPSB0aGlzLiRzaXRlLkRpYWxvZztcblxuICAgICAgbmV3IERpYWxvZyh7XG4gICAgICAgIHRpdGxlOiAnVGVhbScsXG4gICAgICAgIGNvbnRlbnQ6ICc8ZGl2IGlkPVwiY2wtc2NoZWR1bGUtdGVhbVwiPjwvZGl2PicsXG4gICAgICAgIGFkZENsYXNzOiAnY2wtZGlhbG9nLW5hcnJvdycsXG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50czogJ09rJyxcbiAgICAgICAgICAgIGNsaWNrOiAoZGlhbG9nKSA9PiB7XG4gICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2NoZWR1bGUgPSB0aGlzLnNjaGVkdWxlXG5cbiAgICAgIG5ldyB0aGlzLiRzaXRlLlZ1ZSh7XG4gICAgICAgIGVsOiAnI2NsLXNjaGVkdWxlLXRlYW0nLFxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNsb3Q6IHNsb3QsXG4gICAgICAgICAgICBzY2hlZHVsZTogc2NoZWR1bGVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgPHZpZXdlciA6dmlldy1zbG90PVwic2xvdFwiIDpzY2hlZHVsZT1cInNjaGVkdWxlXCI+PC92aWV3ZXI+YCxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgIHZpZXdlcjogVGVhbVZpZXdlclZ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSxcbiAgICAvLyBDaGVjayBhbGwgc2xvdHMgdGhhdCBhcmUgaW4gdGhlIGZ1dHVyZVxuICAgIGNoZWNrRnV0dXJlKCkge1xuICAgICAgY29uc3QgdGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXG5cbiAgICAgIGZvciAoY29uc3QgZGF5IG9mIHRoaXMuZGF5cykge1xuICAgICAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgZGF5LnNsb3RzKSB7XG4gICAgICAgICAgaWYgKHNsb3QudGltZSA+IHRpbWUpIHtcbiAgICAgICAgICAgIHNsb3QuY2hlY2tlZCA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRpbWVGb3JtYXQodGltZSkge1xuICAgICAgcmV0dXJuIHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVgodGltZSwgJ3Nob3J0LXRpbWUnKTtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgLyogTm90IHNjb3BlZCAqL1xuICBkaXYuY2wtc2NoZWR1bGUtZGlhbG9nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cblxuICBkaXYuY2wtc2NoZWR1bGUtdmlldyB7XG4gICAgZGl2LmNsLXRpbWUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIDAgMCA4NXB4O1xuICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgdG9wOiAyNXB4O1xuICAgICAgei1pbmRleDogMTAwO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiAzLjVlbTtcbiAgICB9XG5cbiAgICBzcGFuLmNsLWluZm8ge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgfVxuXG4gICAgc3Bhbi5jaGVjayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA0cHg7XG4gICAgICB0b3A6IDFweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgdGFibGUge1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogNmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgICAgfVxuXG4gICAgICB0ZDpudGgtY2hpbGQoMikge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAyMGVtO1xuICAgICAgICBoZWlnaHQ6IDQuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG5cblxuICAgICAgICBzcGFuLmxvY2F0aW9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICA+YSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjQ1ZW0gMCAwIDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgIGNvbG9yOiAjMmEyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRyOmxhc3QtY2hpbGQge1xuICAgICAgICB0ZDpudGgtY2hpbGQoMikge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0ci5ib29rZWQge1xuICAgICAgICB0ZDpudGgtY2hpbGQoMikge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuXG5cbiAgICAgICAgICBzcGFuLmJvb2tlZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIuMGVtO1xuICAgICAgICAgICAgcGFkZGluZzogMC4yNWVtIDMycHggMCAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgICAgYSwgYTpsaW5rLCBhOnZpc2l0ZWQge1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNwYW4udW5ib29rIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4uY291bnRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdHIub3duZWQge1xuICAgICAgICB0ZDpudGgtY2hpbGQoMikge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdHIuZ2FwIHtcblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICB9XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWNsLWNvbHVtblwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhbG9jYXRpb25Pbmx5XCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImZsYXRwaWNrclwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+RGF0ZSBhbmQgVGltZTxicj5cclxuICAgICAgICAgICAgPGZsYXQtcGlja3Igdi1tb2RlbD1cInRpbWVcIiA6Y29uZmlnPVwiZnBDb25maWdcIiBkYXRhLWlucHV0PjwvZmxhdC1waWNrcj5cclxuICAgICAgICAgICAgPGEgZGF0YS10b2dnbGUgdGl0bGU9XCJUb2dnbGUgQ2FsZW5kYXJcIj48c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWNhbGVuZGFyXCI+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPjxsYWJlbD5EdXJhdGlvbiAobWludXRlcyk6IDxpbnB1dCBjbGFzcz1cIm5hcnJvd1wiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInNjaGVkdWxlU2xvdC5kdXJhdGlvblwiPjwvbGFiZWw+PC9wPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHA+PGxhYmVsPkxvY2F0aW9uPGJyPjxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJzY2hlZHVsZVNsb3QubG9jYXRpb25cIj48L2xhYmVsPjwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiIHYtaWY9XCJzY2hlZHVsZVNsb3QuaWQgPT09IDBcIj48bGFiZWw+UmVwZWF0OiA8aW5wdXQgY2xhc3M9XCJuYXJyb3dcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJzY2hlZHVsZVNsb3QucmVwZWF0XCI+PC9sYWJlbD48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgZmxhdFBpY2tyIGZyb20gJ3Z1ZS1mbGF0cGlja3ItY29tcG9uZW50JztcclxuICBpbXBvcnQgJ2ZsYXRwaWNrci9kaXN0L2ZsYXRwaWNrci5jc3MnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWydzY2hlZHVsZS1zbG90JywgJ2xvY2F0aW9uLW9ubHknXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lOiBudWxsLFxyXG4gICAgICAgIGZwQ29uZmlnOiB7XHJcbiAgICAgICAgICBlbmFibGVUaW1lOiB0cnVlLFxyXG4gICAgICAgICAgZGF0ZUZvcm1hdDogXCJtLWQtWSBoOmlLXCIsXHJcbiAgICAgICAgICB3cmFwOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAnZmxhdFBpY2tyJzogZmxhdFBpY2tyXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy50aW1lID0gdGhpcy5zY2hlZHVsZVNsb3QudGltZSAhPT0gMCA/IHRoaXMuc2NoZWR1bGVTbG90LnRpbWUgKiAxMDAwIDogbnVsbDtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVkKCkge1xyXG4gICAgICBpZiAodGhpcy50aW1lID09PSBudWxsIHx8ICh0eXBlb2YgdGhpcy50aW1lKSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLnRpbWUubWF0Y2goLyhbMC05XSopLShbMC05XSopLShbMC05XSopXFxzKFswLTldKik6KFswLTldKikoW0FQXSkvKTtcclxuICAgICAgbGV0IGhvdXJzID0gK21hdGNoZXNbNF07XHJcbiAgICAgIGlmIChtYXRjaGVzWzZdID09PSAnUCcpIHtcclxuICAgICAgICBpZiAoaG91cnMgPCAxMikge1xyXG4gICAgICAgICAgaG91cnMgKz0gMTI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChob3VycyA9PT0gMTIpIHtcclxuICAgICAgICAgIGhvdXJzID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG1hdGNoZXNbM10sIG1hdGNoZXNbMV0gLSAxLCBtYXRjaGVzWzJdLCBob3VycywgbWF0Y2hlc1s1XSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVTbG90LnRpbWUgPSB0aGlzLnRpbWUgIT09ICcnID8gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApIDogMDtcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5mbGF0cGlja3ItaW5wdXRbcmVhZG9ubHldIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5uYXJyb3cge1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgdi1pZj1cInRlYW0gIT09IG51bGxcIj5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0cj48dGg+e3t0ZWFtLm5hbWV9fTwvdGg+PC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwibWVtYmVyIGluIHRlYW0ubWVtYmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJzY2hlZHVsZS5hc3NpZ250YWcgPT09ICdub25lJ1wiPnt7bWVtYmVyLm5hbWV9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgdi1lbHNlPjxhIDpocmVmPVwibGluayArIG1lbWJlci5tZW1iZXJpZFwiPnt7bWVtYmVyLm5hbWV9fTwvYT48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjbC1zY2hlZHVsZS10ZWFtLWVtYWlsXCI+PGEgOmhyZWY9XCJlbWFpbFwiPmVtYWlsPC9hPjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJjbC1zY2hlZHVsZS10ZWFtLWZldGNoaW5nXCI+XHJcbiAgICAgICAgPHA+RmV0Y2hpbmcuLi48L3A+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgJ2V4dGVuZHMnOiBTaXRlLlVzZXJWdWVCYXNlLFxyXG4gICAgICBwcm9wczogWyd2aWV3LXNsb3QnLCAnc2NoZWR1bGUnXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRlYW06IG51bGwsXHJcbiAgICAgICAgICAgICAgZW1haWw6ICdtYWlsdG86JyxcclxuICAgICAgICAgICAgICBsaW5rOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zY2hlZHVsZS5hc3NpZ250YWcgIT09ICdub25lJykge1xyXG4gICAgICAgICAgdGhpcy5saW5rID0gdGhpcy5yb290ICsgJy9jbC9jb25zb2xlL2dyYWRpbmcvJyArIHRoaXMuc2NoZWR1bGUuYXNzaWdudGFnICsgJy8nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc2l0ZS5hcGkuZ2V0KCcvYXBpL3RlYW0vJyArICt0aGlzLnZpZXdTbG90LnRlYW1JZClcclxuICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRha2UocmVzcG9uc2UuZ2V0RGF0YSgndGVhbScpLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIHRha2UodGVhbSkge1xyXG4gICAgICAgICAgICAgIHRoaXMudGVhbSA9IHRlYW07XHJcbiAgICAgICAgICAgICAgbGV0IGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLmVtYWlsID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgIGZvcihjb25zdCB0ZWFtTWVtYmVyIG9mIHRlYW0ubWVtYmVycykge1xyXG4gICAgICAgICAgICAgICAgICBpZih0ZWFtTWVtYmVyLmVtYWlsICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtYWlsID0gJ21haWx0bzonO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1haWwgKz0gJzsnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1haWwgKz0gdGVhbU1lbWJlci5lbWFpbDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYodGhpcy5lbWFpbCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudCh0ZWFtLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmVtYWlsICs9ICc/c3ViamVjdD1UZWFtJTIwJyArIG5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICAgIGRpdi5jbC1zY2hlZHVsZS10ZWFtLWZldGNoaW5nIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRlbSAxZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiBob3RwaW5rXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAuY2wtc2NoZWR1bGUtdGVhbS1lbWFpbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAyLjRlbSAxZW0gMmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8bmF2IGNsYXNzPVwiY2wtbmF2XCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY2xhc3M9XCJkaXZpZGVyc1wiPlxyXG4gICAgICAgIDxsaT48YSA6aHJlZj1cImhvbWVMaW5rXCI+PHNwYW4gY2xhc3M9XCJob21lXCI+SG9tZTwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICA8bGkgdi1mb3I9XCJpdGVtIGluIG1lbnVcIj48YSBAY2xpY2sucHJldmVudD1cIml0ZW0uY2xpY2soKVwiPnt7aXRlbS5uYW1lfX08L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmF2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ21lbnUnXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGhvbWVMaW5rOiBTaXRlLnJvb3QgKyAnLydcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+IiwiaW1wb3J0IHtNZW1iZXJzaGlwfSBmcm9tICcuLi8uLi8uLi91c2Vycy9qcy9Vc2Vycy9NZW1iZXJzaGlwLmpzJztcclxuXHJcbi8qKlxyXG4gKiBNZW1iZXIgb2YgYSBjb3Vyc2VcclxuICogQXR0YWNoZXMgdG8gYSB1c2VyIE9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmxldCBNZW1iZXIgPSBmdW5jdGlvbihqc29uKSB7XHJcbiAgICBNZW1iZXJzaGlwLmNhbGwodGhpcyk7XHJcblxyXG4gICAgbGV0IHJvbGUgPSAnRyc7XHJcblxyXG4gICAgaWYoanNvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGpzb24uaWQ7XHJcbiAgICAgICAgdGhpcy5zZW1lc3RlciA9IGpzb24uc2VtZXN0ZXI7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0ganNvbi5zZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IGpzb24uY3JlYXRlZCAhPT0gdW5kZWZpbmVkID8ganNvbi5jcmVhdGVkIDogbnVsbDtcclxuICAgICAgICByb2xlID0ganNvbi5yb2xlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlkID0gMDsgICAgLy8gU3lzdGVtIG1lbWJlcnNoaXAgSURcclxuICAgICAgICB0aGlzLnNlbWVzdGVyID0gbnVsbDsgICAvLyBTZW1lc3RlciBjb2RlXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0gbnVsbDsgIC8vIFNlY3Rpb24gSWRcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBudWxsOyAgICAvLyBXaGVuIHVzZXIgd2FzIGNyZWF0ZWRcclxuICAgICAgICByb2xlID0gbnVsbDsgICAgICAgLy8gTWVtYmVyc2hpcCByb2xlXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yb2xlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvbGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRSb2xlID0gZnVuY3Rpb24ocm9sZV8pIHtcclxuICAgICAgICByb2xlID0gcm9sZV87XHJcbiAgICB9XHJcbn1cclxuXHJcbk1lbWJlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1lbWJlcnNoaXAucHJvdG90eXBlKTtcclxuTWVtYmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1lbWJlcjtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGNvdXJzZSBzZWN0aW9uIGZvciBhIG1lbWJlclxyXG4gKiBAcGFyYW0gc3RvcmUgVnVleCBzdG9yZVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0U2VjdGlvbiA9IGZ1bmN0aW9uKHN0b3JlKSB7XHJcbiAgICByZXR1cm4gc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXSh0aGlzLnNlbWVzdGVyLCB0aGlzLnNlY3Rpb24pO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFuIGFzc2lnbm1lbnQgZm9yIGEgbWVtYmVyXHJcbiAqIEBwYXJhbSBzdG9yZSBWdWV4IHN0b3JlXHJcbiAqIEBwYXJhbSBhc3NpZ250YWcgQXNzaWdubWVudCB0YWdcclxuICovXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0QXNzaWdubWVudCA9IGZ1bmN0aW9uKHN0b3JlLCBhc3NpZ250YWcpIHtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb24oc3RvcmUpO1xyXG4gICAgcmV0dXJuIHNlY3Rpb24uZ2V0QXNzaWdubWVudChhc3NpZ250YWcpO1xyXG59XHJcblxyXG5cclxuLy8gVGhlIHBvc3NpYmxlIG1lbWJlciByb2xlc1xyXG4vLyBNdXN0IG1hdGNoIHZhbHVlcyBpbiBNZW1iZXIucGhwXHJcbk1lbWJlci5HVUVTVCA9ICdHJzsgICAgIC8vLzwgR3Vlc3QgdXNlciB2aXNpdGluZyB0aGUgc2l0ZVxyXG5NZW1iZXIuVVNFUiA9ICdVJzsgICAgICAvLy88IFN0YW5kYXJkIHVzZXIgZnJvbSBVc2VyLCBkb24ndCB1c2UgZm9yIE1lbWJlclxyXG5NZW1iZXIuRFJPUFBFRCA9ICdEJzsgICAvLy88IFVzZXIgaGFzIGRyb3BwZWQgdGhlIGNvdXJzZVxyXG5NZW1iZXIuU1RVREVOVCA9ICdUJzsgICAvLy88IEVucm9sbGVkIHN0dWRlbnQgaW4gY291cnNlXHJcbk1lbWJlci5TVEFGRiA9ICdTJzsgICAgIC8vLzwgQW55IGNvdXJzZSBzdGFmZlxyXG5NZW1iZXIuR1JBREVSID0gJ1InOyAgICAvLy88IEdyYWRlcnNcclxuTWVtYmVyLlVMQSA9ICdMJzsgICAgICAgLy8vPCBVbmRlcmdyYWR1YXRlIExlYXJuaW5nIEFzc2lzdGFudFxyXG5NZW1iZXIuVEEgPSAnRSc7ICAgICAgICAvLy88IFRlYWNoaW5nIGFzc2lzdGFudFxyXG5NZW1iZXIuSU5TVFJVQ1RPUiA9ICdJJzsgICAgLy8vPCBDb3Vyc2UgaW5zdHJ1Y3RvclxyXG5NZW1iZXIuQURNSU4gPSAnQSc7ICAgICAvLy88IEFkbWluXHJcblxyXG5NZW1iZXIucHJvdG90eXBlLmdldFJvbGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcm9sZXMgPSB7fTtcclxuICAgIHJvbGVzW01lbWJlci5HVUVTVF0gPSB7bmFtZTogJ0d1ZXN0JywgcHJpb3JpdHk6IDF9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkRST1BQRURdID0ge25hbWU6ICdEcm9wcGVkJywgcHJpb3JpdHk6IDJ9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlVTRVJdID0ge25hbWU6ICdVc2VyJywgcHJpb3JpdHk6IDMsIHNraXA6IHRydWV9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlNUVURFTlRdID0ge25hbWU6ICdTdHVkZW50JywgcHJpb3JpdHk6IDR9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlNUQUZGXSA9IHtuYW1lOiAnU3RhZmYnLCBwcmlvcml0eTogNSwgc2tpcDogdHJ1ZX07XHJcblx0cm9sZXNbTWVtYmVyLkdSQURFUl0gPSB7bmFtZTogJ0dyYWRlcicsIHByaW9yaXR5OiA2fTtcclxuXHRyb2xlc1tNZW1iZXIuVUxBXSA9IHtuYW1lOiAnVW5kZXJncmFkdWF0ZSBMZWFybmluZyBBc3Npc3RhbnQnLCBzaG9ydDogJ1VMQScsIHByaW9yaXR5OiA3fTtcclxuICAgIHJvbGVzW01lbWJlci5UQV0gPSB7bmFtZTogJ1RlYWNoaW5nIEFzc2lzdGFudCcsIHNob3J0OiAnVEEnLCBwcmlvcml0eTogOH07XHJcbiAgICByb2xlc1tNZW1iZXIuSU5TVFJVQ1RPUl0gPSB7bmFtZTogJ0luc3RydWN0b3InLCBwcmlvcml0eTogOX07XHJcbiAgICByb2xlc1tNZW1iZXIuQURNSU5dID0ge25hbWU6ICdBZG1pbicsIHByaW9yaXR5OiAxMDB9O1xyXG5cclxuICAgIHJldHVybiByb2xlcztcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7TWVtYmVyfTtcclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRoZSBtYWluIFNjaGVkdWxlciBlbnRyeSBwb2ludFxyXG4gKi9cclxuXHJcbmltcG9ydCB7U2NoZWR1bGVGYWN0b3J5fSBmcm9tIFwiLi9qcy9TY2hlZHVsZUZhY3RvcnlcIjtcclxuaW1wb3J0IHtTY2hlZHVsZXJDb25zb2xlfSBmcm9tICcuL2pzL0NvbnNvbGUvU2NoZWR1bGVyQ29uc29sZSc7XHJcblxyXG4vL1xyXG4vLyBDcmVhdGUgdGhlIHNjaGVkdWxlciBydW50aW1lIGNvbXBvbmVudFxyXG4vL1xyXG5TY2hlZHVsZUZhY3RvcnkuY3JlYXRlKFNpdGUuU2l0ZSk7XHJcblxyXG4vL1xyXG4vLyBJbnN0YWxsIHRoZSBjb25zb2xlIGNvbXBvbmVudHNcclxuLy9cclxuXHJcbmlmKFNpdGUuU2l0ZS5jb25zb2xlICE9PSB1bmRlZmluZWQpIHtcclxuXHRTY2hlZHVsZXJDb25zb2xlLnNldHVwKFNpdGUuU2l0ZS5jb25zb2xlKTtcclxufVxyXG4iLCJpbXBvcnQge01lbWJlcn0gZnJvbSBcImNvdXJzZS1jbC9qcy9NZW1iZXJzL01lbWJlclwiO1xyXG5pbXBvcnQgU2NoZWR1bGVzRWRpdG9yVnVlIGZyb20gJy4vU2NoZWR1bGVzRWRpdG9yLnZ1ZSc7XHJcblxyXG4vKipcclxuICogQGZpbGVcclxuICogU2NoZWR1bGVyIHN5c3RlbSBjb25zb2xlIGNvbXBvbmVudHNcclxuICovXHJcblxyXG5leHBvcnQgbGV0IFNjaGVkdWxlckNvbnNvbGUgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuU2NoZWR1bGVyQ29uc29sZS5zZXR1cCA9IGZ1bmN0aW9uKENvbnNvbGUpIHtcclxuICAgIENvbnNvbGUudGFibGVzLmFkZCh7XHJcbiAgICAgICAgdGl0bGU6ICdTY2hlZHVsZXInLFxyXG4gICAgICAgIG9yZGVyOiAxMDAsXHJcbiAgICAgICAgYXBpOiAnL2FwaS9zY2hlZHVsZXIvdGFibGVzJ1xyXG4gICAgfSk7XHJcblxyXG5cdGNvbnN0IHBhZ2UgPSB7dGl0bGU6ICdNYWluJywgcm91dGU6ICcnLCBvcmRlcjogMX07XHJcblxyXG5cdENvbnNvbGUuY29tcG9uZW50cy5hZGRPcHRpb24oe1xyXG5cdFx0YXRMZWFzdDogTWVtYmVyLlRBLFxyXG5cdFx0cGFnZTogcGFnZSxcclxuXHRcdHNlY3Rpb246IHt0aXRsZTogJ0NvdXJzZScsIG9yZGVyOiA1fSxcclxuXHRcdHRpdGxlOiAnU2NoZWR1bGVzJyxcclxuXHRcdG9yZGVyOiAxMSxcclxuXHRcdHJvdXRlOiAnL3NjaGVkdWxlcycsXHJcblx0XHRyb3V0ZXM6IFtcclxuXHRcdFx0e3JvdXRlOiAnL3NjaGVkdWxlcycsIGNvbXBvbmVudDogU2NoZWR1bGVzRWRpdG9yVnVlfVxyXG5cdFx0XVxyXG5cdH0pO1xyXG5cclxufVxyXG5cclxuIiwiLyoqXHJcbiAqIE9iamVjdCB0aGUgcmVwcmVzZW50cyBhIHNjaGVkdWxlXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNjaGVkdWxlID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdGlmKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5pZCA9IGRhdGEuaWQ7XHJcblx0XHR0aGlzLnRhZyA9IGRhdGEudGFnO1xyXG5cdFx0dGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG5cdFx0dGhpcy50ZWFtaW5nID0gZGF0YS50ZWFtaW5nO1xyXG5cdFx0dGhpcy5hc3NpZ250YWcgPSBkYXRhLmFzc2lnbnRhZyA9PT0gbnVsbCA/ICdub25lJyA6IGRhdGEuYXNzaWdudGFnO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aGlzLmlkID0gMDtcclxuXHRcdHRoaXMudGFnID0gJyc7XHJcblx0XHR0aGlzLm5hbWUgPSAnJztcclxuXHRcdHRoaXMudGVhbWluZyA9IDA7XHJcblx0XHR0aGlzLmFzc2lnbnRhZyA9ICdub25lJztcclxuXHR9XHJcblxyXG5cdHRoaXMuY2xvbmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBuZXcgU2NoZWR1bGUodGhpcyk7XHJcblx0fVxyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRoZSBTY2hlZHVsZSBzeXN0ZW0gY3JlYXRpb24gZmFjdG9yeS5cclxuICovXHJcblxyXG5pbXBvcnQge1BhZ2VWdWV9IGZyb20gJ3NpdGUtY2wvanMvVnVlL1BhZ2VWdWUnO1xyXG5pbXBvcnQgUGFnZU5hdiBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9QYWdlTmF2LnZ1ZSc7XHJcbmltcG9ydCBTY2hlZHVsZVZ1ZSBmcm9tICcuL1NjaGVkdWxlVnVlLnZ1ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgU2NoZWR1bGVGYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcblNjaGVkdWxlRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG4gXHRzaXRlLnJlYWR5KCgpID0+IHtcclxuXHQgICAgUGFnZVZ1ZS5jcmVhdGUoJ2Rpdi5jbC1zY2hlZHVsZS12aWV3JywgJ1NjaGVkdWxlJywgU2NoZWR1bGVWdWUsIFBhZ2VOYXYpO1xyXG5cdH0pO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgc2luZ2xlIHNsb3QgaW4gdGhlIHNjaGVkdWxlLlxyXG4gKiBAcGFyYW0gZGF0YSBPcHRpb25hbCBkYXRhIHRvIGxvYWQgaW50byB0aGUgb2JqZWN0LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBTbG90ID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdGlmKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5pZCA9IGRhdGEuaWQ7XHJcblx0XHR0aGlzLnRpbWUgPSBkYXRhLnRpbWU7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcclxuXHRcdHRoaXMudXBkYXRlZCA9IGRhdGEudXBkYXRlZDtcclxuXHRcdHRoaXMubG9jYXRpb24gPSBkYXRhLmxvY2F0aW9uO1xyXG5cclxuXHRcdHRoaXMudGVhbUlkID0gZGF0YS50ZWFtSWQ7XHJcblx0XHR0aGlzLnRlYW1OYW1lID0gZGF0YS50ZWFtTmFtZTtcclxuXHRcdHRoaXMubWVtYmVySWQgPSBkYXRhLm1lbWJlcklkO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aGlzLmlkID0gMDtcclxuXHRcdHRoaXMudGltZSA9IDA7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gMTA7XHJcblx0XHR0aGlzLnVwZGF0ZWQgPSAwO1xyXG5cdFx0dGhpcy5sb2NhdGlvbiA9ICcnO1xyXG5cclxuXHRcdHRoaXMudGVhbU5hbWUgPSBudWxsO1xyXG5cdFx0dGhpcy50ZWFtSWQgPSBudWxsO1xyXG5cdFx0dGhpcy5tZW1iZXJJZCA9IG51bGw7XHJcblx0fVxyXG5cclxuXHQvLyBEb2VzIHRoaXMgc2xvdCByZXBlYXQ/XHJcblx0dGhpcy5yZXBlYXQgPSAxO1xyXG5cclxuXHQvLyBJcyB0aGlzIHNsb3QgY29udGlndW91cyB3aXRoIHRoZSBwcmV2aW91cyBzbG90P1xyXG5cdHRoaXMuY29udGlndW91cyA9IGZhbHNlO1xyXG5cclxuXHQvLyBJcyB0aGlzIHNsb3QgY2hlY2tlZD9cclxuXHR0aGlzLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5jbG9uZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBTbG90KHRoaXMpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5ib29rZWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnRlYW1JZCAhPT0gbnVsbCB8fCB0aGlzLm1lbWJlcklkICE9PSBudWxsO1xyXG5cdH1cclxufVxyXG4iLCIvKipcclxuICogQmFzaWMgVnVlLWJhc2VkIHNpdGUgcGFnZSBzdGFydGVyXHJcbiAqXHJcbiAqIEhvdyB0byB1c2U6XHJcbiAqIEBjb2RlXHJcbiAqIHNpdGUucmVhZHkoKCkgPT4ge1xyXG4gKiAgICBQYWdlVnVlLmNyZWF0ZSgnZGl2LmNsLWdyYWRlLWFzc2lnbm1lbnQnLCAnQXNzaWdubWVudCBHcmFkZScsIEdyYWRlQXNzaWdubWVudFZ1ZSk7XHJcbiAqICAgIFBhZ2VWdWUuY3JlYXRlKCdkaXYuY2wtZ3JhZGVzJywgJ0dyYWRlcycsIEdyYWRlc1Z1ZSk7XHJcbiAqIH0pO1xyXG4gKiBAZW5kY29kZVxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3IgUGFnZVZ1ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBhZ2VWdWUgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIHBhZ2UgaW4gYSBnaXZlbiBjb21wb25lbnQsIHJlcGxhY2luZyB0aGUgcHJvdmlkZWRcclxuICogc2VsZWN0b3IuIFRoZSBzZWxlY3RvciBpcyBhc3N1bWVkIHRvIGNvbnRhaW4gSlNPTiBkYXRhIHRoYXQgaXNcclxuICogdGhlbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50IGluIHRoZSBqc29uIHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIGZvciBhIGRpdiB0byByZXBsYWNlIHdpdGggdGhlIHZpZXcuXHJcbiAqIEBwYXJhbSB0aXRsZSBJbml0aWFsIHRpdGxlIHRvIGFwcGx5IHRvIHRoZSBwYWdlXHJcbiAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IHRvIGRpc3BsYXkgKFZ1ZSlcclxuICogQHBhcmFtIG5hdiBPcHRpb25hbCBuYXZpZ2F0aW9uIGNvbXBvbmVudCwgbGlrZSBQYWdlTmF2XHJcbiAqL1xyXG5QYWdlVnVlLmNyZWF0ZSA9IGZ1bmN0aW9uKHNlbCwgdGl0bGUsIGNvbXBvbmVudCwgbmF2KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWwpO1xyXG4gICAgaWYoZWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmF2dGFnID0gbmF2ICE9PSB1bmRlZmluZWQgPyAnPHBhZ2UtbmF2IDptZW51PVwibWVudVwiPjwvcGFnZS1uYXY+JyA6ICcnO1xyXG4gICAgbGV0IHRlbXBsYXRlID0gYDxkaXY+PHNpdGUtaGVhZGVyIDp0aXRsZT1cInRpdGxlXCI+JHtuYXZ0YWd9PC9zaXRlLWhlYWRlcj5cclxuPHBhZ2UtdnVlIDpqc29uPVwianNvblwiPjwvcGFnZS12dWU+PHNpdGUtZm9vdGVyPjwvc2l0ZS1mb290ZXI+XHJcbjwvZGl2PmA7XHJcblxyXG4gICAgY29uc3QgSGVhZGVyID0gU2l0ZS5pbmZvLmhlYWRlci5jb21wb25lbnQoKTtcclxuICAgIGNvbnN0IEZvb3RlciA9IFNpdGUuaW5mby5mb290ZXIuY29tcG9uZW50KCk7XHJcblxyXG4gICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBTaXRlLnN0b3JlO1xyXG4gICAgY29uc3Qgc2l0ZSA9IFNpdGUuU2l0ZTtcclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICAnc2l0ZS1oZWFkZXInOiBIZWFkZXIsXHJcbiAgICAgICAgICAgICdzaXRlLWZvb3Rlcic6IEZvb3RlcixcclxuICAgICAgICAgICAgJ3BhZ2UtdnVlJzogY29tcG9uZW50XHJcbiAgICAgICAgfTtcclxuICAgIGlmKG5hdiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29tcG9uZW50c1sncGFnZS1uYXYnXSA9IG5hdjtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgU2l0ZS5WdWUoe1xyXG4gICAgICAgIGVsOiBlbGVtZW50LFxyXG4gICAgICAgIHNpdGUsXHJcbiAgICAgICAgc3RvcmUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIGpzb246IGpzb24sXHJcbiAgICAgICAgICAgIG1lbnU6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBTZXQgdGhlIHNpdGUgdGl0bGUuIFRoaXMgY2FuIGJlIHVzZWQgZnJvbVxyXG4gICAgICAgICAgICAgKiB0aGUgY2hpbGQgVnVlJ3MgdXNpbmcgdGhpcy4kcGFyZW50LnNldFRpdGxlKCcnKVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgUGFnZVZ1ZVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFRpdGxlIHRvIHNldFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0VGl0bGU6IGZ1bmN0aW9uKHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFNpdGUuaW5mby5zaXRlTmFtZSArICcgJyArIHRpdGxlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXRNZW51OiBmdW5jdGlvbihtZW51KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRNZW51OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbnU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEEgbWVtYmVyc2hpcCBhc3NvY2lhdGVkIHdpdGggYSB1c2VyLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgYmFzZSBvYmplY3QgdGhhdCB3aWxsIGJlIGluaGVyaXRlZCBieVxyXG4gKiBhY3R1YWwgbWVtYmVyc2hpcCBvYmplY3RzLlxyXG4gKi9cclxuXHJcbnZhciBNZW1iZXJzaGlwID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8vIFRoZSBVc2VyIG9iamVjdCBmb3IgdGhpcyBtZW1iZXJzaGlwXHJcbiAgICB0aGlzLnVzZXIgPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQge01lbWJlcnNoaXB9O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLTk5MzM1NGEyNDguemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTm90IHNjb3BlZCAqL1xcbmRpdi5jbC1zY2hlZHVsZS1kaWFsb2cge1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyBkaXYuY2wtdGltZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMCAwIDg1cHg7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDI1cHg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgaDIge1xcbiAgYm9yZGVyOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAzLjVlbTtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgc3Bhbi5jbC1pbmZvIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyBzcGFuLmNoZWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDRweDtcXG4gIHRvcDogMXB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgdGFibGUge1xcbiAgYm9yZGVyOiAwO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xcbiAgd2lkdGg6IDZlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgcGFkZGluZy1yaWdodDogM3B4O1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB0ZDpudGgtY2hpbGQoMikge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwZW07XFxuICBoZWlnaHQ6IDQuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgdGFibGUgdGQ6bnRoLWNoaWxkKDIpIHNwYW4ubG9jYXRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgdGFibGUgdGQ6bnRoLWNoaWxkKDIpID4gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjQ1ZW0gMCAwIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBjb2xvcjogIzJhMjtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgdGFibGUgdHI6bGFzdC1jaGlsZCB0ZDpudGgtY2hpbGQoMikge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB0ci5ib29rZWQgdGQ6bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1zY2hlZHVsZS12aWV3IHRhYmxlIHRyLmJvb2tlZCB0ZDpudGgtY2hpbGQoMikgc3Bhbi5ib29rZWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBwYWRkaW5nOiAwLjI1ZW0gMzJweCAwIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB0ci5ib29rZWQgdGQ6bnRoLWNoaWxkKDIpIHNwYW4uYm9va2VkIGEsIGRpdi5jbC1zY2hlZHVsZS12aWV3IHRhYmxlIHRyLmJvb2tlZCB0ZDpudGgtY2hpbGQoMikgc3Bhbi5ib29rZWQgYTpsaW5rLCBkaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB0ci5ib29rZWQgdGQ6bnRoLWNoaWxkKDIpIHNwYW4uYm9va2VkIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmRpdi5jbC1zY2hlZHVsZS12aWV3IHRhYmxlIHRyLmJvb2tlZCB0ZDpudGgtY2hpbGQoMikgc3Bhbi5ib29rZWQgYTpob3ZlciB7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgdGFibGUgdHIuYm9va2VkIHRkOm50aC1jaGlsZCgyKSBzcGFuLnVuYm9vayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMnB4O1xcbiAgdG9wOiAycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmRpdi5jbC1zY2hlZHVsZS12aWV3IHRhYmxlIHRyLmJvb2tlZCB0ZDpudGgtY2hpbGQoMikgc3Bhbi51bmJvb2sgYSB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB0ci5ib29rZWQgdGQ6bnRoLWNoaWxkKDIpIHNwYW4udW5ib29rIGltZyB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgdGFibGUgdHIuYm9va2VkIHNwYW4uY291bnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMnB4O1xcbiAgYm90dG9tOiAwO1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB0ci5vd25lZCB0ZDpudGgtY2hpbGQoMikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYTtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgdGFibGUgdHIuZ2FwIHRkIHtcXG4gIGhlaWdodDogMTBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgdGFibGUgdHIuZ2FwIHRkOm50aC1jaGlsZCgyKSB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2NoZWR1bGVWdWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXVlQSxlQUFBO0FBQ0E7RUFDRSxZQUFBO0FBdGVGO0FBMGVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUF2ZUo7QUEwZUU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXhlSjtBQTJlRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUF6ZUo7QUE0ZUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQTFlSjtBQTZlRTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQTNlSjtBQTZlSTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTNlTjtBQThlSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBNWVOO0FBK2VNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUE3ZVI7QUFnZk07RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUE5ZVI7QUFtZk07RUFDRSw4QkFBQTtBQWpmUjtBQXNmTTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQXBmUjtBQXVmUTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFyZlY7QUF1ZlU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFyZlo7QUF3ZlU7RUFDRSxjQUFBO0FBdGZaO0FBMGZRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQXhmVjtBQTBmVTtFQUNFLFVBQUE7QUF4Zlo7QUEyZlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXpmWjtBQWdnQk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBOWZSO0FBb2dCTTtFQUNFLHNCQUFBO0FBbGdCUjtBQXdnQk07RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBdGdCUjtBQXlnQk07RUFDRSwyQkFBQTtBQXZnQlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogTm90IHNjb3BlZCAqL1xcbmRpdi5jbC1zY2hlZHVsZS1kaWFsb2cge1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB7XFxuICBkaXYuY2wtdGltZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIDAgMCA4NXB4O1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAyNXB4O1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzLjVlbTtcXG4gIH1cXG5cXG4gIHNwYW4uY2wtaW5mbyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxuICB9XFxuXFxuICBzcGFuLmNoZWNrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIHRvcDogMXB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgdGFibGUge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuXFxuICAgIHRkOmZpcnN0LWNoaWxkIHtcXG4gICAgICB3aWR0aDogNmVtO1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcXG4gICAgfVxcblxcbiAgICB0ZDpudGgtY2hpbGQoMikge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogMjBlbTtcXG4gICAgICBoZWlnaHQ6IDQuNWVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcblxcblxcbiAgICAgIHNwYW4ubG9jYXRpb24ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgPmEge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMC40NWVtIDAgMCAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICAgICAgY29sb3I6ICMyYTI7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHRyOmxhc3QtY2hpbGQge1xcbiAgICAgIHRkOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHRyLmJvb2tlZCB7XFxuICAgICAgdGQ6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuXFxuXFxuICAgICAgICBzcGFuLmJvb2tlZCB7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgaGVpZ2h0OiAyLjBlbTtcXG4gICAgICAgICAgcGFkZGluZzogMC4yNWVtIDMycHggMCAwO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XFxuICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgICAgICAgYSwgYTpsaW5rLCBhOnZpc2l0ZWQge1xcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgYTpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHNwYW4udW5ib29rIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICByaWdodDogMnB4O1xcbiAgICAgICAgICB0b3A6IDJweDtcXG4gICAgICAgICAgd2lkdGg6IDMycHg7XFxuICAgICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgICAgcGFkZGluZzogMDtcXG5cXG4gICAgICAgICAgYSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcblxcbiAgICAgIH1cXG5cXG4gICAgICBzcGFuLmNvdW50ZXIge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDJweDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG5cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgdHIub3duZWQge1xcbiAgICAgIHRkOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFhO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICB0ci5nYXAge1xcblxcbiAgICAgIHRkIHtcXG4gICAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgICB9XFxuXFxuICAgICAgdGQ6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS05OTMzNTRhMjQ4LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZmxhdHBpY2tyLWlucHV0W3JlYWRvbmx5XVtkYXRhLXYtNmYyZjMyNDBdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm5hcnJvd1tkYXRhLXYtNmYyZjMyNDBdIHtcXG4gIHdpZHRoOiAzZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2xvdEVkaXRvci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBaUVBO0VBQ0Usa0JBQUE7QUFoRUY7QUFtRUE7RUFDRSxVQUFBO0FBaEVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi5mbGF0cGlja3ItaW5wdXRbcmVhZG9ubHldIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5hcnJvdyB7XFxuICB3aWR0aDogM2VtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS05OTMzNTRhMjQ4LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLTk5MzM1NGEyNDguemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC1zY2hlZHVsZS10ZWFtLWZldGNoaW5nIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHBhZGRpbmc6IDRlbSAxZW07XFxuICBjb2xvcjogaG90cGluaztcXG59XFxucC5jbC1zY2hlZHVsZS10ZWFtLWVtYWlsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZzogMCAyLjRlbSAxZW0gMmVtO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9UZWFtVmlld2VyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE4RUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUE3RVI7QUFpRkE7RUFDSSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUE5RUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuZGl2LmNsLXNjaGVkdWxlLXRlYW0tZmV0Y2hpbmcge1xcbiAgICBwIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICBwYWRkaW5nOiA0ZW0gMWVtO1xcbiAgICAgICAgY29sb3I6IGhvdHBpbmtcXG4gICAgfVxcbn1cXG5cXG5wLmNsLXNjaGVkdWxlLXRlYW0tZW1haWwge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgcGFkZGluZzogMCAyLjRlbSAxZW0gMmVtO1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTg2MjYwNmYzOTMvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTIuMC4wLWI5YTVjNGEyYWEtMjE0MjUyNDZhNS56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLTgwNjYxNDRmYTYvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjgtNDM4ZjRkMGZmMC1jYTRjOTliMjYxLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVzb2x2ZS11cmwtbG9hZGVyLXZpcnR1YWwtZWM3NWQyYTA5ZS8wL2NhY2hlL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNC4wLjAtMmE5YzE4ZDg2Yi04ZTViY2Y5Nzg2LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Nhc3MtbG9hZGVyLXZpcnR1YWwtMzg1N2Y1ZTlmMS8wL2NhY2hlL3Nhc3MtbG9hZGVyLW5wbS0xMi4xLjAtNjE4ODA4OWUxMi02OWM2NmVhMzQ4LnppcC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWE3ZDRiNGNmNzYvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjgtNDM4ZjRkMGZmMC1jYTRjOTliMjYxLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlVnVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtODYyNjA2ZjM5My8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMi4wLjAtYjlhNWM0YTJhYS0yMTQyNTI0NmE1LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS05OTMzNTRhMjQ4LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtODA2NjE0NGZhNi8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuOC00MzhmNGQwZmYwLWNhNGM5OWIyNjEuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZXNvbHZlLXVybC1sb2FkZXItdmlydHVhbC1lYzc1ZDJhMDllLzAvY2FjaGUvcmVzb2x2ZS11cmwtbG9hZGVyLW5wbS00LjAuMC0yYTljMThkODZiLThlNWJjZjk3ODYuemlwL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc2Fzcy1sb2FkZXItdmlydHVhbC0zODU3ZjVlOWYxLzAvY2FjaGUvc2Fzcy1sb2FkZXItbnBtLTEyLjEuMC02MTg4MDg5ZTEyLTY5YzY2ZWEzNDguemlwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdLnVzZVszXSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTdkNGI0Y2Y3Ni8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuOC00MzhmNGQwZmYwLWNhNGM5OWIyNjEuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2xvdEVkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZjJmMzI0MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTg2MjYwNmYzOTMvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTIuMC4wLWI5YTVjNGEyYWEtMjE0MjUyNDZhNS56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLTgwNjYxNDRmYTYvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjgtNDM4ZjRkMGZmMC1jYTRjOTliMjYxLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVzb2x2ZS11cmwtbG9hZGVyLXZpcnR1YWwtZWM3NWQyYTA5ZS8wL2NhY2hlL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNC4wLjAtMmE5YzE4ZDg2Yi04ZTViY2Y5Nzg2LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Nhc3MtbG9hZGVyLXZpcnR1YWwtMzg1N2Y1ZTlmMS8wL2NhY2hlL3Nhc3MtbG9hZGVyLW5wbS0xMi4xLjAtNjE4ODA4OWUxMi02OWM2NmVhMzQ4LnppcC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWE3ZDRiNGNmNzYvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjgtNDM4ZjRkMGZmMC1jYTRjOTliMjYxLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1WaWV3ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTdkNGI0Y2Y3Ni8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuOC00MzhmNGQwZmYwLWNhNGM5OWIyNjEuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGVFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWE3ZDRiNGNmNzYvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjgtNDM4ZjRkMGZmMC1jYTRjOTliMjYxLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTdkNGI0Y2Y3Ni8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuOC00MzhmNGQwZmYwLWNhNGM5OWIyNjEuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGVzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hN2Q0YjRjZjc2LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS44LTQzOGY0ZDBmZjAtY2E0Yzk5YjI2MS56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY2hlZHVsZXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hN2Q0YjRjZjc2LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS44LTQzOGY0ZDBmZjAtY2E0Yzk5YjI2MS56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY2hlZHVsZVZ1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTdkNGI0Y2Y3Ni8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuOC00MzhmNGQwZmYwLWNhNGM5OWIyNjEuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGVWdWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hN2Q0YjRjZjc2LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS44LTQzOGY0ZDBmZjAtY2E0Yzk5YjI2MS56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TbG90RWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hN2Q0YjRjZjc2LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS44LTQzOGY0ZDBmZjAtY2E0Yzk5YjI2MS56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TbG90RWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTdkNGI0Y2Y3Ni8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuOC00MzhmNGQwZmYwLWNhNGM5OWIyNjEuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbVZpZXdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTdkNGI0Y2Y3Ni8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuOC00MzhmNGQwZmYwLWNhNGM5OWIyNjEuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbVZpZXdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWE3ZDRiNGNmNzYvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjgtNDM4ZjRkMGZmMC1jYTRjOTliMjYxLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWE3ZDRiNGNmNzYvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjgtNDM4ZjRkMGZmMC1jYTRjOTliMjYxLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZGlhbG9nLWNsLWNvbHVtblwiLCBzdGF0aWNTdHlsZTogeyBwYWRkaW5nOiBcIjAgMWVtXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJmb3JtXCIsIFtcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlRhZ1wiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNjaGVkdWxlLnRhZyxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzY2hlZHVsZS50YWdcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcmVmOiBcInRhZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zY2hlZHVsZS50YWcgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2NoZWR1bGUsIFwidGFnXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiTmFtZVwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNjaGVkdWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2NoZWR1bGUubmFtZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2NoZWR1bGUubmFtZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zY2hlZHVsZSwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS50ZWFtaW5ncyAhPT0gbnVsbFxuICAgICAgICAgICAgPyBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlRlYW1pbmdcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNjaGVkdWxlLnRlYW1pbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNjaGVkdWxlLnRlYW1pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNjaGVkdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRlYW1pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogMCB9IH0sIFtfdm0uX3YoXCJOb25lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGVhbWluZ3MsIGZ1bmN0aW9uKHRlYW1pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogdGVhbWluZy5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGVhbWluZy5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnRlYW1pbmdzICE9PSBudWxsXG4gICAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQXNzaWdubWVudFwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2NoZWR1bGUuYXNzaWdudGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzY2hlZHVsZS5hc3NpZ250YWdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNjaGVkdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2lnbnRhZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGRvbVByb3BzOiB7IHZhbHVlOiBcIm5vbmVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmFzc2lnbm1lbnRzLCBmdW5jdGlvbihhc3NpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGFzc2lnbm1lbnQudGFnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGFzc2lnbm1lbnQubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfdm0uc2NoZWR1bGVzICE9PSBudWxsXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sIFtcbiAgICAgICAgICBfdm0uc2NoZWR1bGVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUYWdcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0udGVhbWluZ3MgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwgW192bS5fdihcIlRlYW1pbmdcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2NoZWR1bGVzLCBmdW5jdGlvbihzY2hlZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogc2NoZWR1bGUuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lZGl0b3Ioc2NoZWR1bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL3BlbmNpbDE2LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiRWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlcihzY2hlZHVsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0ucm9vdCArIFwiL2NsL3NjaGVkdWxlL1wiICsgc2NoZWR1bGUudGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhzY2hlZHVsZS50YWcpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Moc2NoZWR1bGUubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udGVhbWluZ3MgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGVhbWluZ05hbWUoc2NoZWR1bGUudGVhbWluZykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlRoZXJlIGFyZSBjdXJyZW50bHkgbm8gZGVmaW5lZCBzY2hlZHVsZXMuXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkNob29zZSBBZGQgU2NoZWR1bGUgdG8gYWRkIGEgbmV3IHNjaGVkdWxlLlwiKV0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1zY2hlZHVsZS12aWV3XCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXRpbWVcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGltZVN0cikpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5kYXlzLCBmdW5jdGlvbihkYXkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sIFtcbiAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogZGF5Lm9wZW4sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRheS5vcGVuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoZGF5Lm9wZW4pXG4gICAgICAgICAgICAgICAgICA/IF92bS5faShkYXkub3BlbiwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgOiBkYXkub3BlblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgJCRhID0gZGF5Lm9wZW4sXG4gICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJiBfdm0uJHNldChkYXksIFwib3BlblwiLCAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcGVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGRheSwgXCJvcGVuXCIsICQkYylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGRheS5kYXkpICsgXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtaW5mb1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhkYXkuc2xvdHMubGVuZ3RoKSArXG4gICAgICAgICAgICAgICAgICBcIiBzbG90cy9cIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoZGF5LnNsb3RzLmxlbmd0aCAtIF92bS5vd25lZEZvckRheShkYXkpKSArXG4gICAgICAgICAgICAgICAgICBcIiBvcGVuXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIGRheS5vcGVuXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX2woZGF5LnNsb3RzLCBmdW5jdGlvbihzbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgIXNsb3QuY29udGlndW91c1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIsKgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiwqBcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgeyBjbGFzczogX3ZtLnNsb3RDbGFzcyhzbG90KSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpbWVGb3JtYXQoc2xvdC50aW1lKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0YWZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lZGl0b3Ioc2xvdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9wZW5jaWwxNi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVyKHNsb3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcveC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnN0YWZmICYmIHNsb3QuYm9va2VkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJvb2tlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzbG90LnRlYW1OYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0YWZmICYmIHNsb3QuYm9va2VkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJvb2tlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93VGVhbShzbG90KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhzbG90LnRlYW1OYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXNsb3QuYm9va2VkKCkgJiYgc2xvdC50aW1lID4gX3ZtLnRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYm9vayhzbG90KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNsaWNrIHRvIEJvb2tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibG9jYXRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzbG90LmxvY2F0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdGFmZiAmJiBzbG90LmJvb2tlZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb3VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNsb3QuY291bnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3RhZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNoZWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzbG90LmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2xvdC5jaGVja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KHNsb3QuY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koc2xvdC5jaGVja2VkLCBudWxsKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2xvdC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IHNsb3QuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoZWNrZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGVja2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoc2xvdCwgXCJjaGVja2VkXCIsICQkYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC5ib29rZWQoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnN0YWZmIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5vd25lZChzbG90KSAmJiBzbG90LnRpbWUgPiBfdm0udGltZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ1bmJvb2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udW5ib29rKHNsb3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcveC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiVW5ib29rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVW5ib29rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpYWxvZy1jbC1jb2x1bW5cIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZm9ybVwiLFxuICAgICAgICBbXG4gICAgICAgICAgIV92bS5sb2NhdGlvbk9ubHlcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImZsYXRwaWNrclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEYXRlIGFuZCBUaW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImZsYXQtcGlja3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29uZmlnOiBfdm0uZnBDb25maWcsIFwiZGF0YS1pbnB1dFwiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGltZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRHVyYXRpb24gKG1pbnV0ZXMpOiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zY2hlZHVsZVNsb3QuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2NoZWR1bGVTbG90LmR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zY2hlZHVsZVNsb3QuZHVyYXRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2NoZWR1bGVTbG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkxvY2F0aW9uXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2NoZWR1bGVTbG90LmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNjaGVkdWxlU2xvdC5sb2NhdGlvblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2NoZWR1bGVTbG90LmxvY2F0aW9uIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNjaGVkdWxlU2xvdCwgXCJsb2NhdGlvblwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uc2NoZWR1bGVTbG90LmlkID09PSAwXG4gICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlJlcGVhdDogXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2NoZWR1bGVTbG90LnJlcGVhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2NoZWR1bGVTbG90LnJlcGVhdFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXJyb3dcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zY2hlZHVsZVNsb3QucmVwZWF0IH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zY2hlZHVsZVNsb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImFcIiwgeyBhdHRyczogeyBcImRhdGEtdG9nZ2xlXCI6IFwiXCIsIHRpdGxlOiBcIlRvZ2dsZSBDYWxlbmRhclwiIH0gfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbnMtY2wgaWNvbnMtY2wtY2FsZW5kYXJcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0udGVhbSAhPT0gbnVsbFxuICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ0clwiLCBbX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGVhbS5uYW1lKSldKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udGVhbS5tZW1iZXJzLCBmdW5jdGlvbihtZW1iZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5zY2hlZHVsZS5hc3NpZ250YWcgPT09IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MobWVtYmVyLm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICA6IF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5saW5rICsgbWVtYmVyLm1lbWJlcmlkIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhtZW1iZXIubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXNjaGVkdWxlLXRlYW0tZW1haWxcIiB9LCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmVtYWlsIH0gfSwgW192bS5fdihcImVtYWlsXCIpXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXNjaGVkdWxlLXRlYW0tZmV0Y2hpbmdcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiRmV0Y2hpbmcuLi5cIildKVxuICAgICAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwibmF2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtbmF2XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFxuICAgICAgICBcInVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGl2aWRlcnNcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uaG9tZUxpbmsgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhvbWVcIiB9LCBbX3ZtLl92KFwiSG9tZVwiKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5tZW51LCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TY2hlZHVsZUVkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTgxYTIwMWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2NoZWR1bGVFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TY2hlZHVsZUVkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hN2Q0YjRjZjc2LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS44LTQzOGY0ZDBmZjAtY2E0Yzk5YjI2MS56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2NoYXJsZXNvd2VuL09uZURyaXZlIC0gTWljaGlnYW4gU3RhdGUgVW5pdmVyc2l0eS9Qcm9qZWN0cy9Db3Vyc2VMaWIvY29tcGxldGUvLnlhcm4vY2FjaGUvdnVlLWhvdC1yZWxvYWQtYXBpLW5wbS0yLjMuNC01NDlhZTI2MzM3LTliZWZjMGIzZDYuemlwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU4MWEyMDFlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU4MWEyMDFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU4MWEyMDFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TY2hlZHVsZUVkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTgxYTIwMWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTgxYTIwMWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9zY2hlZHVsZXIvanMvQ29uc29sZS9TY2hlZHVsZUVkaXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NjaGVkdWxlc0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmNjY2VjZTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2NoZWR1bGVzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2NoZWR1bGVzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWE3ZDRiNGNmNzYvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjgtNDM4ZjRkMGZmMC1jYTRjOTliMjYxLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hhcmxlc293ZW4vT25lRHJpdmUgLSBNaWNoaWdhbiBTdGF0ZSBVbml2ZXJzaXR5L1Byb2plY3RzL0NvdXJzZUxpYi9jb21wbGV0ZS8ueWFybi9jYWNoZS92dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctOWJlZmMwYjNkNi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZmNjY2VjZTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZmNjY2VjZTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZmNjY2VjZTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NjaGVkdWxlc0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmNjY2VjZTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZmNjY2VjZTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9zY2hlZHVsZXIvanMvQ29uc29sZS9TY2hlZHVsZXNFZGl0b3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TY2hlZHVsZVZ1ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTFhNDBlMGEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2NoZWR1bGVWdWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TY2hlZHVsZVZ1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2NoZWR1bGVWdWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTdkNGI0Y2Y3Ni8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuOC00MzhmNGQwZmYwLWNhNGM5OWIyNjEuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9jaGFybGVzb3dlbi9PbmVEcml2ZSAtIE1pY2hpZ2FuIFN0YXRlIFVuaXZlcnNpdHkvUHJvamVjdHMvQ291cnNlTGliL2NvbXBsZXRlLy55YXJuL2NhY2hlL3Z1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy05YmVmYzBiM2Q2LnppcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MWE0MGUwYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MWE0MGUwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MWE0MGUwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2NoZWR1bGVWdWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxYTQwZTBhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxYTQwZTBhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1NjaGVkdWxlVnVlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2xvdEVkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmYyZjMyNDAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2xvdEVkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nsb3RFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Nsb3RFZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmYyZjMyNDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTdkNGI0Y2Y3Ni8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuOC00MzhmNGQwZmYwLWNhNGM5OWIyNjEuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZmMmYzMjQwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2NoYXJsZXNvd2VuL09uZURyaXZlIC0gTWljaGlnYW4gU3RhdGUgVW5pdmVyc2l0eS9Qcm9qZWN0cy9Db3Vyc2VMaWIvY29tcGxldGUvLnlhcm4vY2FjaGUvdnVlLWhvdC1yZWxvYWQtYXBpLW5wbS0yLjMuNC01NDlhZTI2MzM3LTliZWZjMGIzZDYuemlwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZmMmYzMjQwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZmMmYzMjQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZmMmYzMjQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TbG90RWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZjJmMzI0MCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ZjJmMzI0MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3NjaGVkdWxlci9qcy9TbG90RWRpdG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGVhbVZpZXdlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTlkNDE2MDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGVhbVZpZXdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RlYW1WaWV3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RlYW1WaWV3ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTdkNGI0Y2Y3Ni8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuOC00MzhmNGQwZmYwLWNhNGM5OWIyNjEuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9jaGFybGVzb3dlbi9PbmVEcml2ZSAtIE1pY2hpZ2FuIFN0YXRlIFVuaXZlcnNpdHkvUHJvamVjdHMvQ291cnNlTGliL2NvbXBsZXRlLy55YXJuL2NhY2hlL3Z1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy05YmVmYzBiM2Q2LnppcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1OWQ0MTYwNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1OWQ0MTYwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1OWQ0MTYwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGVhbVZpZXdlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTlkNDE2MDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTlkNDE2MDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9zY2hlZHVsZXIvanMvVGVhbVZpZXdlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkYmY0Y2IwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWE3ZDRiNGNmNzYvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjgtNDM4ZjRkMGZmMC1jYTRjOTliMjYxLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hhcmxlc293ZW4vT25lRHJpdmUgLSBNaWNoaWdhbiBTdGF0ZSBVbml2ZXJzaXR5L1Byb2plY3RzL0NvdXJzZUxpYi9jb21wbGV0ZS8ueWFybi9jYWNoZS92dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctOWJlZmMwYjNkNi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGRiZjRjYjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGRiZjRjYjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGRiZjRjYjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkYmY0Y2IwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBkYmY0Y2IwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0cmVzdWx0ID0gZm4oKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiU2NoZWR1bGVyXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY291cnNlbGliXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvdXJzZWxpYlwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdmVuZG9yL2NsL3NjaGVkdWxlci9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==