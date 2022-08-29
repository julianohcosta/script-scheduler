import Avatar from "./UI/Avatar";
import './SideBar.css'
import Menu from "./Menu";
import {FaMoon, FaSun} from "react-icons/fa";

const SideBar = props => {


  const onToogleDarkMode = () => {
    document.body.classList.toggle('dark')
  }

  return (
    <div className="sidebar">
      <Avatar/>
      <div className='half-bar'/>
      <Menu onClick={(event, acao) => props.onClick(event, acao)}/>
      <div className='half-bar'/>
      <div className='darkMode-toggle'>
        <input type="checkbox" id="checkbox" className='checkbox' onChange={onToogleDarkMode}/>
        <label htmlFor="checkbox" className='label'>
          <FaMoon className='fa-moon'/>
          <FaSun className='fa-sun'/>
          <div className='ball'/>
        </label>
      </div>
      <a
        href="https://rfbgov.sharepoint.com/sites/Labin01/SitePages/Labin01.aspx"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className='labinLogo'
          src={
            "https://edicao.intranet.receita.fazenda/administracao/rf01/estrutura-organizacional/superintendencia-regional/gabinete/labin01/imagens/logolabinnobg387x649/image_preview"
          }
          alt="Awesome Labin01 logo"
        />
      </a>
    </div>
  )
};

export default SideBar;