import { writable } from 'svelte/store'



export const is_open = writable(false)
export const hand_is_open_tog = () => is_open.update((v: boolean) => !v)

export const is_active_link = writable('')
export const hand_is_active_link = (path: string) => is_active_link.set(path)

