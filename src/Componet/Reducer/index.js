import {combineReducers} from 'redux';

const songReducer = () => {
    return[
        {title:'abc', duration: '2:02'},
        {title:'bbc', duration: '2:12'}
         
    ];
}

const selectedsongReducer = (seletedsong = null , action) => {
    if(action.type === SELECTED_SONG ){
        return action.payload ;
    }

    return seletedsong ;

}

export default combineReducers({
    songs: songReducer,
    selectedsong: selectedsongReducer
})