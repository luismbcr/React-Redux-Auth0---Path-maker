import React, {useState} from 'react'
import { Form, Input } from 'semantic-ui-react'



const CreateForm = () => {
    const [formData, setFormData] = useState({
        name: ""
    })
    const handleChange = (event)=> setFormData({name: event.target.value})
  return (
    <Form>
    <Form.Field required>
      <label>Path Name</label>
      <Input value={formData.name} placeholder='React Developer path' onChange={handleChange} />
    </Form.Field>
    <Form.Button disabled={formData.name.length <= 0} content='Add the path' />
  </Form>
  )
}

export default CreateForm
