<template>
  <div class="collention">
    <div class="collention-title">{{ title }}</div>
    <template v-for="item in data">
      <el-image
        v-if="item.type == 'image'"
        :key="item.value"
        style="width: 100%"
        :src="item.value"
        lazy
      />
      <video
        v-else-if="item.type == 'video'"
        preload="auto"
        :key="item.value"
        :src="item.value"
        :sources="[{ type: 'video/mp4', src: item.value }]"
        style="width: 100%"
        controls
      ></video>
      <picture-player
        v-else-if="item.type == 'imageList'"
        :key="item.value[0] || 0"
        :srcs="item.value"
      />
    </template>
  </div>
</template>
<script>
import picturePlayer from "@/components/picture-player.vue";
export default {
  components: { picturePlayer },
  props: {
    title: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.collention {
  background: #000;
  &-title {
    font-family: "PingFang SC";
    letter-spacing: 2px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    height: 2.2rem;
    line-height: 2.2rem;
  }
}
</style>
