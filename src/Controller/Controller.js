import React from 'react';
import FrameOne from '../View/FrameOne'
import Model from '../Model/Model'


class Controller extends React.Component {
    constructor() {
        super();
        this.Model = new Model();
        this.Model.getSomeInfo();
    }
    render() {
        return (
                <FrameOne/>
        )
    }
}
export default Controller;