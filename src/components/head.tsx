import NextHead from 'next/head';

type headTypes = {
  title: string
}

const Head = (props: headTypes) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{props.title}</title>
  </NextHead>
)


export default Head