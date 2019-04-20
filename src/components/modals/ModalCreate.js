import React from "react";
import { Header, Modal } from "semantic-ui-react";
import CreateForm from "../forms/CreateForm";
const ModalCreate = props => {
  return (
    <Modal trigger={props.children} closeIcon centered={false}>
      <Header icon="add" content="Create a path" />
      <Modal.Content>
        <CreateForm/>
      </Modal.Content>
    </Modal>
  );
};

export default ModalCreate;
