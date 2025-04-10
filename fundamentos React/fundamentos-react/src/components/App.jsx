import React from "react";
import Primeiro from "./basicos/Primeiro";
import ComParametro from "./basicos/ComParametro";
import Fragmento from "./basicos/Fragmento";
import Aleatorio from "./basicos/Aleatorio";
import Card from "./layout/Card";
import "./App.css";
import Familia from "./basicos/Familia";
import FamiliaMembro from "./basicos/FamiliaMembro";
import ListaAlunos from "./repeticao/ListaAlunos";
import TabelaProduto from "./repeticao/TabelaProduto";
import ParOuImpar from "./condicional/ParOuImpar";
import UsuarioInfo from "./condicional/UsuarioInfo";

export default function App() {
    return (
        <div className="App">
            <h1> Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#08 Renderização Condicional" color="#982395">
                    <ParOuImpar numero={19}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                </Card>

                <Card titulo="#07 - Exercicios de produtos" color="#FF00FF">
                    <TabelaProduto>

                    </TabelaProduto>
                </Card>


                <Card titulo="#06 - repetição" color="#FF4C65">
                    <ListaAlunos>

                    </ListaAlunos>
                </Card>


                <Card titulo="Componente com filhos" color="#00C8F8">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Gustavo"/>
                    </Familia>
                </Card>


                <Card titulo="Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60}/>
                    <Aleatorio min={1} max={60}/>
                </Card>

                <Card titulo="Fragmento" color="#0A6900">
                    <Fragmento/>
                </Card>

                <Card titulo="Com Parâmetro">
                    <ComParametro nome="João" nota={6.5}/>
                </Card>

                <Card titulo="Primeiro">
                    <Primeiro/>
                </Card>
            </div>
        </div>
    );
};

/* Forma reduzia de usar a function

export default _ =>

        <div id="app">
            <h1> Fundamentos React</h1>
            <Fragmento />

            <ComParametro
                nome="João"
                nota={6.5}
            />

            <Primeiro></Primeiro>
        </div>

* */
