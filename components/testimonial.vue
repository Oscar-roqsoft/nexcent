<template>
    <div class="max-w-[1200px] mx-auto flex flex-col justify-center items-center text-center px-4 pt-5hm lg:mb-40 min-h-[400px]">
        <div class="flex flex-col justify-center md:max-w-[60%] ">
            <h1  class="text-2xl font-medium md:text-5xl mt-10 md:mt-0">Caring is the new marketing</h1> 
            <p  class="text-sm my-3 md:my-4 text-gray-400">The Nexcent blog is the best place to read about the latest membership 
                insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
            </p> 
        </div>
        <div  
        class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center   p-4 w-full">
            <div v-for="item in testimonial" :key="item" class="relative" >
                <div class="lg:absolute w-[310px]">
                    <img :src="item.img" class="w-full"/>
                </div>
                <div  ref="targetEL" class="target animate__animated  animate__fadeInUp transition ease-in-out delay-150 relative bottom-16 left-8 text-center px-2 py-4 shadow-xl rounded-lg w-[250px]  lg:top-44 bg-slate-200">
                    <p class="text-xs mb-2">{{ item.description }}</p>
                    <button type="button" class=" col-span-2 text-[#4caf4f] bg-transparent hover:text-white hover:bg-[#4caf4f]
                    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-xs px-2 py-2 text-center inline-flex items-center">
                      Read More
                      <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </button>
                </div>
 
            </div>
        </div>
    </div>
</template>

<script setup>

import { useMotion } from '@vueuse/motion'

const targetEL = ref()

useMotion(targetEL,{
    initial:{
        opacity: 0,
        y: 100,
    },
    visibleOnce: {
        opacity:1,
        y:0
    },

})
 
const testimonial = [
    {
        id:1,
        img:"/image18.png",
        description:"Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
        id:2,
        img:"/image19.png",
        description:"What are your safeguarding responsibilities and how can you manage them? ",
    },
    {
        id:3,
        img:"/image20.png",
        description:"Revamping the Membership Model with Triathlon Australia",
    }
]
</script>