import axios from "axios";

export const getItems = () => dispatch =>{
    axios.get('http://www.json-generator.com/api/json/get/bSanYokNVe?indent=2')
        .then(res =>{
            dispatch({
                type: "GET_ITEMS",
                items: res.data.items
            })
        })
}
export const changeCount = (newCount) => dispatch => {
    dispatch({type: "CHANGE_COUNT",newCount})
}