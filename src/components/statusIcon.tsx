import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const StatusIcon = (props:any) =>{
    let divClassStr = "flex items-center mx-2p cursor-pointer ";
    let iconClassStr = "mx-auto ";
    switch (props.type){
        case 'disable':
            divClassStr += 'bg-white rounded-full border-friarGrey border ';
            iconClassStr += 'text-friarGrey ';
            break;
        case 'usermenu':
            divClassStr += 'bg-white rounded-full border-friarGrey border ';
            iconClassStr += 'text-friarGrey ';
            break;
        case 'enable':
            divClassStr += 'bg-white rounded-full border-texasRose border hover:border-darkMintGreen ';
            iconClassStr += 'text-texasRose hover:text-darkMintGreen ';
            break;
        case 'full':
            divClassStr += 'bg-texasRose rounded-full border-texasRose border hover:border-darkMintGreen ';
            iconClassStr += 'text-white hover:text-darkMintGreen ';
            break;
        case 'default':
            divClassStr += 'bg-desertStorm rounded-full ';
            iconClassStr += 'text-darkMintGreen  ';
            break;
    }
    switch (props.size){
        case '15':
            divClassStr += 'w-15p h-15p ';
            iconClassStr += 'w-10p h-10p ';
            break;
        case '20':
            divClassStr += 'w-20p h-20p ';
            iconClassStr += 'w-16p h-16p ';
            break;
        case '25':
            divClassStr += 'w-25p h-25p ';
            iconClassStr += 'w-16p h-16p ';
            break;
        case '30':
            divClassStr += 'w-30p h-30p ';
            iconClassStr += 'w-20p h-20p ';
            break;
    }
    divClassStr += props.class;
    return (
        <div className={divClassStr}>
            <FontAwesomeIcon icon={props.icon} className={iconClassStr}/>
        </div>
    );
}

export default StatusIcon;