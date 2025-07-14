<script lang="ts">
    import {
        BtnTheme,
        BtnRgbMode,
        Menu,
    } from '_components'
    import { is_open, is_closing } from '_stores/nav_store'
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
            <Menu />
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

        @include md($md_17) { display: none; }
    }

    nav {
        position: absolute;
        // width: calc(100% - 48px);
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
        // grid-template-rows: min-content min-content min-content;
        // place-items: center;
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
            // width: calc(100% - 64px);
            max-height: calc(100% - 160px);
            bottom: 32px;
            right: 32px;
        }
        
        @include md($md_17) {
            // &, &.open, &.close {
            //     transform: translate3d(0, 0, 0);
            //     position: fixed; opacity: 1; z-index: 900;
            //     pointer-events: unset;
            //     animation: unset;
            //     min-height: fit-content;
            // }
            display: none;
            // background: none;
            // backdrop-filter: none;
            // width: fit-content;
            // left: calc(50dvw - 25dvw + 240px);
            // top: -16px;
        }
    }

    .config {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 8px;
        padding: 0px;
        // background: clr('surface', 'y00', .24);
        color: clr('surface', 'x08');
        // justify-self: stretch;
        
        // margin: 8px;
        border-radius: 0px 0px 10px 10px;
        // box-shadow: inset 0px 0px 4px 0px clr('surface', 'y16');
        // border: solid 4px clr('surface', 'y16');
        transition: $transition_00;
    }

    // menu {
    //     display: flex;
    //     flex-flow: column;
    //     justify-items: flex-start;
    //     gap: 12px;
    //     justify-content: flex-start;
    //     place-items: center;
    //     margin-inline: 2px;
    //     @include md($md_04) {
    //         display: grid;
    //         grid-template-columns: repeat(2, 1fr);
    //     }
    //     @include md($md_08) {
    //         grid-template-columns: repeat(3, 1fr);
    //     }
    //     @include md($md_16) {
    //         grid-template-columns: repeat(6, 1fr);
    //     }
    // }
    // .icons-nav {
    //     height: 40px;
    //     width: 40px;
    //     @include md($md_02) {
    //         height: 64px;
    //         width: 64px;
    //     }
    //     @include md($md_04) {
    //         height: 40px;
    //         width: 40px;
    //     }
    // }
    // .link-label {
    //     width: 100%;
    //     height: 100%;
    //     display: flex;
    //     flex-flow: row nowrap;
    //     align-items: center;
    //     @include md($md_04) {
    //         justify-content: center;
    //         padding: 0 0px 6px 0px;
    //     }
    // }
    // .menu-link {
    //     display: flex;
    //     flex-flow: row nowrap;
    //     justify-content: space-between;
    //     align-items: center;
    //     gap: 8px;
    //     // max-width: 88px;
    //     width: 100%;
    //     // max-height: 64px;
    //     font-size: 1rem;
    //     color: clr('detail', 'r-y02', .8);
    //     font-weight: 300;
    //     padding: 0px 8px 0px 8px;
    //     text-wrap: nowrap;
    //     background: clr('surface', 'r-x10');
    //     transition: $transition_00;
    //     // border: solid 1px clr('surface', 'r-x16');
    //     // border-radius: 16px / 16px;
    //     // border-radius: 160px 64px 64px 160px;
    //     // border-radius: 160px;
    //     border-radius: 40px / 80px;
    //     box-shadow:
    //         inset 8px 8px 16px -2px clr('surface', 'r-y24', .64),
    //         inset -8px -8px 16px 0px clr('surface', 'r-x03', .64),
    //         0px 0px 0px 2px clr('surface', 'r-000', .8),
    //         0px 0px 2px 3px clr('surface', 'r-x06'),
    //         3px 6px 4px 0px clr('surface', 'r-x02', .64),
    //     ;
    //     text-transform: uppercase;
    //     // font-family: v('font-logo');
    //     text-shadow: 2px 2px 4px clr('surface', 'r-x02');
    //     &:hover, &.sel-link:hover {
    //         --nav-icon-clr-01: #{clr('detail', 'r-y12', 1, 'nav-icon-clr-01')};
    //         --nav-icon-clr-02: #{clr('detail', 'r-000', 1, 'nav-icon-clr-02')};
    //         box-shadow:
    //             inset 8px 8px 16px -2px clr('surface', 'r-y24', .64),
    //             inset -8px -8px 16px 0px clr('surface', 'r-x03', .64),
    //             0px 0px 0px 2px clr('detail', 'r-y20', .96),
    //             0px 0px 32px 3px clr('detail', 'r-y12', .40),
    //             3px 6px 4px 0px clr('surface', 'r-x02', .64),
    //         ;
    //     }
    //     &.sel-link {
    //         --nav-icon-clr-01: #{clr('surface', 'r-y12', 1, 'nav-icon-clr-01')};
    //         --nav-icon-clr-02: #{clr('surface', 'r-000', 1, 'nav-icon-clr-02')};
    //         box-shadow:
    //             inset 8px 8px 16px -2px clr('surface', 'r-y24', .64),
    //             inset -8px -8px 16px 0px clr('surface', 'r-x03', .64),
    //             0px 0px 1px 2px clr('surface', 'r-y12', .96),
    //             0px 0px 32px 4px clr('aux', 'r-y12', .40),
    //             3px 6px 4px 0px clr('surface', 'r-x02', .64),
    //         ;
    //     }

    //     @include md($md_02) { font-size: 1.6rem; }
    //     @include md($md_04) {
    //         font-size: 1.12rem;
    //         flex-flow: column;
    //         gap: 0;
    //         max-height: 80px;
    //         padding: 4px 20px 4px 20px;
    //     }
    //     @include md($md_16) {
    //         padding: 2px 12px 2px 12px;
    //         border-radius: 12px;
    //         font-size: .8rem;
    //         gap: 0px;
    //         max-width: 112px;
    //     }
    // }

</style>