<template>
  <div>
    <div class="threed">
      <div class="threed-item" v-for="(item, idx) in story" :key="item.title">
        <collection :data="item.data">
          <div slot="title" class="threed-item-title" :style="titleStyle(idx)">
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
          title: "3D作品",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/3d/3d1.jpg?x-oss-process=style/jurna"
            },
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/3d/3d2.jpg?x-oss-process=style/jurna"
            },
            {
              type: "video",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/3d/1586927989747428.mp4"
            },
            {
              type: "video",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/3d/1586928018648983.mp4"
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
<style lang="scss">
.threed {
  padding: 0 6vw;
  &-item {
    &-title {
      display: inline-block;
      margin: 20px 0 10px;
      background: #fff;
      font-weight: 600;
      -webkit-box-shadow: #666 0px 0px 10px;
      -moz-box-shadow: #666 0px 0px 10px;
      box-shadow: #666 0px 0px 10px;
      margin: 12px 0 8px;
      padding: 8px 12px;
      font-size: 18px;
    }
  }
}
</style>
