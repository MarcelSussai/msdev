import BtnOpenMenu from './buttons/btn_open_menu.svelte'
import BtnRgbMode from './buttons/btn_rgb_mode.svelte'
import BtnTheme from './buttons/btn_theme.svelte'
import Header from './header.svelte'
import IconMoon from './icons/icon_moon.svelte'
import IconSun from './icons/icon_sun.svelte'
import NavIconAboutMe from './icons/nav_icon_about_me.svelte'
import NavIconArticles from './icons/nav_icon_articles.svelte'
import NavIconContact from './icons/nav_icon_contact.svelte'
import NavIconHome from './icons/nav_icon_home.svelte'
import NavIconPortfolio from './icons/nav_icon_portfolio.svelte'
import NavIconSkills from './icons/nav_icon_skills.svelte'
import LogoSymbol from './logo/logo_symbol.svelte'
import Logotype from './logo/logotype.svelte'
import ConfigMenu from './menu/config_menu.svelte'
import Menu from './menu/menu.svelte'
import NavMenu from './menu/nav_menu.svelte'

const config_media_menu = '1080'
const all_config_media_min_width_menu = `(min-width: ${config_media_menu}px)`

export {
    BtnOpenMenu,
    BtnRgbMode,
    BtnTheme,
    Header,
    IconMoon,
    IconSun,
    NavIconAboutMe,
    NavIconArticles,
    NavIconContact,
    NavIconHome,
    NavIconPortfolio,
    NavIconSkills,
    LogoSymbol,
    Logotype,
    ConfigMenu,
    Menu,
    NavMenu,
    all_config_media_min_width_menu,
    config_media_menu
}