export const root_css_vars = (prefix = '') => Array.from(document.styleSheets)
  .flatMap((styleSheet: CSSStyleSheet) => Array.from(styleSheet.cssRules))
  .filter(
    (cssRule: CSSRule): cssRule is CSSStyleRule =>
      cssRule instanceof CSSStyleRule && cssRule.selectorText === ':root',
  )
  .flatMap((cssRule: CSSStyleRule) => Array.from(cssRule.style))
  .filter((style: string) => style.startsWith('--' + prefix))

export const root_css_clear_names = (prefix = '') => root_css_vars(prefix)
  .map(item => item.replace(`--${prefix}-`, ''))