<template>
    <div class="chart">
        <div class="today-charts" ref="chart-4" style="width: 800px;height:500px"></div>
    </div>
</template>

<script>
    export default {
        name: "demo-4",
        data() {
            return {
                chart4: null
            }
        },
        mounted() {
            this.lineChart();
            window.onresize = () => { // 根据窗口大小自适应
                this.chart4.resize();
            }
        },
        methods: {
            lineChart() {
                // 基于准备好的dom，初始化echarts实例
                this.chart4 = this.$echarts.init(this.$refs['chart-4'])
                // 绘制图表

                this.chart4.setOption({
                    // x 坐标轴
                    xAxis: {
                        type: 'category',
                        data: ['静安区', '浦东区', '奉贤区', '宝山区', '黄浦区', '松江区', '徐汇区', '普陀区'],
                        axisLine: {
                            // 坐标轴颜色
                            lineStyle: {
                                color: 'rgb(42, 184, 191)'
                            }
                        },
                        axisLabel: {
                            color: () => {
                                return '#ffffff'
                            }
                        },
                        axisTick: {
                            show: false
                        }
                    },
                    // y 坐标轴
                    yAxis: [
                        {
                            type: 'value',
                            // 坐标轴线
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#ffffff'
                                }
                            },
                            // 刻度分割线
                            splitLine: {
                                lineStyle: {
                                    color: 'rgb(18,77,115)'
                                }
                            },
                        }
                    ],
                    // 数值提示框
                    tooltip: {},
                    // 设置图例颜色
                    color: ['#b057b0'],
                    // 图例配置
                    legend: {
                        top: 0,
                        left: '50%',
                        data: [
                            {
                                name: '平均年限',
                                icon: 'roundRect',
                                textStyle: {
                                    color: '#ffffff'
                                }
                            },
                        ]
                    },

                    series: [
                        {
                            name: '平均年限',
                            data: [2, 5.5, 1.8, 1.7, 2.4, 8, 6.4, 5.4],
                            type: 'line',
                            lineStyle: {
                                color: "#b057b0"
                            },
                        },
                    ]
                })
            },
        }
    }
</script>

<style scoped>
    .chart {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #051E4C;
    }
</style>