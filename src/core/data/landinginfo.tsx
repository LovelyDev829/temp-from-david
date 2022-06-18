import {LandingItemProps} from "../interfaces/pages";
import EcoSystemImage from "../../assets/images/svgs/nimbus_ecosystem.svg";
import BuildModeImage from "../../assets/images/svgs/ph_cube.svg";
import GrandoraNftImage from "../../assets/images/svgs/icon-park-outline_sales-report.svg";
import GrandoraCurrencyImage from "../../assets/images/svgs/ph_coin-vertical-light.svg";


export const landingItems1: LandingItemProps[] = [
    {
        icon : EcoSystemImage,
        title : 'Complete Ecosystem Platform',
        content : 'that offers tools for everyone to experience all kinds of activities in Grandoraverse similar to the real physical world. '
    },
    {
        icon : BuildModeImage,
        title : 'Build Mode',
        content : 'that offers tools for everyone to experience all kinds of activities in Grandoraverse similar to the real physical world. '
    }
];
export const landingItems2: LandingItemProps[] = [
    {
        icon : GrandoraNftImage,
        title : 'Grandora NFTs',
        content : 'that offers tools for everyone to experience all kinds of activities in Grandoraverse similar to the real physical world. '
    },
    {
        icon : GrandoraCurrencyImage,
        title : 'Grandora Currency',
        content : 'that offers tools for everyone to experience all kinds of activities in Grandoraverse similar to the real physical world. '
    }
];

interface LandingClassProps {
    icon: string;
    title: string;
    content: string;
}
export const landingItemClass: LandingClassProps = {
    icon: 'w-36 h-36 mx-auto',
    title: 'font-Rajdhani font-medium text-25 tracking-4 text-davygrey leading-32',
    content: 'font-Rajdhani text-cloudygrey text-17 tracking-2p mt-20'
};