<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Logo from "../../assets/logo.png";

const navItems = [
  {
    name: 'Study Abroad',
    isDropdown: true,
    items: [
      { name: 'Study In UK', href: '#' },
      { name: 'Study In USA', href: '#' },
      { name: 'Study In Canada', href: '#' },
      { name: 'Study In Australia', href: '#' },
      { name: 'Study In Malaysia', href: '#' },
      { name: 'Study In Denmark', href: '#' },
      { name: 'Study In Netherlands', href: '#' },
      { name: 'Study In France', href: '#' },
      { name: 'Study In Dubai', href: '#' },
    ]
  },
  {
    name: 'Services',
    isDropdown: true,
    items: [
      { name: 'Admission', href: '#' },
      { name: 'Scholarships', href: '#' },
      { name: 'Visa Guidance', href: '#' },
      { name: 'Departure Guidance', href: '#' },
      { name: 'IELTS Registration & Mock Test', href: '#' },
      { name: 'Career Counseling', href: '#' },
    ]
  },
  {
    name: 'Resources',
    isDropdown: true,
    items: [
      { name: 'Events', href: '#' },
      { name: 'Blogs', href: '#' },
      { name: 'Top Universities', href: '#' },
      { name: 'Popular Subjects', href: '#', active: true },
      { name: 'Student Essentials', href: '#' },
    ]
  },
  { name: 'Future Career', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' }
]
</script>
<template>
  <!-- Top Bar -->
  <div class="bg-[#02143b] text-white text-sm py-4 px-4">
    <div
      class="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-0 flex justify-between items-center"
    >
      <div class="flex items-center space-x-4">
        <icon icon="mdi:phone" class="w-6 h-6 inline-block mr-1" /><a
          href="tel:+442032872554"
          class="hover:text-secondary transition duration-300"
          >+44(0)2032872554</a
        >
        <icon icon="mdi:email" class="w-6 h-6 inline-block mr-1" /><a
          href="mailto:info@education-hub.co.uk"
          class="hover:text-secondary transition duration-300"
          >info@education-hub.co.uk</a
        >
      </div>
      <div class="space-x-2">
        <a href="#" class="hover:text-secondary transition duration-300"
          ><icon icon="mdi:facebook" class="w-6 h-6 inline-block"
        /></a>
        <a href="#" class="hover:text-secondary transition duration-300"
          ><icon icon="mdi:instagram" class="w-6 h-6 inline-block"
        /></a>
        <a href="#" class="hover:text-secondary transition duration-300"
          ><icon icon="mdi:linkedin" class="w-6 h-6 inline-block"
        /></a>
        <a href="#" class="hover:text-secondary transition duration-300"
          ><icon icon="mdi:youtube" class="w-6 h-6 inline-block"
        /></a>
        <a href="#" class="hover:text-secondary transition duration-300"
          ><icon icon="mdi:twitter" class="w-6 h-6 inline-block"
        /></a>
        <a
          href="#"
          class="bg-secondary text-black inline-block px-3 py-[6px] ml-3 rounded hover:bg-primary transition duration-300 font-semibold"
        >
          Apply Online
        </a>
      </div>
    </div>
  </div>

  <!-- Main Navigation -->
  <nav class="bg-white sticky top-0 z-50">
    <div class="max-w-[1320px] mx-auto py-5 flex justify-between items-center">
      <!-- Logo -->
      <img :src="Logo" alt="Education Hub Logo" class="h-10" />

      <!-- Nav Links -->
      <ul
        class="hidden md:flex items-center space-x-6 font-semibold text-[15px]"
      >
        <li
          v-for="(item, index) in navItems"
          :key="index"
          class="relative group"
        >
          <!-- Dropdown Menu -->
          <template v-if="item.items?.length">
            <a href="#"
              class="flex items-center space-x-1 hover:text-secondary"
            >
              <span>{{ item.name }}</span>
              <icon v-if="item.items?.length" icon="mdi:chevron-down" class="w-4 h-4 inline-block" />
            </a>
            <ul
              class="absolute top-full left-0 w-52 pt-8 rounded-md py-2 text-black z-50 hidden group-hover:block"
            >
              <li v-for="(subItem, subIndex) in item.items" :key="subIndex" class="bg-white first:rounded-t-md last:rounded-b-md">
                <a :href="subItem.href"
                  class="block px-4 py-2 shadow-lg hover:text-secondary group/submenu">
                  <span class="hidden group-hover/submenu:inline-block">-</span> {{ subItem.name }}
                </a>
              </li>
            </ul>
          </template>

          <!-- Regular Link -->
          <template v-else>
            <a :href="item.href" class="hover:text-secondary">
              {{ item.name }}
            </a>
          </template>
        </li>
        <li><a
        href="#"
        class="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition duration-300"
      >
        FIND COURSE
      </a></li>
      </ul>
      
    </div>
  </nav>
</template>
