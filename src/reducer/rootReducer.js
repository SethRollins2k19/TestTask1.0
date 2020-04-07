export const RootReducer = (state={
    items: [],
    maxCount: 1
},action) => {
    switch (action.type) {
        case "GET_ITEMS":{
            return {
                ...state,
                items: action.items,
            }
        }
        case "CHANGE_COUNT": {
            return {
                ...state,
                maxCount: action.newCount
            }
        }
        default: {
            return state;
        }
    }
}