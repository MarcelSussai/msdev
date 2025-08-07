<script lang="ts">
    import { Logotype, BtnOpenMenu, Menu, ConfigMenu } from '_components'
    import { fade } from 'svelte/transition'

    let open_config = $state(false)

    function open_config_toggle() { open_config = !open_config }

</script>

<!-- ---------------------------------------------------------------- -->

<header>
    <Logotype />
    <nav>
        <Menu />
        <button class="config-menu" aria-label="menu de configuração" onclick={open_config_toggle}> <div class="symbol-config-menu"></div> </button>
        {#if open_config}
            <section transition:fade={{duration: 300}} class="config">
                <ConfigMenu />
            </section>
        {/if}
    </nav>
    <BtnOpenMenu />
</header>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    header {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;

        position: sticky;
        align-self: start;
        top: 6px;
        z-index: 900;
        gap: 8px;

        width: calc(100dvw - 24px);
        max-width: 1080px;
        height: v('header-height');
        margin: auto;
        margin-bottom: 16px;
        padding: 0px 8px 0px 6px;

        background: linear-gradient(
            45deg,
            clr('surface', 'r-x08', .86),
            clr('surface', 'r-x04', .86) 32%,
            clr('surface', 'r-x04', .86) 68%,
            clr('surface', 'r-x08', .86),
        );
        backdrop-filter: blur(8px);
        border: solid 1px clr('surface', 'r-x14');
        border-radius: 16px;
        box-shadow:
            inset 0 0 24px clr('surface', 'r-000', .48),
            0px 8px 12px -2px clr('surface', 'r-x06', .48)
        ;
        transform: translate3d(0, calc( -100% - 16px ), 0);
        animation: ani_appear_003 v('time-ani-header') v('time-ani-delay-00')  $ease_in_out_sine forwards;

        @include md($md_02) {
            width: calc(100% - 16px);
            top: 8px;
            padding: 0px 10px 0px 6px;
        }
    }
    nav {
        display: none;

        @include md($md_17) {
            width: fit-content;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-evenly;
            align-items: center;
            gap: 12px;

        }
    }
    .config-menu {
        display: none;
        @include md($md_17) {
            display: flex;
            justify-content: center;
            transition: $transition_00;
            align-items: center;
            padding: 8px 4px;
            background: transparent;
            cursor: pointer;
            height: 40px;
            border: solid 1px transparent;
            border-radius: 999px;
            // backdrop-filter: blur(16px);
            opacity: 0;
            animation: ani_appear_002 .3s v('time-ani-delay-08') forwards;
            &:hover {
                border: solid 1px clr('surface', 'r-y16');
            }
        }
    }
    .symbol-config-menu {
        width: 6px;
        height: 6px;
        background: clr('surface', 'r-y16');
        border-radius: 999px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        &::before, &::after {
            content: '';
            position: absolute;
            width: 6px;
            height: 6px;
            background: inherit;
            border-radius: 999px;
        }
        &::before {
            top: -10px;
        }
        &::after {
            top: 10px;
        }
    }
    .config {
        position: absolute;
        bottom: calc(-100% + 8px);
        right: 0;
        padding: 8px 12px 8px 8px;
        // width: 200px;
        // height: 64px;
        background: clr('surface', 'r-x14');
        border-radius: 999px;
        box-shadow: 4px 4px 8px 0px clr('surface', 'r-x04', .48);
        border: solid 1px clr('surface', 'r-x20');
    }
</style>