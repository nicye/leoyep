<template>
  <video ref="video" v-bind="$attrs" crossorigin="anonymous">
    <source :src="src" />
  </video>
</template>
<script>
export default {
  props: {
    src: {
      type: String
    }
  },
  data() {
    return {};
  },
  mounted() {
    let video = this.$refs.video;
    if (!video.poster) {
      var scale = 0.8;
      var captureImage = () => {
        var canvas = document.createElement("canvas");
        canvas.width = video.clientWidth * scale;
        canvas.height = video.clientHeight * scale;
        canvas
          .getContext("2d")
          .drawImage(video, 0, 0, canvas.width, canvas.height);
        video.poster = canvas.toDataURL("image/png");
      };
      video.addEventListener("loadeddata", captureImage);
    }
  }
};
</script>
<style lang="scss" scoped>
.my-video-play {
  background: #000;
  color: #fff;
  &-title {
    padding: 30px 0 10px;
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>
