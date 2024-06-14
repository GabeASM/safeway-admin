<template>
    <div class="h-screen flex flex-col bg-cyan ">
        <RouterLink to="/eventos">
            <div class="flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:bg-darkcyan">
                        <div class="flex items-center">

                            <i class="fa-regular fa-calendar-check m-3 text-2xl" style="color: white"></i>
                            <span style="font-size: 18px; color: white">Eventos</span>
                        </div>
                        <i class="fas fa-chevron-down text-xl ml-3 arrow"></i>
                    </div>
        </RouterLink>
        <RouterLink to="/usuarios">
            <div class="flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:bg-darkcyan">
                        <div class="flex items-center">

                            <i class="fa-solid fa-user m-3 text-2xl" style="color: white"></i>
                            <span style="font-size: 18px; color: white">Usuarios</span>
                        </div>
                        <i class="fas fa-chevron-down text-xl ml-3 arrow"></i>
                    </div>
        </RouterLink>
        
    </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SideBar',

})



</script>

<style scoped>

.side-nav {
    width: 300px;
    transition: width 0.3s ease;
}

@media (max-width: 768px) {
    .side-nav {
        width: 80px;
    }

    .side-nav span {
        display: none;
    }
}

</style>