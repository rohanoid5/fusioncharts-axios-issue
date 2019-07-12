import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import Charts from 'fusioncharts/fusioncharts.charts';

Vue.use(VueFusionCharts, FusionCharts, FusionTheme, Charts);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
