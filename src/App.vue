<template>
  <div
    ref="app"
    id="app"
    :class="[img]"
    :style="{ 'background-image': `url(${bg})` }"
  >
    <transition name="el-fade-in-linear"> </transition>
    <div style="text-align: center">
      <img alt="Vue logo" class="logo-img" :src="logo" />
    </div>
    <transition name="el-fade-in-linear">
      <div ref="nav" id="nav">
        <div :class="{ nav: true }">
          <a href="#/">首页</a>
          <a href="#/project">项目</a>
          <a href="#/drawing">个人绘画作品</a>
          <a href="#/3d">3D</a>
        </div>
      </div>
    </transition>
    <el-backtop :right="0" :bottom="150"></el-backtop>

    <keep-alive>
      <transition name="el-fade-in">
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>
<script>
const imgMap = {
  bgHome: "//leoyep.oss-accelerate.aliyuncs.com/pic/bg1.jpg",
  bg3d: "//leoyep.oss-accelerate.aliyuncs.com/pic/bg2.jpg",
  bgFooter: "//leoyep.oss-accelerate.aliyuncs.com/pic/bg2-1.jpg",
  logo: "//leoyep.oss-accelerate.aliyuncs.com/jurna (1).gif",
};
export default {
  data() {
    return {
      cc: 0,
      logo: imgMap.logo,
      bgMap: {
        Home: {
          bg: imgMap.bgHome,
        },
        "3d": {
          bg: imgMap.bg3d,
          class: "yellow",
        },
      },
      fixed: false,
    };
  },
  computed: {
    bgItem() {
      return this.bgMap[this.$route.name] || {};
    },
    bg() {
      return this.bgItem.bg || imgMap.bgHome;
    },
    img() {
      return this.bgItem.class || "";
    },
  },
  mounted() {
    // const toTop = () => {
    //   if (
    //     this.$refs.nav.offsetTop -
    //       (document.documentElement.scrollTop || document.body.scrollTop) <=
    //     0
    //   ) {
    //     this.fixed = true;
    //   } else {
    //     this.fixed = false;
    //   }
    // };
    // toTop();
    // window.addEventListener("scroll", toTop);
  },
};
</script>
<style lang="scss">
html {
  font-size: 16px;
}
body {
  min-height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-size: 100vw;
  background-position: 0 0;
  background-repeat: no-repeat;
  min-height: 100vh;
  .logo-img {
    width: 60vw;
    margin: 2vw auto 0;
  }

  .bg-3d-dep {
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: -100px;
    z-index: -2;
  }
}
.yellow {
  background: rgb(238, 231, 211);
}
#nav {
  margin: 0 10vw;
}
.nav {
  background: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a{text-decoration: none;}    //这个是设置a标签的默认状态去除下划线
a:visited{text-decoration: none;}    //这个是设置a标签的访问过后的状态去除下划线
a:hover {text-decoration: none;}    //这个是设置a标签的鼠标覆盖状态去除下划线
a:active{text-decoration:none;}  
  a {
    font-weight: bold;
    color: #2c3e50;
      //这个是设置a标签的活跃状态去除下划线
  }
}
</style>
