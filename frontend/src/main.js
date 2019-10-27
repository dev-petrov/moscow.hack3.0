import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import News from './components/News.vue'
//import ScheduleList from './components/SubjectsList.vue'
import Schedule from './components/Schedule.vue'
import Profile from './components/Profile.vue'
import Test from './components/Test.vue'
import ProfileAchievs from './components/ProfileAchievs.vue'
import ProfilePersonalization from './components/ProfilePersonalization.vue'
import ProvileCommunityAchievement from './components/ProfileCommunityAchieves.vue'
import VueCookie from 'vue-cookie'

Vue.use(VueRouter)
Vue.use(VueCookie)


Vue.config.productionTip = false

const routes = [
  { path: '/', component: News },
  //{ path: '/subjects', component: ScheduleList },
  { path: '/subjects/:id', component: Schedule },
  { path: '/profile', component: Profile},
  { path: '/test/:id', component: Test },
  { path: '/profile/achievements', component: ProfileAchievs},
  { path: '/profile/personalization', component: ProfilePersonalization},
  { path: '/profile/community', component: ProvileCommunityAchievement }

]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
