<template>
  <div class="collention">
    <slot name="title">
      <div class="collention-title">
        {{ title }}
      </div>
    </slot>
    <template v-for="item in data">
      <el-image
        v-if="item.type == 'image'"
        :key="item.value"
        style="width: 100%"
        :src="item.value"
        :lazy="lazy"
      />
      <video-player
        v-else-if="item.type == 'video'"
        :key="item.value"
        :src="item.value"
        preload="auto"
        style="width: 100%"
        type="video/mp4"
        crossorigin="use-credentials"
        controls
      ></video-player>
      <picture-player
        v-else-if="item.type == 'imageList'"
        :key="item.value[0] || 0"
        :srcs="item.value"
        :lazy="lazy"
      />
    </template>
  </div>
</template>
<script>
import picturePlayer from "@/components/picture-player.vue";
import videoPlayer from "./video-player";
export default {
  components: { picturePlayer, videoPlayer },
  props: {
    title: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: () => []
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.collention {
  &-title {
    font-family: "PingFang SC";
    letter-spacing: 2px;
    background: #fff;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 600;
    height: 2.2rem;
    line-height: 2.2rem;
    display: inline-block;
    margin: 5px;
    padding: 0 10px;
  }
}
</style>
