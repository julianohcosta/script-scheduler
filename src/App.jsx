import React, {useState} from 'react';
import SideBar from "./components/SideBar";
import './App.css'
import {ACOES} from "./acoes";
import AgendarForm from "./components/AgendarForm";
import AgendamentoForm from "./components/AgendamentoForm";
import Ajuda from "./components/Ajuda";
import Suporte from "./components/Suporte";

const App = () => {

    const [showedMenu, setShowedMenu] = useState(<Ajuda/>);

    const onClick = (e, acao) => {

        switch (acao) {
            case ACOES.AGENDAR:
                setShowedMenu(<AgendarForm/>)
                break;
            case ACOES.AGENDAMENTOS:
                setShowedMenu(<AgendamentoForm/>)
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
            <div>
                <SideBar onClick={onClick}/>
            </div>
            <div>
                {showedMenu}
            </div>

        </React.StrictMode>
    )
};

export default App;