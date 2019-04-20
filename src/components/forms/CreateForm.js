import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const CreateForm = () => {
  return (
    <Form>
    <Form.Field required>
      <label>Path Name</label>
      <Input placeholder='React Developer path' />
    </Form.Field>
    <Form.Button content='Add the path' />
  </Form>
  )
}

export default CreateForm
