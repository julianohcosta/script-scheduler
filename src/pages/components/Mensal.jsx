import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const Mensal = () => {

    return (
        <>
            <Col sm='1'>
                <Form.Label className='mx-1'>Dia do Mês</Form.Label>
                <Form.Select defaultValue='1' aria-label="Day selector">
                    {[...Array(30).keys()].map(i => {
                        i += 1;
                        return <option value={i}>{i}</option>
                    })}
                </Form.Select>
            </Col>
            <Col sm='2'>
                <Form.Label className='mx-1'>Horário</Form.Label>
            </Col>
        </>
    )
};

export default Mensal;