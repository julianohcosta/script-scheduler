import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Horario from "./Horario";

const Diario = props => {


  return (
    <Col sm='2'>
      <Form.Label className='mx-1'>Horário (HH:MM)</Form.Label>
      <Horario onTimerset={props.onTimerset}/>
    </Col>
  )
};

export default Diario;