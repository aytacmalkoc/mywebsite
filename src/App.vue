<script>
import "./assets/css/app.min.css";

export default {
  name: "App",
  created() {
    // TODO: Scriptlerin yüklenişi Promise.All ile array olarak değiştirelecek.

    this.$loadScript("js/jquery.min.js").then(() => {
      this.$loadScript("js/bootstrap.min.js").then(() => {
        this.$loadScript("js/plugins.js").then(() => {
          this.$loadScript("js/custom.js");
        });
      });
    });
  },
};
</script>

<template>
  <router-view />
</template>