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
        display: flex;
        flex-flow: wrap nowrap;
        align-items: center;
        justify-content: center;
        gap: 4px;
        background:
            linear-gradient(
                45deg,
                clr('surface', 'r-x08', .48),
                clr('surface', 'r-x08', 1) 24%,
                clr('surface', 'r-x04', .8) ,
                clr('surface', 'r-x08', .32) 76%,
                clr('surface', 'r-x08', .48) ,
            )
        ;
        padding: 0px 4px 0px 2px;
        border-radius: 64px 16px 16px 64px;
        height: 46px;
        border: solid 1px clr('surface', 'r-x08');
        box-shadow: 0px 0px 8px 2px clr('surface', 'r-x04', .8);
        
        @include md($bp_00) {
            padding: 0px 6px 0px 4px;
            height: 64px;
        }
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        
        @include md($bp_00) { height: 56px; }
    }

    .all-types {
        // padding: 4px 0;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        height: 100%;
        @include user-select(none);

        text-shadow: 2px 2px 2px clr('surface', 'r-x00', .96);
    }

    .types {
        display: flex;
        flex-flow: row nowrap;
        font-size: 1.6rem;
        font-family: v('font-logo');
        font-weight: 900;
        gap: 2px;

        @include md($bp_00) { font-size: 2.16rem; }
    }
    .m { color: clr('main'); }
    .s { color: clr('second'); }
    
    .desc {
        width: 100%;
        text-align: center;
        font-size: .92rem;
        line-height: .88;
        font-weight: 200;
        color: clr('detail', 'r-y14');

        @include md($bp_00)  { font-size: 1.26rem; }
    }

</style>