import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Agendar.css'

const Agendar = () => {
    return (
      <div className='container-agendar'>
        <div className='container-agendar--form'>
          <Form className='m-lg-5 m-md-5'>
            <Form.Group className="mb-3" controlId="formScriptData">
              <Form.Label>Nome do Script a ser executado</Form.Label>
              <Form.Control type="text" disabled/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Agendar
            </Button>
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