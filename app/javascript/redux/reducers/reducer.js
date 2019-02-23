// ./javascript/redux/reducers/reducer.js

// 初期state
const initialState = {
    tasks: [],
    text: '',
}

// Reduer処理
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START': {
            return console.log(action.value);
        }
        case 'END': {
            return console.log(action.value);
        }
        default: {
            return state;
        }
    }
}

export default reducer;
