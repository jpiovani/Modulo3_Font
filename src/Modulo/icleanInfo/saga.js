/**
 * Objeto que reúne as sagas deste módulo
 */
//Importa os effects do Redux-Saga 
import { takeLatest, call, put, all} from 'redux-saga/effects';
import IcleanApi from '../../Services/ApiIclean';

// Importa as funções Actions que serão chamadas pela Saga
import {
    searchLavanderiaFinishSuccess,
    searchLavanderiaFinishError,
    createUsuarioFinishSuccess,
    createUsuarioFinishError,
    createLavanderiaFinishSuccess,
    createLavanderiaFinishError
} from './action';

//Saga responsável por buscar a informação e alterar o Reducer
function* searchLavanderia({ payload }) {
    try {
        //Obtendo a variável search do payload
        const { search } = payload;
        console.log("Start Connection " + search);
        //Envia o Redux action que iniciou a conexão
     //   yield put(searchLavanderiaStart);
        console.log("Before Call");
        //Realiza a conexão para buscar as lavanderias
        const returnSearch = yield call(IcleanApi.get, '?bairroLavanderia=' + search);
        console.log("After Call");
        console.log(returnSearch);
        //Verificar se o retorno é um array, se sim, volta sucesso
        if (returnSearch.data instanceof Array) {
            console.log("Success Call");
            yield put(searchLavanderiaFinishSuccess(returnSearch.data));
        } else {
            console.log("NOT SUCCESS");
            yield put(searchLavanderiaFinishError());
        }
    } catch (err) {
        console.log("Error Call--");
        yield put(searchLavanderiaFinishError());
    }
}

function* createUsuarios({ payload}) {
    try {
        //Obtendo a variável search do payload
        const { usuario} = payload;
        let login = usuario.login;
        let senha = usuario.senha;
        
        console.log("Start Connection " + login + " " + senha);
        console.log("json " + JSON.stringify(usuario))
        console.log("Before Call");
        //Realiza a conexão para criar usuario
        const returnCreate = yield call(IcleanApi.post, "/usuarios", JSON.stringify(usuario), {
            headers: {
                'Content-Type': 'application/json',
                'crossorigin' : 'true',
            }
        });
        console.log("After Call");
        console.log("retorno " + returnCreate.data);
        //Verificar se o retorno é um array, se sim, volta sucesso
        if (returnCreate.data != null) {
            console.log("Success Call");
            yield put(createUsuarioFinishSuccess(returnCreate.data));
        } else {
            console.log("NOT SUCCESS");
            yield put(createUsuarioFinishError());
        }
    } catch (err) {
        console.log("Error Call--");
        yield put(createUsuarioFinishError());
    }
}

function* createLavanderia({ payload }) {
    try {
        //Obtendo a variável search do payload
        const { lavanderia } = payload;
        let nome = lavanderia.nome;

        console.log("Start Connection " + nome);
        console.log("json " + JSON.stringify(lavanderia))
        console.log("Before Call");
        //Realiza a conexão para criar usuario
        const returnCreate = yield call(IcleanApi.post, "" ,JSON.stringify(lavanderia), {
            headers: {
                'Content-Type': 'application/json',
                'crossorigin': 'true',
            }
        });
        console.log("After Call");
        console.log("retorno " + returnCreate.data);
        //Verificar se o retorno é um array, se sim, volta sucesso
        if (returnCreate.data != null) {
            console.log("Success Call");
            yield put(createLavanderiaFinishSuccess(returnCreate.data));
        } else {
            console.log("NOT SUCCESS");
            yield put(createLavanderiaFinishError());
        }
    } catch (err) {
        console.log("Error Call--");
        yield put(createLavanderiaFinishError());
    }
}

//Junta todos as sagas deste objeto
export default all([
    takeLatest('icleanInfo/SEARCH_LAVANDERIA', searchLavanderia),
    takeLatest('icleanInfo/CREATE_USUARIO', createUsuarios),
    takeLatest('icleanInfo/CREATE_LAVANDERIA', createLavanderia)
]);