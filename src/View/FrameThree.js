import './css/Frame3.css';
import React from "react";

function FrameThree(props) {

        return props.info.map((post, index) =>
            <div key={index} className="box">
                <h2 className="titulo">{post.nome}</h2>
                <ul class="circle">
                    <li>Endereço = {post.endereco}, {post.numeroEndereco}</li>
                    <li>Bairro = {post.bairro}</li>
                    <li>Zona = {post.zona}</li>
                </ul>
            </div>
        );
}

export default FrameThree;