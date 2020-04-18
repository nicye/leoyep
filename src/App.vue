<template>
  <div id="app" class="app" :style="{ 'background-image': `url(${bg})` }">
    <img v-if="img" alt="bg logo" class="bg-action-dep" :src="img" />
    <div style="text-align: center">
      <img alt="Vue logo" class="logo-img" :src="logo" />
    </div>
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/project">项目</router-link>
      <router-link to="/action">绘图</router-link>
      <router-link to="/3d">3D</router-link>
    </div>
    <transition name="slide-right">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
const imgMap = {
  bgHome: "//leoyep.oss-cn-shanghai.aliyuncs.com/pic/bg1.jpg",
  bg3d: "//leoyep.oss-cn-shanghai.aliyuncs.com/pic/bg2.jpg",
  bgFooter: "//leoyep.oss-cn-shanghai.aliyuncs.com/pic/bg2-1.jpg",
  logo: "//leoyep.oss-cn-shanghai.aliyuncs.com/pic/logo.gif"
};
export default {
  data() {
    return {
      logo: imgMap.logo,
      bgMap: {
        Home: {
          bg: imgMap.bgHome
        },
        "3d": {
          bg: imgMap.bg3d,
          imgDep: imgMap.bgFooter
        }
      }
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
      return this.bgItem.imgDep || "";
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
  color: #2c3e50;
  background-size: 100vw;
  background-position: 0 0;
  background-repeat: no-repeat;
  height: 100vh;
  .logo-img {
    width: 60vw;
    margin: 2vw auto 0;
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
