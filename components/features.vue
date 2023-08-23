<template>
    <div class="min-h-[200px] max-w-[1200px] mx-auto pt-4 px-4 flex flex-col md:flex-row justify-center items-center">
        <div class="">
            <h1 class="text-3xl md:text-5xl font-bold capitalize">Helping a local <br> <span class="text-[#4caf4f]">business reinvent itself</span> </h1>
            <p class="text-sm text-gray-500 my-2">We reached here with our hard work and dedication</p>
        </div>
        <div class="md:w-[50%] grid grid-cols-2 text-gray-600">
            <div v-for="(item ,index) in features" :key="index"
            class="flex justify-center items-center p-4">
                <Icon :name="item.icoName" size="20" />
                <div class="ml-3 flex flex-col leading-tighter">
                    <span class="font-medium text-xs md:text-sm">{{ item.number }}</span>
                    <span class="text-xs">{{ item.desc }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const features =[
    {
        id:1,
        icoName:"material-symbols:group-rounded",
        number: '34',
        desc:"members"
    },
    {
        id:1,
        icoName:"material-symbols:schema-rounded",
        number: '234,789',
        desc:"club"
    },
    {
        id:1,
        icoName:"material-symbols:touch-app",
        number: '4,789',
        desc:"event booking"
    },
    {
        id:1,
        icoName:"material-symbols:payments",
        number: '24,789',
        desc:"payments"
    },
    
]
</script>
