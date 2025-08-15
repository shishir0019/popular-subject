<script setup lang="ts">
import { onMounted } from "vue";
import { usePopularSubject } from "../../../../composable/usePopularSubject";
import SubjectItemSkeleton from "./SubjectItemSkeleton.vue";
import { Icon } from "@iconify/vue";
import SubjectItem from "./SubjectItem.vue";

const { loading, data, params, fetchData } = usePopularSubject();

onMounted(() => {
  fetchData();
});
</script>
<template>
  <div class="container mx-auto py-10">
    <!-- Title -->
    <div class="mb-8">
      <h2 class="text-black font-bold text-2xl md:text-4xl">
        EXPLORE POPULAR SUBJECTS
      </h2>
      <p class="text-gray-600 text-lg mt-2">
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
      />
    </div>
    <div class="flex justify-center items-center mt-8">
      <button class="btn btn-primary" v-if="params.page !== params.last_page" :disabled="!!loading" @click="fetchData({ ...params, page: params.page + 1 })">
        <Icon :icon="loading ? 'eos-icons:loading' : 'mdi:plus'" class="w-6 h-6 inline-block mr-2" />
        Load More Subjects</button>
    </div>
  </div>
</template>
