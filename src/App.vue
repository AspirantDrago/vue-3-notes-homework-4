<template>
  <div class="wrapper">
    <MainHeaderVue />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <MainFooterVue />
  </div>
</template>

<script>
import MainHeaderVue from "@/components/MainHeader.vue";
import MainFooterVue from "@/components/MainFooter.vue";

export default {
  components: {
    MainHeaderVue,
    MainFooterVue
  },
}
</script>

<style lang="scss">
</style>
