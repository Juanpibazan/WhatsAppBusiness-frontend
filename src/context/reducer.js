export const actionTypes = {
    SET_BACK_IMAGE: 'SET_BACK_IMAGE'
};

export const reducer = (state,action)=>{
    console.log(action);
    switch(action.type){
        case actionTypes.SET_BACK_IMAGE:
            return {
                ...state,
                backImage: state.backImage
            }
        default:
            return state
    }
};