import React from "react";
import style from "./style/DataCircleItemStyle.module.css"

export default class DataCircleItemComponent extends React.Component {
    componentDidMount() {
        let item = document.querySelector(`.circleItem-${this.props.index}`);
        let {height, width } = item.parentNode.getBoundingClientRect();
        let x = rand(0,width);
        x = x > width/2 ? x - item.offsetWidth/2: x + item.offsetWidth;
        let y = rand(0,height);
        y = y > height/2 ? y - item.offsetHeight: y + item.offsetHeight/2;

        while(!isInCircle(width/2,height/2,x,y)){
            x = rand(0,width);
            x = x > width/2 ? x - item.offsetWidth/2: x + item.offsetWidth/2;
            y = rand(0,height);
            y = y > height/2 ? y - item.offsetHeight/2: y + item.offsetHeight/2;

        }
        item.style.left = x + "px";
        item.style.top = y + 'px';

    }

    render() {
        const{title = "", link = "#", filled = false} = this.props.item;
        const titled = this.props.titled;
        return (
            <a href={link} className={`${style.CircleItem} circleItem-${this.props.index}`} >
                <div className={`${style.CircleShape}  ${filled ? style.CircleItemBlack : ""}`}>
                </div>
                <div className={style.CircleWrapperText}>
                    <div className={`${style.CircleText} ${titled?style.CircleTextTitled:""}`}>
                        {title}
                    </div>
                </div>
            </a>
        )
    }
}

function isInCircle(CenterX,CenterY,X,Y,Radius = CenterX){
    let temp = Math.sqrt((Math.pow(X - CenterX,2) + Math.pow(Y - CenterY,2)),2)
    return temp < Radius;
}
function rand(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}