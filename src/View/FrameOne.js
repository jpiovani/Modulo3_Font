import logo from './Pictures/sem_fundo.png';
import roupas from './Pictures/roupa_suja.png'
import usuario from './Pictures/usuario_app.png'
import lavanderia from './Pictures/lavanderia.png'
import recolher from './Pictures/recolhe_roupa.png'
import './css/Frame1.css'
import { Link, Route, Switch} from "react-router-dom"
import FrameTwo from './FrameTwo';
import FrameThree from './FrameThree'

function FrameOne() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="menu-servicos" to="/buscar">Serviços</Link>
        <p className="menu-empresas">Empresas</p>
        <Link className="menu-criar-conta" to="/criar">Criar Conta</Link>
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
      <Switch>
        <Route path="/buscar" ><FrameThree /></Route>
        <Route path="/criar" ><FrameTwo /></Route>
      </Switch>
    </div>
  );
}

export default FrameOne;