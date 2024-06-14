<script setup lang="ts">
import { defineComponent } from 'vue';

import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';

defineComponent({
  components: {
    NavBar,
    SideBar
  },
});

</script>

<template>
  <NavBar></NavBar>

  <div id="app">
    <SideBar/>
    <RouterView></RouterView>
  </div>
  
</template>

<style scoped>
#app {
  display: flex;
  width: 100%;
}

.home {
  flex: 1;
}

</style>
