
interface IItem {
  name: string
  link: string
  pageIndex: number
  image: string
}

export const menuItemsArray: IItem[] = [
  {
    link: '/',
    name: 'Home',
    image: '/homeIcon.svg',
    pageIndex: 1,
  },
  {
    link: '#',
    name: 'O que faço',
    image: '/whatIDoIcon.svg',
    pageIndex: 2,
  },
  {
    link: '#',
    name: 'Quem sou',
    image: '/peopleIcon.svg',
    pageIndex: 3,
  },
  {
    link: '#',
    name: 'Habilidades',
    image: '/abilityIcon.svg',
    pageIndex: 4,
  },
  {
    link: '#',
    name: 'Portifólio',
    image: '/portfolioIcon.svg',
    pageIndex: 5,
  },
  {
    link: '#',
    name: 'Artigos',
    image: '/postsIcon.svg',
    pageIndex: 6,
  },
  {
    link: '#',
    name: 'Contato',
    image: '/contactIcon.svg',
    pageIndex: 7,
  },
  {
    link: '#',
    name: 'Área do cliente',
    image: '/areaOfClientIcon.svg',
    pageIndex: 8,
  },
]