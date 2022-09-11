<script lang="ts">
import { data } from 'browserslist';
import Vue from 'vue'
import Header from '~/components/Header.vue';
import HealthData from '~/components/HealthData.vue'

export default Vue.extend({
    name: "AboutPage",
    components: { Header, HealthData },

    

})
</script>

<template>
  <main>
    <Header />
    <h1>About Me</h1>
    
    <HealthData keep-alive />
  </main>
</template>