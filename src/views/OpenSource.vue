<script>
import BaseLayout from "@/components/Base/BaseLayout.vue";
import OpenSourceList from "@/components/OpenSource/OpenSourceList.vue";

export default {
  components: { BaseLayout, OpenSourceList },
  data() {
    return {
      repositories: [],
      loading: false,
    };
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchRepositories").then((res) => {
      this.repositories = this.filterReadme(res);
      this.loading = false;
    });
  },
};
</script>

<template>
  <base-layout>
    <section class="section py-100 mt-100 mt-mobile-50">
      <div class="container">
        <div class="text-center">
          <h2>
            open source
            <i class="fas fa-heart fa-xs color-dark"></i>
          </h2>
          <p class="color-grey">
            Bu sayfada listelenenlerin tümüne <a href="#">github</a> hesabımdan
            ulaşabilir,<br />
            kullanabilir ve geliştirmemde yardımcı olabilirsiniz.
          </p>
        </div>

        <div class="loader" v-if="loading"></div>
        <open-source-list :repos="repositories" v-else />
      </div>
    </section>
  </base-layout>
</template>

<style scoped>
.loader {
  border: 3px solid #f3f3f3;
  border-top: 3px solid #4a6572;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  position: absolute;
  left: 50%;
  top: 100%;
  margin-left: -20px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>