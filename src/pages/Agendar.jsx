import {useMemo, useRef, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Diario from "./components/Diario";
import Semanal from "./components/Semanal";
import Mensal from "./components/Mensal";
import SaveButton from "./components/SaveButton";
import ScriptsTable from "../components/tables/ScriptsTable";
import './Agendar.css'


const FREQUENCIA = {
  DIARIA: 'Diária',
  SEMANAL: 'Semanal',
  MENSAL: 'Mensal'
}

const Agendar = () => {

  const diario = <Diario onTimerset={horarioHandler}/>

  const [dialogSelector, setDialogSelector] = useState(diario);
  const [showSucess, setShowSucess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [scriptName, setScriptName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [frequencia, setFrequencia] = useState(FREQUENCIA.DIARIA);
  const [dia, setDia] = useState('');
  const [horario, setHorario] = useState('');
  const [message, setmessage] = useState('');
  const [resetBtn, setResetBtn] = useState(false);

  const scriptNameRef = useRef();
  const taskNameRef = useRef();

  /** DUMMY COLUMNS FOR TESTIG */
  const columns = useMemo(
    () => [
      {
        Header: 'Nome do Script',
        accessor: 'nome', // accessor is the "key" in the data
      },
      {
        Header: 'Autor',
        accessor: 'autor',
      },
      {
        Header: 'Linguagem',
        accessor: 'linguagem',
      },
      {
        Header: 'Data da Última Alteração',
        accessor: 'dataAlteracao',
      },
    ],
    []
  )

  const data = useMemo(
    () => [
      {
        "linguagem": "Python/JEP",
        "nome": "1 Labin01 - SiefWeb -  Malha PF - Informar Evento",
        "params": [],
        "autor": "ELVIS CAICARA DA SILVA",
        "dataAlteracao": "18/02/2021"
      },
      {
        "linguagem": "Python",
        "nome": "1 Labin01 - SiefWeb - Malha PF - cadastrar Processo",
        "params": [],
        "autor": "ELVIS CAICARA DA SILVA",
        "dataAlteracao": "18/02/2021"
      },
      {
        "linguagem": "Python",
        "nome": "1 SIEF mapear tela - ok",
        "params": [],
        "autor": "ELVIS CAICARA DA SILVA",
        "dataAlteracao": "17/11/2020"
      },
      {
        "linguagem": "Python",
        "nome": "1 SIEF mapear tela 1.1",
        "params": [],
        "autor": "ELVIS CAICARA DA SILVA",
        "dataAlteracao": "24/11/2020"
      },],
    []
  )

  /**
   * @param {boolean} sucess
   * @param {String} message
   */
  const saveTaskHandler = (sucess, message) => {

    if (sucess) {
      setmessage(message)
      setShowSucess(true)

    } else {
      setmessage(message)
      setShowError(true)
    }
  }

  const onEditParams = (e) => {
    e.preventDefault();
  }

  /**
   * @param {String} time
   */
  function horarioHandler(time) {
    setHorario(time);
  }

  const diaSelecthandler = (dia) => {
    setDia(dia);
  }

  const clickTableRowHandler = (row) => {
    setScriptName(row.cells[0].value);
  }

  const changeHandler = (event) => {

    const frequencia = event.target.value;
    setFrequencia(frequencia);

    switch (frequencia) {
      case FREQUENCIA.DIARIA:
        setDialogSelector(diario)
        break;
      case FREQUENCIA.SEMANAL:
        setDialogSelector(<Semanal onTimerset={horarioHandler} onDiaSelect={diaSelecthandler}/>)
        break;
      case FREQUENCIA.MENSAL:
        setDialogSelector(<Mensal onTimerset={horarioHandler} onDiaSelect={diaSelecthandler}/>)
        break;
      default:
        break;
    }
  }

  const renderTooltip = (props, text) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

  return (
    <>
      {/*<EditDlg/>*/}
      <div className='container-agendar'>
        <div className='container-agendar--form'>
          <Form className='m-lg-5 m-md-5'>

            <Form.Group as={Row} className="mb-3" controlId="formScriptData">
              <Col sm="1"/>
              <Col sm="8">
                <Form.Label>Nome do script a ser executado</Form.Label>
                <Form.Control ref={scriptNameRef} type="text" disabled value={scriptName}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEdtScript">
              <Col sm="1"/>
              <Col sm="2">
                <Form.Label className='mt-2'>Parâmetros do Script</Form.Label>
              </Col>
              <Col sm="2">
                <OverlayTrigger
                  placement="bottom"
                  delay={{show: 250, hide: 400}}
                  overlay={(props) => renderTooltip(props, 'Este script não possui parâmetros')}
                  defaultShow={false}>
                  <Button variant="secondary" type="submit" onClick={onEditParams} className='mx-4'>
                    Editar Parâmetros
                  </Button>
                </OverlayTrigger>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formScriptOptions">
              <Col sm="1"/>
              <Col sm='2'>
                <Form.Label>Nome da Tarefa</Form.Label>
                <Form.Control
                  type="text"
                  ref={taskNameRef}
                  onChange={(e) => setTaskName(e.target.value)}/>
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
              <Col sm="1">
                <SaveButton
                  onSave={saveTaskHandler}
                  setShowSucess={setShowSucess}
                  setShowError={setShowError}
                  resetBtn={resetBtn}
                  taskName={taskName}
                  frequencia={frequencia}
                  dia={dia}
                  horario={horario}
                  scriptName={scriptName}
                />
              </Col>
              <Col sm="7">
                {showSucess && <Alert key={`0101`} variant={`primary`} onClose={() => {
                  setShowSucess(false);
                  setResetBtn(prevValue => !prevValue)
                }} dismissible>{message}</Alert>}
                {showError && <Alert key={`0101`} variant={`danger`} onClose={() => {
                  setShowError(false);
                  setResetBtn(prevValue => !prevValue)
                }} dismissible>{message}</Alert>}
              </Col>
            </Form.Group>

          </Form>
        </div>

        <div className='container-agendar--table'>

          <Row className="mb-3 mx-5">
            <ScriptsTable getCellValue={clickTableRowHandler} columns={columns} data={data}/>
          </Row>
        </div>
      </div>
    </>
  )
};

export default Agendar;