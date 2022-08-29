import classes from './Suporte.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import contact from '../assets/undraw-contact.svg'

const Suporte = props => {
  return (
    <div className={classes.content}>
      <Container >
        <Row className='justify-content-center'>
          <Col md={10}>
            <Row>
              <Col md={6}>
                <h3 className={`${classes.heading} mb-4`}>Suporte</h3>
                <p>Por favor, descreva detalhadamente o problema encontrado.</p>
                <p>
                  <img src={contact} alt="Email placeholder" className="img-fluid"/>
                </p>
              </Col>
              <Col md={6}>
                <Form.Group as={Row} controlId="supportForm" >
                  <Col md='12'>
                    <Form.Control type="text" placeholder={`Assunto`}/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="supportForm" >
                  <Col md='12'>
                    <textarea className="form-control my-4" name="message" id="message" cols="30" rows="12" placeholder="Escreva sua mensagem"/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="supportFormBtn" >
                  <Col md='12'>
                    <input type="submit" value="Enviar Mensagem" className="btn btn-primary rounded-2 py-2 px-4"/>
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Suporte;