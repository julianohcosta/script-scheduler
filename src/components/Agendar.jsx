import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {MdOutlineHelpOutline} from "react-icons/md";
import './Agendar.css'

const Agendar = () => {

  const onAgendar = (e) => {
    e.preventDefault();
  }

  const onEditParams = (e) => {
    e.preventDefault();
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
          <Form.Group className="mb-3" controlId="formScriptData">
            <Form.Label>Nome do Script a ser executado</Form.Label>
            <Form.Control type="text" disabled/>
          </Form.Group>
          <Form.Group className="mb-3">
              <MdOutlineHelpOutline/>
            <Form.Label className='mx-1'>Frequência</Form.Label>
            <Form.Select>
              <option>Diária</option>
              <option>Semanal</option>
              <option>Mensal</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onAgendar}>
            Agendar
          </Button>
          <OverlayTrigger
            placement="bottom"
            delay={{show: 250, hide: 400}}
            overlay={(props) => renderTooltip(props, 'Edite os parâmetros do script')}
            defaultShow={false}
          >
            <Button variant="secondary" type="submit" onClick={onEditParams} className='mx-5'>
              Editar Parâmetros
            </Button>
          </OverlayTrigger>
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