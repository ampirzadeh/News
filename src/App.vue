<template>
  <div
    class="min-h-screen font-sans bg-gradient-to-br from-blue-50 to-blue-100"
  >
    <header class="flex items-center justify-between px-5 py-1 mb-3">
      <router-link
        tag="h1"
        :to="{ name: 'Home' }"
        class="text-3xl text-blue-700"
      >
        Whats Up?
      </router-link>

      <form class="flex">
        <label for="q" class="flex flex-col justify-between mx-4">
          Search for news
          <input
            v-model="q"
            placeholder="Search here"
            type="text"
            id="q"
            name="q"
            class="p-1 transition-all duration-300 rounded-md outline-none focus:ring focus:outline-none"
          />
        </label>
        <label for="country" class="flex flex-col justify-between mx-4">
          Select country
          <select
            v-model="country"
            name="country"
            id="country"
            class="p-1 transition-all duration-300 rounded-md outline-none focus:ring focus:outline-none"
          >
            <option v-for="country in countries" :key="country">
              {{ country }}
            </option>
          </select>
        </label>
      </form>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const {
      query: { q, country },
    } = useRoute();
    const countries = [
      "ae",
      "ar",
      "at",
      "au",
      "be",
      "bg",
      "br",
      "ca",
      "ch",
      "cn",
      "co",
      "cu",
      "cz",
      "de",
      "eg",
      "fr",
      "gb",
      "gr",
      "hk",
      "hu",
      "id",
      "ie",
      "il",
      "in",
      "it",
      "jp",
      "kr",
      "lt",
      "lv",
      "ma",
      "mx",
      "my",
      "ng",
      "nl",
      "no",
      "nz",
      "ph",
      "pl",
      "pt",
      "ro",
      "rs",
      "ru",
      "sa",
      "se",
      "sg",
      "si",
      "sk",
      "th",
      "tr",
      "tw",
      "ua",
      "us",
      "ve",
      "za",
    ];
    return {
      countries,
      q,
      country: country || "us",
    };
  },
});
</script>
