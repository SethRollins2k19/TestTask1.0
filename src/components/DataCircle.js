import React, {useEffect, useState} from "react";
import style from './style/DataCircleStyle.module.css'
import DataCircleItemComponent from "./DataCircleItem";
import {useSelector} from "react-redux";

export default class DataCircleComponent extends React.Component {
    state = {
        count: this.props.maxCount,
        countOfTitled: 1,
        // item: "",
        // radian: 0,
    }
    render() {

        const items = this.props.items;
        if(items.length === 0){
            this.props.getItems()
        }
        const changeCount = this.props.changeCount;
        let count = this.state.count;
        let countOfTitled = this.state.countOfTitled;
        return(
            <div className={style.Wrapper}>
                <div className={`${style.Circle}`}>
                    {items.map((item, index) => {
                        if(index<count) {
                            return (
                                <DataCircleItemComponent key={index} item={item} index={index} titled={countOfTitled>index}/>
                            )
                        } else {
                            return ""
                        }
                    })}
                </div>
                <input type="text" value={count} onChange={(e)=>{
                    let value = Number(e.target.value);
                    if(value <1000){
                        this.setState(prevState=>{
                            return{
                                ...prevState,
                                count: value
                            }
                        })
                    }}} className={style.Input}/>
                    <input type="text" value={countOfTitled} onChange={(e)=>{
                    let value = Number(e.target.value);
                    if(value <1000){
                        this.setState(prevState=>{
                            return{
                                ...prevState,
                                countOfTitled: value
                            }
                        })
                    }}} className={style.Input}/>
                <button onClick={()=>changeCount(Number(count))}>change count</button>
            </div>
        )
    }
}

