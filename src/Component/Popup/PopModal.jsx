import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
function PopModal({ cname,header,vrnt, btnName, oldData, getDataFun,RenderComponet,delfun,delId }) {
  const [modalShow, setModalShow] = useState(false);
  const hideModel = () => {
    setModalShow(false);
  };
  const deleteData = () => {
    delfun(delId);
    hideModel();
  };
  return (
    <>
      <Button
        className={cname}
        variant={vrnt}
        onClick={() => setModalShow(true)}
      >
        {btnName}
      </Button>
      <Modal
        show={modalShow}
        onHide={hideModel}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {
          header&&
          <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className="text-center">{header}</h3>
          </Modal.Title>
        </Modal.Header>
        }
       
        <Modal.Body>
        {
        RenderComponet&&
        <RenderComponet onhide={hideModel} oldData={oldData} getDataFun={getDataFun}/>
        }       
        {
          delId&&
          <h5 className="mb-5">Are You confirm to delete this Data</h5>
        }
      </Modal.Body>
       
       {
        delId&&
        <Modal.Footer>
          <Button variant="danger" onClick={deleteData}>
            Delete
          </Button>
          <Button variant="primary" onClick={hideModel}>
            Cancel
          </Button>
        </Modal.Footer>
       }
      </Modal>
    </>
  );
}
export default PopModal;
