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
        --size: 40px;
        width: v('size');
        height: v('size');
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        // border: solid 2px clr(#{$clr-hs}, 'r-x22');
        // border: solid 2px transparent;
        border-radius: 999px;
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
            3px 3px 12px 2px clr(#{$clr-hs}, 'r-x02', .64),
            0px 0px 0px 2px clr('detail', 'r-y12', 1)
        ;
        opacity: 0;
        animation: ani_appear_002 .3s v('time-ani-delay-06') forwards;

        &:hover {
            box-shadow:
                inset 4px 4px 24px 2px clr(#{$clr-hs}, 'r-x14', .64),
                inset -4px -4px 24px 1px clr(#{$clr-hs}, 'r-y00', .32),
                0px 0px 12px 2px clr(#{$clr-hs}, 'r-y18', .32),
                0px 0px 0px 2px clr('detail', 'r-000', .96)
            ;
            // border: solid 1px clr(#{$clr-hs}, 'r-000');
            // border: solid 2px clr('detail', '000');
            & > .bars {
                --bg: #{clr('detail', 'r-000')};
            }
        }
        &.open{
            box-shadow:
                inset 4px 4px 24px 2px clr('aux', 'r-y24', .64),
                inset -4px -4px 24px 1px clr('aux', 'r-x16', .32),
                0px 0px 12px 2px clr('aux', 'r-y18', .32),
                0px 0px 0px 2px clr('error', 'r-y16', .96)
            ;
            // border: solid 2px clr('error', 'r-y12');
        }
        @include md($md_02) { --size: 48px; }
        @include md($md_17) { display: none; }
    }

    .bars {
        $clr-hs-bars: 'detail';
        --w: 24px;
        --h: 4px;
        --bg: #{clr(#{$clr-hs-bars}, 'r-y12')};
        --border-rad: 32px;
        --box-shad: 0px 0px 0px 1px #{clr(#{$clr-hs-bars}, 'r-x10', .8)};
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