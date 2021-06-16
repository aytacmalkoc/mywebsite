<script>
import BaseLayout from "@/components/Base/BaseLayout.vue";

export default {
  name: "Home",
  components: { BaseLayout },
};
</script>

<template>
  <base-layout>
    <section class="section hero-section-top-padding pb-100 mt-50">
      <div class="container">
        <div class="row align-items-center mt-100 mt-mobile-0">
          <div class="col-12">
            <p class="text-size-xl font-weight-300 color-dark">
              selam, ben Aytac.
            </p>
          </div>
        </div>

        <div class="row mt-30">
          <div class="col-12 col-sm-10">
            <p class="text-size-md">
              Aktif olarak
              <span class="font-weight-500 color-dark">Laravel</span>,
              <span class="font-weight-500 color-dark">Vue.js</span> ve
              <span class="font-weight-500 color-dark">Next.js</span> ile
              projeler geliştirmekteyim. Ayrıca
              <span class="font-weight-500 color-dark">React Native</span> ve
              <span class="font-weight-500 color-dark">Ionic</span> ile mobil
              uygulamalar konusunda kendimi geliştiriyorum. Projeleriniz için
              bana aşağıdaki sosyal medya hesaplarım üzerinden ulaşabilirsiniz.
            </p>

            <ul class="social social-list styled-social text-left mt-30">
              <li class="social-title font-weight-500 color-dark">
                Beni Takip Edin
              </li>
              <li>
                <a
                  href="https://www.instagram.com/aytacmalkoc35"
                  class="social-button instagram"
                  target="_blank"
                  title="instagram"
                >
                  <span>@aytacmalkoc35</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/jrd_aytacmalkoc"
                  class="social-button twitter"
                  target="_blank"
                  title="twitter"
                >
                  <span>@jrd_aytacmalkoc</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com/aytacmalkoc"
                  class="social-button github"
                  target="_blank"
                  title="github"
                >
                  <span>@aytacmalkoc</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aytacmalkoc"
                  class="social-button linkedin"
                  target="_blank"
                  title="linkedin"
                >
                  <span>@aytacmalkoc</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hi@aytacmalkoc.com.tr?subject=Tanışalım%20:)"
                  class="social-button icon-envelope-fill"
                  target="_blank"
                  title="linkedin"
                >
                  <span>hi@aytacmalkoc.com.tr</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </base-layout>
</template>