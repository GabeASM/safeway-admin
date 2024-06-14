<template>
    <div class="navbar bg-black">
        <div class="flex-1">
            <router-link to="/">
                <img src="../assets/logo.png" alt="" class="h-20">
            </router-link>

        </div>
        <div class="flex-none gap-4">
            <div class="dropdown">
                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Administrador
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <RouterLink class="dropdown-item" href="#">Action</RouterLink>
                    <RouterLink class="dropdown-item" href="#">Another action</RouterLink>
                    <RouterLink class="dropdown-item" href="#">Something else here</RouterLink>
                </div>
            </div>
        </div>
        <img src="../assets/avatar.png" alt="" class="h-14 ml-4">
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar',
})

</script>

<style scoped></style>