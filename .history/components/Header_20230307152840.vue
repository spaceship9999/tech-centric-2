<template>
    <header class="fixed z-[90] top-0 inset-x-0 lg:py-6">
        <div class="container ">
            <div class="flex">
                <NuxtLink to="/" class="t-32  font-bold leading-none">
                    Dev Centric by<br> 
                    Raynold Chow
                </NuxtLink>
            </div>
        </div>
       
    </header>
</template>

<script setup>

onMounted(() => {
    document.addEventListener('scroll', () => {
        const top = window.pageYOffset;
        if (top >= 50) {
            document.querySelector('header').classList.add('scrolled');
        } else {
            document.querySelector('header').classList.remove('scrolled');
        }
    })
})

</script>