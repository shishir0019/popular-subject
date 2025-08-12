<script setup lang="ts">
import { nextTick, ref } from "vue";

interface Video {
  thumbnail: string;
  videoUrl: string;
  isPlaying: boolean;
}
const props = defineProps<{ video: Video }>();
const emit = defineEmits(["click"]);

const videoRef = ref<HTMLVideoElement | null>(null);

const playVideo = () => {
  let videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    if (video?.src === props.video.videoUrl) {
      console.log(video);

      video?.play();
    }
    // video?.pause();
  });
  nextTick(() => {
    emit("click");
  });
};
</script>

<template>
  <div
    class="flex-shrink-0 w-60 rounded-lg overflow-hidden relative group"
  >
    <!-- Thumbnail -->
    <img
      v-if="!props.video.isPlaying"
      :src="video.thumbnail"
      alt="video thumbnail"
      class="w-full h-96 object-cover"
    />
    <video v-else
      ref="videoRef"
      :src="video.videoUrl"
      class="w-full h-96 object-cover"
      controls
    ></video>

    <!-- Play Button Overlay -->
    <div
      v-if="!props.video.isPlaying"
      class="absolute inset-0 flex items-center justify-center bg-black/50 transition group"
    >
      <button
        class="bg-secondary rounded-full p-4 group-hover:scale-125 transition duration-300"
        @click="playVideo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  </div>
</template>
