<script setup lang="ts">
import { defineComponent } from 'vue';

import NavBar from '@/components/NavBar.vue';

defineComponent({
  components: {
    NavBar,
  },
});

</script>

<template>
  <NavBar></NavBar>

  <div>
    <div class="font-bold text-sky-400">Texto de relleno. Tailwind funcionando</div>
  </div>
  <RouterView></RouterView>
</template>

<style scoped>

</style>
