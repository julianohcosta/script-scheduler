import Avatar from "./UI/Avatar";
import './SideBar.css'
import Menu from "./Menu";
import logoLabin from '../assets/logoLabin.png'
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
            <img className='labinLogo' src={logoLabin} alt="logo Labin 01"/>
        </div>
    )
};

export default SideBar;