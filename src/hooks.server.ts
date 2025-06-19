export const handle = async ({ event, resolve }) => {
  const theme = event.cookies.get('theme')
	if (!theme) {
		return await resolve(event)
	} else {
    return await resolve(event, {
      transformPageChunk: ({ html }) => {
        return html.replace('theme=""', `theme="${theme}"`)
      },
    })
  }
}