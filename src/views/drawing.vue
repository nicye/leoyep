<template>
  <div>
    <div class="drawing">
      <div class="drawing-item" v-for="(item, idx) in story" :key="item.title">
        <collection :data="item.data" lazy>
          <div slot="title" class="drawing-item-title" :style="titleStyle(idx)">
            {{ item.title }}
          </div>
        </collection>
      </div>
    </div>
  </div>
</template>
<script>
import collection from "@/components/collection.vue";
export default {
  components: { collection },
  data() {
    return {
      story: [
        {
          title: "数绘",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/drawing/shuhui/shuhui1.png?x-oss-process=style/water"
            },
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/drawing/shuhui/shuhui2.png?x-oss-process=style/water"
            },
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/drawing/shuhui/shuhui3.jpg?x-oss-process=style/water"
            }
          ]
        },
        {
          title: "手绘",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/drawing/shouhui/handhui1.jpg?x-oss-process=style/water"
            },
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/drawing/shouhui/handhui2.jpg?x-oss-process=style/water"
            },
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/drawing/shouhui/handhui3.jpg?x-oss-process=style/water"
            },
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/drawing/shouhui/handhui4.jpg?x-oss-process=style/water"
            }
          ]
        },
        {
          title: "漫画",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/drawing/comic/1.jpg?x-oss-process=style/water"
            },
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/drawing/comic/2.jpg?x-oss-process=style/water"
            }
          ]
        }
      ]
    };
  },

  methods: {
    titleStyle(idex) {
      const random = Math.random();
      let deg = (random * 10 + idex) % 7;
      if (random < 0.5) deg *= -1;
      console.log(deg);
      return {
        transform: "rotate(" + deg + "deg)",
        "-ms-transform": "rotate(" + deg + "deg)",
        "-moz-transform": "rotate(" + deg + "deg)",
        "-webkit-transform": "rotate(" + deg + "deg)",
        "-o-transform": "rotate(" + deg + "deg)"
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.drawing {
  padding: 0 6vw;
  &-item {
    margin-bottom: 50px;
    &-title {
      background: #000;
      color: #fff;
      display: inline-block;
      margin: 12px 0 8px;
      padding: 8px 12px;
      font-size: 18px;
    }
  }
}
</style>
