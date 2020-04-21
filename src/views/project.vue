<template>
  <div class="project">
    <div
      class="project-item"
      v-for="item in story"
      :key="item.title"
      @click="handleWorks($event, item)"
    >
      <collection :title="item.title" :data="[item.data[0]]" />
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
          style="right: 0px; bottom: 250px;"
          @click="dialogVisible = false"
        >
          <i class="el-icon-caret-left"></i>
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
    collection
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
                "//leoyep.oss-cn-shanghai.aliyuncs.com/dxjt/dxjt2.png?x-oss-process=style/water"
            },
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/dxjt/dxjt1.png?x-oss-process=style/water"
            },
            {
              type: "video",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/dxjt/dxjt.mp4" // url地址
            },
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/dxjt/dxjt3.png?x-oss-process=style/water"
            }
          ]
        },
        {
          title: "神墙的故事",
          data: [
            {
              type: "image",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/sqd/sqd.jpg"
            },
            {
              type: "image",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/sqd/sqd2.jpg"
            },
            {
              type: "image",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/sqd/sqd3.jpg"
            },
            {
              type: "image",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/sqd/sqd4.jpg"
            },
            {
              type: "image",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/sqd/sqd5.jpg"
            },
            {
              type: "image",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/sqd/sqd6.jpg"
            }
          ]
        },
        {
          title: "car",
          data: [
            {
              type: "image",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/car/car.jpg"
            },
            {
              type: "video",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/car/carmusic.mp4" // url地址
            }
          ]
        },

        {
          title: "Fight",
          data: [
            {
              type: "image",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/Fight.jpg"
            },
            {
              type: "video",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/flight.mp4" // url地址
            },
            {
              type: "imageList",
              value: [
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-01.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-02.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-03.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-04.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-05.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-06.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-07.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-08.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-09.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-10.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-11.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-12.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-13.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-14.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/flight/ketchs-1-15.jpg"
              ] // url地址
            }
          ]
        },
        {
          title: "特殊使命",
          data: [
            {
              type: "image",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/tes/tes.jpg"
            },
            {
              type: "video",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/tes/tes1.mp4" // url地址
            },
            {
              type: "imageList",
              value: [
                "//leoyep.oss-cn-shanghai.aliyuncs.com/tes/sketch4-1-1.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/tes/sketch4-1-2.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/tes/sketch4-1-3.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/tes/sketch4-1-4.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/tes/sketch4-1-5.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/tes/sketch4-1-6.jpg",
                "//leoyep.oss-cn-shanghai.aliyuncs.com/tes/sketch4-1-7.jpg"
              ]
            },
            {
              type: "video", // 类型
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/tes/tes2.mp4"
            },
            {
              type: "video", // 类型
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/tes/tes3.mp4"
            }
          ]
        },
        {
          title: "不会忘记",
          data: [
            {
              type: "image",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/grandma/grandma.jpg"
            },
            {
              type: "video",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/grandma/grandma.mp4" // url地址
            }
          ]
        },
        {
          title: "偶遇",
          data: [
            {
              type: "image",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/ouyu/ouyu.jpg"
            },
            {
              type: "video",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/ouyu/ouyu1.mp4"
            },
            {
              type: "video",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/ouyu/ouyu2.mp4"
            }
          ]
        },

        {
          title: "天将神龙",
          data: [
            {
              type: "image",
              value:
                "//leoyep.oss-cn-shanghai.aliyuncs.com/tjsl/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg"
            },
            {
              type: "video",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/tjsl/tjsl.mp4"
            }
          ]
        },
        {
          title: "Others",
          data: [
            {
              type: "image",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/others/others.jpg"
            },
            {
              type: "video",
              value: "//leoyep.oss-cn-shanghai.aliyuncs.com/others/others.mp4"
            }
          ]
        }
      ],
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
.project {
  &-item {
    overflow: hidden;
    border: 1rem solid #000;
    border-radius: 10px;
    margin: 50px 10vw;
    background: #000;
    &-title {
      padding: 0.8rem 0 0.3rem;
      font-size: 1.2rem;
      font-weight: 600;
      color: #fff;
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
