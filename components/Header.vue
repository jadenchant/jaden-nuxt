
<script>
import NuxtLogo from './NuxtLogo.vue';
export default {
    components: { NuxtLogo }
}
</script>

<template>
  <header class="bg-gray-200 h-20 w-full flex flex-row justify-center align-middle" >
    
    <NuxtLogo class="flex-1"/>
    <div class="flex flex-1 h-20 w-full justify-center justify-items-center align-middle bg-blue-100">
      <NuxtLink to="/" class="h-9 w-max my-5">
        <h1 class="w-max text-center justify-center">Home</h1>
      </NuxtLink>
    </div>
    <NuxtLink to="/about" class="flex-1">
      About
    </NuxtLink>
    <NuxtLink to="/portfolio" class="flex-1">
      Portfolio
    </NuxtLink>
    <NuxtLink to="/resume" class="flex-1">
      Resume
    </NuxtLink>
    <NuxtLink to="/contact" class="flex-1">
      Contact
    </NuxtLink>
    <div class="flex-1 bg-black"></div>
  </header>
</template>