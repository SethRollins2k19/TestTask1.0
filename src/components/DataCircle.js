import React from "react";
import style from './style/DataCircleStyle.module.css'
import DataCircleItemComponent from "./DataCircleItem";

export default class DataCircleComponent extends React.Component {
    state = {
        count: 1,
        countOfTitled: 1,

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
                                <DataCircleItemComponent key={index} item={item} index={index} titled={countOfTitled>index}/>
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

