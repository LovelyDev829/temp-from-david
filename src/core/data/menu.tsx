import {MenuItemProps} from "../interfaces/pages";
// import { faHome, faMap, faGamepad, faMapMarkedAlt, faBlog, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt, faCog, faSignOut  } from "@fortawesome/free-solid-svg-icons";
import faGameplay from "../../assets/images/svgs/faGameplay.svg";
import faHome from "../../assets/images/svgs/faHome.svg";
import faMap from "../../assets/images/svgs/faMap.svg";
import faMarkethome from "../../assets/images/svgs/faMarkethome.svg";
import faStarcomment from "../../assets/images/svgs/faStarcomment.svg";
import faSwap from "../../assets/images/svgs/faSwap.svg";

export const menuItems: MenuItemProps[] = [
    {
        content: 'HOME',
        url: '/home',
        icon: faHome
    },
    {
        content: 'MAP',
        url: '/map',
        icon: faMap
    },
    {
        content: 'PRODUCT',
        url: '/product',
        icon: faGameplay
    },
    {
        content: 'MARKET PLACE',
        url: '/marketplace',
        icon: faMarkethome
    },
    {
        content: 'BLOG',
        url: '/blog',
        icon: faStarcomment
    },
    {
        content: 'SWAP',
        url: '/swap',
        icon: faSwap
    },
    {
        content: 'GAMEPLAY',
        url: '/gameplay',
        icon: faGameplay
    }
];

export const userInfoItems: MenuItemProps[] =[
    {
        content: 'Profile',
        url: '/user/profile',
        icon: faUserAlt
    },
    {
        content: 'Inventory',
        url: '/user/inventory',
        icon: faUserAlt
    },
    {
        content: 'Dashboard',
        url: '/home',
        icon: faUserAlt
    },
    {
        content: 'Setting',
        url: '/user/setting',
        icon: faCog
    }
];