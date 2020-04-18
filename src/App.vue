<template>
  <div id="app" class="app" :style="{ 'background-image': `url(${bg})` }">
    <img alt="Vue logo" class="logo-img" :src="logo" />
    <img v-if="bgImgDep" alt="bg logo" :class="bgClassDep" :src="bgImgDep" />
    <img alt="bg logo" :class="bgClass" :src="bgImg" />
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/project">项目</router-link>
      <router-link to="/action">绘图</router-link>
      <router-link to="/action">3D</router-link>
    </div>
    <transition name="slide-right">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
const imgMap = {
  bgHome: "//leoyep.oss-cn-shanghai.aliyuncs.com/pic/bg1.jpg",
  bgAction: "//leoyep.oss-cn-shanghai.aliyuncs.com/pic/bg2.jpg",
  bgFooter: "//leoyep.oss-cn-shanghai.aliyuncs.com/pic/bg2-1.jpg",
  logo: "//leoyep.oss-cn-shanghai.aliyuncs.com/pic/logo.gif"
};
export default {
  data() {
    return {
      logo: imgMap.logo,
      bgMap: {
        Home: {
          class: "bg-home",
          img: imgMap.bgHome
        },
        Action: {
          class: "bg-action",
          img: imgMap.bgAction,
          bg: imgMap.bgAction,
          imgDep: imgMap.bgFooter,
          classDep: "bg-action-dep"
        }
      }
    };
  },
  computed: {
    bgItem() {
      return this.bgMap[this.$route.name] || {};
    },
    bgImg() {
      return this.bgItem.img || imgMap.bgHome;
    },
    bg() {
      return this.bgItem.bg;
    },
    bgClass() {
      return this.bgItem.class || "bg-home";
    },
    bgImgDep() {
      return this.bgItem.imgDep || "";
    },
    bgClassDep() {
      return this.bgItem.classDep || "";
    }
  }
};
</script>
<style lang="scss">
html {
  font-size: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-size: 100vw;
  background-position: 0 0;
  background-repeat: no-repeat;
  height: 100vh;
  .logo-img {
    width: 60vw;
    margin-top: 2vw;
  }
  .bg-home {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .bg-action {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .bg-action-dep {
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

#nav {
  padding: 10px;
  background: #fff;
  margin: 0 10vw;
  display: flex;
  justify-content: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
