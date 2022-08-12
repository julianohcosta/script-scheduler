import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Horario from "./Horario";

const Mensal = props => {


  return (
    <>
      <Col sm='1'>
        <Form.Label className='mx-1'>Dia do Mês</Form.Label>
        <Form.Select defaultValue='1' aria-label="Day selector">
          {[...Array(30).keys()].map(i => {
            i += 1;
            return <option key={i} value={i}>{i}</option>
          })}
        </Form.Select>
      </Col>
      <Col sm='2'>
        <Form.Label className='mx-1'>Horário (HH:MM)</Form.Label>
        <Horario onTimerset={props.onTimerset}/>
      </Col>
    </>
  )
};

export default Mensal;