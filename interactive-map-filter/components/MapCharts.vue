<template>
  <div ref="chart" style="width: 100%; height: 500px;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      chart: null,
      europeJson: null, // Define europeJson variable
    };
  },
  async mounted() {
    this.chart = echarts.init(this.$refs.chart);
    await this.fetchAndRenderMap();
  },
  methods: {
    async fetchAndRenderMap() {
      try {
        // Show loading animation
        this.chart.showLoading();

        // Fetch Europe map data
        const response = await fetch('/static/Belgium.provinces.WGS84.geojson');
        if (!response.ok) {
          throw new Error(`Failed to fetch Europe map data: ${response.statusText}`);
        }
        
        // Get JSON data
        this.europeJson = await response.json();

        // Register map using GeoJSON data
        echarts.registerMap('Europe', this.europeJson);

        // Configure option
        const option = {
          series: [
            {
              type: 'map',
              map: 'Europe',
              data: [
                // Example data for each province
                { name: 'Province1', value: 100 },
                { name: 'Province2', value: 200 },
                // Add data for other provinces...
              ],
              // Other series configurations...
              emphasis: {
                label: {
                  show: true,
                  color: '#000', // Label color
                },
                itemStyle: {
                  borderColor: '#fff', // Province border color
                },
              },
            }
          ],
          visualMap: {
            min: 0,
            max: 300, // Adjust the max value based on your data
            text: ['High', 'Low'],
            textStyle: {
              color: '#000', // Text color
            },
            inRange: {
              color: ['#d94e5d', '#eac736', '#50a3ba'], // Color scale
            },
            calculable: true,
            show: true,
            left: '10%',
            bottom: '10%',
          },
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
