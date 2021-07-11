<template>
  <video ref="video" v-bind="$attrs"></video>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
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
