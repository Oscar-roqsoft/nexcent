<template>
    <div class="max-w-[1100px] text-gray-400  mx-auto px-4">
       <div class="flex flex-col md:flex-row  min-h-[190px] py-6">
           <div class="md:w-[35%] mb-5  flex flex-col items-center h-full justify-between">
                <a  class="flex items-center">
                    <img src="/Icon.png" class="h-8 mr-3 text-white" alt="nexcent Logo">
                    <span class="self-center text-2xl font-semibold ">Nexcent</span>
                </a>
                <span class="text-xs my-4">Copyright © 2020 Nexcent ltd.<br>All rights reserved</span>
                <div class="flex justify-center items-start text-black ">
                    <Icon class="p-1 bg-slate-400 rounded-full " name="uil:twitter"/>
                    <Icon class="mx-3 p-1 bg-slate-400 rounded-full" name="uil:facebook"/>
                    <Icon class="p-1 bg-slate-400 rounded-full " name="uil:instagram"/>
                    <Icon  class="mx-3 p-1 bg-slate-400 rounded-full" name="uil:youtube"/>
                </div>
           </div>
           <div class="flex flex-wrap md:w-[60%]  text-xs capitalize">
               <div class="md:w-[30%] w-[50%] flex flex-col justify-between items-center md:items-start text-xs">
                  <h2 class="mb-2 text-gray-50 text-sm">Company</h2>
                  <a>about us</a>
                  <a>blog</a>
                  <a>contact us</a>
                  <a>pricing</a>
                  <a>testimonials</a>
               </div>

               <div  class="md:w-[30%] w-[50%] mb-5 md:mb-0 flex flex-col  justify-between items-center  md:items-start">
                    <h2 class="mb-2 text-gray-50 text-sm">Support</h2>
                    <a>Help center</a>
                    <a>Terms of service</a>
                    <a>Legal</a>
                    <a>Privacy policy</a>
                    <a>Status</a>
               </div>

               <div class="md:w-[40%] w-full  mt-5 md:mt-0 ">
                   <h3 class="mb-3 text-gray-50 text-sm text-center md:text-start">Stay up to date</h3>
                   <div class="relative">
                     <div class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                       <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                         <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                         <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                       </svg>
                     </div>
                     <input type="text" id="email-address-icon" class="bg-gray-50   text-gray-900 text-sm rounded
                     block w-full pl-2 p-2 " placeholder="name@email.com">
                   </div>
               </div>
           </div>
       </div>
       
    </div>
</template>