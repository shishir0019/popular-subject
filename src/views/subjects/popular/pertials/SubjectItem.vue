<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{ subject: any }>();

</script>
<template>
  <div
    class="shadow hover:shadow-lg transition cursor-pointer bg-gray-100 group"
  >
    <router-link
    :to="{ name: 'subject-details.index', params: { subject_id: subject?.id } }">
    <div class="overflow-hidden relative">
      <!-- Image placeholder -->
      <div class="h-48 flex items-center justify-center">
        <Icon
          icon="mdi:image"
          class="w-16 h-16 inline-block text-gray-300 ml-2"
        />
      </div>

      <!-- Subject Name -->
      <div class="text-center absolute inset-0 bg-gray-800/15 translate-y-36 group-hover:translate-y-0 group-hover:bg-gray-800/60 group-hover:text-white transition duration-300">
        <h3 class="font-semibold p-3 truncate">
          {{ subject.subject_area }}
        </h3>
      </div>
      <!-- <div
        class="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition duration-300 flex justify-center items-center"
      >
        <h3 class="font-semibold text-white text-2xl text-center">
          {{ subject.subject_area }}
        </h3>
      </div> -->
    </div>
    </router-link>

    <!-- Button -->
    <a
      :href="`/search-course?subject_area=${
        subject.id
      }&name=${subject.subject_area
        .split(' ')
        .map((word: any) => word.toLocaleLowerCase())
        .join('-')}`"
      class="bg-gray-800 z-10 block text-white text-center py-2 cursor-pointer hover:bg-primary transition duration-300"
    >
      Find Courses
    </a>
  </div>
</template>
