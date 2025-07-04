<script lang="ts">
    import { BtnTheme, BtnRgbMode } from '_components'
    import { is_open, is_closing, hand_is_open_tog } from '_stores/nav_store'
    import { onMount } from 'svelte'

    let matching_media = $state(false)
    function handle_match_media(e: MediaQueryListEventInit) {
        if(e.matches) { is_open.set(true); matching_media = true }
        else { is_open.set(false); matching_media = false }
    }
    onMount(() => {
        window.matchMedia('(min-width: 968px)').addEventListener('change', handle_match_media)
        handle_match_media(window.matchMedia('(min-width: 968px)'))
    })
</script>

<!-- ---------------------------------------------------------------- -->
<!-- {$is_open ? 'open' : ''} -->

    <div
        class="all-nav-backdrop {$is_open ? 'open' : $is_closing ? 'close': ''}"
    >
        <nav class="{ $is_open ? 'open' : '' } {$is_closing && !matching_media ? 'close': ''}">
            <a href="/page_test" onclick={hand_is_open_tog}> TESTE </a>
            <a href="/" onclick={hand_is_open_tog}> HOME </a>
            <section class="config">
                <BtnTheme />
                <BtnRgbMode />
            </section>
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

        @include md($md_16) { display: contents; }
    }

    nav {
        position: absolute;
        width: calc(100% - 48px);
        max-height: calc(100% - 128px);
        bottom: 24px;
        left: 24px;
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
        border-radius: 16px;
        pointer-events: none;
        padding: 8px;
        display: grid;
        grid-template-rows: min-content min-content min-content;

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
            width: calc(100% - 64px);
            max-height: calc(100% - 160px);
            bottom: 32px;
            left: 32px;
        }
        
        @include md($md_16) {
            &, &.open, &.close {
                transform: translate3d(0, 0, 0);
                position: fixed; opacity: 1; z-index: 900;
                pointer-events: unset;
                animation: unset;
                min-height: fit-content;
            }
        }
    }

    .config {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 8px;
        padding: 8px;
        background: clr('surface', 'y00', .24);
        color: clr('surface', 'x08');
        // justify-self: stretch;
        
        // margin: 8px;
        border-radius: 0px 0px 10px 10px;
        // box-shadow: inset 0px 0px 4px 0px clr('surface', 'y16');
        // border: solid 4px clr('surface', 'y16');
        transition: $transition_00;
    }

</style>