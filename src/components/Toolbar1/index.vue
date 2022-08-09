<template>
    <div class="wrapper">
        <h1>lowCode</h1>
        <div class="icon">
            <span class="iconfont icon-chexiao"></span>
            <i class="iconfont icon-chexiaoyou"></i>
        </div>
        <div class="btn-box" style="margin-right: 40px">
            <el-button type="primary" icon="el-icon-video-play" size="small">预览</el-button>
            <el-button type="primary" icon="el-icon-circle-plus-outline" size="small">保存</el-button>
            <el-button type="primary" icon="el-icon-link" size="small">发布</el-button>

        </div>
        <div style="margin-right: 30px;cursor: pointer">
            <i class="el-icon-search"></i>
            <i class="el-icon-plus inDistance"></i>
            <i class="el-icon-s-opportunity inDistance"></i>
            <i class="el-icon-s-claim inDistance"></i>
        </div>
        <div style="width: 40px">
            <el-avatar> user</el-avatar>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    props: {},
    data() {
        return {
            theme: 'dark'
        };
    },
    computed: {},
    created() {

    },
    mounted() {

    },
    methods: {},
    watch: {},
};
</script>

<style lang="less" scoped>
.wrapper {
    background: #ffffff;
    // box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3), 0px 0px 5px #e6e5ed inset;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-bottom: 1px solid #ccc;

    h1 {
        font-size: 25px;
        position: relative;
        flex: 2;
        color: black
    }

    h1:after,
    h1:before {
        content: '';
        background: #fff;
        position: absolute;
        z-index: -1;
        left: 10px;
        right: 10px;
        top: 50%;
        bottom: 0px;
        border-radius: 100px/10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    }

    .btn-box {
        display: flex;
        //margin-right: -40%;
        width: 200px;
        justify-content: space-around;

        .el-button--primary {
            background: #5176ab;
        }
    }

    .el-icon-arrow-left,
    .el-icon-arrow-right,
    .el-icon-search,
    .el-icon-plus,
    .el-icon-s-opportunity,
    .el-icon-s-claim {
        font-size: 25px;
        color: #4e5156;
    }

    .inDistance {
        margin-left: 10px;
    }

    .icon {
        flex: 1;
        cursor: pointer;

        .icon-chexiao,
        .icon-chexiaoyou {
            color: #c9c9c9;
            font-size: 25px;

        }

        .icon-chexiaoyou {
            margin-left: 20px;
        }

    }

}
</style>
