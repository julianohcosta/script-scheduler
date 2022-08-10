import React, {useState} from 'react';
import './App.css'
import {ACOES} from "./acoes";
import SideBar from "./components/SideBar";
import Agendar from "./components/Agendar";
import Agendamento from "./components/Agendamento";
import Ajuda from "./components/Ajuda";
import Suporte from "./components/Suporte";

const App = () => {

    const [showedMenu, setShowedMenu] = useState(<Ajuda/>);

    const onClick = (e, acao) => {

        switch (acao) {
            case ACOES.AGENDAR:
                setShowedMenu(<Agendar/>)
                break;
            case ACOES.AGENDAMENTOS:
                setShowedMenu(<Agendamento/>)
                break;
            case ACOES.AJUDA:
                setShowedMenu(<Ajuda/>)
                break;
            case ACOES.SUPORTE:
                setShowedMenu(<Suporte/>)
                break;
            default:
                break;
        }
    }

    return (
        <React.StrictMode>
            <div className='grid-container'>
                <div className='grid-child'>
                    <SideBar onClick={onClick}/>
                </div>
                <div  className='content'>
                    {showedMenu}
                </div>
            </div>
        </React.StrictMode>
    )
};

export default App;