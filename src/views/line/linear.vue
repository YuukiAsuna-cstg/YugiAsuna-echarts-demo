<template>
    <div class="chart">
        <div class="today-charts" ref="chart-2" style="width: 800px;height:500px"></div>
    </div>
</template>

<script>
    export default {
        name: "demo-2",
        data() {
            return {
                chart2: null
            }
        },
        mounted() {
            this.lineChart();
            window.onresize = () => { // 根据窗口大小自适应
                this.chart2.resize();
            }
        },
        methods: {
            lineChart() {
                // 基于准备好的dom，初始化echarts实例
                this.chart2 = this.$echarts.init(this.$refs['chart-2'])
                // 绘制图表

                this.chart2.setOption({
                    // x 坐标轴
                    xAxis: {
                        type: 'category',
                        data: ['静安区', '浦东区', '奉贤区', '宝山区', '黄浦区', '松江区', '徐汇区', '普陀区'],
                        axisLine: {
                            // 坐标轴颜色
                            lineStyle: {
                                color : 'rgb(42, 184, 191)'
                            }
                        },
                        axisLabel: {
                            color: () => {return '#ffffff'}
                        },
                        axisTick: {
                            show: false
                        }
                    },
                    // y 坐标轴
                    yAxis:{
                        type: 'value',
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color : '#ffffff'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgb(18,77,115)'
                            }
                        }
                    },
                    tooltip: {},
                    // 设置图例颜色
                    color: ['#b057b0', '#2dd8fd'],
                    // 图例配置
                    legend: {
                        top: 0,
                        left: '50%',
                        data: [
                            {
                            name: '成交笔数',
                            icon: 'roundRect', // 图例形状
                            textStyle: {
                                color: '#ffffff',
                            },
                        },
                            {
                                name: '成交金额',
                                icon: 'roundRect',
                                textStyle: {
                                    color: '#ffffff'
                                }
                            },
                        ]
                    },
                    series: [
                        {
                            name: '成交笔数',
                            data: [820, 1120, 901, 890, 1290, 800, 1320, 600],
                            type: 'line',
                            smooth: 0.4,
                            lineStyle: {
                                color: "#b057b0"
                            },
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 0.5,
                                    colorStops: [{
                                        offset: 0, color: '#b057b0' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#051E4C' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                        },
                        {
                            name: '成交金额',
                            data: [2310, 1547, 2412, 1500, 1800, 1320, 1600, 1800],
                            type: 'line',
                            smooth: 0.4,
                            lineStyle: {
                                color: "#2dd8fd"
                            },
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 0.5,
                                    colorStops: [{
                                        offset: 0, color: '#2dd8fd' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#051E4C' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
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