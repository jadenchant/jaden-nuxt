<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue';

export default Vue.extend({
    name: "AboutPage",
    components: { Header }
})
</script>

<template>
  <main>
    <Header />
    <h1>About Me</h1>
    
  </main>
</template>