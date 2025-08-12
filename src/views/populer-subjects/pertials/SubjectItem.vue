<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{ subject: any }>();

</script>
<template>
  <div
    class="rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-gray-200 group"
  >
    <div class="relative">
      <!-- Image placeholder -->
      <div class="h-32 flex items-center justify-center">
        <Icon
          icon="mdi:image"
          class="w-12 h-12 inline-block text-secondary ml-2"
        />
      </div>

      <!-- Subject Name -->
      <div class="text-center group-hover:invisible">
        <h3 class="font-semibold bg-secondary/20 p-3 truncate">
          {{ subject.subject_area }}
        </h3>
      </div>
      <div
        class="absolute inset-0 bg-gray-500/70 z-0 -translate-x-full group-hover:translate-x-0 transition duration-300 flex justify-center items-center"
      >
        <h3 class="font-semibold text-white text-2xl text-center">
          {{ subject.subject_area }}
        </h3>
      </div>
    </div>

    <!-- Button -->
    <a
      :href="`/search-course?subject_area=${
        subject.id
      }&name=${subject.subject_area
        .split(' ')
        .map((word: any) => word.toLocaleLowerCase())
        .join('-')}`"
      class="bg-secondary z-10 block text-white text-center py-2 cursor-pointer hover:bg-primary transition duration-300"
    >
      Find Courses
    </a>
  </div>
</template>
