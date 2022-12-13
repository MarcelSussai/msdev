


interface fncTransitionProps {
  duration?: string
  easing?: string
  target?: string
  delay?: string
}
export const fncTransition = (props: fncTransitionProps) => {
  const { duration, easing, target, delay} = props
  return `
    transition:
      ${ target   || ' all ' }
      ${ duration || ' .2s ' }
      ${ easing   || ' ease-in-out '}
      ${ delay    || ''};
  `
}



export const fontMuseo = `
  font-family: 'MuseoModerno', cursive;
`