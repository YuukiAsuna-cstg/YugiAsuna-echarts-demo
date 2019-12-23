<template>
    <div class="chart">
        <div class="today-charts" ref="chart-1" style="width: 500px;height:500px"></div>
    </div>
</template>

<script>
    export default {
        name: "demo-1",
        data(){
            return {
                chart1: null
            }
        },
        mounted(){
            this.drawTodayChart();
            window.onresize = () => { // 根据窗口大小自适应
                this.chart1.resize();
            }
        },
        methods: {
            // 今日新增挂牌饼图绘制
            drawTodayChart() {
                // 基于准备好的dom，初始化echarts实例
                this.chart1 = this.$echarts.init(this.$refs['chart-1'])
                // 绘制图表

                this.chart1.setOption({
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    color: [ '#67D706', '#1B80DD', '#FF7448', '#FDDA66', '#A876E5', '#E2E2E2'],
                    legend: {
                        data:['土流挂牌受理总数','未提交','审核中','审核未通过','挂牌中', '已撤牌', '已提交'],
                        textStyle: {
                            color: '#ffffff',
                        },
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['宝山', '浦东', '嘉定', '金山', '奉贤', '松江', '闵行',  '崇明',  '青浦'],
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
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
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
                        }
                    ],
                    series : [
                        {
                            name:'已提交',
                            type:'bar',
                            // 属于哪一项的部分
                            stack: '土流挂牌受理总数',
                            data:[20, 21, 22, 23, 24, 25, 26, 27, 28],
                            itemStyle: {
                                barBorderRadius: [0, 0, 10, 10],
                            }
                        },
                        {
                            name:'挂牌中',
                            type:'bar',
                            stack: '土流挂牌受理总数',
                            data:[10, 10, 10, 10, 10, 10, 10, 10, 10]
                        },
                        {
                            name:'审核中',
                            type:'bar',
                            stack: '土流挂牌受理总数',
                            data:[3, 4, 3, 5, 7, 5, 6, 4, 3]
                        },
                        {
                            name:'未提交',
                            type:'bar',
                            barWidth : 20,
                            stack: '土流挂牌受理总数',
                            data:[2, 3, 0, 5, 1, 0, 4, 2, 3]
                        },
                        {
                            name:'审核未通过',
                            type:'bar',
                            stack: '土流挂牌受理总数',
                            data:[5, 5, 5, 5, 5, 5, 5, 5, 5]
                        },
                        {
                            name:'已撤牌',
                            type:'bar',
                            stack: '土流挂牌受理总数',
                            data:[2, 2, 2, 2, 2, 2, 2, 2, 2],
                            itemStyle: {
                                barBorderRadius: [10, 10, 0, 0],
                            }
                        },
                    ]
                })
            },
        }
    }
</script>

<style scoped>
    .chart{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #051E4C;
    }
</style>