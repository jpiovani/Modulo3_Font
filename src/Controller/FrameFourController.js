import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom"
import FrameCreateLavController from '../Controller/FrameCreateLavController'
import '../View/css/Frame2.css'

class FrameFourController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            endereco: "",
            numeroEndereco: "",
            bairro: "",
            zona: "",

        }
    }

    render() {
        return (
            <div className="App">
                <form className="formulario">
                    <div className="box">
                        <p className="nome">Nome</p>
                        <input className="box-nome" type="text" name="nome" required value={this.state.nome}
                            onChange={e => this.setState({ nome: e.target.value })}/>
                    </div>
                    <div className="box">
                        <p className="sobrenome">Endereço</p>
                        <input className="box-sobrenome" type="text" value={this.state.endereco}
                            onChange={e => this.setState({ endereco: e.target.value })} />
                    </div>
                    <div className="box">
                        <p className="celular">Número</p>
                        <input className="box-celular" type="text" value={this.state.numeroEndereco}
                            onChange={e => this.setState({ numeroEndereco: e.target.value })}/>
                    </div>
                    <div className="box">
                        <p className="email">Bairro</p>
                        <input className="box-email" type="text" value={this.state.bairro}
                            onChange={e => this.setState({ bairro: e.target.value })}/>
                    </div>
                    <div className="box">
                        <p className="cep">Zona</p>
                        <input className="box-cep" type="text" value={this.state.zona}
                            onChange={e => this.setState({ zona: e.target.value })}/>
                    </div>
                    <BrowserRouter>
                        <Link to="/criarLav" className="box-botao" >CRIAR</Link>
                        <Route path="/criarLav" ><FrameCreateLavController lav={this.state} /></Route>
                    </BrowserRouter>
                </form>
            </div>
        );
    }
}
export default FrameFourController;