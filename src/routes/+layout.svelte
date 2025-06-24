<script lang="ts">
    import type { LayoutProps } from './$types'
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
    import { hand_is_active_link } from '_stores/nav_store'
    import { config_theme } from '_stores/theme'
    import { Header } from '_components'

    let { data, children }: LayoutProps = $props()

    onMount(() => {
        config_theme()
        hand_is_active_link(data.url)
    })
</script>

<!-- ---------------------------------------------------------------- -->

<section class="welcome">seja bem vind@</section>
<Header />
{#key data.url}
    <main
        in:fade={{ duration: 200, delay: 200 }}
        out:fade={{ duration: 200 }}
    > {@render children()} </main>
{/key}

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    main {
        display:        flex;
        flex-direction: column;
        align-items:    center;
        gap:            8px;
        padding:        8px 0 2000px 0;
    }
    .welcome {
        display:         flex;
        justify-content: center;
        align-items:     center;

        font-size:       1.2rem;
        font-weight:     400;
        padding:         8px;
    }
</style>