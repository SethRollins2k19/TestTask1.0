import React from "react";
import style from './style/DataCircleStyle.module.css'
import DataCircleItemComponent from "./DataCircleItem";

export default class DataCircleComponent extends React.Component {
    state = {
        count: 1,
        countOfTitled: 1,
        objectHovered: false,
    }
    // initTimer(){
    //     let timer;
    //     function handleTimer(handleFunc,delay){
    //         clearInterval(timer);
    //         timer = setInterval(handleFunc,delay);
    //     }
    //     function clearTimer(){
    //         clearInterval(timer)
    //     }
    //     return{
    //         handleTimer,
    //         clearTimer
    //     }
    // }
    // handleRotate(item){
    //
    // }
    componentDidMount() {
        this.item = document.querySelector(`.${style.Circle}`);
        let item = this.item;
        this.radian = 0;
        this.timer = setInterval(()=>{
            item.style.transform = `rotateZ(${this.radian}deg)`;
            this.radian +=1;
            if(this.radian === 360){
                this.radian = 0;
            }
        },50)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        let item = this.item;
        clearInterval(this.timer);
        if(prevState.count !== this.state.count || prevState.countOfTitled !== this.state.countOfTitled){
           this.radian = 0;
        }
        if(!this.state.objectHovered){
            this.timer = setInterval(()=>{
                item.style.transform = `rotateZ(${this.radian}deg)`;
                this.radian +=1;
                if(this.radian === 360){
                    this.radian = 0;
                }
            },50)
        }
    }

    render() {

        const items = this.props.items;
        if(items.length === 0){
            this.props.getItems()
        }
        let count = this.state.count;
        let countOfTitled = this.state.countOfTitled;
        return(
            <div className={style.Wrapper}>
                <div className={`${style.Circle}`}>
                    {items.map((item, index) => {
                        if(index<count) {
                            return (
                                <DataCircleItemComponent key={index}
                                                         item={item}
                                                         index={index}
                                                         titled={countOfTitled>index}
                                                         radian={this.radian}
                                                         timer={this.timer}
                                                         objectHovered={this.state.objectHovered}
                                                         changeHovered={()=>this.setState(prevState=>({...prevState,objectHovered: !prevState.objectHovered}))}
                                />
                            )
                        } else {
                            return ""
                        }
                    })}
                </div>
                <label htmlFor={"count"}>Count of items</label>
                <input type="text" id={"count"} value={count} onChange={(e) => {
                    let value = Number(e.target.value);
                    if (value < 1000) {
                        this.setState(prevState => {
                            return {
                                ...prevState,
                                count: value
                            }
                        })
                    }
                }} className={style.Input}/>
                <label htmlFor={"countOfTitled"}>Count of titled items</label>
                <input type="text" id={'countOfTitled'} value={countOfTitled} onChange={(e) => {
                    let value = Number(e.target.value);
                    if (value < count) {
                        this.setState(prevState => {
                            return {
                                ...prevState,
                                countOfTitled: value
                            }
                        })
                    }
                }} className={style.Input}/>
            </div>
        )
    }
}

// class Rotate {
//     constructor(props){
//         this.raidan = props.radian;
//         this.delay = props.delay;
//         this.item = props.item;
//     }
//     handleRotation(){
//         let delay = this.delay;
//         let item = this.item;
//         this.timer = setInterval(()=>{
//
//             item.style.transform = `rotateZ(${this.raidan}deg)`
//         },delay)
//     }
// }








