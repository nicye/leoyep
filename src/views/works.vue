<template>
  <div class="works">
    <collection :title="data.title" :data="data.data" />
  </div>
</template>
<script>
import collection from "@/components/collection.vue";
export default {
  name: "Works",
  components: {
    // videoPlayer,
    collection
  },
  data() {
    try {
      const data = JSON.parse(window.sessionStorage.getItem("LEO_WORKS_PIESE"));
      if (!data) throw "error";

      return {
        data
      };
    } catch (error) {
      this.$router.push("/project");
    }
  }
};
</script>
<style lang="scss" scoped>
.works {
  background: #000;
  padding: 0 10vw;
}
</style>
