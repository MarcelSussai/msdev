<script lang="ts">
    import { hand_is_open_tog, is_open } from '_stores/nav_store'

</script>

<!-- ---------------------------------------------------------------- -->

<button class="{$is_open ? 'open' : ''}" aria-label="mudar tema" onclick={hand_is_open_tog}>
    <div class="bars {$is_open ? 'open' : ''}"></div>
</button>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    $bp_00: $md_02;

    button {
        $clr-hs: 'aux';
        --size: 44px;

        width: v('size');
        height: v('size');
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 2px clr(#{$clr-hs}, 'r-x22');
        transition: $transition_00;
        background:
            radial-gradient(
                farthest-corner at 48% 32% in hsl shorter hue,
                clr(#{$clr-hs}, 'r-y20'), clr(#{$clr-hs}, 'r-x08')
            )
        ;
        box-shadow:
            inset 4px 4px 8px 0px clr(#{$clr-hs}, 'r-y12', .4),
            inset -4px -4px 8px 0px clr(#{$clr-hs}, 'r-x08', .64),
            3px 3px 12px 2px clr(#{$clr-hs}, 'r-x02', .64)
        ;
        cursor: pointer;

        &:hover {
            box-shadow:
                inset 4px 4px 24px 2px clr(#{$clr-hs}, 'r-x14', .64),
                inset -4px -4px 24px 1px clr(#{$clr-hs}, 'r-y00', .32),
                0px 0px 12px 2px clr(#{$clr-hs}, 'r-y18', .32)
            ;
            border: solid 2px clr('detail', 'r-y22');
        }

        &.open{
            background: red;
        }

        @include md($bp_00) {
            --size: 48px;
        }
    }

    .bars {
        $clr-hs: 'detail';
        --w: 24px;
        --h: 3px;
        --bg: #{clr(#{$clr-hs}, 'r-y16')};
        --border-rad: 32px;
        --box-shad: 0px 0px 1px 2px #{clr(#{$clr-hs}, 'r-x08', .48)};
        --spacing: 7px;

        position: absolute;
        width: v('w');
        height: v('h');
        border-radius: v('border-rad');
        background: v('bg');
        box-shadow: v('box-shad');

        &::after, &::before {
            content: '';
            position: absolute;
            width: v('w');
            height: v('h');
            border-radius: v('border-rad');
            background: v('bg');
            left: 0;
            box-shadow: v('box-shad');
        }
        &::before { bottom: v('spacing'); }
        &::after { top: v('spacing'); }
        
        @include md($bp_00) {
            --w: 28px;
            --h: 4px;
            --spacing: 9px;
        }
    }
</style>