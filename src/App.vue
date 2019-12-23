<template>
    <div id="app">
        <el-row class="page">
            <el-col class="menu" :span="3">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        background-color="#1F8655"
                        text-color="#fff"
                        active-text-color="#ffffff">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class=""></i>
                            <span>柱状图</span>
                        </template>
                        <el-menu-item-group>
                            <router-link class="link" to="/bar/normal" tag="div">
                                <el-menu-item index="1-1">
                                    常规柱状图
                                </el-menu-item>
                            </router-link>
                            <router-link class="link" to="/bar/bar-line" tag="div">
                                <el-menu-item index="1-2">
                                    柱状 + 折线 双拼
                                </el-menu-item>
                            </router-link>
                            <router-link class="link" to="/bar/1-n" tag="div">
                                <el-menu-item index="1-3">
                                    单柱多项数据
                                </el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class=""></i>
                            <span>折线图</span>
                        </template>
                        <el-menu-item-group>
                            <router-link class="link" to="/line/normal" tag="div">
                                <el-menu-item index="2-1">
                                    常规折线
                                </el-menu-item>
                            </router-link>
                            <router-link class="link" to="/line/linear" tag="div">
                                <el-menu-item index="2-2">
                                    渐变阴影平滑折线
                                </el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class=""></i>
                            <span>饼图</span>
                        </template>
                        <el-menu-item-group>
                            <router-link class="link" to="/pie/normal" tag="div">
                                <el-menu-item index="3-1">
                                    常规饼图
                                </el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class=""></i>
                            <span>地图</span>
                        </template>
                        <el-menu-item-group>
                            <router-link class="link" to="/map/shanghai" tag="div">
                                <el-menu-item index="4-1">
                                    省份地图-上海
                                </el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col class="charts" :span="21">
                <router-view/>
            </el-col>
        </el-row>

    </div>
</template>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
    }

    :root, body {
        height: 100%;
        width: 100%;
    }

    #app {
        height: 100%;
        .page {
            height: 100%;
            .menu {
                height: 100%;
                background-color: #0ca57e;
                .el-menu {
                    padding: 0;
                    .el-menu-item {
                        padding: 0;
                        width: 100%;
                        min-width: 0;
                    }
                }
                .link {
                    width: 100%;
                    text-decoration: none;
                    color: #ffffff;
                    .link-item {
                        width: 100%;
                    }
                }
            }
            .charts {
                height: 100%;
            }
        }
    }
</style>
