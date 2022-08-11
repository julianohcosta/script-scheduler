import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const WEEKDAY = {
    SEGUNDA: 'Segunda-Feira',
    TERCA: 'Terça-Feira',
    QUARTA: 'Quarta-Feira',
    QUINTA: 'Quinta-Feira',
    SEXTA: 'Sexta-Feira',
    SABADO: 'Sábado',
    DOMINGO: 'Domingo',
}

const Semanal = () => {
    return (
        <>
            <Col sm='2'>
                <Form.Label className='mx-1'>Dia da Semana</Form.Label>
                <Form.Select defaultValue={WEEKDAY.SEGUNDA} aria-label="Day selector">
                    <option value='0'>{WEEKDAY.SEGUNDA}</option>
                    <option value='1'>{WEEKDAY.TERCA}</option>
                    <option value='2'>{WEEKDAY.QUARTA}</option>
                    <option value='3'>{WEEKDAY.QUINTA}</option>
                    <option value='4'>{WEEKDAY.SEXTA}</option>
                    <option value='5'>{WEEKDAY.SABADO}</option>
                    <option value='6'>{WEEKDAY.DOMINGO}</option>
                </Form.Select>
            </Col>
            <Col sm='2'>
                <Form.Label className='mx-1'>Horário</Form.Label>
            </Col>
        </>

    )
};

export default Semanal;