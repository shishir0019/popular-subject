<script setup lang="ts">
import { Icon } from "@iconify/vue";
import SuccessStoryBg from "../../../../assets/blog-bg-1.png";

import SuccessStory1 from "../../../../assets/success/1.png";
import SuccessStory2 from "../../../../assets/success/2.png";
import SuccessStory3 from "../../../../assets/success/3.png";
import SuccessStory4 from "../../../../assets/success/4.png";
import SuccessStory5 from "../../../../assets/success/5.png";
import VideoItem from "./VideoItem.vue";
import { reactive } from "vue";
interface Video {
  thumbnail: string;
  videoUrl: string;
  isPlaying: boolean;
}

const videosData: Video[] = reactive([
  {
    thumbnail: SuccessStory1,
    videoUrl:
      "https://www.ehlweb.theskyroute.com/assets/front/video/123456789.mp4",
    isPlaying: false,
  },
  {
    thumbnail: SuccessStory2,
    videoUrl:
      "https://www.ehlweb.theskyroute.com/assets/front/video/67bd9c8d23295.mp4",
    isPlaying: false,
  },
  {
    thumbnail: SuccessStory3,
    videoUrl:
      "https://www.ehlweb.theskyroute.com/assets/front/video/Mostarima-Akter-Brishti.mp4",
    isPlaying: false,
  },
  {
    thumbnail: SuccessStory4,
    videoUrl:
      "https://www.ehlweb.theskyroute.com/assets/front/video/abdus-sayeed-khan.mp4",
    isPlaying: false,
  },
  {
    thumbnail: SuccessStory5,
    videoUrl:
      "https://www.ehlweb.theskyroute.com/assets/front/video/hafsa-akter-250225.mp4",
    isPlaying: false,
  },
]);

const playVideo = (video: Video) => {
  videosData.forEach((video) => {
    video.isPlaying = false;
  })
  video.isPlaying = true;
};
</script>

<template>
  <div
    class="py-16"
    :style="{ backgroundImage: `url(&quot;${SuccessStoryBg}&quot;)` }"
  >
    <div class="container mx-auto">
      <!-- Title -->
      <div class="mb-8">
        <h2 class="text-2xl md:text-4xl font-bold text-gray-900">
          OUR SUCCESS STORIES
        </h2>
        <p class="text-gray-500 text-lg mt-2">
          A glimpse of our student's success stories
        </p>
      </div>

      <!-- Video Slider -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <VideoItem
          v-for="(video, index) in videosData"
          :key="index"
          :video="video"
          @click="playVideo(video)"
        />
      </div>
    </div>
    <div class="flex justify-center items-center my-16">
      <a
        href="#"
        class="btn btn-primary"
      >
        EXPLORE MORE
        <Icon icon="mdi:arrow-right" class="w-4 h-4 inline-block" />
      </a>
    </div>
  </div>
</template>
