<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Sub from "../../../assets/sub.svg";
</script>
<template>
  <section class="bg-secondary/20 py-12">
    <div
      class="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-48"
    >
      <!-- Left: Illustration -->
      <div class="w-full md:w-1/2">
        <img :src="Sub" alt="Classroom illustration" class="w-full h-auto" />
      </div>

      <!-- Right: Text + CTA -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h2
          class="text-3xl md:text-4xl font-bold text-primary leading-tight"
        >
          FIND MOST POPULAR<br />
          SUBJECTS TO STUDY
        </h2>
        <p class="mt-4 text-gray-700 text-xl text-justify">
          Our expert consultants will guide you in choosing the best academic
          and career path, ensuring you make informed decisions for a successful
          future.
        </p>

        <!-- CTA Button -->
        <div class="mt-6">
          <a
            href="#"
            class="inline-flex items-center rounded-full bg-primary text-white group font-semibold transition duration-300 relative overflow-hidden"
          >
            <span class="pl-6 py-3 z-10">BOOK FREE CONSULTATION</span>
            <span
              class="ml-3 w-12 h-12 bg-secondary text-white rounded-full p-2 flex items-center justify-center text-sm"
            >
              <span
                class="absolute rounded-full z-0 bg-secondary right-0 top-0 bottom-0 w-full translate-x-4/4 group-hover:translate-x-0/4 transition duration-300 flex items-center justify-center"
              ></span>
              <Icon icon="mdi:arrow-right" class="w-4 h-4 inline-block z-10" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
