import React from "react";
import style from "./style/DataCircleItemStyle.module.css"

export default class DataCircleItemComponent extends React.Component {


    componentDidMount() {
        let item = document.querySelector(`.circleItem-${this.props.index}`)
        let leftMove = Math.floor(Math.random()*90 - 45)
        let topMove = Math.floor(Math.random()*90 - 45)
        Animation(item,leftMove,topMove)
    }

    render() {
        const{title = "", link = "#", filled = false} = this.props.item;
        return (
            <a href={link} className={`${style.CircleItem} circleItem-${this.props.index}`} >
                <div className={`${style.CircleShape}  ${filled ? style.CircleItemBlack : ""}`}>
                </div>
                <div className={style.CircleWrapperText}>
                    <div className={style.CircleText}>
                        {title}
                    </div>
                </div>
            </a>
        )
    }
}

function Animation(item,leftMove = 45,topMove = 45) {
    let {width, height} = item.parentNode.getBoundingClientRect();

    let centerX = width/2;
    let centerY = height/2;
    let leftDir = !leftMove;
    let topDir = !topMove;
    let timer = setInterval(handelTimer,130)
    item.addEventListener('mouseover',()=>{
        clearInterval(timer)
    })
    item.addEventListener('mouseout',()=>{
        timer = setInterval(handelTimer,130)
    })
    function handelTimer(){
        let x = item.offsetLeft;
        let y = item.offsetTop;
        let itemWidth = item.offsetWidth;
        let itemHeight = item.offsetHeight;
        if(!leftDir){
            if(isInCircle(centerX,centerY,(x + leftMove + itemWidth),(y - topMove - itemHeight ))){
                let temp = x + leftMove;
                item.style.left = temp + "px";
            } else {
                leftDir = !leftDir;
            }
        } else {
            if(isInCircle(centerX,centerY,(x - leftMove + itemWidth),(y - topMove - itemHeight ))){
                let temp = x - leftMove;
                item.style.left = temp + "px";
            } else {
                leftDir = !leftDir;
            }
        }
        if (!topDir) {
            if (isInCircle(centerX, centerY, (x + leftMove + itemWidth), (y + topMove + itemHeight))) {
                let temp = y + topMove;
                item.style.top = temp + "px";
            } else {
                topDir = !topDir;
            }
        } else {
            if (isInCircle(centerX, centerY, (x + leftMove + itemWidth), (y - topMove + itemHeight))) {
                let temp = y - topMove;
                item.style.top = temp + "px";
            } else {
                topDir = !topDir;
            }
        }

    }
}

function isInCircle(CenterX,CenterY,X,Y,Radius = CenterX){
    let temp = Math.sqrt((Math.pow((X - CenterX),2) + Math.pow((Y - CenterY),2)));
    return temp<Radius&&temp > 0;
}