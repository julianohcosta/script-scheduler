import {useState} from "react";
import {TimePicker} from 'antd';

import './Horario.css'

const Horario = props => {

  const [value, setValue] = useState(null);
  const format = 'HH:mm';

  const onChange = (time, timeString) => {
    setValue(time);
    props.onTimerset(timeString);
  };

  return (
    <TimePicker value={value} format={format} onChange={onChange} showNow={false} className='horario'/>
  );
};

export default Horario;