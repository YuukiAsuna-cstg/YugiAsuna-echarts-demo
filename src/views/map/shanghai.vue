<template>
    <div class="chart">
        <div ref="map-shanghai" class="charts" style="height:800px"></div>
    </div>
</template>

<script>
    import json from './shanghai.json'

    export default {
        name: 'shanghai',
        data() {
            return {
                mapData: {
                    data: [
                        {
                            name: 'A',
                            value: [75.45, 452, 217]
                        }, {
                            name: 'C',
                            value: [45.21, 784, 55]
                        }, {
                            name: 'D',
                            value: [15.75, 762, 104]
                        }, {
                            name: 'B',
                            value: [78.45, 7862, 80]
                        }, {
                            name: 'G',
                            value: [51.40, 784, 60]
                        }, {
                            name: '闸北区',
                            value: [35.22, 415, 104]
                        }, {
                            name: 'E',
                            value: [11.78, 772, 180]
                        }, {
                            name: 'F',
                            value: [45.11, 1277, 107]
                        }, {
                            name: '闵行区',
                            value: [10.54, 4877, 89]
                        }, {
                            name: '宝山区',
                            value: [3.44, 646, 78]
                        }, {
                            name: '嘉定区',
                            value: [7.84, 869, 45]
                        }, {
                            name: '浦东新区',
                            value: [80.27, 3354, 86]
                        }, {
                            name: '金山区',
                            value: [30.10, 5483, 97]
                        }, {
                            name: '松江区',
                            value: [25.07, 4637, 104]
                        }, {
                            name: '青浦区',
                            value: [12.14, 2487, 48]
                        }, {
                            name: '奉贤区',
                            value: [48.21, 6454, 104]
                        }, {
                            name: '崇明区',
                            value: [7.67, 248, 124]
                        }]
                }
            }
        },
        mounted() {
            this.mapShanghaiChart()
            window.onresize = () => { // 根据窗口大小自适应
                this.map.resize()
            }
        },
        methods: {
            mapShanghaiChart() {
                this.$echarts.registerMap('上海', json)
                this.map = this.$echarts.init(this.$refs['map-shanghai'])
                this.map.setOption({
                    title: { // 设置标题
                        text: '',
                        top: '10%',
                        left: '30%',
                        textStyle: {
                            fontSize: 18,
                            fontWeight: 300,
                            color: '#b6d7ff'
                        }
                    },
                    tooltip: { // 设置鼠标移上去的弹框显示效果
                        trigger: 'item',
                        // 自定义弹框
                        formatter: function (params) {
                            console.log(params)
                            let name

                            // 处理映射过的区名
                            switch (params.data.name) {
                                case 'A':
                                    name = '黄浦区'
                                    break
                                case 'B':
                                    name = '静安区'
                                    break
                                case 'C':
                                    name = '徐汇区'
                                    break
                                case 'D':
                                    name = '长宁区'
                                    break
                                case 'E':
                                    name = '虹口区'
                                    break
                                case 'F':
                                    name = '杨浦区'
                                    break
                                case 'G':
                                    name = '普陀区'
                                    break
                                default:
                                    name = params.data.name
                                    break
                            }

                            const data = params.data.value
                            let list = []
                            let listItem = ''
                            list.push(
                                '<div>' + name + '</div>' +
                                '<div style="display: flex">' +
                                '&nbsp&nbsp成交金额：' + data[0] + '亿元</div>' +
                                '<div style="display: flex">' +
                                '&nbsp&nbsp成交面积：' + data[1] + '</div>' +
                                '<div style="display: flex">' +
                                '&nbsp&nbsp成交数量：' + data[2] + '</div>'
                            )
                            listItem = list.join('')
                            return '<div class="showBox">' + listItem + '</div>'
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        top: '50%',
                        left: '50%',
                        icon: 'circle',
                        data: [],
                        selectedMode: 'single',
                        selected: {},
                        itemWidth: 12,
                        itemHeight: 12,
                        itemGap: 30,
                        inactiveColor: '#b6d7ff',
                        textStyle: {
                            color: '#ecc564',
                            fontSize: 14,
                            fontWeight: 300,
                            padding: [0, 0, 0, 15]
                        }
                    },
                    geo: { // 设置地图的显示信息
                        map: '上海', // 注意  哪个区域的就显示哪个区域的名称
                        label: {
                            normal: { // 设置字体相关信息
                                show: true,
                                color: '#ffffff',
                                fontSize: 14,
                            },
                            emphasis: { // 设置鼠标移上去hover效果
                                show: true,
                                color: '#fff'
                            }
                        },
                        roam: false,
                        // 地图块单独设置样式

                        itemStyle: { // 设置整体地图块的相关显示信息
                            normal: {
                                areaColor: '#3bb2eb',
                                borderColor: '#ffffff',
                                borderWidth: 1
                            },
                            emphasis: {
                                areaColor: '#236efe' // hover效果
                            }
                        }
                    },
                    series: [{ // 地图块的相关信息
                        name: '',
                        type: 'map',
                        geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
                        data: this.mapData.data
                    }],
                    // 自定义名称映射(解决区域过小名称不方便显示)
                    nameMap: {
                        '黄浦区': 'A',
                        '静安区': 'B',
                        '徐汇区': 'C',
                        '长宁区': 'D',
                        '虹口区': 'E',
                        '杨浦区': 'F',
                        '普陀区': 'G'
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .chart{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #051E4C;
    }
    .charts {
        min-width: 30px;
        min-height: 30px;
        width: 100%;
        height: 100%;
        /*transform: scale(1.1);*/
    }
</style>
