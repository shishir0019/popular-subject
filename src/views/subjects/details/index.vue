<script setup lang="ts">
import { useRoute } from "vue-router";
import Hero from "../popular/pertials/Hero.vue";
import Form from "../popular/pertials/Form.vue";
import Sub from "../../../assets/sub.svg";
import { useSubjectDetail } from "../../../composable/useSubjectDetails";
import { onMounted } from "vue";
import CourseGridView from "./pertials/CourseGridView.vue";
import Universities from "./pertials/Universities.vue";
import { useHead } from "@vueuse/head";

const { subject_id } = useRoute().params;
const { data, top_courses, fetchData, getPopularCourses } = useSubjectDetail();

useHead({
  title: data.value?.subject_area,
  meta: [
    {
      name: "description",
      content: `Find out more about ${data.value?.subject_area} and learn more about its popular universities and courses.`,
    },
    {
      name: "keywords",
      content: `Education Hub, Education, Higher Education, Study, Higher Study, Abroad, UK, United Kingdom, Malaysia, Singapore, India, Visa, Visa Consultancy, Scholarship, IELTS, Mock Test`,
    },
  ],
});

onMounted(() => {
  Promise.all([
    fetchData(subject_id.toString()),
    getPopularCourses(subject_id.toString(), {
      page: 1,
      subject_area_id: subject_id.toString(),
      per_page: 10,
    }),
  ]);
});
</script>

<template>
  <div>
    <Hero :img="Sub">
      <template #title>
        Start your journey with<br />
        <span class="text-secondary">{{ data?.subject_area }}</span>
      </template>
    </Hero>
    <Universities v-if="!!data" :subject="data" />
    <div class="py-16 bg-gray-200">
      <div class="container mx-auto mb-10">
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h2 class="text-3xl md:text-4xl font-bold text-black leading-tight">
            Popular Courses
          </h2>
          <p class="text-gray-500 text-xl text-justify font-light">
            Choose Your Desired Course From Our Wide Range Of Courses
          </p>
        </div>
        <div>
          <template v-if="top_courses.length">
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4"
            >
              <CourseGridView
                v-for="course in top_courses"
                :key="course.id"
                :course="course"
              />
            </div>
            <div class="flex justify-center items-center my-16">
              <a href="#" class="btn btn-primary">
                EXPLORE MORE
                <Icon icon="mdi:arrow-right" class="w-4 h-4 inline-block" />
              </a>
            </div>
          </template>
          <template v-else>
            <div class="flex flex-col items-center col-span-4">
              <img
                class="w-[400px] mx-auto"
                src="https://www.ehlweb.theskyroute.com/assets/front/website-img/search.svg"
                alt=""
              />
              <p class="text-gray-500 text-xl text-justify font-light mb-6">
                Oops!... No results found
              </p>
              <a
                :href="`https://ehlweb.theskyroute.com/search-course/?subject_area=${subject_id}`"
                class="btn btn-primary"
              >
                SEE ALL COURSES
                <Icon icon="mdi:arrow-right" class="w-4 h-4 inline-block" />
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
    <Form></Form>
  </div>
</template>
