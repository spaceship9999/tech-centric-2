import * as LottiePlayer from '@dotlottie/player-component';

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.component('LottiePlayer', LottiePlayer)
})