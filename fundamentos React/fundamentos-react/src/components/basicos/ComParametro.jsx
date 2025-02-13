import  React from 'react';

export default function ComParametro(props){
    const status = props.nota >= 7 ? 'aprovado' : 'reprovado'
    return (
        <div>
            <h1>O { props.nome } </h1>
            <h2> Teve a nota { props.nota } e está</h2>
            <h2> { status } </h2>

        </div>
    )
}