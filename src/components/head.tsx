import NextHead from 'next/head';

type headTypes = {
  title: string
}

const Head = (props: headTypes) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{props.title}</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
    <link
      href="https://fonts.googleapis.com/css2?family=Georama:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=MuseoModerno:ital,wght@0,100;0,300;0,900;1,300;1,900&display=swap"
      rel="stylesheet"
    />
  </NextHead>
)


export default Head