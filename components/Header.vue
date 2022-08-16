
<script>
export default {
  
}
</script>

<template>
  <header class="bg-gray-200 h-20 w-full flex flex-row justify-center align-middle" >
    <NuxtLink to="/" class="flex flex-1 justify-center align-middle bg-blue-100">
      <h1 class="h-full w-full align-middle">Home</h1>
    </NuxtLink>
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