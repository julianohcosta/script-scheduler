import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Horario from "./Horario";

const Diario = () => {

    return (
        <Col sm='2'>
            <Form.Label className='mx-1'>Horário</Form.Label>
            <Horario/>
        </Col>
    )
};

export default Diario;