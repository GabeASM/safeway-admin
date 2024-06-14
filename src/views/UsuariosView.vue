<template>
    <section class="programa-content mt-8">
       <div class="flex items-center justify-between ml-6">
           <h2 class="text-xl font-bold">Usuarios</h2>
           <div class="absolute flex right-0 mr-3">
               

               <input type="search"
                   class="flex-auto rounded-l bg-lightgray bg-clip-padding p-2 py-[0.25rem] text-base font-normal text-neutral-700 outline-none"
                   placeholder="Buscar por nombre, etc" aria-label="Buscar por nombre, etc." />
               <button class="flex items-center rounded-r bg-black px-6 py-2.5 uppercase text-white" type="button"
                   id="button-addon1">
                   <i class="fa-solid fa-magnifying-glass"></i>
               </button>
           </div>
       </div>
       <div class="container w-screen mt-4">
           <div class="flex flex-col ml-4">
               <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                   <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                       <div class="overflow-hidden">
                           <table class="min-w-full text-left text-sm font-light">
                               <thead class="">
                                   <tr>
                                       <th scope="col" class="py-4"></th>
                                       <th scope="col" class="px-2 py-4">Nombre</th>
                                       <th scope="col" class="px-2 py-4">E-mail</th>
                                       <th scope="col" class="py-4">Eventos verificados</th>
                                       <th scope="col" class="py-4">Eventos rechazados</th>
                                   </tr>
                               </thead>
                               
                               <tbody>
                                   <tr class="rows bg-lightgray"> <!--AGREGAR V-FOR PARA CADA PROGRAMA DEL ARRAY-->
                                       <td class="whitespace-nowrap py-4 font-medium">
                                           <img src="../assets/avatar.png" alt="" class="h-12 pl-4">
                                       </td>
                                       <td class="whitespace-nowrap py-4">Nombre usuario</td>
                                       <td class="whitespace-nowrap py-4">mail@mail.com</td>
                                       <td class="whitespace-nowrap py-4">2</td>
                                       <td class="whitespace-nowrap py-4">3</td>
                                       <td>
                                           <i class="fa-solid fa-chevron-right text-2xl"></i>
                                       </td>
                                   </tr>
                                   <tr class="rows bg-lightgray" > <!--AGREGAR V-FOR PARA CADA PROGRAMA DEL ARRAY-->
                                       <td class="whitespace-nowrap py-4 font-medium">
                                           <img src="../assets/avatar.png" alt="" class="h-12 pl-4">
                                       </td>
                                       <td class="whitespace-nowrap py-4">Nombre usuario</td>
                                       <td class="whitespace-nowrap py-4">mail@mail.com</td>
                                       <td class="whitespace-nowrap py-4">2</td>
                                       <td class="whitespace-nowrap py-4">3</td>
                                       <td>
                                           <i class="fa-solid fa-chevron-right text-2xl"></i>
                                       </td>
                                   </tr>
                                   <tr class="rows bg-lightgray"> <!--AGREGAR V-FOR PARA CADA PROGRAMA DEL ARRAY-->
                                       <td class="whitespace-nowrap py-4 font-medium">
                                           <img src="../assets/avatar.png" alt="" class="h-12 pl-4">
                                       </td>
                                       <td class="whitespace-nowrap py-4">Nombre usuario</td>
                                       <td class="whitespace-nowrap py-4">mail@mail.com</td>
                                       <td class="whitespace-nowrap py-4">2</td>
                                       <td class="whitespace-nowrap py-4">3</td>
                                       <td>
                                           <i class="fa-solid fa-chevron-right text-2xl"></i>
                                       </td>
                                   </tr>
                               </tbody>
                           </table>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       
       
           



   </section>
   
</template>

<style scoped>
.rows:hover {
    cursor: pointer;
    background-color: #c5d8e2
}

table { 
   border-collapse: separate; 
   border-spacing: 0 10px; 
   margin-top: -10px; /* correct offset on first border spacing if desired */
}
td {
   border-style: solid none;
   padding: 10px;
   font-size: 16px;
}
td:first-child {
   border-left-style: solid;
   border-top-left-radius: 10px; 
   border-bottom-left-radius: 10px;
}
td:last-child {
   border-right-style: solid;
   border-bottom-right-radius: 10px; 
   border-top-right-radius: 10px; 
}

th {
   font-weight: bold;
   font-size: 16px;
}


</style>