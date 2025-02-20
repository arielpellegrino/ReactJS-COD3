import React from "react";
import Primeiro from "./basicos/Primeiro";
import ComParametro from "./basicos/ComParametro";
import Fragmento from "./basicos/Fragmento";
import Aleatorio from "./basicos/Aleatorio";
import Card from "./layout/Card";
import "./App.css";
import Familia from "./basicos/Familia";

export default function App(){
  return (
    <div className="App">
        <h1> Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="Componente com filhos" color="#00C8F8">
                    <Familia></Familia>
                </Card>


                <Card titulo="Desafio Aleatório" color="#FA6900">
                  <Aleatorio min={1} max={60} />
                  <Aleatorio min={1} max={60} />
                </Card>
                
                <Card titulo="Fragmento" color="#0A6900">
                    <Fragmento />
                </Card>

                <Card titulo="Com Parâmetro">
                    <ComParametro nome="João" nota={6.5} />
                </Card>
                
                <Card titulo="Primeiro">
                    <Primeiro />
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
