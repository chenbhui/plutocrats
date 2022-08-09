
<template>
    <div style="overflow: hidden;">
        <!-- <canvas ref="canvas" width="480" height="640" style="width:100%; height:100%"></canvas> -->
        <video src="@/assets/video/cutePKQ.mp4" controls width="100%" height="100%"></video>
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
    watch: {
        /* 'element.style.width': function () {
            this.drawImage()
        },
        'element.style.height': function () {
            this.drawImage()
        },
        'propValue.flip.vertical': function () {
            this.mirrorFlip()
        },
        'propValue.flip.horizontal': function () {
            this.mirrorFlip()
        }, */
    },
    mounted() {
       /*  this.canvas = this.$refs.canvas;
        this.ctx = this.canvas.getContext('2d');//返回一个用于画布上绘图的环境，2d二维
        this.drawImage(); */
    },
    methods: {
        
       /*  drawImage() {
            const { width, height } = this.element.style
            this.canvas.width = width
            this.canvas.height = height
            if (this.isFirst) {
                this.isFirst = false;
                this.video = document.createElement('video');
                this.video.src = this.propValue.url;
                this.video.onload = () => {
                    this.ctx.drawImage(this.video, 0, 0, width, height);
                    this.mirrorFlip();
                }
            } else {
                this.mirrorFlip()
            }
        },

        mirrorFlip() {
            const { vertical, horizontal } = this.propValue.flip
            const { width, height } = this.element.style
            const hvalue = horizontal ? -1 : 1
            const vValue = vertical ? -1 : 1

            // 清除图片
            this.ctx.clearRect(0, 0, width, height)
            // 平移图片
            this.ctx.translate(width / 2 - width * hvalue / 2, height / 2 - height * vValue / 2)
            // 对称镜像
            this.ctx.scale(hvalue, vValue)
            this.ctx.drawImage(this.img, 0, 0, width, height)
            // 还原坐标点
            this.ctx.setTransform(1, 0, 0, 1, 0, 0)
        },*/
    }, 
}
</script>
