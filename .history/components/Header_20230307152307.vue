<template>
    <header class="container fixed top-0 inset-x-0 lg:py-6">
        <div class="flex">
            <NuxtLink to="/" class="t-32 text-white font-bold leading-none">
                Dev Centric by<br> 
                Raynold Chow
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
document.addEventListener('scroll', () => {
    const top = window.pageYOffset;
    if (top >= 50) {
        document.querySelector('header').classList.add('scrolled');
    }else {
        document.querySelector('header').classList.remove('scrolled');
    }
})
</script>