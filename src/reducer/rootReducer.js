export const RootReducer = (state={
    items: [],
},action) => {
    switch (action.type) {
        case "GET_ITEMS":{
            return {
                ...state,
                items: emulattedJSON.items,
            }
        }
        default: {
            return state;
        }
    }
}


const emulattedJSON = {
    "items": [
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "ThisProject",
            "link": "https://github.com/SethRollins2k19/TestTask1.0",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "ReactDoc",
            "link": "https://ru.reactjs.org/",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": false
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        },
        {
            "title": "Google",
            "link": "https://google.com",
            "filled": true
        }
    ]
}