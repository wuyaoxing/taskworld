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
