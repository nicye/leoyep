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
        <div :class="{ 'nav-fixed-to-top': fixed, nav: true }">
          <router-link to="/">首页</router-link>
          <router-link to="/project">项目</router-link>
          <router-link to="/drawing">个人绘画作品</router-link>
          <router-link to="/3d">3D</router-link>
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
  logo: "//leoyep.oss-accelerate.aliyuncs.com/jurna (1).gif"
};
export default {
  data() {
    return {
      cc: 0,
      logo: imgMap.logo,
      bgMap: {
        Home: {
          bg: imgMap.bgHome
        },
        "3d": {
          bg: imgMap.bg3d,
          class: "yellow"
        }
      },
      fixed: false
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
    }
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
  }
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
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-fixed-to-top {
  position: fixed;
  top: 0;
  // left: 10vw;
  // right: 10vw;
  z-index: 999;
  flex-direction: column;
  border-radius: 30px;
  right: 0;
  height: 40vh;
  top: 20vh;
  width: 32px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 10px 0px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
