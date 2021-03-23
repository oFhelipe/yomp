import { createStore } from 'redux'

const INITIAL_STATE = {
    play:false,
    musicas:[],
    album:"",
    musicaAtual:null,
    capa:null,
}

 function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'GET_DATA':
            
            return {... action, play:false}
                break;
        case 'PLAY_PLAYLIST':
            let { musicas, album, musicaAtual, capa } = action;
            return {
                musicas,
                album,
                musicaAtual,
                capa
            }
            break;
        case 'NEXT_SONG':
            const proximaMusica = Array.isArray(state.musicas) && state.musicaAtual < state.musicas.length - 1 ? state.musicaAtual + 1 : 0; 
            //console.log(proximaMusica);
            return { ...action,  play:false, musicaAtual:proximaMusica }
            break;
        default:
            return state;
            break;
    }

}

let store = createStore(reducer);

export default store;