<script lang="ts">
    import ClrsView from '_components/_dev_utils/clrs_view.svelte'
    import {
        LogoSymbol,
        NavIconAboutMe,
        NavIconArticles,
        NavIconContact,
        NavIconHome,
        NavIconPortfolio,
        NavIconSkills
    } from '_components'

</script>

<!-- ---------------------------------------------------------------- -->

<!-- <h1>PÁGINA 01</h1> -->
<!-- <ClrsView /> -->
<!-- <div class="test-icon">
    <LogoSymbol />
</div> -->
<div class="test"> <NavIconAboutMe /> </div>
<div class="test"> <NavIconArticles /> </div>
<div class="test"> <NavIconContact /> </div>
<div class="test"> <NavIconHome /> </div>
<div class="test"> <NavIconPortfolio /> </div>
<div class="test"> <NavIconSkills /> </div>


<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    // .test-icon {
    //     // width: 400px;
    //     width:  96px;
    //     // border: solid 2px red;
    // }
    // @property --hue-test {
    //     syntax: "<angle>";
    //     inherits: false;
    //     initial-value: 0deg;
    // }

    // h1 {
    //     position: sticky;
    //     z-index: 4;
    //     top: 96px;
    //     width: 100%;
    //     background: gray;
    // }

    .test {
        --var-test: #{v('hue-test')}, 100%;
        --size: 80px;
        // --teste-clr-hs: #{v_hs('detail')};
        // --teste-clr-l: #{v_l('x12')};
        width: v('size');
        height: v('size');
        // border-radius: 999px;
        border-radius: 16px;
        padding: 6px;
        // border: solid 1px;
        // background: clr($var: 'teste-clr');
        background: clr('aux', 'r-x18', 1, 'teste-clr');
        // background: v('nav-icon-clr-02');
        // animation: test-ani 8s linear infinite;
    }

    // @keyframes test-ani { 0% { --hue-test: 0deg; } 100% { --hue-test: 360deg; } }
</style>