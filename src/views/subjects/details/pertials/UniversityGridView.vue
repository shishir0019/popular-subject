<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import type { IUniversity } from "../../../../types/subject";
import { urlGenerator } from "../../../../utils/helper";
import { useRoute } from "vue-router";

const props = defineProps<{
  university: IUniversity;
}>();

const { subject_id } = useRoute().params;

// Helper for safe number parsing and default
const globalRank = props.university.world_ranking ?? "N/A";
const countryRank = props.university.country_ranking ?? "N/A";

const onCoverImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://ehlcrm.theskyroute.com/storage/university-cover-photo/20231204152420501480-Cardiff%20University.jpeg';
  console.warn("Image failed to load, fallback applied.");
}

const onIconImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://cdn-icons-png.flaticon.com/512/45/45801.png';
  console.warn("Image failed to load, fallback applied.");
}

</script>

<template>
  <div class="max-w-sm bg-white overflow-hidden hover:shadow-lg transition relative flex flex-col">
    <!-- Cover photo -->
    <img
      :src="urlGenerator(university.cover_photo)"
      @error="onCoverImageError"
      alt="University cover photo"
      class="w-full h-48 object-cover relative"
      loading="lazy"
    />

    <div class="relative flex-1 flex flex-col">
      <!-- Logo overlapping cover photo -->
      <div
        class="w-24 h-24 rounded-full -mt-12 mb-4 overflow-hidden p-2 mx-auto bg-white border-2 border-gray-600"
      >
        <img
          :src="urlGenerator(university.logo)"
          @error="onIconImageError"
          alt="University logo"
          class="object-contain w-full h-full p-2"
        />
      </div>

      <!-- University name -->
      <h2 class="text-center text-xl font-semibold text-gray-800">
        {{ university.name }}
      </h2>

      <!-- Location -->
      <p class="text-center text-sm text-gray-600 mt-1 mb-3">
        <Icon icon="mdi:map-marker" class="w-4 h-4 inline-block mr-1" />
        Location: {{ university.cities.name }}
      </p>

      
      <hr class="my-4 border-gray-300 mt-auto" />
      <!-- Rankings -->
      <div class="flex justify-around text-center px-6">
        <div class="flex flex-col mb-2">
            <span class="text-2xl text-primary font-bold">
                {{ globalRank }}
            </span>
            <span class="text-xs font-semibold">Global(QS)</span>
        </div>
        <div class="flex flex-col">
          <span
            class="text-primary text-2xl font-bold mb-1"
          >
            {{ countryRank }}
          </span>
          <span class="text-xs font-semibold">in Country</span>
        </div>
      </div>
      <!-- Button -->
      <a :href="`https://ehlweb.theskyroute.com/search-course?university=${university.id}&name=${university.name.split(' ').map(word => word.toLowerCase()).join('-')}&subject_area=${subject_id}`" target="_blank"
        type="button"
        class="btn btn-ghost w-full mt-4"
      >
        Find Courses
    </a>
    </div>
  </div>
</template>

<style scoped></style>
