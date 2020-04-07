import React, {useState} from "react";
import style from './style/DataCircleStyle.module.css'
import DataCircleItemComponent from "./DataCircleItem";
import {useSelector} from "react-redux";

export const DataCircleComponent = ({changeCount,getItems}) =>{
    let items = useSelector(state=>state.items);
    if(items.length === 0){
        getItems()
    }
    let maxCount = useSelector(state => state.maxCount);
    const [count,setCount] = useState(maxCount)
    console.log(maxCount)
        return(
            <div className={style.Wrapper}>
                <div className={`${style.Circle}`}>
                    {items.map((item, index) => {
                        if(index<maxCount) {
                            return (
                                <DataCircleItemComponent key={index} item={item} index={index}/>
                            )
                        } else {
                            return ""
                        }
                    })}
                    <DataCircleItemComponent item={
                        {title: "Google", link: "https://google.com", filled: false}
                    }/>
                </div>
                <input type="text" value={count} onChange={(e)=>{
                    if(Number(e.target.value) <1000){
                        setCount(e.target.value)
                    }}} className={style.Input}/>
                    <button onClick={()=>changeCount(Number(count))}>change count</button>
            </div>
        )
}