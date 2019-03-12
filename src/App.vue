<template>
 <div class="div">
  <div id="app">
    <h1>User Activity</h1>
    <prof-activity v-bind:userActivity="userActivity"></prof-activity>
  </div>
 </div>
</template>
<script>
import ProfActivity from './ProfActivity.vue'

export default {
  name: 'app',
  data () {
    return {
      userActivity: [
        {"CONTENT_ID":"10453660","CONTENT_TYPE":"PAGE","ID":"9403","LAST_VIEW_DATE":"2019-03-09T06:52:55.434Z","SPACE_KEY":"br","USER_KEY":"2c9f99c66784d36b0167cd8eaed1001c","user_key":"2c9f99c66784d36b0167cd8eaed1001c","title":"Little Rock","contentid":"10453660","spacename":"Boston Rooms","spacekey":"br","TIMES_VIEWED":"1","PAGE_ID":"10453660"},
        {"CONTENT_ID":"10453544","CONTENT_TYPE":"PAGE","ID":"9402","LAST_VIEW_DATE":"2019-03-09T06:51:55.105Z","SPACE_KEY":"smr","USER_KEY":"2c9f99c66784d36b0167cd8eaed1001c","user_key":"2c9f99c66784d36b0167cd8eaed1001c","title":"Tokyo","contentid":"10453544","spacename":"San Mateo Rooms","spacekey":"smr","TIMES_VIEWED":"3","PAGE_ID":"10453544"},
        {"CONTENT_ID":"10453472","CONTENT_TYPE":"PAGE","ID":"9400","LAST_VIEW_DATE":"2019-03-09T06:42:41.683Z","SPACE_KEY":"smr","USER_KEY":"2c9f99c66784d36b0167cd8eaed1001c","user_key":"2c9f99c66784d36b0167cd8eaed1001c","title":"Phone Room 175","contentid":"10453472","spacename":"San Mateo Rooms","spacekey":"smr","TIMES_VIEWED":"1","PAGE_ID":"10453472"},
        {"CONTENT_ID":"66361","CONTENT_TYPE":"PAGE","ID":"9007","LAST_VIEW_DATE":"2019-03-06T09:29:50.430Z","SPACE_KEY":"FUN","USER_KEY":"2c9f99c66784d36b0167cd8eaed1001c","user_key":"2c9f99c66784d36b0167cd8eaed1001c","title":"Turning a perceived risk into an asset","contentid":"66361","spacename":"Fundraising","spacekey":"FUN","TIMES_VIEWED":"1","PAGE_ID":"66361"},
        {"CONTENT_ID":"66042","CONTENT_TYPE":"PAGE","ID":"9006","LAST_VIEW_DATE":"2019-03-06T09:29:47.696Z","SPACE_KEY":"FUN","USER_KEY":"2c9f99c66784d36b0167cd8eaed1001c","user_key":"2c9f99c66784d36b0167cd8eaed1001c","title":"Fundraising","contentid":"66042","spacename":"Fundraising","spacekey":"FUN","TIMES_VIEWED":"1","PAGE_ID":"66042"},
        {"CONTENT_ID":"10454836","CONTENT_TYPE":"PAGE","ID":"8748","LAST_VIEW_DATE":"2019-03-06T05:33:09.811Z","SPACE_KEY":"MEM","USER_KEY":"2c9f99c66784d36b0167cd8eaed1001c","user_key":"2c9f99c66784d36b0167cd8eaed1001c","title":"Amy Spurling","contentid":"10454836","spacename":"Network","spacekey":"MEM","TIMES_VIEWED":"2","PAGE_ID":"10454836"},
        {"CONTENT_ID":"66375","CONTENT_TYPE":"PAGE","ID":"8883","LAST_VIEW_DATE":"2019-03-06T05:32:54.055Z","SPACE_KEY":"PD","USER_KEY":"2c9f99c66784d36b0167cd8eaed1001c","user_key":"2c9f99c66784d36b0167cd8eaed1001c","title":"How to A/B Test When You Have Low Site Traffic","contentid":"66375","spacename":"Product Development","spacekey":"PD","TIMES_VIEWED":"6","PAGE_ID":"66375"},
        {"CONTENT_ID":"66052","CONTENT_TYPE":"PAGE","ID":"8882","LAST_VIEW_DATE":"2019-03-06T05:32:23.947Z","SPACE_KEY":"PD","USER_KEY":"2c9f99c66784d36b0167cd8eaed1001c","user_key":"2c9f99c66784d36b0167cd8eaed1001c","title":"Product Development","contentid":"66052","spacename":"Product Development","spacekey":"PD","TIMES_VIEWED":"4","PAGE_ID":"66052"},
        {"CONTENT_ID":"7112507","CONTENT_TYPE":"PAGE","ID":"4742","LAST_VIEW_DATE":"2019-01-18T03:26:06.185Z","SPACE_KEY":"FEAT","USER_KEY":"2c9f99c66784d36b0167cd8eaed1001c","user_key":"2c9f99c66784d36b0167cd8eaed1001c","title":"GSVlabs Online Platform","contentid":"7112507","spacename":"Features","spacekey":"FEAT","TIMES_VIEWED":"1","PAGE_ID":"7112507"}],
    }
  }, 
  created: function(){
  }, 
  methods:{

  },
  components:{
    ProfActivity
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.div {
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
}
</style>
