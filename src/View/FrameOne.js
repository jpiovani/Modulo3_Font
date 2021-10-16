import React from "react";
import logo from './Pictures/sem_fundo.png';
import roupas from './Pictures/roupa_suja.png'
import usuario from './Pictures/usuario_app.png'
import lavanderia from './Pictures/lavanderia.png'
import recolher from './Pictures/recolhe_roupa.png'
import './css/Frame1.css'
import { BrowserRouter, Link, Route, Switch} from "react-router-dom"
import FrameTwoController from '../Controller/FrameTwoController';
import FrameThreeController from '../Controller/FrameThreeController'
import FrameFourController from '../Controller/FrameFourController'

function FrameOne() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Link className="menu-servicos" to="/buscar">Buscar Lavanderias</Link>
        </BrowserRouter>
        <BrowserRouter>
          <Link className="menu-empresas" to="/cadastrar">Cadastrar Lavanderias</Link>
        </BrowserRouter>
        <BrowserRouter>
          <Link className="menu-criar-conta" to="/criar">Criar Conta</Link>
        </BrowserRouter>
        <p className="menu-login">Login</p>
      </header>
      <p className="info">Bora conferir como funciona?</p>
      <div className="box-imagens">
        <img src={roupas} className="img-roupas-sujas" alt="Imagem que representa roupas sujas"/>
        <h3 className="titulo-roupas-sujas">Roupas Sujas</h3>
      </div>
      <div className="box-imagens">
        <img src={usuario} className="img-usuario-app" alt="Imagem que representa usuario 
        utilizando o app"/>
        <h3 className="titulo-img-usuario">Chame a praticidade iClean</h3>
      </div>
      <div className="box-imagens">
        <img src={recolher} className="img-roupas-recolher-1" alt="Imagem que representa o 
        recolhimento de roupas sujas" />
        <h3 className="titulo-img-recolher-1">Recolhimento da roupa</h3>
      </div>
      <div className="box-imagens">
        <img src={lavanderia} className="img-lavanderia" alt="Imagem que representa lavanderia" />
        <h3 className="titulo-lavanderia">Lavanderia</h3>
      </div>
      <div className="box-imagens">
        <img src={recolher} className="img-roupas-recolher-2" alt="Imagem que representa a entrega de 
        roupas limpas." />
        <h3 className="titulo-img-recolher-2">Entrega das roupas</h3>
      </div>
      <BrowserRouter>
        <Switch>
          <Route path="/buscar" ><FrameThreeController /></Route>
          <Route path="/criar" ><FrameTwoController /></Route>
          <Route path="/cadastrar" ><FrameFourController /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default FrameOne;