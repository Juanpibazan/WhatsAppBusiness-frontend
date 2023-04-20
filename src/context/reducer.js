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
                backImage: action.backImage
            }
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
};