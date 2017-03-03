<template>
  <div class="tw-hack-scrollbar u-fancy-scrollbar">
    <full-calendar :events="fcEvents" first-day='1' lang="zh" @changeMonth="changeMonth" @eventClick="eventClick" @dayClick="dayClick" @moreClick="moreClick"></full-calendar>
  </div>
</template>
<script>
  // var demoEvents = [
  //   {
  //     title: 'Sunny Out of Office',
  //     start: '2016-08-25',
  //     end: '2017-07-27'
  //   }
  // ]
  let demoEvents = [
    {
      title: 'Sunny 725-727',
      start: '2017-02-25',
      end: '2017-07-27',
      cssClass: 'family'
    },
    {
      title: 'Sunny 726-727',
      start: '2017-02-26',
      end: '2017-07-27',
      cssClass: ['home', 'work']
    },
    {
      title: 'Sunny4',
      start: '2017-02-27',
      end: '2017-07-28'
    },
    {
      title: 'Sunny3',
      start: '2017-02-27',
      end: '2017-07-28'
    },
    {
      title: 'Sunny2',
      start: '2017-02-27',
      end: '2017-07-28'
    },
    {
      title: 'Sunny1',
      start: '2017-02-27',
      end: '2017-07-28'
    },
    {
      title: 'Sunny 727-728',
      start: '2017-02-27',
      end: '2017-07-28'
    },
    {
      title: 'Sunny 728-730',
      start: '2017-02-28',
      end: '2017-07-30'
    }
  ]
  export default {
    data () {
      return {
        fcEvents: demoEvents
      }
    },
    methods: {
      changeMonth: function (start, end, current) {
        console.log('1changeMonth:', start, end, current)
      },
      eventClick: function (event, jsEvent, pos) {
        console.log('2eventClick:', event, jsEvent, pos)
      },
      dayClick: function (day, jsEvent) {
        console.log('3dayClick:', day, jsEvent)
      },
      moreClick: function (day, events, jsEvent) {
        console.log('4moreCLick:', day, events, jsEvent)
      }
    },
    components: {
      'full-calendar': require('vue-fullcalendar')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .tw-hack-scrollbar
    webkit-overflow-scrolling touch
    overflow-x hidden
    overflow-y scroll
    width 100%
    height 100%






//scroll
.u-fancy-scrollbar,pre {
    -webkit-overflow-scrolling: touch;
    -webkit-transform: translate3d(0,0,0)
}

.u-fancy-scrollbar::-webkit-scrollbar {
    height: 9px;
    width: 9px
}

.u-fancy-scrollbar::-webkit-scrollbar-button:end:increment,.u-fancy-scrollbar::-webkit-scrollbar-button:start:decrement {
    background: 0 0;
    display: none
}

.u-fancy-scrollbar::-webkit-scrollbar-track-piece {
    background: #D6DADC
}

.u-fancy-scrollbar::-webkit-scrollbar-track-piece:vertical:start {
    border-radius: 5px 5px 0 0
}

.u-fancy-scrollbar::-webkit-scrollbar-track-piece:vertical:end {
    border-radius: 0 0 5px 5px
}

.u-fancy-scrollbar::-webkit-scrollbar-track-piece:horizontal:start {
    border-radius: 5px 0 0 5px
}

.u-fancy-scrollbar::-webkit-scrollbar-track-piece:horizontal:end {
    border-radius: 0 5px 5px 0
}

.u-fancy-scrollbar::-webkit-scrollbar-thumb:horizontal,.u-fancy-scrollbar::-webkit-scrollbar-thumb:vertical {
    background: #C4C9CC;
    border-radius: 5px;
    display: block;
    height: 50px
}
</style>
