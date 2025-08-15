<script setup lang="ts">
import Form from "./pertials/Form.vue";
import Hero from "./pertials/Hero.vue";
import PopularSubjects from "./pertials/PopularSubjects.vue";
import SuccessStory from "./pertials/SuccessStory.vue";
import Sub from "../../../assets/sub.svg";
import { useHead } from "@vueuse/head";

useHead({
  meta: [
    {
      name: "description",
      content: `Study in the UK, Study in Malaysia, Study in Canada, Study in Australia, Study in the Netherlands, Study in New Zealand, Study in France, Study in Denmark, Higher Study, Scholarship in the UK, Scholarship in Malaysia, Scholarship in Canada, Scholarship in Australia, Scholarship in the Netherlands, Scholarship in New Zealand,  
Scholarship in France, Scholarship in Denmark, IELTS, IELTS Registration, IELTS Mock Test, Visa Consultancy Firm, Visa Consultancy Firm in Bangladesh, Visa Consultancy Firm in Dhaka, Visa Consultancy Firm in Dhanmondi, Visa Consultancy Firm in Sylhet, Visa Consultancy Firm in Chattagram, Visa Consultancy Firm in Chittagong, Student Visa, Visa Guidance, Visa Guideline, AdmissionDiscover the most popular subjects for higher education abroad. Explore top courses in Business, Engineering, Medicine, Computer Science, Law, Data Science, and more. Find the best universities for your chosen field and learn about admission requirements, tuition fees, and career prospects. Plan your study abroad journey with expert guidance.`,
    },
    {
      name: "keywords",
      content: `Education Hub, Education, Higher Education, Study, Higher Study, Abroad, UK, United Kingdom, Malaysia, Singapore, India, Visa, Visa Consultancy, Scholarship, IELTS, Mock Test`,
    },
  ],
});
</script>

<template>
  <Hero :img="Sub">
    <template #title>
      FIND MOST POPULAR<br />
      SUBJECTS TO STUDY
    </template>
    <template #subtitle>
      Our expert consultants will guide you in choosing the best academic and
      career path, ensuring you make informed decisions for a successful future.
    </template>
  </Hero>
  <PopularSubjects />
  <SuccessStory />
  <Form></Form>
</template>
