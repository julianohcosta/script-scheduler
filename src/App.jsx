import React, {useState} from 'react';
import './App.css'
import {ACOES} from "./acoes";
import SideBar from "./components/SideBar";
import Agendar from "./pages/Agendar";
import Agendamento from "./pages/Agendamento";
import Ajuda from "./pages/Ajuda";
import Suporte from "./pages/Suporte";

const App = () => {

  const [showedMenu, setShowedMenu] = useState(<Agendar/>);

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
        setShowedMenu(<Ajuda/>)
        break;
    }
  }

  return (
    <React.StrictMode>
      <div className='grid-container'>
        <div className='grid-child'>
          <SideBar onClick={onClick}/>
        </div>
        <div className='content'>
          {showedMenu}
        </div>
      </div>
    </React.StrictMode>
  )
};

export default App;