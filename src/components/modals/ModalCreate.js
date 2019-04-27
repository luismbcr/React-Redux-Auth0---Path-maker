import React from "react";
import { Header, Modal } from "semantic-ui-react";
import CreateForm from "../forms/CreateForm";
const ModalCreate = ({children, popupOpen, handlePopup})=> {
  return (
    <Modal trigger={children}
           onClose={handlePopup}
           closeIcon 
           open={popupOpen}
           centered={false}>
      <Header icon="add" content="Create a path" />
      <Modal.Content>
        <CreateForm handlePopup={handlePopup} />
      </Modal.Content>
    </Modal>
  );
};

export default ModalCreate;
