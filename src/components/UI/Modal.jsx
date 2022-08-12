import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = props => {
  return <div className={`${classes.backdrop} ${props.className}`}/>;
};

const ModalOverlay = props => {
  return (
    <div className={`${classes.modal} ${props.className}`}>
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop className={props.className}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay className={props.className}>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
