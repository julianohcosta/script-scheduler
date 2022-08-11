import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Diario from "./components/Diario";
import Semanal from "./components/Semanal";
import Mensal from "./components/Mensal";
import SaveButton from "../components/UI/SaveButton";
import './Agendar.css'


const FREQUENCIA = {
    DIARIA: 'Diária',
    SEMANAL: 'Semanal',
    MENSAL: 'Mensal'
}

const Agendar = () => {

    const [dialogSelector, setDialogSelector] = useState(<Diario/>);

    const onEditParams = (e) => {
        e.preventDefault();
    }

    const changeHandler = (event) => {
        const frequencia = event.target.value;

        switch (frequencia) {
            case FREQUENCIA.DIARIA:
                setDialogSelector(<Diario/>)
                break;
            case FREQUENCIA.SEMANAL:
                setDialogSelector(<Semanal/>)
                break;
            case FREQUENCIA.MENSAL:
                setDialogSelector(<Mensal/>)
                break;
            default:
                setDialogSelector(<Diario/>)
                break;
        }
    }

    const renderTooltip = (props, text) => (
        <Tooltip id="button-tooltip" {...props}>
            {text}
        </Tooltip>
    );

    return (
        <div className='container-agendar'>
            <div className='container-agendar--form'>
                <Form className='m-lg-5 m-md-5'>
                    <Form.Group as={Row} className="mb-3" controlId="formScriptData">
                        <Col sm="1"/>
                        <Col sm="8">
                            <Form.Label>Nome do Script a ser executado</Form.Label>
                            <Form.Control type="text" disabled/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formScriptOptions">
                        <Col sm="1"/>

                        <Col sm='2'>
                            <Form.Label>Nome da Tarefa</Form.Label>
                            <Form.Control type="text"/>
                        </Col>

                        <Col sm="2">
                            <Form.Label className='mx-1'>Frequência</Form.Label>
                            <Form.Select onChange={changeHandler} defaultValue={FREQUENCIA.DIARIA}>
                                <option>{FREQUENCIA.DIARIA}</option>
                                <option>{FREQUENCIA.SEMANAL}</option>
                                <option>{FREQUENCIA.MENSAL}</option>
                            </Form.Select>
                        </Col>
                        {dialogSelector}
                    </Form.Group>
                    <Form.Group as={Row} className="my-3" controlId="fromButtons">
                        <Col sm="1"/>
                        <Col sm="3">
                            <div className='editar'>
                                <span className='mx-0'>
                                    <SaveButton/>
                                </span>
                                <span className='my-3'>
                                    <OverlayTrigger
                                        placement="bottom"
                                        delay={{show: 250, hide: 400}}
                                        overlay={(props) => renderTooltip(props, 'Este script não possui parâmetros')}
                                        defaultShow={false}
                                    >
                                    <Button variant="secondary" type="submit" onClick={onEditParams} className='mx-4'>
                                        Editar Parâmetros
                                    </Button>
                                </OverlayTrigger>
                                </span>
                            </div>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            <div className='container-agendar--table'>
                <p>
                    Tabela de scripts
                </p>
            </div>
        </div>
    )
};

export default Agendar;