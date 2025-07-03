<script lang="ts">
    import { onMount } from 'svelte'
    import { root_css_clear_names, get_value_of_css_var} from '$lib/utils/vars_css_in_js'
    import { BtnTheme } from '_components'



    let name_clrs = $state([''])
    let tones_clr = $state([''])

    let clr_name = $state('default')
    let clr_tone = $state('000')

    let is_locked_tone = $state(false)
    
    let value_of_name = $state('')
    let value_of_tone = $state('')
    $effect(() => {
        value_of_name = get_value_of_css_var('hs-' + clr_name)
        value_of_tone = get_value_of_css_var('l-' + clr_tone)
    })
    // let value_of_name = $derived(get_value_of_css_var('hs-' + clr_name))
    // let value_of_tone = $derived(get_value_of_css_var('l-' + clr_tone))
    
    onMount(() => {
        name_clrs = root_css_clear_names('hs')
        tones_clr = root_css_clear_names('l-r')
    })

    const check_tone = (tone: string) => tone === '000' || tone === 'x00' || tone === 'y00' ?
        'grid-column: 1 / -1; --w: 100%;' : ''

</script>

<!-- ---------------------------------------------------------------- -->

<section class="all-clrs-view">
    <h2>cores configuradas neste site</h2>
    
    <div class="infos">
        <BtnTheme />
        |
        <button
            class="btn-00 {is_locked_tone ? 'sel_hover' : ''}"
            style="
                border-radius: 999px;
                gap: 8px;
                font-family: var(--font-main);
                min-width: 168px;
                justify-content: space-between;
            "
            style:--pad-inline="16px"
            onclick={() => is_locked_tone = !is_locked_tone}
        >
            <span style="font-size: small;">tons:</span> {is_locked_tone ? 'travado' : 'destravado'}
        </button>
    </div>

    <div class="infos"> cor selecionada: <span>{clr_name}</span> </div>

    <div class="infos"> tom selecionado: <span>{is_locked_tone ? 'r-' : ''}{clr_tone}</span> </div>
    <div class="infos"> <span>{value_of_name},</span> <span>{value_of_tone}</span> </div>

    <div class="infos">
        css:
        <span style="width: 100%;">hsl( <br>
            &nbsp;&nbsp;&nbsp;&nbsp;var(--hs-{clr_name}), <br>
            &nbsp;&nbsp;&nbsp;&nbsp;var(--l-{is_locked_tone ? 'r-' : ''}{clr_tone}) <br>
        )</span>
    </div>

    <div class="infos">
        scss (sass) com os utilitários: <span>clr('{clr_name}', '{is_locked_tone ? 'r-' : ''}{clr_tone}')</span>
        
    </div>

    <div class="infos">
        <div style="
            height: 32px;
            width: 100%;
            background: hsl(var(--hs-{clr_name}), var(--l-{is_locked_tone ? 'r-' : ''}{clr_tone}));
        "></div>
    </div>

    <div class="all-clrs-names">
        {#each name_clrs as name}
            <button
                aria-label="cor {name}"
                class="clr-btn {clr_name == name ? 'selected' : ''}"
                style="--clr: var(--hs-{name});"
                onclick={ () => { clr_name = name } }
                title="cor: {name}"
            >
                
            </button>
        {/each}
    </div>

    <div class="all-clrs-tones">
        {#each tones_clr as tone}
            <button
                aria-label="cor {clr_name} com luminosidade {tone}"
                class="clr-btn btn-tone {clr_tone == tone ? 'selected' : ''}"
                style="--clr: var(--hs-{clr_name}); --l-clr: var(--l-{is_locked_tone ? 'r-' : ''}{tone}); {check_tone(tone)}"
                onclick={ () => { clr_tone = tone } }
                title="{tone}"
            >
                
            </button>
        {/each}
    </div>
</section>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    .all-clrs-view {
        --pad: 6px;

        border:        solid 2px clr('surface', 'x20');
        border-radius: 4px;
        display:       flex;
        flex-flow:     column;
        width:         298px;

        @include md($md_16) { width: fit-content; }
    }

    h2 {
        font-size:     1.12rem;
        font-weight:   800;
        line-height:   1.36;
        padding:       v('pad');
        border-bottom: solid 1px clr('surface', 'x20');
        text-align:    center;
        @include user-select(none);
    }

    .all-clrs-names {
        display:               grid;
        grid-template-columns: repeat(8, 1fr);
        padding:               v('pad');
        gap:                   v('pad');
        border-bottom:         solid 1px clr('surface', 'x20');
        width: fit-content;
        margin-inline: auto;

        @include md($md_16) { grid-template-columns: repeat(16, 1fr); }
    }

    .all-clrs-tones {
        display:               grid;
        grid-template-columns: repeat(8, 1fr);
        padding:               v('pad');
        gap:                   v('pad');
        width:                 fit-content;
        margin-inline:         auto;
        
        @include md($md_16) { grid-template-columns: repeat(24, 1fr); }
    }

    .clr-btn {
        --size: 30px;
        min-width:     v('w', #{v('size')});
        height:        v('size');
        background:    hsl(v('clr'), v('l-clr', #{v('l-000')}));
        border:        solid 2px hsl(v('clr'), v('l-x20'));
        border-radius: 4px;
        transition:    all .3s $ease_in_out_sine;
        cursor:        pointer;
        
        &:hover, &.selected {
            border:     solid 2px hsl(v('clr'), v('l-y08'));
            background: hsl(v('clr'), v('l-clr', #{v('l-000')}));
        }
        &.selected {
            border:     solid 2px hsl(v('clr'), v('l-y02'));
        }
    }
    .btn-tone { border: solid 1px hsl(v('clr'), v('l-x20')); }

    .infos {
        display:       flex;
        flex-flow:     row wrap;
        align-items:   center;
        gap:           8px;
        padding:       8px;
        border-bottom: solid 1px clr('surface', 'x20');
        font-size:     .88rem;
        font-family:   v('font-mono');
        
        span {
            font-size:   1rem;
            font-weight: 800;
        }
    }
</style>