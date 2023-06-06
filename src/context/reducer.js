export const actionTypes = {
    SET_BACK_IMAGE: 'SET_BACK_IMAGE',
    SET_USER: 'SET_USER',
    SET_CHAT_TO_DISPLAY: 'SET_CHAT_TO_DISPLAY'
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
        case actionTypes.SET_CHAT_TO_DISPLAY:
            return {
                ...state,
                chatToDisplay: action.chatToDisplay
            }
        default:
            return state
    }
};