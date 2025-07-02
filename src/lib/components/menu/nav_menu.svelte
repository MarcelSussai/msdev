<script lang="ts">
    import { is_open, is_closing, hand_is_open_tog } from '_stores/nav_store'
    import { onMount } from 'svelte';

    function handle_match_media(e: any) {
        if(e.matches) { is_open.set(true) } else { is_open.set(false) }
    }
    onMount(() => {
        window.matchMedia('(min-width: 968px)').addEventListener('change', handle_match_media)
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
            animation: ani-all-nav-backdrop-01 .4s ease-in-out forwards;
        }
        &.close {
            opacity: 0;
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
            clr('surface', 'r-x10', .96),
            clr('surface', 'r-x06', .96) 24%,
            clr('surface', 'r-x04', .96),
            clr('surface', 'r-x06', .96) 76%,
            clr('surface', 'r-x10', .96),
        );
        backdrop-filter: blur(8px);
        border: solid 1px clr('surface', 'r-x12');
        border-radius: 16px;
        box-shadow:
            inset 0 0 24px clr('surface', 'r-000', .40),
            0px 8px 12px -2px clr('surface', 'r-x06', .48)
        ;

        &.open {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: all .4s .4s $ease_in_out_sine;
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

</style>