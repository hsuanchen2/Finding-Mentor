<template>
    <hero-section></hero-section>
    <client-result></client-result>
    <top-mentors></top-mentors>
    <we-provide></we-provide>
    <become-mentor></become-mentor>
    <contact-us></contact-us>
    <back-to-top></back-to-top>
</template>
<script setup lang="ts">
    import HeroSection from "@/components/landing-page/hero/HeroSection.vue";
    import ClientResult from "@/components/landing-page/companies/TheResult.vue";
    import TopMentors from "@/components/landing-page/top-mentors/TopMentors.vue";
    import WeProvide from "@/components/landing-page/service/WeProvide.vue";
    import ContactUs from "@/components/landing-page/contact-us/ContactUs.vue";
    import BecomeMentor from "@/components/landing-page/become-mentor/BecomeMentor.vue";
    import BackToTop from "@/components/ui/BackToTopButton.vue"; 
</script>
<style lang="scss" scoped>

</style>