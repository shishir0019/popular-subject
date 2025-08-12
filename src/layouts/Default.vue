<script setup lang="ts">
import TheFooter from '../components/App/TheFooter.vue';
import TheTopBar from '../components/App/TheTopBar.vue';
</script>
<template>
    <TheTopBar />
    <router-view></router-view>
    <TheFooter />
</template>
