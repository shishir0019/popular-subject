<script setup lang="ts">
import { onMounted } from "vue";
import { usePopularSubject } from "../../../composable/usePopularSubject";
import SubjectItemSkeleton from "./SubjectItemSkeleton.vue";
import { Icon } from "@iconify/vue";
import SubjectItem from "./SubjectItem.vue";

const { loading, data, params, fetchData } = usePopularSubject();

onMounted(() => {
  fetchData();
});
</script>
<template>
  <div class="max-w-[1320px] mx-auto py-10">
    <!-- Title -->
    <div class="text-center mb-8">
      <h2 class="text-primary font-bold text-2xl md:text-4xl">
        EXPLORE POPULAR SUBJECTS
      </h2>
      <p class="text-gray-600 text-lg font-bold mt-2">
        Discover the top subjects chosen by students worldwide.
      </p>
    </div>

    <!-- Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
    <template v-if="loading">
      <SubjectItemSkeleton v-for="item in 12" :item />
    </template>
      <SubjectItem
        v-for="subject in data"
        :key="subject.id"
        :subject
        class="rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-gray-200 group"
      />
    </div>

    <!-- Pagination -->
    <div class="flex justify-center items-center mt-8 space-x-1">
      <button
        class="px-4 py-3 border cursor-pointer rounded text-sm hover:secondary text-secondary hover:bg-gray-200 border-secondary"
        :disabled="params.page === 1"
        @click="fetchData({ ...params, page: params.page - 1 })"
      >
        <Icon icon="mdi:arrow-left" class="w-4 h-4 inline-block" /> Prev
      </button>

      <button
        v-for="page in params.last_page"
        :key="page"
        @click="fetchData({ ...params, page })"
        :class="[
          'px-4 py-3 border cursor-pointer rounded text-sm hover:secondary text-secondary border-secondary',
          page === params.page
            ? 'bg-secondary text-white'
            : 'hover:bg-gray-200',
        ]"
      >
        {{ page }}
      </button>

      <button
        class="px-4 py-3 border cursor-pointer rounded text-sm hover:secondary text-secondary hover:bg-gray-200 border-secondary"
        :disabled="params.page === params.last_page"
        @click="fetchData({ ...params, page: params.page + 1 })"
      >
        Next <Icon icon="mdi:arrow-right" class="w-4 h-4 inline-block" />
      </button>
    </div>
  </div>
</template>

<!-- <script lang="ts" setup>
import { ref, computed } from "vue";

interface Subject {
  id: number;
  subject_area: string;
  department_id: number;
}

const subjects = ref<Subject[]>([
  { id: 2, subject_area: "Accounting", department_id: 1 },
  { id: 71, subject_area: "Actuarial Science", department_id: 18 },
  { id: 127, subject_area: "Aerospace Engineering", department_id: 9 },
  { id: 6, subject_area: "Agriculture", department_id: 2 },
  { id: 109, subject_area: "Anatomy", department_id: 6 },
  { id: 7, subject_area: "Animal Science", department_id: 2 },
  { id: 49, subject_area: "Anthropology", department_id: 12 },
  { id: 47, subject_area: "Archaeology", department_id: 12 },
  { id: 16, subject_area: "Architecture", department_id: 4 },
  { id: 37, subject_area: "Artificial Intelligence", department_id: 9 },
  { id: 57, subject_area: "Artificial Intelligence & Data Science", department_id: 14 },
  { id: 15, subject_area: "Astronomy", department_id: 3 },
]);

const currentPage = ref(1);
const perPage = 12;

const totalPages = computed(() => Math.ceil(subjects.value.length / perPage));

const paginatedSubjects = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return subjects.value.slice(start, start + perPage);
});

const goToPage = (page: number) => {
  currentPage.value = page;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
</script> -->
