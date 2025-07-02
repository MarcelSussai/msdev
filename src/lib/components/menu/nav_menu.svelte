<script lang="ts">
    import { BtnTheme, BtnRgbMode } from '_components'
    import { is_open, is_closing, hand_is_open_tog } from '_stores/nav_store'
    import { onMount } from 'svelte'

    function handle_match_media(e: any) {
        if(e.matches) { is_open.set(true) } else { is_open.set(false) }
    }
    onMount(() => {
        window.matchMedia('(min-width: 968px)').addEventListener('change', handle_match_media)
        handle_match_media(window.matchMedia('(min-width: 968px)'))
    })

    // let test_close = $state(false)
    // let test_open = $derived()

    // $inspect(test_close)
    // $effect(() => { $is_closing = !$is_open ? true : false })
</script>

<!-- ---------------------------------------------------------------- -->
<!-- {$is_open ? 'open' : ''} -->
    <div
        class="all-nav-backdrop {$is_open ? 'open' : $is_closing ? 'close': ''}"
    >
        <nav class="{ $is_open ? 'open' : '' } {$is_closing ? 'close': ''}">
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
            animation: ani-all-nav-backdrop-01 .4s ease-in-out forwards;
        }
        &.close {
            opacity: 0;
            animation: unset;
            animation: ani-all-nav-backdrop-02 .4s ease-in-out forwards;
        }

        @include md($md_16) { display: contents; }
    }

    nav {
        position: absolute;
        width: calc(100% - 48px);
        min-height: calc(100% - 128px);
        bottom: 24px;
        left: 24px;
        transition: $transition_00;
        opacity: 0;
        transform: translate3d(calc(100% + 48px), 0, 0);
        
        background: linear-gradient(
            45deg,
            clr('surface', 'r-x12', .96),
            clr('surface', 'r-x06', .96) 16%,
            clr('surface', 'r-x04', .96),
            clr('surface', 'r-x06', .96) 84%,
            clr('surface', 'r-x12', .96),
        );
        backdrop-filter: blur(8px);
        border: solid 2px clr('surface', 'r-x14', 1);
        border-radius: 4px;
        // box-shadow:
        //     inset 0 0 64px clr('surface', 'r-000', .48),
        //     // 4px 8px 12px -2px clr('surface', 'r-x08', .56)
        // ;
        pointer-events: none;

        &.open {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: all .4s .4s $ease_in_out_sine;
            pointer-events: unset;
        }
        &.close {
            opacity: 0;
            transform: translate3d(calc(100% + 48px), 0, 0);
            transition: all .4s $ease_in_out_sine;
        }

        @include md($md_02) {
            width: calc(100% - 64px);
            min-height: calc(100% - 160px);
            bottom: 32px;
            left: 32px;
        }
        
        @include md($md_16) { position: fixed; opacity: 1; z-index: 900; }
    }

    .config {
        display: flex;
        flex-flow: row wrap;
        gap: 16px;
        padding: 8px;
        background: clr('surface', 'y08', .48);
        color: clr('surface', 'x08');
        margin: 16px;
        border-radius: 48px;
        box-shadow: inset 0px 0px 4px 0px clr('surface', 'y16');
        // border: solid 4px clr('surface', 'y16');
        transition: $transition_00;
    }

</style>