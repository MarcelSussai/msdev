<script lang="ts">
    import { onMount } from 'svelte'
    import { root_css_clear_names } from '$lib/utils/vars_css_in_js'
    import { BtnTheme } from '_components'

    let name_clrs = $state([''])
    let tones_clr = $state([''])

    let clr_name = $state('default')
    let clr_tone = $state('000')

    let is_locked_tone = $state(false)

    $inspect(clr_name)

    onMount(() => {
        name_clrs = root_css_clear_names('hs')
        tones_clr = root_css_clear_names('l-r')
    })

    const make_var_clr = (name: string = 'default', tone: string = '000') => `
        --clr: hsl( var(--hs-${name}), var(--l-${tone}) );
    `

    const check_tone = (tone: string) => tone === '000' || tone === 'x00' || tone === 'y00' ?
        'grid-column: 1 / -1; --w: 100%;' : ''

    const group_style = (name: string, tone: string) => `
        ${make_var_clr(name, tone)} ${check_tone(tone)}
    `
</script>

<!-- ---------------------------------------------------------------- -->

<section class="all-clrs-view">
    <h2>cores configuradas neste site</h2>
    
    <div class="infos">
        <BtnTheme />
        <button
            class="btn-00 {is_locked_tone ? 'sel_hover' : ''}"
            style="border-radius: 4px; padding: 8px;"
            onclick={() => is_locked_tone = !is_locked_tone}
        >
            Travar tema
        </button>
    </div>

    <div class="infos">
        cor selecionada: <span>{clr_name}</span>
    </div>
    <div class="infos">
        tom selecionado: <span>{is_locked_tone ? 'r-' : ''}{clr_tone}</span>
    </div>
    <div class="infos" style="font-family: var(--font-mono); font-weight: 500; font-size: .76rem;">
        <span style="width: 100%">css</span>
        hsl(var(--hs-{clr_name}), var(--l-{is_locked_tone ? 'r-' : ''}{clr_tone}))
    </div>
    <div class="infos" style="font-family: var(--font-mono); font-weight: 500; font-size: .76rem;">
        <span style="width: 100%">scss com os utilitários</span>
        clr('{clr_name}', '{is_locked_tone ? 'r-' : ''}{clr_tone}')
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

        border:        solid 1px clr('surface', 'x20');
        border-radius: 4px;
        display:       flex;
        flex-flow:     column;
        width:         fit-content;
        // min-width:     calc(100% - v('pad') * 2);
        margin-inline: v('pad');
        @include user-select(none);
    }

    h2 {
        font-size:     1.20rem;
        font-weight:   300;
        line-height:   1.36;
        color:         clr('surface', 'x06');
        padding:       v('pad');
        border-bottom: solid 1px clr('surface', 'x20');
        text-align: center;
    }

    .all-clrs-names {
        display:               grid;
        grid-template-columns: repeat(8, 1fr);
        padding:               v('pad');
        gap:                   v('pad');
        border-bottom:         solid 1px clr('surface', 'x20');
        width: fit-content;
        margin-inline: auto;
    }

    .all-clrs-tones {
        display:               grid;
        grid-template-columns: repeat(8, 1fr);
        padding:               v('pad');
        gap:                   v('pad');
        width:                 fit-content;
        margin-inline:         auto;
    }

    .clr-btn {
        --size: 30px;
        min-width:         v('w', #{v('size')});
        height:            v('size');
        // aspect-ratio:  1;
        background:    hsl(v('clr'), v('l-clr', #{v('l-000')}));
        border:        solid 2px hsl(v('clr'), v('l-x20'));
        border-radius: 4px;
        transition:    all .3s $ease_in_out_sine;
        cursor:        pointer;
        
        &:hover, &.selected {
            border:     solid 2px hsl(v('clr'), v('l-y08'));
            background: hsl(v('clr'), v('l-clr', #{v('l-y16')}));
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
        justify-content: center;
        gap:           8px;
        padding:       8px;
        border-bottom: solid 1px clr('surface', 'x20');
        font-size:     .80rem;
        
        span {
            font-size:   1.12rem;
            font-family: v('font-mono');
            font-weight: 800;
            text-align:  center;
        }
    }
</style>