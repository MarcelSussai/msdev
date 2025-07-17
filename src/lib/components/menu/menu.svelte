<script lang="ts">
    import {
        NavIconAboutMe,
        NavIconArticles,
        NavIconContact,
        NavIconHome,
        NavIconPortfolio,
        NavIconSkills,
    } from '_components'
    import { is_open, is_closing, hand_is_open_tog, is_active_link } from '_stores/nav_store'

    function get_style_class_selected(path: string) {
        return $is_active_link == path ? 'sel-link' : ''
    }
</script>

<!-- ---------------------------------------------------------------- -->

<menu>
    <a href="/" onclick={hand_is_open_tog} class="menu-link {get_style_class_selected('/')}">
        <div class="icons-nav"> <NavIconHome /> </div> <span class="link-label">home</span>
    </a>
    <a href="/page_test" onclick={hand_is_open_tog} class="menu-link {get_style_class_selected('/page_test')}">
        <div class="icons-nav"> <NavIconAboutMe /> </div> <span class="link-label {$is_active_link == '/about_me' ? '.sel-link' : ''}">quem sou</span>
    </a>
    <a href="/" onclick={hand_is_open_tog} class="menu-link">
        <div class="icons-nav"> <NavIconSkills /> </div> <span class="link-label {$is_active_link == '/skills' ? '.sel-link' : ''}">habilidades</span>
    </a>
    <a href="/" onclick={hand_is_open_tog} class="menu-link">
        <div class="icons-nav"> <NavIconPortfolio /> </div> <span class="link-label {$is_active_link == '/portfolio' ? '.sel-link' : ''}">portfolio</span>
    </a>
    <a href="/" onclick={hand_is_open_tog} class="menu-link">
        <div class="icons-nav"> <NavIconArticles /> </div> <span class="link-label {$is_active_link == '/articles' ? '.sel-link' : ''}">artigos</span>
    </a>
    <a href="/" onclick={hand_is_open_tog} class="menu-link">
        <div class="icons-nav"> <NavIconContact /> </div> <span class="link-label {$is_active_link == '/contact' ? '.sel-link' : ''}">contato</span>
    </a>
</menu>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    menu {
        display: flex;
        flex-flow: column;
        justify-items: flex-start;
        gap: 12px;
        justify-content: flex-start;
        place-items: center;
        margin-inline: 2px;
        @include md($md_04) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        @include md($md_08) {
            grid-template-columns: repeat(3, 1fr);
        }
        @include md($md_17) {
            grid-template-columns: repeat(6, 1fr);
        }
    }
    .icons-nav {
        height: 40px;
        width: 40px;
        @include md($md_02) {
            height: 64px;
            width: 64px;
        }
        @include md($md_04) {
            height: 40px;
            width: 40px;
        }
        @include md($md_17) {
            height: 32px;
            width: 32px;
        }
    }
    .link-label {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        @include md($md_04) {
            justify-content: center;
            padding: 0 0px 6px 0px;
        }
    }
    .menu-link {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        // max-width: 88px;
        width: 100%;
        // max-height: 64px;
        font-size: 1rem;
        color: clr('detail', 'r-y02', .8);
        font-weight: 800;
        line-height: 1;
        padding: 0px 8px 0px 8px;
        text-wrap: nowrap;
        background: clr('surface', 'r-x10');
        transition: $transition_00;
        // border: solid 1px clr('surface', 'r-x16');
        // border-radius: 16px / 16px;
        // border-radius: 160px 64px 64px 160px;
        // border-radius: 160px;
        // border-radius: 40px / 80px;
        border-radius: 8px;
        box-shadow:
            inset 8px 8px 16px -2px clr('surface', 'r-x22', .64),
            inset -8px -8px 16px 0px clr('surface', 'r-x03', .64),
            0px 0px 0px 2px clr('surface', 'r-x10', .8),
            0px 0px 2px 3px clr('surface', 'r-x06'),
            3px 6px 4px 0px clr('surface', 'r-x02', .64),
        ;
        text-transform: uppercase;
        // font-family: v('font-logo');
        text-shadow: 2px 2px 4px clr('surface', 'r-x02');
        &:hover, &.sel-link:hover {
            --nav-icon-clr-01: #{clr('detail', 'r-y12', 1, 'nav-icon-clr-01')};
            --nav-icon-clr-02: #{clr('detail', 'r-000', 1, 'nav-icon-clr-02')};
            box-shadow:
                inset 8px 8px 16px -2px clr('surface', 'r-x22', .64),
                inset -8px -8px 16px 0px clr('surface', 'r-x03', .64),
                0px 0px 0px 2px clr('detail', 'r-y20', .96),
                0px 0px 32px 3px clr('detail', 'r-y12', .40),
                3px 6px 4px 0px clr('surface', 'r-x02', .64),
            ;
            color: clr('detail', 'r-y12', 1);
        }
        &.sel-link {
            --nav-icon-clr-01: #{clr('surface', 'r-y12', 1, 'nav-icon-clr-01')};
            --nav-icon-clr-02: #{clr('surface', 'r-000', 1, 'nav-icon-clr-02')};
            box-shadow:
                inset 8px 8px 16px -2px clr('surface', 'r-x22', .64),
                inset -8px -8px 16px 0px clr('surface', 'r-x03', .64),
                0px 0px 1px 2px clr('surface', 'r-y12', .96),
                0px 0px 32px 4px clr('aux', 'r-y12', .40),
                3px 6px 4px 0px clr('surface', 'r-x02', .64),
            ;
        }

        @include md($md_02) { font-size: 1.6rem; }
        @include md($md_04) {
            font-size: 1.12rem;
            flex-flow: column;
            gap: 0;
            max-height: 80px;
            padding: 4px 20px 4px 20px;
        }
        @include md($md_17) {
            padding: 2px 10px 4px 10px;
            border-radius: 12px;
            font-size: .72rem;
            line-height: .72;
            gap: 4px;
            // width: fit-content ;
            // max-width: 112px;
        }
    }
</style>