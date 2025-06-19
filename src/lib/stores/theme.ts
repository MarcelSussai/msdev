import { writable } from 'svelte/store'

export const current_theme = writable('')

export const set_theme = (theme: string): void => {
  const ONE_YEAR = 60 * 60 * 24 * 365
  document.cookie = `theme=${theme}; max-age=${ONE_YEAR}; path=/`
	document.documentElement.setAttribute('theme', theme)
	current_theme.set(theme)
}

export const config_theme = () => {
  const saved_theme = document.documentElement.getAttribute('theme')
  if (saved_theme) {
    current_theme.set(saved_theme)
    return
  }
  const prefers_dark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = prefers_dark ? 'dark' : 'light'
  set_theme(theme)
}
