<template>
  <div style="height:800px;">
    <fusioncharts :type="type" :width="width" :height="height" :dataFormat="dataFormat" :dataSource="dataSource"
      :events="events"></fusioncharts>
  </div>
</template>

<script>
  // const axios = require('axios');
  import { axiosInstance } from '../axios'

  export default {
    name: 'home',

    data() {
      const self = this

      return {
        type: "mscolumn2d",
        width: "100%",
        height: "80%",
        dataFormat: "json",
        dataSource: {
          "chart": {
            "theme": "fusion",
            "caption": "Comparison of Quarterly Revenue",
            "xAxisname": "Quarter",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "plotFillAlpha": "80",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1"
          },
          "categories": [{
            "category": [{
              "label": "Q1"
            }, {
              "label": "Q2"
            }, {
              "label": "Q3"
            }, {
              "label": "Q4"
            }]
          }],
          "dataset": [],
        },

        events: {
          dataplotClick(evt, args) {
            window.gotoLinkPage = function (link) {
              self.$router.push({
                path: link
              })
            };
          }
        },
      }
    },

    created: function () {
      const self = this
      this.dataSource.dataset = []

      axiosInstance.get('/data.json', {
                baseURL: '/'
            })
        .then(function (response) {
          self.dataSource.dataset = response.data
        });
    },
  }
</script>