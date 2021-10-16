/**
 * Objeto que organiza o reducer do módulo icleanInfo
 */
//Importa a função produce do immer
import produce from 'immer';
//Seta o state inicial
const INITIAL_STATE = {
    info: 'Info Inicial',
    lavanderia: [],
    user: null,
    senha: null,
    isConnectingSearchLavanderia: false,
    searchLavanderiaWithSuccess: 0,
    isConnectingCreateUser: false,
    createUserWithSuccess: 0
};
//Cria a função responsável por organizar o Reducer
export default function icleanInfo(state = INITIAL_STATE, { type, payload }) {
    //A função de uma maneira mais fácil o state com o draft
    // e retorna um novo state para o reducer
    return produce(state, (draft) => {
        switch (type) {
            //Verifica qual Redux Action foi chamada no Action
            case 'icleanInfo/CHANGE_INFO': {
                //Altera a informação do Info no state
                draft.info = payload.info
                break;
            }
            case 'icleanInfo/SEARCH_LAVANDERIA_START': {
                //Altera a informação do Info no state
                draft.lavanderia = [];
                draft.isConnectingSearchLavanderia = true;
                draft.searchLavanderiaWithSuccess = 0;
                break;
            }
            case 'icleanInfo/SEARCH_LAVANDERIA_FINISH_SUCCESS': {
                //Altera a informação do Info no state
                draft.lavanderia = payload.lavanderia;
                draft.isConnectingSearchLavanderia = false;
                draft.searchLavanderiaWithSuccess = 1;
                break;
            }
            case 'icleanInfo/SEARCH_LAVANDERIA_FINISH_ERROR': {
                //Altera a informação do Info no state
                draft.lavanderia = [];
                draft.isConnectingSearchLavanderia = false;
                draft.searchLavanderiaWithSuccess = 2;
                break;
            }
            case 'icleanInfo/CREATE_USUARIO_START':{
                draft.user = null;
                draft.senha = null;
                draft.isConnectingCreateUser = true;
                draft.createUserWithSuccess = 0;
                break;
            }
            case 'icleanInfo/SEARCH_LAVANDERIA_FINISH_SUCCESS': {
                draft.user = payload.user;
                draft.senha = payload.senha;
                draft.isConnectingCreateUser = false;
                draft.createUserWithSuccess = 1;
                break;
            }
            case 'icleanInfo/SEARCH_LAVANDERIA_FINISH_ERROR': {
                draft.user = null;
                draft.senha = null;
                draft.isConnectingCreateUser = false;
                draft.createUserWithSuccess = 2;
                break;
            }
            default:
        }
    });
}