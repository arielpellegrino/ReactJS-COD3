import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProduto.css";

export default function TabelaProduto (){
    function getLinhas() {
        return produtos.map((produto, id) =>{
            return (
                <tr key={produto.id} className={id % 2 == 0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProduto">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    { getLinhas() }
                </tbody>

            </table>
        </div>
    )
};