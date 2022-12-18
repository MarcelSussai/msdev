import AbilityIcon from "../../icons/abilityIcon";
import AreaOfClientIcon from "../../icons/areaOfClientIcon";
import ContactIcon from "../../icons/contactIcon";
import HomeIcon from "../../icons/homeIcon";
import PeopleIcon from "../../icons/peopleIcon";
import PortfolioIcon from "../../icons/portfolioIcon";
import PostsIcon from "../../icons/postsIcon";
import WhatIDoIcon from "../../icons/whatIDoIcon";
import { ReactNode } from 'react';

interface IItem {
  Icon: () => JSX.Element
  name: string
  link: string
  pageIndex: number
  image: string
}

const EmptyElement = () => <></>

export const menuItemsArray: IItem[] = [
  {
    link: '/',
    name: 'Home',
    Icon: HomeIcon,
    image: '',
    pageIndex: 1,
  },
  {
    link: '#',
    name: 'O que faço',
    Icon: WhatIDoIcon,
    image: '',
    pageIndex: 2,
  },
  {
    link: '#',
    name: 'Quem sou',
    Icon: PeopleIcon,
    image: '',
    pageIndex: 3,
  },
  {
    link: '#',
    name: 'Habilidades',
    Icon: EmptyElement,
    image: '/abilityIcon.svg',
    pageIndex: 4,
  },
  {
    link: '#',
    name: 'Portifólio',
    Icon: PortfolioIcon,
    image: '',
    pageIndex: 5,
  },
  {
    link: '#',
    name: 'Artigos',
    Icon: PostsIcon,
    image: '',
    pageIndex: 6,
  },
  {
    link: '#',
    name: 'Contato',
    Icon: ContactIcon,
    image: '',
    pageIndex: 7,
  },
  {
    link: '#',
    name: 'Área do cliente',
    Icon: EmptyElement,
    image: '/areaOfClientIcon.svg',
    pageIndex: 8,
  },
]