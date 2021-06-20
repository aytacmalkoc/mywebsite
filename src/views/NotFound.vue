<script>
import BaseLayout from "@/components/Base/BaseLayout.vue";

export default {
  name: "NotFound",
  components: {
    BaseLayout,
  },
};
</script>

<template>
  <base-layout>
    <section class="section py-100 mt-100 mt-mobile-50">
      <div class="container">
        <div class="text-center">
          <h2>
            sayfa bulunamadı
            <i class="fas fa-heart-broken fa-xs color-dark"></i>
          </h2>
          <p class="color-grey">
            <span class="font-weight-bold">{{
              this.$router.currentRoute._value.path.split("/")[1]
            }}</span>
            bağlantısına ait bir şeyler yok gibi gözüküyor.
          </p>
        </div>
      </div>
    </section>
  </base-layout>
</template>