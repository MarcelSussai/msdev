<script lang="ts">
    import {
        ConfigMenu,
        Menu,
        all_config_media_min_width_menu
    } from '_components'
    import { is_open, is_closing } from '_stores/nav_store'
    import { onMount } from 'svelte'

    let matching_media = $state(false)
    function handle_match_media(e: MediaQueryListEventInit) {
        if(e.matches) { is_open.set(true); matching_media = true }
        else { is_open.set(false); matching_media = false }
    }
    onMount(() => {
        window.matchMedia(all_config_media_min_width_menu).addEventListener('change', handle_match_media)
        handle_match_media(window.matchMedia(all_config_media_min_width_menu))
    })

</script>

<!-- ---------------------------------------------------------------- -->
<!-- {$is_open ? 'open' : ''} -->

    <div
        class="all-nav-backdrop {$is_open ? 'open' : $is_closing ? 'close': ''}"
    >
        <nav class="{ $is_open ? 'open' : '' } {$is_closing && !matching_media ? 'close': ''}">
            <Menu />
            <ConfigMenu />
        </nav>
    </div>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    @keyframes ani-all-nav-backdrop-01 {
        0% { transform: translate3d(-100%, 0, 0); opacity: 0; }
        1% { transform: translate3d(0, 0, 0); opacity: 0; }
        100% { transform: translate3d(0, 0, 0); opacity: 1; }
    }
    @keyframes ani-all-nav-backdrop-02 {
        0% { transform: translate3d(0, 0, 0); opacity: 1; }
        99% { transform: translate3d(0, 0, 0); opacity: 0; }
        100% { transform: translate3d(-100%, 0, 0); opacity: 0; }
    }

    .all-nav-backdrop {
        position: fixed;
        width: 100dvw;
        height: 100dvh;
        top: 0;
        background: clr('surface', 'x08', .4);
        background: transparent;
        background:
            linear-gradient(
                45deg,
                clr('main', '000', .48),
                clr('second', '000', .48)
            )
        ;
        backdrop-filter: blur(8px);
        z-index: 899;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: $transition_01;
        transform: translate3d(-100%, 0, 0);
        opacity: 0;
        
        &.open {
            opacity: 1;
            animation: ani-all-nav-backdrop-01 .3s ease-in-out forwards;
        }
        &.close {
            opacity: 0;
            animation: unset;
            animation: ani-all-nav-backdrop-02 .3s ease-in-out forwards;
        }

        @include md($md_17) { display: none; }
    }

    nav {
        position: absolute;
        width: fit-content;
        max-height: calc(100% - 80px);
        bottom: 24px;
        right: 24px;
        transition: $transition_00;
        opacity: 0;
        transform: translate3d(calc(100% + 48px), 0, 0);
        background: linear-gradient(
            45deg,
            clr('surface', 'r-x12', .96),
            clr('surface', 'r-x06', .96) 24%,
            clr('surface', 'r-x04', .96),
            clr('surface', 'r-x06', .96) 76%,
            clr('surface', 'r-x12', .96),
        );
        backdrop-filter: blur(8px);
        border-radius: 24px;
        pointer-events: none;
        padding: 20px 16px 16px 16px;
        display: grid;
        justify-items: center;
        gap: 16px;

        &.open {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: all .3s .3s $ease_in_out_sine;
            pointer-events: unset;
        }
        &.close {
            opacity: 0;
            transform: translate3d(calc(100% + 48px), 0, 0);
            transition: all .3s $ease_in_out_sine;
        }

        @include md($md_02) {
            max-height: calc(100% - 160px);
            bottom: 32px;
            right: 32px;
        }
        
        @include md($md_17) {
            display: none;
        }
    }

</style>