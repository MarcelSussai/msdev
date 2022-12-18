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
}

export const menuItemsArray: IItem[] = [
  {
    link: '/',
    name: 'Home',
    Icon: HomeIcon,
    pageIndex: 1,
  },
  {
    link: '#',
    name: 'O que faço',
    Icon: WhatIDoIcon,
    pageIndex: 2,
  },
  {
    link: '#',
    name: 'Quem sou',
    Icon: PeopleIcon,
    pageIndex: 3,
  },
  {
    link: '#',
    name: 'Habilidades',
    Icon: AbilityIcon,
    pageIndex: 4,
  },
  {
    link: '#',
    name: 'Portifólio',
    Icon: PortfolioIcon,
    pageIndex: 5,
  },
  {
    link: '#',
    name: 'Artigos',
    Icon: PostsIcon,
    pageIndex: 6,
  },
  {
    link: '#',
    name: 'Contato',
    Icon: ContactIcon,
    pageIndex: 7,
  },
  {
    link: '#',
    name: 'Área do cliente',
    Icon: AreaOfClientIcon,
    pageIndex: 8,
  },
]