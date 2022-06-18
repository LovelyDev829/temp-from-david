import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
const DropTab = (props:any) =>{
    const [opened, setOpened] = useState(props.active);
    const clickAction = () => {
        if (opened == true)
            setOpened(false);
        else
            setOpened(true);
    };
    return (
        <div className={"droptab-container text-Rajdhani m-12 "+props.class} key={props.index}>
            <div className="uppercase h-35 text-17 font-semibold text-cloudygrey bg-texasRose bg-opacity-10 flex justify-between items-center px-15 rounded-6 cursor-pointer" onClick={clickAction}>
                <span>{props.title}</span>
                {
                    opened == true &&
                    <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
                }
                {
                    opened != true &&
                    <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                }
            </div>
            {
                opened == true &&
                <div className="p-13 text-14 text-davygrey">
                    {props.children}
                </div>
            }
        </div>
    );
}

export default DropTab;