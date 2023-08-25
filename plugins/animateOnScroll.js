// import Vue from 'vue'


// const animatedScrollObserver = new IntersectionObserver((entries,animatedScrollObserver)=>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('enter')
//             animatedScrollObserver.unobserve(entry.target)
//         }
//     })
// })


// // export default{
// //     bind(el){
// //         el.classList.add('before-enter');
// //         animatedScrollObserver.observe(el)
// //     }
// // }

// Vue.directives('animate-on-scroll',{
//     bind(el){
//         el.classList.add('before-enter');
//         animatedScrollObserver.observe(el)
//     }
// })








export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('animate-on-scroll', {
        mounted(el){
            const animateOnScrollObserver = new IntersectionObserver(
                (entries, animateOnScrollObserver) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('enter')
                      animateOnScrollObserver.observe(entry.target)
                    }
                  })
                }
              )
               el.classList.add('before-enter')
                animateOnScrollObserver.observe(el)
               },
      // getSSRProps (binding, vnode) {
      //   // you can provide SSR-specific props here
      //   return {}
      // }
    })
  })
  