export const actionTypes = {
    SET_BACK_IMAGE: 'SET_BACK_IMAGE',
    SET_USER: 'SET_USER'
};

export const reducer = (state,action)=>{
    console.log(action);
    switch(action.type){
        case actionTypes.SET_BACK_IMAGE:
            return {
                ...state,
                backImage: state.backImage
            }
        case actionTypes.SET_USER:
            return {
                ...state,
                user: state.user
            }
        default:
            return state
    }
};