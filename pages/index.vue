<template>
  <main>
    <h1>Home page</h1>
    <NuxtLink to="/about">
      About
    </NuxtLink>
    <a href="https://nuxtjs.org">External Link to another page</a>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
