<template>
  <div>
    <div class="threed">
      <div class="threed-item" v-for="(item, idx) in story" :key="item.title">
        <collection :data="item.data" lazy>
          <div slot="title" class="threed-item-title" :style="titleStyle(idx)">
            <div class="cube">
              <div class="item1 item">{{ item.title }}</div>
              <div class="item2 item">{{ item.title }}</div>
              <div class="item3 item">{{ item.title }}</div>
              <div class="item4 item">{{ item.title }}</div>
              <div class="item5 item">{{ item.title }}</div>
              <div class="item6 item">{{ item.title }}</div>
            </div>
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
          title: "3D作品",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/3d/3d1.jpg?x-oss-process=style/water"
            },
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/3d/3d2.jpg?x-oss-process=style/water"
            },
            {
              type: "video",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/3d/1586927989747428.mp4"
            },
            {
              type: "video",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/3d/1586928018648983.mp4"
            }
          ]
        }
      ]
    };
  },

  methods: {
    titleStyle() {
      return {};
    }
  }
};
</script>
<style lang="scss" scoped>
.threed {
  padding: 0 6vw;
  &-item {
    &-title {
      display: inline-block;
      margin: 20px 0 10px;
    }
  }
}
.cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: wrap 3s infinite forwards;
  -webkit-box-shadow: #666 0px 0px 10px;
  -moz-box-shadow: #666 0px 0px 10px;
  box-shadow: #666 0px 0px 10px;
}
@keyframes wrap {
  to {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}
.item {
  width: 100px;
  height: 100px;
  font-size: 16px;
  text-align: center;
  line-height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  background: #fff;
  font-weight: 600;
}
.item1 {
  z-index: 5;
  animation: item1 1s forwards;
}
@keyframes item1 {
  to {
    transform-origin: top;
    transform: rotateX(90deg);
  }
}
.item2 {
  z-index: 4;
  animation: item2 1s forwards;
}
@keyframes item2 {
  to {
    transform-origin: left;
    transform: rotateY(-90deg);
  }
}
.item3 {
  z-index: 3;
  animation: item3 1s forwards;
}
@keyframes item3 {
  to {
    transform-origin: right;
    transform: rotateY(90deg);
  }
}
.item4 {
  z-index: 2;
  animation: item4 1s forwards;
}
@keyframes item4 {
  to {
    transform-origin: center bottom;
    transform: rotateX(-90deg);
  }
}
.item5 {
  z-index: 1;
  animation: item5 1s forwards;
}
@keyframes item5 {
  to {
    transform: translate3d(0, 0, 100px);
  }
}
.item6 {
  z-index: 0;
}
</style>
