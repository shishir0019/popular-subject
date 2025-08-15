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
  <div class="bg-black text-white text-sm px-4">
    <div
      class="container w-full mx-auto px-4 sm:px-6 lg:px-0 flex justify-between items-center text-xs"
    >
      <div class="flex items-center space-x-4">
        <icon icon="mdi:phone" class="w-4 h-4 inline-block mr-1" /><a
          href="tel:+442032872554"
          class="hover:text-secondary transition duration-300"
          >+44(0)2032872554</a
        >
        <icon icon="mdi:email" class="w-4 h-4 inline-block mr-1" /><a
          href="mailto:info@education-hub.co.uk"
          class="hover:text-secondary transition duration-300"
          >info@education-hub.co.uk</a
        >
      </div>
      <div class="space-x-2 flex items-center">
        <a href="#" class="hover:text-secondary transition duration-300"
          ><icon icon="mdi:facebook" class="w-4 h-4 inline-block"
        /></a>
        <a href="#" class="hover:text-secondary transition duration-300"
          ><icon icon="mdi:instagram" class="w-4 h-4 inline-block"
        /></a>
        <a href="#" class="hover:text-secondary transition duration-300"
          ><icon icon="mdi:linkedin" class="w-4 h-4 inline-block"
        /></a>
        <a href="#" class="hover:text-secondary transition duration-300"
          ><icon icon="mdi:youtube" class="w-4 h-4 inline-block"
        /></a>
        <a href="#" class="hover:text-secondary transition duration-300"
          ><icon icon="mdi:twitter" class="w-4 h-4 inline-block"
        /></a>
        <a
          href="#"
          class="btn btn-sm !text-black btn-secondary"
        >
          Apply Online
        </a>
      </div>
    </div>
  </div>

  <!-- Main Navigation -->
  <nav class="bg-white sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
       <router-link to="/">
         <img :src="Logo" alt="Education Hub Logo" class="h-10" />
        </router-link>

      <!-- Nav Links -->
      <ul
        class="hidden md:flex items-center font-light"
      >
        <li
          v-for="(item, index) in navItems"
          :key="index"
          class="relative group text-gray-600 hover:bg-gray-100 hover:text-black transition-all duration-100"
        >
          <!-- Dropdown Menu -->
          <template v-if="item.items?.length">
            <a href="#"
              class="flex items-center space-x-1 py-5 px-3"
            >
              <span>{{ item.name }}</span>
              <icon v-if="item.items?.length" icon="mdi:chevron-down" class="w-4 h-4 inline-block" />
            </a>
            <ul
              class="absolute top-full left-0 w-52 pt-0 rounded-md py-2 text-gray-600 hidden group-hover:block"
            >
              <li v-for="(subItem, subIndex) in item.items" :key="subIndex" class="bg-gray-100">
                <a :href="subItem.href"
                  class="block px-4 py-2 shadow-lg hover:text-black hover:bg-white hover:pl-5 group/submenu transition-all duration-100">
                   {{ subItem.name }}
                </a>
              </li>
            </ul>
          </template>

          <!-- Regular Link -->
          <template v-else>
            <a :href="item.href" class="flex items-center space-x-1 py-5 px-3">
              {{ item.name }}
            </a>
          </template>
        </li>
        <li><a
        href="#"
        class="ml-5 btn btn-ghost rounded-full"
      >
        FIND COURSE
      </a></li>
      </ul>
      
    </div>
  </nav>
</template>
