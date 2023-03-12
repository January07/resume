<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, computed, onMounted, watch } from 'vue'

const props = defineProps({
  chartData: {
    type: Object,
    required: true
  }
})

const option = ref(props.chartData)

// 基於準備好的 DOM，初始化 echarts 實例
const myChart = computed(() => {
  return echarts.init(document.getElementById('main')!)
})

const renderChart = () => {
  myChart.value.clear()
  myChart.value.setOption(option.value)
}

onMounted(() => {
  window.onresize = () => {
    myChart.value.resize()
  }
})

watch(
  () => props.chartData,
  (newValue, _oldValue) => {
    option.value = newValue
    renderChart()
  }
)
</script>

<template>
  <div id="main"></div>
</template>

<style lang="scss" scoped>
#main {
  height: 400px;
}
</style>