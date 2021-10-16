import React, { useEffect } from 'react';
import FrameThree from '../View/FrameThree'
import { searchLavanderia } from '../Modulo/icleanInfo/action';
import { useDispatch, useSelector } from 'react-redux'

const FrameThreeController = () => {
    const info = useSelector(state => state.icleanInfo.lavanderia);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(searchLavanderia(""))
    }, [])

    console.log({ info })
    return(
        <FrameThree info={info}/>
    )
}
export default FrameThreeController;
