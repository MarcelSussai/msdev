import { writable } from 'svelte/store'



export const is_open = writable(false)
export const is_closing = writable(false)
export const hand_is_open_tog = () => {
    let opened = false
    let closing = false
    is_open.subscribe((v) => {
        opened = v
        console.log('opened: ', v)

    })
    is_closing.subscribe((v) => {
        closing = v
        console.log('closing: ', v)
    })
    if(!opened) {
        is_closing.set(false)
        is_open.update((v: boolean) => !v)
        return
    }
    is_closing.set(true)
    setTimeout(() => {
        console.log('DEPOIS DE UM SEGUNDO ....')
        is_open.update((v: boolean) => !v)
    }, 1000)
}

export const is_active_link = writable('')
export const hand_is_active_link = (path: string) => is_active_link.set(path)

