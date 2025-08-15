<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
  img: string;
}
defineProps<Props>();
</script>
<template>
  <section class="bg-gradient-to-b from-black/10 to-black/0 py-12">
    <div
      class="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-48"
    >
      <!-- Left: Illustration -->
      <div class="w-full md:w-1/2">
        <img :src="img" alt="Classroom illustration" class="w-full h-auto" />
      </div>

      <!-- Right: Text + CTA -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h2 class="text-3xl md:text-4xl font-bold text-black leading-tight">
          <slot name="title"></slot>
        </h2>
        <p class="mt-4 text-gray-500 text-xl text-justify font-light">
          <slot name="subtitle"></slot>
        </p>

        <!-- CTA Button -->
        <div class="mt-4">
          <a
            href="https://www.ehlweb.theskyroute.com/book-appointment" target="_blank"
            class="btn text-white bg-gradient-to-bl to-primary from-orange-300 hover:from-primary"
          >
            BOOK FREE CONSULTATION
            <Icon
              icon="mdi:arrow-right"
              class="w-8 h-8 ml-3 inline-block z-10"
            />
            <!-- <span
              class="ml-3 w-12 h-12 bg-primary text-white rounded-full p-2 flex items-center justify-center text-sm"
            >
              <span
                class="absolute rounded-full bg-primary right-0 top-0 bottom-0 w-full translate-x-full group-hover:translate-x-0 transition duration-300 flex items-center justify-center"
              ></span>
              <Icon icon="mdi:arrow-right" class="w-4 h-4 inline-block z-10" />
            </span> -->
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
