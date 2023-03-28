<template>
  <div class="project">
    <div
      class="project-item"
      v-for="item in story"
      :key="item.title"
      @click="handleWorks($event, item)"
    >
      <div class="project-item-title">
        <div>{{ item.title }}</div>
      </div>
      <div
        class="project-item-content"
        :style="{
          'background-image': `url(${item.data[0].value})`
        }"
      >
        <div class="project-item-content-mask">
          <i class="el-icon-video-play"></i>
        </div>
      </div>

      <!-- <collection :title="item.title" :data="[item.data[0]]" /> -->
    </div>
    <el-dialog
      custom-class="works-dialog"
      :visible.sync="dialogVisible"
      destroy-on-close
      fullscreen
    >
      <div class="works">
        <collection :title="works.title" :data="works.data" />
        <div
          class="el-backtop"
          style="left: 5px; top: 5px"
          @click="dialogVisible = false"
        >
          <i class="el-icon-back"></i>
        </div>
        <el-backtop :right="0" :bottom="150" target=".works"></el-backtop>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import collection from "@/components/collection.vue";
import data from "../assets/json/data.json";
export default {
  name: "project",
  components: {
    // videoPlayer,
    collection
  },
  data() {
    return {
      dialogVisible: false,
      story: data,
      works: {}
    };
  },
  methods: {
    handleWorks($event, works) {
      window.sessionStorage.setItem(
        "LEO_WORKS_PIESE",
        JSON.stringify({
          ...works
        })
      );
      this.works = works;
      this.dialogVisible = true;

      // this.$router.push("/works");
    }
  }
};
</script>
<style lang="scss">
.iframe-item {
  margin: 30px 5vw;
}

.project {
  &-item {
    overflow: hidden;
    border: 1rem solid #000;
    border-radius: 10px;
    margin: 30px 5vw;
    background-color: #000;

    // line-height: 2.2rem;
    &-title {
      font-family: "PingFang SC";
      letter-spacing: 2px;
      background: #fff;
      border-radius: 10px;
      font-size: 18px;
      font-weight: 600;
      height: 2rem;
      line-height: 2.2rem;
      display: inline-block;
      margin: 5px;
      padding: 0 10px;
    }

    &-content {
      min-height: 50vw;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      position: relative;
      &-mask {
        background-color: rgba(9, 30, 50, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        .el-icon-video-play {
          font-size: 60px;
          background-color: #fff;
          border-radius: 100%;
        }
      }
    }
  }

  .works-dialog {
    .works {
      margin-top: 35px;
      padding: 2vw 5vw;
      height: calc(100vh - 35px);
      overflow-y: auto;
    }

    .el-dialog__header {
      padding: 0;
    }

    .el-dialog__body {
      background: #000;
      padding: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }
  }
}
</style>
