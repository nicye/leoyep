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
          'background-image': `url(${item.data[0].value})`,
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
          style="right: 0px; bottom: 250px"
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
export default {
  name: "project",
  components: {
    // videoPlayer,
    collection,
  },
  data() {
    return {
      dialogVisible: false,
      story: [
        {
          title: "大相径庭",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/dxjt/dxjt2.png?x-oss-process=style/jurna",
            },
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/dxjt/dxjt1.png?x-oss-process=style/jurna",
            },
            {
              type: "video",
              value: "//leoyep.oss-accelerate.aliyuncs.com/dxjt/dxjt.mp4", // url地址
            },
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/dxjt/dxjt3.png?x-oss-process=style/jurna",
            },
          ],
        },
        {
          title: "神墙的故事",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/sqd/sqd.jpg?x-oss-process=style/jurna",
            },
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/sqd/sqd2.jpg?x-oss-process=style/jurna",
            },
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/sqd/sqd3.jpg?x-oss-process=style/jurna",
            },
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/sqd/sqd4.jpg?x-oss-process=style/jurna",
            },
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/sqd/sqd5.jpg?x-oss-process=style/jurna",
            },
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/sqd/sqd6.jpg?x-oss-process=style/jurna",
            },
          ],
        },
        {
          title: "car",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/car/car.jpg?x-oss-process=style/jurna",
            },
            {
              type: "video",
              value: "//leoyep.oss-accelerate.aliyuncs.com/car/carmusic.mp4", // url地址
            },
          ],
        },

        {
          title: "Fight",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/flight/Fight.jpg?x-oss-process=style/jurna",
            },
            {
              type: "video",
              value: "//leoyep.oss-accelerate.aliyuncs.com/flight/flight.mp4", // url地址
            },
            {
              type: "imageList",
              value: [
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-01.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-02.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-03.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-04.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-05.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-06.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-07.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-08.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-09.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-10.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-11.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-12.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-13.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-14.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-15.jpg?x-oss-process=style/jurna",
              ], // url地址
            },
          ],
        },
        {
          title: "特殊使命",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/tes/tes.jpg?x-oss-process=style/jurna",
            },
            {
              type: "video",
              value: "//leoyep.oss-accelerate.aliyuncs.com/tes/tes1.mp4", // url地址
            },
            {
              type: "imageList",
              value: [
                "//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-1.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-2.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-3.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-4.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-5.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-6.jpg?x-oss-process=style/jurna",
                "//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-7.jpg?x-oss-process=style/jurna",
              ],
            },
            {
              type: "video", // 类型
              value: "//leoyep.oss-accelerate.aliyuncs.com/tes/tes2.mp4",
            },
            {
              type: "video", // 类型
              value: "//leoyep.oss-accelerate.aliyuncs.com/tes/tes3.mp4",
            },
          ],
        },
        {
          title: "不会忘记",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/grandma/grandma.jpg?x-oss-process=style/jurna",
            },
            {
              type: "video",
              value: "//leoyep.oss-accelerate.aliyuncs.com/grandma/grandma.mp4", // url地址
            },
          ],
        },
        {
          title: "封神",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/IMG_5961.PNG?x-oss-process=style/jurna",
            },
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/share.jpg?x-oss-process=style/jurna",
            },
            {
              type: "video",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/c807b6a60820a2c868a11246e05c413e_11893225320976222672.mp4",
            },
          ],
        },
        {
          title: "天将神龙",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/tjsl/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg?x-oss-process=style/jurna",
            },
            {
              type: "video",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/408e128c9e3fb9ae7573b7365cf1484d_14058486732207301026.mp4",
            },
          ],
        },
        // {
        //   title: "节选A",
        //   data: [],
        // },
        {
          title: "Others",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-accelerate.aliyuncs.com/others/others.jpg?x-oss-process=style/jurna",
            },
            {
              type: "video",
              value: "//leoyep.oss-accelerate.aliyuncs.com/others/others.mp4",
            },
          ],
        },
      ],
      works: {},
    };
  },
  methods: {
    handleWorks($event, works) {
      window.sessionStorage.setItem(
        "LEO_WORKS_PIESE",
        JSON.stringify({
          ...works,
        })
      );
      this.works = works;
      this.dialogVisible = true;

      // this.$router.push("/works");
    },
  },
};
</script>
<style lang="scss">
.project {
  &-item {
    overflow: hidden;
    border: 1rem solid #000;
    border-radius: 10px;
    margin: 50px 10vw;
    background-color: #000;

    // line-height: 2.2rem;
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
    &-content {
      height: 25rem;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 200% auto;
      &-mask {
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
      background: #000;
      padding: 0 10vw;
      height: 100%;
      overflow-y: auto;
    }
    .el-dialog__header {
      padding: 0;
    }
    .el-dialog__body {
      padding: 0;
    }
  }
}
</style>
