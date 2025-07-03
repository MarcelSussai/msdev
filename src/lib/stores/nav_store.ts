import { writable } from 'svelte/store'



export const is_open = writable(false)
export const is_closing = writable(false)
export const hand_is_open_tog = (_: unknown, dur = 300) => {
    let opened = false

    is_open.subscribe((v) => { opened = v })

    if(!opened) { is_closing.set(false); is_open.update((v: boolean) => !v); return }

    is_closing.set(true)
    setTimeout(() => { is_open.update((v: boolean) => !v) }, dur)
}

export const is_active_link = writable('')
export const hand_is_active_link = (path: string) => is_active_link.set(path)

