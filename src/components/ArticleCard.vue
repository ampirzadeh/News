<template>
  <article class="flex h-full md:flex-col">
    <img
      class="object-cover w-1/4 h-auto bg-center rounded-r-none md:w-full rounded-l-md md:rounded-b-none md:rounded-t-md"
      :src="article.urlToImage"
      :alt="article.title"
    />
    <div class="flex flex-col justify-between flex-1 p-4">
      <p>
        {{ article.description }}
      </p>
      <footer class="pt-4" v-if="article.author || article.source.name || date">
        <p v-if="article.author" class="font-semibold">
          Article by:
          <span class="font-normal text-blue-700">
            {{ article.author }}
          </span>
        </p>

        <p v-if="article.source.name" class="font-semibold">
          Source:
          <span class="font-normal text-blue-700">
            {{ article.source.name }}
          </span>
        </p>

        <p v-if="date" class="font-semibold">
          Published At:
          <span class="font-normal text-blue-700">
            {{ date }}
          </span>
        </p>
      </footer>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Article } from "@/util/news";

export default defineComponent({
  name: "HelloWorld",
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
  setup(_) {
    const date = new Date(_.article.publishedAt).toLocaleString();
    return { date };
  },
});
</script>
