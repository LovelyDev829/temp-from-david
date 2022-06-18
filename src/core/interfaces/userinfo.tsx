
export interface socialItemProps{
    icon: any;
    name: string;
    detail: string;
}
export interface socialInfoProps{
    icon: any;
    type: string;
    id: string;
}
export interface userInfoProps{
    name: string;
    email: string;
    about: string;
    socials: socialInfoProps[];
    wallet_ether: number;
    wallet_grando: number;
    wallet_address: string;
    inventory_game: any[];
    inventory_product: any[];
    inventory_creation: any[];
    inventory_nft: any[];
}