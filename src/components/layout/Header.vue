<template lang="pug">
    section.hero.is-success
        .hero-head
            header.nav
                .container
                    .nav-left
                        .nav-item
                            strong Omtec KG
                    .nav-right.nav-menu
                        router-link.nav-item(:to="{ name: 'search'}") Search
                        router-link.nav-item(to="about") Über uns

        .hero.body
            .container.has-text-centered
                h1.title Omtec Music
                h2.subtitle Das Beste an werbefreier Music!
                om-player
</template>

<script>
import OmPlayer from '@/components/Player.vue'
export default {
  components: { OmPlayer }
}
</script>
