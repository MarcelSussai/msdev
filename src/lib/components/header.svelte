<script lang="ts">
    import { Logotype, BtnOpenMenu } from '_components'

</script>

<!-- ---------------------------------------------------------------- -->

<header>
    <Logotype />
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

        width: calc(100% - 12px);
        max-width: 968px;
        height: v('header-height');
        margin: auto;
        margin-bottom: 16px;
        padding: 0px 8px 0px 5px;

        background: linear-gradient(
            45deg,
            clr('surface', 'r-x08', .86),
            clr('surface', 'r-x04', .86) 32%,
            clr('surface', 'r-x04', .86) 68%,
            clr('surface', 'r-x08', .86),
        );
        backdrop-filter: blur(8px);
        border: solid 2px clr('surface', 'r-x12');
        border-radius: 16px;
        box-shadow:
            inset 0 0 24px clr('surface', 'r-000', .48),
            0px 8px 12px -2px clr('surface', 'r-x06', .48)
        ;
        transform: translate3d(0, calc( -100% + 8px ), 0);
        animation: ani_appear_003 .4s $time-ani-hero $ease_in_out_sine forwards;

        @include md($md_02) {
            width: calc(100% - 16px);
            top: 8px;
            padding: 0px 10px 0px 5px;
        }
    }
</style>