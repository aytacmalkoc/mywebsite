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
    this.$store
      .dispatch("fetchRepositories")
      .then((res) => (this.repositories = this.filterReadme(res)));
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

        <div v-if="loading">loading</div>
        <open-source-list :repos="repositories" v-else />
      </div>
    </section>
  </base-layout>
</template>