import fondo from '../img/fondo.jpg';

export const initialState = {
    backImage: localStorage.getItem('backImage')==='undefined' ? localStorage.clear() : JSON.parse(localStorage.getItem('backImage')),
    user: localStorage.getItem('user')==='undefined' ? localStorage.clear() : JSON.parse(localStorage.getItem('user')),
    chatToDisplay: localStorage.getItem('chatToDisplay')==='undefined' ? localStorage.clear() : JSON.parse(localStorage.getItem('chatToDisplay'))
    //user:null
};