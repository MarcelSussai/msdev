<script lang="ts">
    import { LogoSymbol } from '_components'

</script>

<!-- ---------------------------------------------------------------- -->

<div class="all-logotype">

    <div class="logo"> <LogoSymbol /> </div>

    <div class="all-types">

        <div class="types">
            <div class="m">Marcel</div>
            <div class="s">Sussai</div>
        </div>

        <div class="desc">full-stack web developer</div>

    </div>

</div>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    $bp_00: $md_02;

    .all-logotype {
        --all-h: 52px;
        --all-w: 234px;

        display: flex;
        flex-flow: wrap nowrap;
        align-items: center;
        justify-content: center;
        gap: 4px;
        background:
            linear-gradient(
                -45deg,
                clr('surface', 'r-x08', .48),
                clr('surface', 'r-x08', 1) 24%,
                clr('surface', 'r-x06', .96) ,
                clr('surface', 'r-x08', .40) 76%,
                clr('surface', 'r-x08', .64) ,
            )
        ;
        padding: 0px 8px 0px 6px;
        border-radius: 12px;
        height: v('all-h');
        border: solid 1px clr('surface', 'r-x16');
        box-shadow: 0px 0px 8px 2px clr('surface', 'r-x04', .8);
        overflow: hidden;
        transition: $transition_00;
        z-index: 999;

        @include mix-ani-appear-001();

        
        @include md($bp_00) {
            --all-h: 68px;
            --all-w: 312px;
            padding: 0px 10px 0px 4px;
        }
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: fit-content;
        transition: $transition_00;
        // opacity: 0;
        
        @include md($bp_00) { height: 56px; }
    }

    .all-types {
        // padding: 4px 0;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        transition: $transition_00;
        // opacity: 0;

        height: 100%;
        @include user-select(none);

        text-shadow: 2px 2px 2px clr('surface', 'r-x00', .96);
    }

    .types {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        font-family: v('font-logo');
        font-weight: 900;
        gap: 2px;
        transition: $transition_00;

        @include md($bp_00) { font-size: 2.16rem; }
    }
    .m { color: clr('main'); }
    .s { color: clr('second'); }
    
    .desc {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
        font-size: .90rem;
        line-height: .88;
        font-weight: 300;
        color: clr('detail', 'r-y12');
        transition: $transition_00;

        @include md($bp_00)  { font-size: 1.22rem; }
    }

</style>