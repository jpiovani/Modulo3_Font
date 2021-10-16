import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom"
import FrameCreateController from '../Controller/FrameCreateController'
import '../View/css/Frame2.css'

class FrameTwoController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            senha: ""
        }
    }

    createUsuario = (event) => {
        event.preventDefault();
        let data = {
            login: this.state.login,
            senha: this.state.senha
        }
        console.log("data", data);
    }

    render() {
        return (
            <div className="App">
                <form className="formulario" onSubmit={this.createUsuario}>
                    <div className="box">
                        <p className="nome">Nome</p>
                        <input className="box-nome" type="text" name="nome" required />
                    </div>
                    <div className="box">
                        <p className="sobrenome">Sobrenome</p>
                        <input className="box-sobrenome" type="text" />
                    </div>
                    <div className="box">
                        <p className="celular">Celular</p>
                        <input className="box-celular" type="tel" placeholder="(99) 99999-9999" />
                    </div>
                    <div className="box">
                        <p className="email">E-mail</p>
                        <input className="box-email" type="email" />
                    </div>
                    <div className="box">
                        <p className="cep">CEP</p>
                        <input className="box-cep" type="text" />
                    </div>
                    <div className="box">
                        <p className="login">Login</p>
                        <input className="box-login" type="text" name="login" value={this.state.login}
                            onChange={e => this.setState({ login: e.target.value })} required />
                    </div>
                    <div className="box">
                        <p className="senha">Senha</p>
                        <input className="box-senha" type="text" name="senha" value={this.state.senha}
                            onChange={e => this.setState({ senha: e.target.value })} required />
                    </div>
                    <BrowserRouter>
                        <Link to="/criar2" className="box-botao" >CRIAR</Link>
                        <Route path="/criar2" ><FrameCreateController login={this.state} /></Route>
                    </BrowserRouter>
                </form>
            </div>
        );
    }
}
export default FrameTwoController;