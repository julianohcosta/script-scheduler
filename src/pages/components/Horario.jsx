import {useState} from "react";
import {TimePicker} from 'antd';
import './Horario.css'

const Horario = () => {
    const [value, setValue] = useState(null);

    const onChange = (time) => {
        setValue(time);
    };

    return (
        <TimePicker value={value} onChange={onChange} showNow={false} className='horario'/>
    );
};

export default Horario;