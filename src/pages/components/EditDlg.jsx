import Modal from "../../components/UI/Modal";
import Card from "../../components/UI/Card";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import {useEffect, useState} from "react";
import './EditDlg.css'

const EditDlg = (props) => {
  const [values, setValues] = useState(new Map());
  
  const closeEditDlg = props.onClose();

  useEffect(() => {

    const escFunction =  (event) => {
      if (event.key === "Escape") {
        closeEditDlg();
      }
    }

    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [closeEditDlg]);

  const inputHandler = (e, paramName) => {
    setValues(vals => vals.set(paramName, e.target.value));
  }

  const CancelarBtn = styled(Button)(() => ({
    color: '#00205B',
    backgroundColor: '#BFC7D6',
    borderRadius: "6px",
    '&:hover': {
      backgroundColor: '#A5B0BE',
    },
  }));

  const ConfirmarBtn = styled(Button)(() => ({
    color: '#FFFFFF',
    backgroundColor: '#00205B',
    borderRadius: "6px",
    '&:hover': {
      backgroundColor: '#000055',
    },
  }));

  return (
    <Modal onClose={props.onClose}>
      <Card >
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formScriptData">
            <Col sm="4">
              <Form.Label>Nome</Form.Label>
              {
                props.params.map(param => <Form.Control
                  key={param['nome']}
                  className='my-1'
                  type="text"
                  disabled value={param['nome']}
                />)}
            </Col>
            <Col sm="8">
              <Form.Label>Valor</Form.Label>
              {
                props.params.map(param => <Form.Control
                  key={param['nome']}
                  className='my-1'
                  type="text"
                  onChange={(e) => inputHandler(e, param['nome'])}
                />)}
            </Col>
          </Form.Group>
        </Form>
        <div className='edit-dlg-form'>
          <CancelarBtn variant="contained" className='mx-5' onClick={props.onClose}>Cancelar</CancelarBtn>
          <ConfirmarBtn variant="contained" onClick={() => props.onConfirmar(values)}>Confirmar</ConfirmarBtn>
        </div>
      </Card>
    </Modal>
  )
}
export default EditDlg