
<template>
    <div class="video-box" style="overflow: hidden;">
        <video :src="propValue.url" controls></video>
    </div>
</template>

<script>
export default {
    props: {
        propValue: {
            type: Object,
            require: true,
            default: () => { },
        },
        element: {
            type: Object,
            default: () => { },
        },
    },
    data() {
        return {
            width: 0,
            height: 0,
            video: null,
            canvas: null,
            ctx: null,
            isFirst: true,
        }
    },
}
</script>
<style lang="less" scoped>

.video-box{
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-bottom: 56.25%;
    video{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }
}
</style>
