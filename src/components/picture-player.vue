<template>
  <div class="my-picture-player">
    <el-image
      :src="srcs[index]"
      style="width: 100%"
      :preview-src-list="previewSrcList"
    >
      <div
        style="font-size: 1rem;min-height: 220px;line-height: background: #fff"
        slot="placeholder"
        class="image-slot"
      >
        loading<span class="dot">...</span>
      </div>
    </el-image>
    <div class="my-picture-player-operation" v-if="srcs.length > 1">
      <el-button
        class="my-picture-player-operation-btn"
        type="text"
        :disabled="index <= 0"
        @click="index--"
      >
        <i class="el-icon-arrow-left" style="font-weight: 600"
      /></el-button>

      <el-button
        class="my-picture-player-operation-btn"
        type="text"
        :disabled="index >= srcs.length - 1"
        @click="index++"
      >
        <i class="el-icon-arrow-right" style="font-weight: 600"
      /></el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    srcs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      index: 0,
      previewSrcList: []
    };
  },
  computed: {},
  watch: {
    srcs() {
      this.getPreviewSrcList();
    }
  },
  created() {
    this.getPreviewSrcList();
  },
  methods: {
    getPreviewSrcList() {
      for (let i = 0; i < this.srcs.length; i++) {
        let img = new Image();
        img.src = this.srcs[i];
        img.onload = () => {
          this.previewSrcList.push(this.srcs[i]);
        };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.my-picture-player {
  position: relative;
  font-size: 0;
  &-operation {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: left;
    background: rgba($color: #000000, $alpha: 0.6);
    padding: 0 10px;
  }
}
</style>
