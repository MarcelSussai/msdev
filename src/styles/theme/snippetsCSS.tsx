


interface fncTransitionProps {
  dur?: string
  eas?: string
  tar?: string
  dly?: string
}
export const fncTransition = (props: fncTransitionProps) => {
  const { dur, eas, tar, dly} = props
  return `
    transition:
      ${ tar || ' all ' }
      ${ dur || ' .2s ' }
      ${eas || ' ease-in-out '}
      ${dly || ''};
  `
}



export const fontMuseo = `
  font-family: 'MuseoModerno', cursive;
`