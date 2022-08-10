import MenuItem from "./MenuItem";
import { MdAddTask,  MdHelpOutline, MdMailOutline, MdOutlineSchedule} from "react-icons/md";
import './Menu.css'
import {ACOES} from '../../acoes'

const Menu = props => {

    return (
        <ul className='sidebar-menu'>
            <MenuItem icon={<MdAddTask/>} text={ACOES.AGENDAR} onClick={(event) => props.onClick(event, ACOES.AGENDAR)}/>
            <MenuItem icon={<MdOutlineSchedule/>} text={ACOES.AGENDAMENTOS}  onClick={(event) => props.onClick(event, ACOES.AGENDAMENTOS)}/>
            <MenuItem icon={<MdHelpOutline/>} text={ACOES.AJUDA}  onClick={(event) => props.onClick(event, ACOES.AJUDA)}/>
            <MenuItem icon={<MdMailOutline/>} text={ACOES.SUPORTE}  onClick={(event) => props.onClick(event, ACOES.SUPORTE)}/>
        </ul>
    )
};

export default Menu;