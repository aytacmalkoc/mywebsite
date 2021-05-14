<script>
export default {
  props: ["repo"],
};
</script>

<template>
  <div class="col-12 col-md-4">
    <div class="blog-item">
      <div class="post-content position-relative text-center">
        <ul class="blog-meta color-grey">
          <li>{{ this.formatDate(repo.created_at) }}</li>
          <li :style="{ color: this.findColor(repo.language) }">
            {{ repo.language }}
          </li>
          <li v-if="repo.license != null">{{ repo.license.spdx_id }}</li>
        </ul>
        <a href="#" class="text-size-md font-weight-500">{{ repo.name }}</a>
        <p class="text-muted mt-20 mb-20">
          {{ repo.description }}
        </p>
        <div class="position-absolute like-post">
          <a href="#">
            <i class="fal fa-external-link fa-md color-dark"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>