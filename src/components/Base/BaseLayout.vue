<script>
import Header from "@/components/Header/Header.vue";
import Footer from "../Footer/Footer.vue";

export default {
  name: "BaseLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div id="wrapper" class="clearfix">
    <Header />

    <div id="main-content">
      <slot />

      <Footer />
    </div>
  </div>
</template>
