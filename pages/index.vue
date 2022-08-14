
<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue';

export default Vue.extend({
  name: 'IndexPage',

  components: {
    Header
  }
})
</script>


<template>
  <main>
    <Header />
    <h1>Home page</h1>
  </main>
</template>