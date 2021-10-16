import React, { useEffect }  from 'react';
import FrameCreate from '../View/FrameCreate'
import { createUsuario} from '../Modulo/icleanInfo/action';
import { useDispatch, useSelector } from 'react-redux'

const FrameCreateUserController = (props) => {
    const info = useSelector(state => state.icleanInfo.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createUsuario(props.login))
    }, [])

    return (
        <FrameCreate  />
    )
}
export default FrameCreateUserController;
