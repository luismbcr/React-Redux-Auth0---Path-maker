import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const ItemForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    isValidForm: false
  });
  const handleChange = event => {
    const { value } = event.target;
    const isValidForm = /^(?=.*[^\W_])[\w ]*$/.test(value) && value.length > 6;
    setFormData({ title: value, isValid: isValidForm });
  };
  const handleSubmit = () => {
    const { id } = props.match.params;
    props.AddItem(id,{"items": [...props.details.items, {
      "text": formData.title,
      "status": 0
    }]});
    setFormData({ title: "", description: "", isValid: false });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input
          placeholder="Add new topic"
          value={formData.title}
          onChange={handleChange}
        />
        <Form.Button disabled={!formData.isValid} content="+" />
      </Form.Group>
    </Form>
  );
};

export default ItemForm;
