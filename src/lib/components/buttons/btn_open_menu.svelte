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

    $clr-hs: 'aux';
    button {
        --size: 44px;
        width: v('size');
        height: v('size');
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px clr(#{$clr-hs}, 'r-x22');
        border-radius: 50%;
        // border-radius: 12px;
        transition: $transition_00;
        cursor: pointer;
        background:
            radial-gradient( farthest-corner at 48% 32% in hsl shorter hue,
                clr(#{$clr-hs}, 'r-y20'), clr(#{$clr-hs}, 'r-x08')
            )
        ;
        box-shadow:
            inset 4px 4px 8px 0px clr(#{$clr-hs}, 'r-y12', .4),
            inset -4px -4px 8px 0px clr(#{$clr-hs}, 'r-x08', .64),
            3px 3px 12px 2px clr(#{$clr-hs}, 'r-x02', .64)
        ;
        // transform: translateY(-4px);
        &:hover {
            box-shadow:
                inset 4px 4px 24px 2px clr(#{$clr-hs}, 'r-x14', .64),
                inset -4px -4px 24px 1px clr(#{$clr-hs}, 'r-y00', .32),
                0px 0px 12px 2px clr(#{$clr-hs}, 'r-y18', .32)
            ;
            border: solid 1px clr(#{$clr-hs}, 'r-000');
            & > .bars {
                --bg: #{clr('detail', 'r-000')};
            }
        }
        &.open{
            box-shadow:
                inset 4px 4px 24px 2px clr('aux', 'r-y24', .64),
                inset -4px -4px 24px 1px clr('aux', 'r-x16', .32),
                0px 0px 12px 2px clr('aux', 'r-y18', .32)
            ;
            border: solid 1px clr('error', 'r-y12');
        }
        // &::after {
        //     content: 'menu';
        //     position: absolute;
        //     bottom: -16px;
        //     color: clr('surface', 'r-x22');
        //     text-shadow: 1px 1px 1px clr('surface', 'r-x12');
        //     font-size: .72rem;
        //     opacity: .48;
        // }
        @include md($md_02) { --size: 48px; }
    }

    .bars {
        $clr-hs-bars: 'surface';
        --w: 24px;
        --h: 4px;
        --bg: #{clr(#{$clr-hs-bars}, 'r-y08')};
        --border-rad: 32px;
        --box-shad: 0px 0px 0px 1px #{clr(#{$clr-hs}, 'r-x06', .32)};
        --spacing: 8px;

        position: absolute;
        width: v('w');
        height: v('h');
        border-radius: v('border-rad');
        background: v('bg');
        box-shadow: v('box-shad');
        transition: $transition_00;

        &::after, &::before {
            content: '';
            position: absolute;
            width: v('w');
            height: v('h');
            border-radius: v('border-rad');
            background: v('bg');
            left: 0;
            box-shadow: v('box-shad');
            transition: $transition_00;
        }
        &::before { bottom: v('spacing'); }
        &::after { top: v('spacing'); }

        &.open {
            --bg: #{clr('error', 'r-y12')};
            background: transparent;
            box-shadow: none;

        }
        &.open::after, &.open::before {
            --box-shad: 0px 0px 0px 1px #{clr('error', 'r-x00', .32)};
            transform-origin: center;
        }
        &.open::after {
            top: 0px;
            transform: rotate(-45deg);
        }
        &.open::before {
            bottom: 0px;
            transform: rotate(45deg);
        }
        
        @include md($md_02) {
            --w: 28px;
            --h: 5px;
            --spacing: 9px;
        }
    }
</style>