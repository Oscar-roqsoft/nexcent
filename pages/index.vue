<template>
    <div class="bg-[#f5f7fa]">
        <div class="max-w-[1200px] mx-auto px-4">
          <navbar/>
           <home/>
        </div>
       
    </div>
    <section class="bg-white w-full min-h-[700px] shadow">
        <div class="max-w-[1200px] mx-auto px-4 flex flex-col  items-center mt-4">
            <h1 class="text-3xl font-bold capitalize ">our client</h1>
            <p class="text-sm text-gray-500 my-2">We have been working with some Fortune 500+ clients</p>
            <div  class="grid grid-cols-4 md:grid-cols-6 mx-w-auto gap-5 my-8   w-full">
                <div  v-for="logo in companylogos" :key="logo"
                class="max-w-full mx-auto">
                <img :src="logo" alt="">
                 </div>
            </div>
            <h1 class="text-3xl font-bold capitalize text-center">Manage your entire community in a single system</h1>
            <p class="text-sm text-gray-500 my-2">Who is Nextcent suitable for?</p>
            
            <div  class="grid grid-cols-1 md:grid-cols-3 mx-w-auto gap-5 my-8 ">
                <div  v-for="card in cards" :key="card">
                       <div class="flex flex-col items-center rounded-lg justify-center text-center h-[200px] w-[250px] shadow-lg shadow-slate-500 
                       py-4 px-5  animate__animated  animate__fadeInUp transition ease-in-out delay-150">
                           <icon  :name="card.iconName" size="30"/>
                           <h2 class="text-xl font-bold capitalize my-1">{{ card.title }}</h2>
                           <p class="text-sm text-gray-500">{{ card.article }}</p>
                       </div>
                 </div>
            </div>


            <div  class="flex flex-col md:flex-row md:px-8">
                <div class="md:w-[45%]">
                    <img src="/frame.png" alt="">
                </div>
                <div class="md:w-[50%] md:mt-10  md:pr-5">
                    <h1 class="text-3xl font-bold md:text-5xl capitalize  md:mt-0">The unseen of spending three years at Pixelgrade</h1>
                    <p class="text-sm my-3 md:my-4 text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. 
                        Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar 
                        sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <button type="button" class="text-white mb-6 bg-gradient-to-r from-green-400 via-green-500 to-[#4caf4f] hover:bg-gradient-to-br 
                    focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded text-sm px-5 py-2.5 
                    text-center mr-2 ">Register</button>
                </div>
            </div>

        </div>
    </section>

    <section class="bg-[#f5f7fa] ">
         <features/>
    </section>

    <section class="bg-white shadow">
         <div  class="max-w-[1200px] min-h-[400px] mx-auto px-4 flex flex-col justify-center  items-center">
            <div class="flex flex-col md:flex-row md:p-8">
                <div class="md:w-[45%] p-4">
                    <img src="/pana.png" >
                </div>
                <div class="md:w-[50%] md:mt-10  md:pr-5">
                    <h1  class="text-3xl font-bold md:text-5xl capitalize  md:mt-0">How to design your site footer like we did</h1>
                    <p class="text-sm my-3 md:my-4 text-gray-500 ">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla 
                        commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id 
                        gravida.
                    </p>
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-[#4caf4f] hover:bg-gradient-to-br 
                    focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded text-sm px-5 py-2.5 
                    text-center mr-2 mb-2">Learn More</button>
                </div>
            </div>
         </div>
    </section>

    <section class="bg-[#f5f7fa]">
        <div class="max-w-[1200px] min-h-[300px] mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-center items-center">
                <div class="md:w-[30%] flex justify-center items-center p-6 md:p-12">
                    <img src="/image9.png">
                </div>
                <div class="md:w-[60%] flex flex-col justify-center items-start md:p-12">
                    <p class="text-xs text-gray-600">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat 
                        ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <p class="text-[#4caf4f] capitalize text-sm my-3">tim smith</p>
                    <span class="text-xs">British Dragon Boat Racing Association</span>
                    <div>
                        <div  class="grid grid-cols-9 mx-w-auto gap-3 md:gap-6 my-8 place-items-center   w-full">
                            <div  v-for="logo in companylogos" :key="logo"
                            class="max-w-full mx-auto">
                            <img :src="logo" alt="" class=" max-h-[20px] ">
                            </div>

                             <button type="button" class=" col-span-3 text-[#4caf4f] bg-transparent hover:text-white hover:bg-[#4caf4f]
                              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-xs md:text-sm px-2 py-2.5 text-center inline-flex 
                              items-center ">
                                Meet All Customers
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section>
        <testimonial />
    </section>

    <section class="bg-[#f5f7fa] py-10">
        <div class="max-w-[1200px] mx-auto px-4 flex flex-col justify-center items-center">
            <h1 class="text-4xl mb-4">Pellentesque suscipit <br> fringilla libero eu.</h1>
            <button type="button" class=" col-span-2 text-[#4caf4f] bg-transparent hover:text-white hover:bg-[#4caf4f]
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-xs px-4 py-2.5 text-center inline-flex items-center">
              Get a demo
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>
    </section>

    <footer class="bg-gray-950">
        <footerCom/>
    </footer>
</template>



<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import 'animate.css';

onMounted(() => {
    initFlowbite();
})

const companylogos = [
    "/logo.png",
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
]

const cards =[
    {
        id:1,
        iconName:"material-symbols:groups-rounded",
        title: "Membership Organisations",
        article:"Our membership management software provides full automation of membership renewals and payments"

    },
    {
        id:2,
        iconName:"material-symbols:home-work",
        title: "National Associations",
        article:"Our membership management software provides full automation of membership renewals and payments"

    },
    {
        id:3,
        iconName:"material-symbols:schema-rounded",
        title: "Clubs And Groups",
        article:"Our membership management software provides full automation of membership renewals and payments"

    }
    
]
</script>
