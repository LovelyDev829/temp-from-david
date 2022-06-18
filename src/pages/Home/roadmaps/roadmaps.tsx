import { useEffect, useRef, useState } from "react";
import Road from "./road";

import { roadMapItems } from "../../../core/data/roadmapinfo";
import roadmapImage from "../../../assets/images/roadmap.png";

const Roadmaps = () =>{
    const [scrollY, setScrollY] = useState(0);
    const [wheight, setWHeight] = useState({height: "190px"});
    const [childrenHeights, setChildrenHeights] = useState<number[]>([]);
    const roadMapRef = useRef<HTMLDivElement>(null);
    const roadMapContentRef = useRef<HTMLDivElement>(null);
    const [oStyle, setOStyle] = useState(Array(6).fill(false));
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollY(window.scrollY);
    //         //console.log(window.scrollY);
    //     }    
    //     handleScroll();

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, []);
    // useEffect(() => {
    //     const tmpChildrenHeight: any[] = Array.from(roadMapContentRef?.current?.children || []).map((item: any) => item.clientHeight);
    //     setChildrenHeights(tmpChildrenHeight);
    // }, []);
    
    // useEffect(() => {
    //     const roadMapTop = roadMapRef.current?.getBoundingClientRect().top || 0;
    //     const roadMapHeight = roadMapRef.current?.getBoundingClientRect().height == undefined ? 0 : roadMapRef.current?.getBoundingClientRect().height;
    //     if (roadMapTop - 270 < 0) { // scroll down the ref div
    //         let newRoadMapTop = Math.abs(roadMapTop - 270);
    //         let heightSum = 0;
    //         for (let index = 1; index <= childrenHeights.length; index ++) {
    //             if (newRoadMapTop >= heightSum) {
    //                 let initStyles = Array(6).fill(false);
    //                 initStyles[0] = true;
    //                 for (let i = 0; i < index; i++)
    //                     initStyles[i] = true;
    //                 setOStyle(initStyles);
    //             }
    //             heightSum += childrenHeights[index];
    //         }
    //         if ( newRoadMapTop > roadMapHeight * 0.8)
    //             newRoadMapTop = roadMapHeight * 0.8;
            
    //         let style = {height: newRoadMapTop.toString() + "px"};
    //         setWHeight(style);
    //     }
    //     else{
    //         let initStyles = Array(6).fill(false);
    //         setOStyle(initStyles);
    //         let style = {height: "0px"};
    //        setWHeight(style);
    //     }
    // }, [scrollY]);

    return (
        <div className="my-mlg mx-auto px-45" id="Roadmap">
            <div className="md:hidden block">
                <img src={roadmapImage}/>
            </div>
            <div className="flex max-w-[1200px] mx-auto">
                <div className="md:block hidden">
                    <img src={roadmapImage}/>
                </div>
                <div className="z-0" ref={roadMapRef}>
                    <div className="relative w-4p h-full bg-pastelGrey left-17 z-20 md:ml-110p md:ml-0">
                        <div className="bg-texasRose" style={wheight} ></div>
                    </div>
                </div>
                <div ref={roadMapContentRef}>
                    {roadMapItems.map((road, key)=>{
                        return <Road data={road} num={key} key={key}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Roadmaps;