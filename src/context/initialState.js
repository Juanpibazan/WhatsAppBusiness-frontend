import fondo from '../img/fondo.jpg';

export const initialState = {
    backImage: localStorage.getItem('backImage')==='undefined' ? localStorage.clear() : JSON.parse(localStorage.getItem('backImage'))
};