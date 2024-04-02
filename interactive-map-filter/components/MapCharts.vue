<template>
  <div ref="chart" style="width: 100%; height: 500px;"></div>
</template>

<script>
import * as echarts from 'echarts';
import europeJson from '../'

export default {
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.fetchAndRenderMap();
  },
  methods: {
    async fetchAndRenderMap() {
      try {
        // Show loading animation
        this.chart.showLoading();

        // Register map
        echarts.registerMap('Europe', europeJson);

        const option = {
          series: [
            {
              type: 'map',
              map: 'Europe',
              // Other series configurations...
            }
          ]
        };

        // Set option to chart
        this.chart.setOption(option);

        // Hide loading animation
        this.chart.hideLoading();
      } catch (error) {
        console.error('Error fetching and rendering map:', error);
      }
    }
  }
};
</script>
