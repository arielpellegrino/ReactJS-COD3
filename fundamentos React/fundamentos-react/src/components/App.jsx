import React from "react";
import Primeiro from "./basicos/Primeiro";
import ComParametro from "./basicos/ComParametro";
import Fragmento from "./basicos/Fragmento";
import Aleatorio from "./basicos/Aleatorio";
import Card from "./layout/Card";

export default function App(){
  return (
    <div id="app">
      <h1> Fundamentos React</h1>
      <Card titulo="Desafio Aleatório">
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="Com Parâmetro">
      <ComParametro nome="João" nota={6.5} />
      </Card>

      <Primeiro></Primeiro>
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
