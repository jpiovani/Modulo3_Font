import React, { useEffect } from 'react';
import FrameCreate from '../View/FrameCreate'
import { createLavanderia } from '../Modulo/icleanInfo/action';
import { useDispatch} from 'react-redux'

const FrameCreateUserController = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createLavanderia(props.lav))
    }, [])

    return (
        <FrameCreate />
    )
}
export default FrameCreateUserController;
