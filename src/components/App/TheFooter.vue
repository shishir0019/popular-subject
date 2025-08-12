<script setup lang="ts">
import { Icon } from "@iconify/vue";
import footerBelow from '../../assets/footer-below.png'

const branches = [
  {
    title: "London Branch",
    address:
      "Mirror Works, 12 Marshgate Lane, London, E15, 2NH, United Kingdom.",
    phone: "+44(0)2032872554",
    email: "info@educationhub-bd.com",
  },
  {
    title: "Gulshan Branch",
    address: "Level 7, Manama MS Toren, Gulshan Badda Link Road, Dhaka 1212.",
    phone: "+8809666779911",
    email: "dhaka@educationhub-bd.com",
  },
  {
    title: "Dhanmondi Branch",
    address: "Level 5, Bikalpa Tower, Road 5/A, Dhanmondi, Dhaka 1209.",
    phone: "+8801844536601",
    email: "dhanmondi@educationhub-bd.com",
  },
  {
    title: "Sylhet Branch",
    address: "Level 3, Sadiq Tower, Nayasarak, Sylhet 3100.",
    phone: "+8801844536611",
    email: "sylhet@educationhub-bd.com",
  },
  {
    title: "Chattogram Branch",
    address:
      "Rubiya Tower, Level 5, Road 03, Zakir Hossain Road, South Khulshi, Chattogram 4225.",
    phone: "+8801844536631",
    email: "chattogram@educationhub-bd.com",
  },
  {
    title: "Mymensingh Branch",
    address:
      "Rokeya Bhaban, Level – 02, 28/3 (Dupakhola Mour) Shehora Road, Mymensingh 2200",
    phone: "+8801844536641",
    email: "mymensingh@educationhub-bd.com",
  },
  {
    title: "France Office",
    address: "13 Av. Laennec, 93380 Pierrefitte-sur-Seine Paris -France",
    phone: "+44 2032872554",
    email: "france@educationhub-bd.com",
  },
  {
    title: "Portugal Office",
    phone: "+44 2032872554",
    email: "portugal@educationhub-bd.com",
  },
  {
    title: "Kuwait",
    phone: "+44 2032872554",
    email: "kuwait@educationhub-bd.com",
  },
  {
    title: "Kenya Office",
    phone: "+44 2032872554",
    email: "kenya@educationhub-bd.com",
  },
  {
    title: "Nigeria Office",
    phone: "+44 2032872554",
    email: "nigeria@educationhub-bd.com",
  },
];
</script>

<template>
  <footer class="bg-[#02143b] text-white pt-10">
    <div class="text-center mb-8">
        <h6 class="text-md font-bold mb-5">Find Us</h6>
        <h1 class="text-4xl font-bold mb-5">AT YOUR DOORSTEP</h1>
        <div class="w-36 h-1 bg-secondary mx-auto"></div>
    </div>
    <div class="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-0">
      <!-- Branch Offices -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm"
      >
        <div v-for="branch in branches" :key="branch.title" class="flex flex-col gap-1 font-medium">
          <h3 class="text-primary font-bold text-2xl mb-2">
            {{ branch.title }}
          </h3>
          <p v-if="branch.address" class="mb-1">
            <icon icon="mdi:map-marker" class="w-4 h-4 inline-block mr-1" />{{
              branch.address
            }}
          </p>
          <p v-if="branch.phone" class="mb-1">
            <icon icon="mdi:phone" class="w-4 h-4 inline-block mr-1" />{{
              branch.phone
            }}
          </p>
          <p v-if="branch.email">
            <icon icon="mdi:email" class="w-4 h-4 inline-block mr-1" />
            <a :href="`mailto:${branch.email}`" class="hover:underline">
              {{ branch.email }}
            </a>
          </p>
        </div>
      </div>

      <!-- Logo and Affiliations -->
      <div class="p-4 rounded-md flex flex-col md:flex-row items-center justify-between relative h-[122px] my-8">
        <img :src="footerBelow" alt="Education Hub Logo" class="absolute inset-0" />
        <div class="absolute right-0 top-0 bottom-0 flex items-center justify-center p-8">
            <div class="flex items-center gap-3 mt-4 md:mt-0">
              <a href="#" class="bg-primary w-8 h-8 rounded-full border flex items-center justify-center hover:bg-secondary transition duration-300">
                <icon icon="mdi:facebook" class="w-4 h-4 inline-block" />
              </a>
              <a href="#" class="bg-primary w-8 h-8 rounded-full border flex items-center justify-center hover:bg-secondary transition duration-300">
                <icon icon="mdi:instagram" class="w-4 h-4 inline-block" />
              </a>
              <a href="#" class="bg-primary w-8 h-8 rounded-full border flex items-center justify-center hover:bg-secondary transition duration-300">
               <icon icon="mdi:linkedin" class="w-4 h-4 inline-block" /> 
              </a>
              <a href="#" class="bg-primary w-8 h-8 rounded-full border flex items-center justify-center hover:bg-secondary transition duration-300">
                <icon icon="mdi:youtube" class="w-4 h-4 inline-block" />
              </a>
              <a href="#" class="bg-primary w-8 h-8 rounded-full border flex items-center justify-center hover:bg-secondary transition duration-300">
                <icon icon="mdi:twitter" class="w-4 h-4 inline-block" />
              </a>
            </div>
        </div>
      </div>

    </div>
    <!-- Bottom Footer -->
     <div class="bg-black py-4">
         <div
           class="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm flex flex-col md:flex-row justify-between items-center"
         >
           <p>Copyright © 2025 Education Hub Ltd</p>
           <div class="space-x-4 mt-2 md:mt-0">
             <a href="#" class="hover:underline">Be a Partner</a>
             <a href="#" class="hover:underline">Privacy Policy</a>
             <a href="#" class="hover:underline">Terms & Conditions</a>
             <span class="mr-3">|</span>
             <span>
               Developed with<icon icon="mdi:heart" class="w-4 h-4 inline-block text-red-500" />By
               <a href="https://www.taskcodigital.com/" class="hover:underline">Taskco Digital</a></span
             >
           </div>
         </div>
     </div>
  </footer>
</template>
