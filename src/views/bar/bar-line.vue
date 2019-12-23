<template>
    <div class="chart">
        <div class="today-charts" ref="chart-3" style="width: 800px;height:500px"></div>
    </div>
</template>

<script>
    export default {
        name: "demo-3",
        data() {
            return {
                chart3: null
            }
        },
        mounted() {
            this.barLineChart();
            window.onresize = () => { // 根据窗口大小自适应
                this.chart3.resize();
            }
        },
        methods: {
            // 折线 + 柱状 双拼
            barLineChart() {
                // 基于准备好的dom，初始化echarts实例
                this.chart3 = this.$echarts.init(this.$refs['chart-3'])
                // 绘制图表

                this.chart3.setOption({
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
                            // 设置坐标轴的最大值
                            max: function(value) {
                                return value.max * 3 - value.max * 3 % 1000;
                            }
                        },
                        {
                            type: 'value',
                            axisLine: {
                                show: false,
                            },
                            // 坐标轴文字
                            axisLabel: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            }
                        },

                    ],
                    // 数值提示框
                    tooltip: {},
                    // 设置图例颜色
                    color: ['#2dd8fd', '#b057b0'],
                    // 图例配置
                    legend: {
                        top: 0,
                        left: '50%',
                        data: [
                            {
                                name: '成交均价/万元',
                                icon: 'roundRect',
                                textStyle: {
                                    color: '#ffffff'
                                }
                            },
                            {
                                name: '成交总价/万元',
                                icon: 'roundRect', // 图例形状
                                textStyle: {
                                    color: '#ffffff',
                                },
                            },
                        ]
                    },

                    series: [
                        {
                            name: '成交均价/万元',
                            data: [2310, 1547, 2000, 1500, 1147, 1320, 1600, 1800],
                            type: 'bar',
                            smooth: 0.4,
                            barWidth: 20,
                            itemStyle: {
                                barBorderRadius: 10,
                                shadowColor: 'rgba(255, 255, 255, 0.1)',
                                shadowOffsetY: -40
                            }
                        },
                        {
                            name: '成交总价/万元',
                            data: [40000, 45378, 23876, 45342, 25000, 36548, 42222, 22754],
                            type: 'line',
                            yAxisIndex: 1,
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