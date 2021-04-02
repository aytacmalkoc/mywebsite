<script>
import BaseLayout from '@/components/Base/BaseLayout.vue';
import BlogList from '../components/Blog/BlogList.vue';

export default {
    name: 'Blog',
    components: { BaseLayout, BlogList },
}
</script>

<template>
    <base-layout>
        <section class="section py-100 mt-100 mt-mobile-50">
            <div class="container">
                <div class="text-center">
                    <h2>blog</h2>
                    <p class="color-grey">son güncelleme: 02.04.2021</p>
                </div>
                <blog-list />
            </div>
        </section>
    </base-layout>
</template>