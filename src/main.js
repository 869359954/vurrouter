import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import pageone from './components/pageone.vue'
import pagetwo from './components/pagetwo.vue'
import pagethree from './components/pagethree.vue'
import pagefour from './components/pagefour.vue'

(function(para) {
  var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
  if(typeof(w['sensorsDataAnalytic201505']) !== 'undefined') {
      return false;
  }
  w['sensorsDataAnalytic201505'] = n;
  w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
  var ifs = ['track','quick','register','registerPage','registerOnce','trackSignup', 'trackAbtest', 'setProfile','setOnceProfile','appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify','login','logout','trackLink','clearAllRegister','getAppStatus'];
  for (var i = 0; i < ifs.length; i++) {
    w[n][ifs[i]] = w[n].call(null, ifs[i]);
  }
  if (!w[n]._t) {
    x = d.createElement(s), y = d.getElementsByTagName(s)[0];
    x.async = 1;
    x.src = p;
    x.setAttribute('charset','UTF-8');
    w[n].para = para;
    y.parentNode.insertBefore(x, y);
  }
})({
  sdk_url: 'https://cdn.jsdelivr.net/npm/sa-sdk-javascript@1.14.8/sensorsdata.min.js',
  heatmap_url: 'https://cdn.jsdelivr.net/npm/sa-sdk-javascript@1.14.8/heatmap.min.js',
  name: 'sensors',
  is_track_single_page:true,
  server_url: 'http://test-syg.datasink.sensorsdata.cn/sa?token=27f1e21b78daf376&project=liangshuang',
  heatmap:{}
});
// eslint-disable-next-line
sensors.quick('autoTrack');


Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {path: '/pageone',component: pageone },
    {path: '/pagetwo',component: pagetwo},
    {path: '/pagethree',component: pagethree},
    {path: '/pagefour',component: pagefour}
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
