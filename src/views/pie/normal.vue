<template>
    <div class="chart">
        <div class="today-charts" ref="chart-5" style="width: 500px;height:500px"></div>
    </div>
</template>

<script>
    export default {
        name: "demo-5",
        data() {
            return {
                chart5: null
            }
        },
        mounted() {
            this.pieChart();
            window.onresize = () => { // 根据窗口大小自适应
                this.chart5.resize();
            }
        },
        methods: {
            // 今日新增挂牌饼图绘制
            pieChart() {
                // 基于准备好的dom，初始化echarts实例
                this.chart1 = this.$echarts.init(this.$refs['chart-5'])
                // 绘制图表

                this.chart1.setOption({
                    // 图表标题
                    // title : {
                    //     text: '某站点用户访问来源',
                    //     subtext: '纯属虚构',
                    //     x:'center'
                    // },
                    // 数据提示框
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    // 图例
                    legend: {
                        bottom: 10,
                        data: ['土地流转', '集体资产', '非集体资产', '权益']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '60%',
                            center: ['50%', '40%'],
                            label: {
                                formatter: '{c} ({d}%)'
                            },
                            data: [
                                {
                                    value: 335,
                                    name: '土地流转',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#5b73fa',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 200,
                                    name: '集体资产',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#ee62a7',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 234,
                                    name: '非集体资产',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#ffc154',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 135,
                                    name: '权益',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#5baaff',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            ],
                            // 单块饼样式
                            itemStyle: {
                                // 鼠标选中样式
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
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
        background-color: #ffffff;
    }
</style>