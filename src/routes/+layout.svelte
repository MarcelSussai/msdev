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

<section class="hero">seja bem vind@</section>
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
    .hero {
        display:          flex;
        justify-content:  center;
        align-items:      center;
        font-size:        1.36rem;
        font-weight:      900;
        padding:           6px 12px 4px 12px;
        width:            100%;
        // background-color: clr('surface', 'y16', .8);
        background:
            linear-gradient(to bottom,
                clr('surface', 'y18', .8),
                clr('surface', 'y10', .8),
            )
        ;
        margin-bottom:    6px;
    }
</style>