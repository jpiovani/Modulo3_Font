import './css/Frame2.css';

function FrameTwo() {
    return (
        <div className="App">
            <form className="formulario">
                <div className="box">
                    <p className="nome">Nome</p>
                    <input className="box-nome" type="text" name="nome" required/>
                </div>
                <div className="box">
                    <p className="sobrenome">Sobrenome</p>
                    <input className="box-sobrenome" type="text" name="sobrenome" required />
                </div>
                <div className="box">
                    <p className="celular">Celular</p>
                    <input className="box-celular" type="tel" name="celular" placeholder="(99) 99999-9999" required />
                </div>
                <div className="box">
                    <p className="email">E-mail</p>
                    <input className="box-email" type="email" name="email" required/>
                </div>
                <div className="box">
                    <p className="cep">CEP</p>
                    <input className="box-cep" type="text" name="cep" required/>
                </div>
                <div className="box">
                    <p className="senha">Senha</p>
                    <input className="box-senha" type="password" name="senha" required/>
                </div>
                <div className="box">
                    <input className="box-botao" type="submit" value="Criar"/>
                </div>
            </form>
        </div>
    );
}

export default FrameTwo;