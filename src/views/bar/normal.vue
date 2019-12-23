<template>
    <div class="chart">
        <div class="today-charts" ref="normalBar" style="width: 500px;height:500px"></div>
    </div>
</template>

<script>
    export default {
        name: "normal",
        data() {
            return {
                normalBar: null
            }
        },
        mounted() {
            this.normalBarChart();
            window.onresize = () => { // 根据窗口大小自适应
                this.normalBar.resize();
            }
        },
        methods: {
            // 今日新增挂牌饼图绘制
            normalBarChart() {
                // 基于准备好的dom，初始化echarts实例
                this.normalBar = this.$echarts.init(this.$refs['normalBar'])
                // 绘制图表

                this.normalBar.setOption({
                    title: {
                        text: '标准柱状图'
                    },
                    tooltip: {},
                    // 设置图例块颜色
                    color:['#ff4060', '#36b559'],
                    legend: {
                        data: ['销量', '价格']
                    },
                    // x 轴
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [
                        // 每设置一项每列多一根柱子
                        {
                            name: '销量',
                            type: 'bar',
                            // 柱子宽度
                            barWidth: 25,
                            // 该项柱子颜色
                            itemStyle: {
                                color: '#36b559'
                            },
                            // 如果不用设置具体每一条直接用数据数组就行
                            data: [5, 20, 36, 10, 10, 20]
                        }, {
                            name: '价格',
                            type: 'bar',
                            barWidth: 25,
                            // 如果要设置具体每一条，则展开数据对象
                            data: [
                                {
                                    name: '衬衫',
                                    itemStyle: {
                                        color: '#ff4060'
                                    },
                                    value: 21
                                },
                                {
                                    name: '羊毛衫',
                                    itemStyle: {
                                        color: '#ff4e90'
                                    },
                                    value: 21
                                },
                                {
                                    name: '雪纺衫',
                                    itemStyle: {
                                        color: '#ff648c'
                                    },
                                    value: 21
                                },
                                {
                                    name: '裤子',
                                    itemStyle: {
                                        color: '#ff98c3'
                                    },
                                    value: 21
                                },
                                {
                                    name: '高跟鞋',
                                    itemStyle: {
                                        color: '#ffc1d6'
                                    },
                                    value: 21
                                },
                                {
                                    name: '袜子',
                                    itemStyle: {
                                        color: '#ffe0f0'
                                    },
                                    value: 21
                                }
                            ]
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