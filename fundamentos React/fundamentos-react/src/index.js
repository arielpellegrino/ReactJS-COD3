
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from "./components/basicos/ComParametro";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);



root.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro
            nome="João"
            nota={6.5}

        />
    </div>,
)