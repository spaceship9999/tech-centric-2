import { DotLottiePlayer } from '@johanaarstein/dotlottie-player'

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.component('DotLottiePlayer', DotLottiePlayer)
})