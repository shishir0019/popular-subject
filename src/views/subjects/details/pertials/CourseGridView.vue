<script lang="ts" setup>
import type { ICourse } from "../../../../types/subject";
import { urlGenerator } from "../../../../utils/helper";

const props = defineProps<{
  course: ICourse;
}>();

const onIconImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://cdn-icons-png.flaticon.com/512/45/45801.png';
  console.warn("Image failed to load, fallback applied.");
}

</script>

<template>
  <div
    class="max-w-md bg-white shadow-md p-4 flex flex-col gap-4 cursor-pointer hover:shadow-lg transition"
  >
    <div class="flex gap-3">
      <!-- University logo -->
      <img
        :src="urlGenerator(course.university.logo)"
        @error="onIconImageError"
        alt="University Logo"
        class="w-20 h-20 object-contain border border-gray-200 p-2"
      />

      <div class="flex flex-col flex-grow">
        <!-- Course name -->
        <h3 class="text-sm font-semibold text-gray-900">
          {{ course.name }}
        </h3>
        <!-- University name -->
        <p class="text-xs text-gray-600 mt-1">
          {{ course.university.name }}
        </p>
      </div>
    </div>
    <div class="mt-auto">
      <!-- Apply button -->
      <a :href="`https://ehlweb.theskyroute.com/course-details/${course.id}/${course.name}`" target="_blank"
        type="button"
        class="btn btn-sm btn-secondary !text-black"
      >
        Apply
    </a>
    </div>
  </div>
</template>

<style scoped></style>
