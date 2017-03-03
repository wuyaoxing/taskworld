<template>
  <div class="main">
    <div class="tw-fixed-header-layout__contents">
      <div class="tw-scrollable-layout">
        <div class="tw-fixed-header-layout__sizer"></div>
        <div class="tw-kanban-board-renderer tw-kanban-board-renderer ax-kanban-board">
          <div class="tw-kanban">
            <div class="tw-kanban-columns">
              <div class="tw-kanban-column js-tw-kanban-items-container">
                <div class="tw-kanban-board-columns__column">
                  <div class="tw-tasklist-narrow js-tw-tasklist ax-tasklist --expanded">
                    <div class="tw-tasklist-narrow__frame-top tw-kanban-group-drag-handle">
                      <div class=""></div>
                    </div>
                    <div class="tw-kanban-items tw-hack-scrollbar">
                      <div class="tw-kanban-item tw-tasklist-narrow__kanban-item">
                        <div class="tw-task ax-task --lightweight">嘻嘻嘻</div>
                      </div>
                    </div>
                    <div class="tw-tasklist-narrow__frame-bottom tw-kanban-group-drag-handle">
                      <div class="tw-tasklist-footer">
                        <div class="tw-tasklist-footer__tasks-count">3个活动任务</div>
                        <div>
                          <a class="tw-tasklist-footer__toggle-completed-tasks-link" href="#">查看1个完成的任务</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'tw-main',
  data () {
    return {
      msg: 'Welcome to Your main'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">



.tw-task {
  cursor: pointer;
  background: #fff;
  color: #323742;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0px 1px 0px 0px rgba(19,6,38,0.07);
  padding-right: 10px;
  word-break: break-word;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
}
.tw-task.animated {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
}
.tw-task:hover:not(.\--disabled):not(.\--is-showing) {
  background: #f3f4f5;
}
.tw-task.\--disabled {
  cursor: default;
}
.tw-task.\--lightweight {
  border-radius: 0;
  box-shadow: none;
}
.tw-kanban-item.\--is-helper .tw-task {
  box-shadow: 0 1px 8px rgba(0,0,0,0.35);
  -webkit-animation: 0.1s tw-task__drag-zoom;
  animation: 0.1s tw-task__drag-zoom;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.tw-task.\--is-new {
  background: #fff7e9;
}
.tw-task.\--is-new .tw-task__assignee .tw-task-assignee-row__avatar-container {
  border: 3px solid #fff7e9;
  border-radius: 50%;
}
.tw-task.\--is-showing,
.tw-task.\--is-showing.\--done {
  background: #27b6ba;
  color: #fff;
}
.tw-task.\--is-showing .tw-task__assignee .tw-task-assignee-row__avatar-container {
  border: 3px solid #27b6ba;
  border-radius: 50%;
}
.tw-task.\--is-showing .tw-task__due-date,
.tw-task.\--is-showing .tw-task__recurring {
  color: #fff;
  font-weight: 600;
}
.tw-task.\--is-showing .tw-task__matched-lines-inner {
  color: #fff;
}
.tw-task.\--is-showing .tw-task__matched-field {
  color: #c3e8ea;
}
.tw-task.\--is-showing .tw-task-points__point.\--filled {
  background-color: #fff;
}
.tw-task.\--is-showing .tw-task-points__point.\--blank {
  border-color: #fff;
}
.tw-task.\--fade-out {
  -webkit-animation: 0.2s zoomOut;
  animation: 0.2s zoomOut;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.tw-task.\--fade-in {
  -webkit-animation: 0.2s zoomIn;
  animation: 0.2s zoomIn;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.tw-task.\--done {
  background-color: #f3f4f5;
}
.tw-task__inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}
.tw-task__inner.\--with-points {
  margin-top: 18px;
}
.tw-task__recurring {
  font-size: 12px;
  color: #8d919a;
  line-height: 21px;
}
.tw-task__recurring .tw-icon-reload {
  position: relative;
  top: 2px;
}
.tw-task__recurring span {
  margin-left: 2px;
}
.tw-task__color {
  background: transparent;
  width: 5px;
  margin-right: 6px;
  min-width: 5px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.tw-task__color.\--purple {
  background-color: #a876cc;
}
.tw-task__color.\--blue {
  background-color: #4882ab;
}
.tw-task__color.\--green {
  background-color: #52b166;
}
.tw-task__color.\--amber {
  background-color: #ffb024;
}
.tw-task__color.\--red {
  background-color: #e95e51;
}
.tw-task__color.\--brown {
  background-color: #a0744c;
}
.tw-task__except-color {
  width: calc(100% - 10px);
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.tw-task.\--lightweight .tw-task__color {
  border-radius: 0;
}
.tw-task__checkbox-area {
  min-width: 20px;
}
.tw-task__preview-image {
  margin-bottom: 10px;
  border: 1px solid #e6e8ec;
  border-radius: 3px;
  background-color: #f3f4f5;
  display: block;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.tw-task__preview-image img {
  max-height: 280px;
}
.tw-task__preview-image__loading-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.tw-task__checkbox {
  margin-top: 7px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid #d4d6db;
  background: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 13px /* add PX (or original value) as backup */;
  font-size: 0.8125rem;
  position: relative;
}
.tw-task__checkbox .tw-icon-check-mark-bold {
  position: relative;
  top: -3px;
  left: -1px;
  color: #1d222b;
}
.tw-task__checkbox.\--checked {
  border: 2px solid #696f7a;
  background-color: #696f7a;
}
.tw-task__checkbox.\--checked .tw-icon-check-mark-bold {
  color: #fff;
}
.tw-task__checkbox.\--checked:hover:not(.\--disabled) {
  border: 2px solid #464c59;
  background-color: #464c59;
}
.tw-task__checkbox:hover:not(.\--disabled) {
  border: 2px solid #8d919a;
}
.tw-task__main {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding-top: 5px;
  padding-bottom: 5px;
}
.tw-task__date-summary {
  width: calc(100% - 10px);
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.tw-task__date-summary .tw-task__due-date {
  margin-right: auto;
}
.tw-task__body-columns {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.tw-task__body-left {
  -webkit-box-flex: 1;
  -ms-flex: 1 0;
  flex: 1 0;
}
.tw-task__body-right {
  -webkit-box-flex: 1;
  -ms-flex: 1 0;
  flex: 1 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.tw-task__body-right > * {
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
}
.tw-task__points-placeholder {
  float: right;
  position: absolute;
  top: 10px;
  right: 10px;
}
.tw-task.\--wide .tw-task__tags {
  width: 60%;
}
.tw-task.\--wide .tw-task__color {
  margin-right: 25px;
  border-radius: 0;
}
.tw-task.\--wide .tw-task__main {
  padding-right: 20px;
}
.tw-task.\--wide .tw-task__recurring {
  margin-right: 10px;
}
.tw-task__location {
  font-size: 11px /* add PX (or original value) as backup */;
  font-size: 0.6875rem;
  line-height: 11px;
  color: #8d919a;
  height: 27px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  white-space: nowrap;
}
.tw-task__location:hover {
  color: #464c59;
}
.tw-task__location i {
  color: #8d919a;
}
.tw-task__tags {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  box-sizing: border-box;
  min-height: 27px;
}
.tw-task__tags .tw-simple-tag {
  font-size: 12px /* add PX (or original value) as backup */;
  font-size: 0.75rem;
  line-height: 16px;
  height: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 2px;
  margin-bottom: 2px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  white-space: nowrap;
}
.tw-task__tags .tw-simple-tag__tag {
  margin-right: 3px;
  position: relative;
}
.tw-task__matched-lines {
  box-sizing: border-box;
  margin-top: 5px;
}
.tw-task__matched-lines-inner {
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 180px;
  font-style: italic;
  font-size: 12px /* add PX (or original value) as backup */;
  font-size: 0.75rem;
  color: #8d919a;
}
.tw-task__matched-field {
  font-weight: 600;
  color: #696f7a;
}
.tw-task__due-date {
  font-size: 12px /* add PX (or original value) as backup */;
  font-size: 0.75rem;
  color: #8d919a;
  margin-right: 10px;
  line-height: 21px;
}
.tw-task__due-date .tw-icon-calendar,
.tw-task__due-date .tw-icon-comment,
.tw-task__due-date .tw-icon-attachment,
.tw-task__due-date .tw-icon-check-list {
  position: relative;
  top: 2px;
  font-size: 14px /* add PX (or original value) as backup */;
  font-size: 0.875rem;
}
.tw-task__due-date {
  font-weight: 600;
  color: #31a7aa;
}
.tw-task__due-date.\--completed {
  color: #575d68;
}
.tw-task__due-date.\--overdue {
  color: #d5493b;
}
.tw-task__due-date.\--upcoming {
  color: #ff941d;
}
.tw-task__assignees {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}
.tw-task__assignees > * {
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
}
.tw-task__assignee {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.tw-task__assignee:not(:last-child) {
  margin-right: -10px;
}
.tw-task__assignee .tw-task-assignee-row__avatar-container {
  border: 3px solid #fff;
  border-radius: 50%;
  position: relative;
  vertical-align: bottom;
}
.tw-task .tw-files-drop-overlay {
  overflow-y: hidden;
}
.tw-task.--expanded {
  height: 300px;
}
.tw-task.--expanded .tw-files-drop-overlay {
  overflow-y: visible;
}
@media (max-width: 699px) {
  .tw-task.\--wide .tw-task__color {
    margin-right: 5px;
  }
  .tw-task.\--wide .tw-task__main {
    padding-right: 0;
  }
}
@-webkit-keyframes tw-task__drag-zoom {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
}
@keyframes tw-task__drag-zoom {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
}



/** WEBPACK FOOTER **
 ** webpack:///src/tw-task-card/Task.styl
 **/

.tw-kanban-board-renderer {
  margin-top: 5px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  overflow: hidden;
  outline: none;
}
@media screen {
  .tw-kanban-board-renderer .tw-kanban-columns {
    position: absolute;
    top: 40px;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
@media print {
  .tw-kanban-board-renderer .tw-kanban-columns {
    height: auto;
  }
}
@media (max-width: 699px) {
  .tw-kanban-board-renderer .tw-kanban-columns {
    top: 0;
  }
}
.tw-kanban-board-renderer .tw-kanban-columns .tw-kanban-column {
  height: 100%;
}
.tw-kanban-board-renderer .ui-sortable {
  padding-bottom: 0px;
}
.tw-kanban-board-renderer .tw-kanban-columns {
  padding-right: 10px;
  -webkit-overflow-scrolling: touch;
}
.tw-kanban-board-renderer .tw-kanban-columns::-webkit-scrollbar {
  background: transparent;
  width: 12px;
  height: 12px;
}
.tw-kanban-board-renderer .tw-kanban-columns::-webkit-scrollbar-track {
  background: #f3f4f5;
  width: 12px;
  height: 12px;
  border-radius: 6px;
}
.tw-kanban-board-renderer .tw-kanban-columns::-webkit-scrollbar-thumb {
  background: #b0b4bb;
  width: 12px;
  height: 12px;
  border-radius: 6px;
}
.tw-kanban-board-renderer .tw-kanban-columns::-webkit-scrollbar-thumb:hover {
  background: #c1c4cb;
}
.tw-kanban-board-renderer .tw-kanban-column {
  padding-left: 10px;
}
.tw-kanban-board-renderer .tw-kanban-column.\--is-placeholder > .tw-tasklist-narrow {
  opacity: 0.5;
}
.tw-kanban-board-renderer .tw-kanban-lists {
  margin: 60px 50px 0 50px;
}
.tw-kanban-board-renderer .tw-kanban-lists.\--with-floating-panel {
  width: calc(50vw + 50px);
}
@media (max-width: 699px) {
  .tw-kanban-board-renderer .tw-kanban-lists {
    margin: 15px;
  }
  .tw-kanban-board-renderer .tw-kanban-lists.\--with-floating-panel {
    width: 100%;
  }
}
.tw-kanban-board-renderer .tw-kanban-list {
  padding-bottom: 2px;
}
.tw-kanban-board-renderer .tw-kanban-list.\--is-placeholder {
  opacity: 0.5;
}
.tw-kanban-board-renderer__extender {
  background: transparent;
  height: 1px;
  min-width: 0.1px;
}
.\--tw-floating-panel__open .tw-kanban-board-renderer__extender {
  min-width: 600px;
}
.tw-kanban-board-renderer__new-tasklist-area .tw-click-outside-layer {
  z-index: 99998;
}



/** WEBPACK FOOTER **
 ** webpack:///src/tw-kanban-board/KanbanBoardRenderer.styl
 **/

// kanban
.tw-kanban {
  -webkit-touch-callout: none !important;
}
.tw-kanban-columns {
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow-y: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}
.tw-kanban-columns > * {
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
}
@media print {
  .tw-kanban-columns {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}
.tw-kanban-items {
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
}
.tw-kanban-item.\--is-dragging,
.tw-kanban-column.\--is-dragging,
.tw-kanban-list.\--is-dragging {
  display: none;
}
.tw-kanban-drag-helper {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10000;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}



/** WEBPACK FOOTER **
 ** webpack:///src/tw-kanban/tw-kanban.styl
 **/

// buju
.tw-fixed-header-layout {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.tw-fixed-header-layout__header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
}
.tw-fixed-header-layout__contents {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
}
.tw-fixed-header-layout__sizer {
  top: 0;
  right: 0;
  height: 1px;
  left: 0;
  pointer-events: none;
  position: absolute;
}


// scroll
.tw-scrollable-layout {
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.tw-scrollable-layout::-webkit-scrollbar {
  background: transparent;
  width: 8px;
  height: 8px;
}
.tw-scrollable-layout::-webkit-scrollbar-track {
  background: #f3f4f5;
  width: 8px;
  height: 8px;
  border-radius: 4px;
}
.tw-scrollable-layout::-webkit-scrollbar-thumb {
  background: #b0b4bb;
  width: 8px;
  height: 8px;
  border-radius: 4px;
}
.tw-scrollable-layout::-webkit-scrollbar-thumb:hover {
  background: #c1c4cb;
}
.tw-scrollable-layout.\--only-show-scrollbar-while-hover:not(:hover)::-webkit-scrollbar-track,
.tw-scrollable-layout.\--only-show-scrollbar-while-hover:not(:hover)::-webkit-scrollbar-thumb,
.tw-scrollable-layout.\--only-show-scrollbar-while-hover:not(:hover)::-webkit-scrollbar-thumb:hover {
  background: none;
}
.tw-scrollable-layout.\--parallax {
  -webkit-perspective: 1px;
  perspective: 1px;
}
</style>
