import { useState, useEffect } from "react";
import { useRef } from "react";

import treeImage from "../../assets/images/tree.png";
const MainCanvasSlide = (props:any) => {
    const canvasRef  = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [sizeRatio, setSizeRatio] = useState(props.height / props.width);
    let radius = 20 + props.radius/2;
    const rotate = props.spinrotate;
    let ctx:CanvasRenderingContext2D | null;
    
    var treeObj = new Image();
    treeObj.src = treeImage;

    useEffect(()=>{
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            ctx = canvas.getContext('2d');
            if (ctx == null) throw new Error('Could not get context');
            
            const width = 1000;
            const height = 1000*sizeRatio - 30;
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, width, 1000*sizeRatio);

            ctx.globalAlpha = 1;
            clearCircle(width/2, height/2, 40);
            // treeObj.src = treeImage;
            // ctx.drawImage(treeObj, width/2 - 30, height/2 - 25, 60, 50);
            // ctx.beginPath();
// +           ctx.arc(50, 50, 50, 0, 2 * Math.PI);
// +           ctx.fill(); 
        }
    }, []);
    var clearCircle = function(x:number, y:number, radius:number)
    {
        if (ctx == null) throw new Error('Could not get context');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.restore();
    };
    useEffect(()=>{
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            ctx = canvas.getContext('2d');
            if (ctx == null) throw new Error('Could not get context');
            
            const width = 1000;
            const height = 1000*sizeRatio - 30;
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, width, 1000*sizeRatio);
            // clearCircle(width/2, height/2, 20)
            // remove size increasing if the width is below 768
            if (props.width < 768){
                radius=20;
            }
            if ( radius <= 60){
                if ( radius*2 <= 60)
                    ctx.drawImage(treeObj, width/2 - 30, height/2 - 25, 60, 50);
                else
                    ctx.drawImage(treeObj, width/2 - radius, height/2 - radius/6*5, radius*2, radius/3*5);
            }
            else{
                clearCircle(width/2, height/2, radius);
            }

            let initRadius = Math.floor(1000*sizeRatio / 48);
            let i,j, len = Math.floor(1000*sizeRatio / 4);
            for (i = 0; i < 12; i++) {
                let angle = 2*3.141519 / 360 * rotate + 2*3.141519 / 360 * 30 * i;
                
                let rCircle = initRadius;
                for (j = 0; j < 3; j++){
                    let rLen = len / 4 * (4-j);
                    let posX = width/2 + rLen*Math.sin(angle);
                    let posY = height/2 - rLen*Math.cos(angle);
                    clearCircle(posX, posY, rCircle);

                    posX = width/2 - rLen*Math.sin(angle);
                    posY = height/2 + rLen*Math.cos(angle);
                    clearCircle(posX, posY, rCircle);
                    
                    rCircle /= 2;
                }
            }
        }
    });
    return (
    <canvas {...props} ref={canvasRef} width={1000} height={1000*sizeRatio}>

    </canvas> 
    );
};

export default MainCanvasSlide;