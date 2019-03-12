<template>
<div id="prof-activity-container">
  <div id="user-activity-items-container">
    <div v-for="activity in prettyUserActivity" :key="activity" class="activityitem">
      <div class="last-viewed"><p>Last viewed on: {{moment(activity.last_viewed).format('MMMM Do YYYY, h:mm a')}}</p></div>
      <a class='info-box-link' :href="activity.page_url">
        <div class='info-box'>  
          <div class='title-container'>
            <div class='page-title'>{{activity.page_title}}</div>
            <div class='space-title'>{{activity.space}}</div>
          </div>
        <div class='data-box'>
          <div class='page-views-box'>
            <div class='page-views-num'>{{activity.num_views}}</div>
            <div class='page-views-subtitle'>times viewed</div>
          </div>
          <div class='last-viewed'></div>
        </div>
        </div>
      </a>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "useractivity",
  props: ["userActivity"],
  data() {
    return {
      prettyUserActivity: []
    };
  },
  created: function() {
    this.prettifyData();
  },
  methods: {
    prettifyData(){
      let activityItems = this.userActivity;
      for(var i = 0; i < activityItems.length; i++){
        let activityItem = {}; 
        activityItem.last_viewed = activityItems[i].LAST_VIEW_DATE; 
        activityItem.page_title = activityItems[i].title;
        activityItem.page_url = 'https://passport.gsvlabs.com/pages/viewpage.action?pageId=' + activityItems[i].CONTENT_ID;
        activityItem.space = activityItems[i].spacename;
        activityItem.num_views = activityItems[i].TIMES_VIEWED;
        this.prettyUserActivity.push(activityItem);
      }
    }
  },
  mounted() {

  },
  beforeMount() {
    
  },
  components: {
  }
};
</script>

<style lang="scss">
a{
  text-decoration: none;
}
.activityitem{
  margin: 20px;
}
div#prof-activity-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.page-activity-title {
    font-family: Avenir-Roman;
    font-size: 19px;
    font-weight: 900;
    letter-spacing: 1px;
    text-align: left;
    color: #141111;
    margin-bottom: 35px;
}
#user-activity-items-container {
    display: flex;
    flex-wrap: wrap;
    width: 40%;
    margin-top: 20px;
}
.last-viewed {
    font-family: Avenir-Roman;
    font-size: 14px;
    letter-spacing: -1px;
    text-align: left;
    color: #666666;
}
.last-viewed p {
    margin: 0px 0px 5px 20px;
}
a.info-box-link {
    text-decoration: none;
}
.info-box {
    display: flex;
    width: 463px;
    height: 81px;
    border-radius: 20px;
    box-shadow: -6px 6px 10.5px 0 rgba(0, 0, 0, 0.11);
    background-color: #ffffff;
    align-items: center;
}
.title-container {
    margin-left: 25px;
    font-family: Avenir;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 1px;
    text-align: left;
    color: #141111;
    max-width: 60%;
}
.space-title {
    font-family: Avenir-Roman;
    font-weight: normal;
}
.data-box {
    margin-left: auto;
    margin-right: 15px;
}
.page-views-box {
    display: flex;
    flex-direction: column;
    font-family: Avenir-Roman;
    font-size: 14px;
    letter-spacing: -0.7px;
    text-align: center;
    color: #41b46a;
}
.page-views-num {
    font-weight: 900;
    font-size: 22px;
}

</style>
