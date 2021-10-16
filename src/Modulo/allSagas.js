/**
 * Objeto que junta todas as Sagas que usaremos no aplicativo
 */
//Importa o all  do redux-saga
import { all } from 'redux-saga/effects';
//Importa a saga dentro do modulo icleanInfo
import icleanInfo from './icleanInfo/saga';
//Junta todas as sagas importadas
export default function* rootSaga() {
    return yield all([icleanInfo]);
}