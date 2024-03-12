<template>
    <div ref="charts" class="">

    </div>
</template>

<script setup>
import * as echarts from 'echarts';

export default {
    data() {
        return {
            chart: null,
        };
    },
    mounted() {
        this.chart = echarts.init(this.$refs.chart)
    },
}
</script>

