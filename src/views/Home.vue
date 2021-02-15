<template>
  <div class="container mx-auto home">
    <div
      class="flex flex-row flex-wrap items-center justify-around min-h-screen gap-2"
    >
      <template v-if="!response.articles.length">
        <h1 class="text-blue-700">
          Loading...
        </h1>
      </template>
      <template v-else>
        <a
          :href="article.url"
          v-for="(article, index) in response.articles"
          :key="index"
          class="p-0 transition-all duration-100 bg-white rounded-md shadow-md hover:shadow-xl focus:shadow-xl md:w-1/2 lg:w-1/4"
        >
          <article-card :article="article" />
        </a>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import NewsApi, { Response } from "@/util/news";
import ArticleCard from "@/components/ArticleCard.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: { ArticleCard },
  name: "Home",
  setup(_) {
    const api = new NewsApi(process.env.VUE_APP_NEWS_API_KEY);
    const response = ref<Response>({
      articles: [],
      totalResults: 0,
      status: "ok",
    });

    onMounted(async () => {
      const {
        query: { q, country },
      } = useRoute();
      if (q) {
        response.value = await api.everything({
          q: q.toString(),
          country: country?.toString() || "us",
        });
      } else {
        response.value = await api.topHeadlines({
          country: country?.toString() || "us",
        });
      }
    });

    return {
      response,
    };
  },
});
</script>