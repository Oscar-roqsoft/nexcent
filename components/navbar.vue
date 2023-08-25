<template>
               
    <nav class="fixed z-30 w-full md:bg-[#f5f7fa] top-0 left-0 ">
        <div class="flex flex-wrap items-center justify-between max-w-[1200px] mx-auto md:px-4 ">
            <div class="flex  flex-wrap bg-[#f5f7fa]   z-50 justify-between w-full md:w-[20%] h-full p-4 border-b-2 md:border-none animate__animated 
            animate__fadeInDown transition-all">
                <a  class="flex items-center">
                    <img src="/Icon.png" class="h-8 mr-3" alt="Nexcent Logo">
                    <span class="self-center text-2xl font-semibold ">Nexcent</span>
                </a>

                <div class="">
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center 
                    text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                    </button>
                </div>

            </div>


            <div 
               class="items-center bg-[#f5f7fa] capitalize font-semibold md:w-[70%] z-40 px-4 justify-between hidden w-full md:flex  animate__animated animate__fadeInDown" id="navbar-sticky">
                <ul v-for="nav in navlink" :key="nav"
                class="flex flex-col p-2 md:p-0 mt-4  font-medium  hover:md:text-[#4caf4f]   border  border-gray-100 
                rounded-lg md:flex-row md:space-x-8
                 md:mt-0 md:border-0"
                 :class="currentheight===nav?'bg-[#4caf4f] md:bg-inherit md:text-[#4caf4f] transition-all':''">
                    <li @click="currentheight=nav" >
                        <a :href="`#${nav}`" 
                          class="block py-1 pl-1 pr-4 md:mx-0  rounded md:bg-transparent  md:p-0" aria-current="page"
                          :class="currentheight===nav?'bg-[#4caf4f] text-white md:text-[#4caf4f] transition-all':''">
                          {{ nav}}
                        </a>
                    </li>
                   
                </ul>
              
            <div class="md:w-[30%] flex flex-col md:flex-row md:justify-end my-2" >
                <button type="button" class=" bg-transparent block hover:bg-[#4caf4f] hover:text-white  mt-4 md:mt-0 border focus:ring-4 focus:outline-none
                focus:ring-blue-300 font-medium rounded text-sm p-3 md:px-3 md:py-1  md:mr-3">log in</button>
                <button type="button" class=" bg-[#4caf4f] text-white  focus:ring-4 focus:outline-none  mt-4 md:mt-0  border
                 focus:ring-blue-300 font-medium rounded text-sm p-3  md:px-3 md:py-1 md:mr-0 ">sign up</button>
            </div>
               
            </div>

           
        </div>
    </nav>
  
</template>


<script setup lang="ts">
const currentheight = ref("home")

const navlink = [
    "home",
    "services",
    "features",
    "products",
     "testimonials",
     "FQA"
]
</script>