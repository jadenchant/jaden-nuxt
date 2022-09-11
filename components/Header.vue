
<script>
import Logo from './Logo.vue';
export default {
    components: { Logo },
}
</script>

<template keep-alive>
  <header class="bg-slate-700 h-20 w-full flex flex-row justify-center align-middle" >
    
    <Logo class="flex-1"/>
    <NuxtLink to="/" class="flex flex-1 h-20 w-full justify-center hover:bg-slate-600">
      <a class="header-ul w-max text-center justify-center m-auto text-xl text-gray-300 bold">
        Home
      </a>
    </NuxtLink>   
    <NuxtLink to="/about" class="flex flex-1 h-20 w-full justify-center">
      <h1 class="new-header-ul w-max my-6 text-center justify-center">
        About
        </h1>
    </NuxtLink>
    <NuxtLink to="/portfolio" class="flex flex-1 h-20 w-full justify-center">
      <h1 class="w-max my-6 text-center justify-center">Portfolio</h1>
    </NuxtLink>
    <NuxtLink to="/resume" class="flex flex-1 h-20 w-full justify-center hover:underline hover:bg-gray-400">
      <h1 class="w-max my-6 text-center justify-center">Resume</h1>
    </NuxtLink>
    <NuxtLink to="/contact" class="flex flex-1 h-20 w-full justify-center">
      <h1 class="w-max my-6 text-center justify-center">Contact</h1>
    </NuxtLink>
  </header>
</template>
