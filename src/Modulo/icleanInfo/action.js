/**
 * Objeto que reúne os Actions que alteram as informações no icleanInfo
 */

//Função que adiciona Action Start no Search Lavanderia
export function searchLavanderiaStart() {
    return {
        type: 'icleanInfo/SEARCH_LAVANDERIA_START',
    };
}
//Função que adiciona a Saga para buscar as Lavanderia
export function searchLavanderia(search) {
    return {
        type: 'icleanInfo/SEARCH_LAVANDERIA',
        payload: { search },
    };
}
//Função que adiciona Action Finish Success no Search Lavanderia
export function searchLavanderiaFinishSuccess(lavanderia) {
    return {
        type: 'icleanInfo/SEARCH_LAVANDERIA_FINISH_SUCCESS',
        payload: { lavanderia},
    };
}
//Função que adiciona Action Finish Error no Search Lavanderia
export function searchLavanderiaFinishError() {
    return {
        type: 'icleanInfo/SEARCH_LAVANDERIA_FINISH_ERROR',
        payload: {},
    };
}

export function createUsuarioStart() {
    return {
        type: 'icleanInfo/CREATE_USUARIO_START',
    };
}

export function createUsuario(usuario) {
    return {
        type: 'icleanInfo/CREATE_USUARIO',
        payload: { usuario },
    };
}

export function createUsuarioFinishSuccess(lavanderia) {
    return {
        type: 'icleanInfo/CREATE_USUARIO_FINISH_SUCCESS',
        payload: { lavanderia },
    };
}

export function createUsuarioFinishError() {
    return {
        type: 'icleanInfo/CREATE_USUARIO_FINISH_ERROR',
        payload: {},
    };
}