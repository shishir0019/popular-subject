<script setup lang="ts">
import { onMounted } from "vue";
import UniversityGridViewSkeleton from "./UniversityGridViewSkeleton.vue";
import { Icon } from "@iconify/vue";
import UniversityGridView from "./UniversityGridView.vue";
import { useRoute } from "vue-router";
import { useUniversities } from "../../../../composable/useUniversities";
import type { ISubjectArea } from "../../../../types/subject";

interface Props {
  subject: ISubjectArea;
}

defineProps<Props>();

const { subject_id } = useRoute().params;

const { loading, data: universities, fetchData, params } = useUniversities();

onMounted(() => {
  fetchData(subject_id.toString(), {
    page: 1,
    subject_area_id: subject_id.toString(),
    per_page: 10,
  });
});
</script>
<template>
  <div class="container mx-auto pb-10">
    <!-- Title -->
    <div class="mb-8">
      <h2 class="text-black font-bold text-2xl md:text-4xl">
        Leading Universities
      </h2>
      <p class="text-gray-600 text-lg mt-2">
        Explore renowned universities offering top programs in
        {{ subject?.subject_area }}
      </p>
    </div>

    <!-- Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <template v-if="loading">
        <UniversityGridViewSkeleton v-for="item in 12" :item />
      </template>
      <UniversityGridView
        v-for="university in universities"
        :key="university.id"
        :university="university"
      />
    </div>
    <template v-if="!universities.length && !loading">
      <div class="flex flex-col items-center col-span-4">
        <img
          class="w-[400px] mx-auto"
          src="https://www.ehlweb.theskyroute.com/assets/front/website-img/search.svg"
          alt=""
        />
        <p class="text-gray-500 text-xl text-justify font-light mb-6">
          Oops!... No results found
        </p>
      </div>
    </template>
    <div class="flex justify-center items-center mt-8">
      <button
        class="btn btn-primary"
        v-if="params.page !== params.last_page"
        :disabled="!!loading"
        @click="
          fetchData(subject_id.toString(), { ...params, page: params.page + 1 })
        "
      >
        <Icon
          :icon="loading ? 'eos-icons:loading' : 'mdi:plus'"
          class="w-6 h-6 inline-block mr-2"
        />
        Load More Universities
      </button>
    </div>
  </div>
</template>
