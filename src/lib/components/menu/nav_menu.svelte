<script lang="ts">
    import { sineInOut } from 'svelte/easing'
    import { is_open } from '_stores/nav_store'
    import { onMount } from 'svelte';

    function handle_match_media(e: any) {
        if(e.matches) { is_open.set(true) } else { is_open.set(false) }
    }
    onMount(() => {
        // window.matchMedia('(min-width: 968px)').addListener(handle_match_media)
        // handle_match_media(window.matchMedia('(min-width: 968px)'))
        window.matchMedia('(min-width: 968px)').addEventListener('change', handle_match_media)
    })

    // function appear_nav(node: HTMLElement) {
    //     return { delay: 0, duration: 400, easing: sineInOut, css: (t: number, u: number) => {
    //         // console.log(t)
    //         let test_u = (u * 100).toFixed(2)
    //         // let test_t = (window.innerWidth >= 968 ? 1 : t).toFixed(2)
    //         return `
    //             transform: translate3d(-${test_u}%, 0, 0);
    //             opacity: ${t};
    //         `
    //     }
    // } }
</script>

<!-- ---------------------------------------------------------------- -->
<!-- {$is_open ? 'open' : ''} -->
    <div
        class="all-nav-backdrop {$is_open ? 'open' : 'close'}"
    >
        <nav>

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
            transform: translate3d(-100%, 0, 0);
            opacity: 0;
            // animation: ani-all-nav-backdrop-01 .4s ease-in-out reverse forwards;
        }

        @include md($md_16) {
            // transform: none !important;
            // opacity: 1;
            display: contents;

        }
    }

    nav {
        position: absolute;
        width: calc(100% - 28px);
        min-height: calc(100% - 96px);
        bottom: 14px;
        left: 14px;
        transition: $transition_00;
        opacity: 0;
        
        background: linear-gradient(
            45deg,
            clr('surface', 'r-x08', .80),
            clr('surface', 'r-x04', .80) 24%,
            clr('surface', 'r-x02', .80),
            clr('surface', 'r-x04', .80) 76%,
            clr('surface', 'r-x08', .80),
        );
        backdrop-filter: blur(8px);
        border: solid 1px clr('surface', 'r-x12');
        border-radius: 16px;
        box-shadow:
            inset 0 0 24px clr('surface', 'r-000', .40),
            0px 8px 12px -2px clr('surface', 'r-x06', .48)
        ;

        @include md($md_02) {
            width: calc(100% - 16px);
            min-height: calc(100% - 104px);
            bottom: 8px;
            left: 8px;
        }
        
        @include md($md_16) {
            // transform: none !important;
            opacity: 1;

        }
    }

</style>