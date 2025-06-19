import '$lib/styles/initial.css'
import '$lib/styles/initial.scss'

export function load({ url }) {
  return {
    url: url.pathname,
  }
}