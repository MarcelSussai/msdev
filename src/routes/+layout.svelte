<script lang="ts">
    import type { LayoutProps } from './$types'
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
    import { hand_is_active_link } from '_stores/nav_store'
    import { config_theme } from '_stores/theme'
    import { Header, NavMenu } from '_components'

    let { data, children }: LayoutProps = $props()

    let matching_media = $state(false)
    function handle_match_media(e: MediaQueryListEventInit) {
        if(e.matches) { matching_media = true } else { matching_media = false }
    }

    onMount(() => {
        window.matchMedia('(min-width: 968px)').addEventListener('change', handle_match_media)
        handle_match_media(window.matchMedia('(min-width: 968px)'))
        config_theme()
        hand_is_active_link(data.url)
    })
</script>

<!-- ---------------------------------------------------------------- -->

<section class="hero">
    <h2>seja bem vind@</h2>
</section>
<Header />
<NavMenu />
{#key data.url}
    <main
        in:fade={{ duration: 300, delay: matching_media ? 300 : 600 }}
        out:fade={{ duration: 300, delay: matching_media ? 0 : 300 }}
    > {@render children()} </main>
{/key}

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 8px 0 2000px 0;
        position: relative;
    }
    .hero {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.68rem;
        font-weight: 900;
        padding: 6px 12px 4px 12px;
        width: 100dvw;
        font-family: v('font-logo');
        // margin-bottom: 6px;
        color: clr('surface', 'x18');
        position: absolute;
        height: 100dvh;
        background: clr('surface', 'y07');
        background:
            radial-gradient(clr('surface', 'y06'), clr('surface', 'y12') )
        ;
        z-index: 999999;
        // opacity: 0;
        pointer-events: none;
        animation:
            ani_appear_002 .4s v('time-ani-start') $ease_in_out_sine reverse forwards
        ;
    overflow-x: clip;

        & h2 {
            opacity: 0;
            animation:
                ani_appear_002 .4s .28s $ease_in_out_sine forwards
            ;
        }

        @include md($md_02) {
            font-size: 2rem;
        }
    }
    :global([theme="dark"]) .hero {
        color: clr('surface', 'x08');
        background:
            radial-gradient(clr('surface', 'y12'), clr('surface', 'y06') )
        ;
        text-shadow: 1px 2px 2px clr('surface', 'r-x04');
    }
</style>