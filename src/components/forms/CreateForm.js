import React, {useState} from 'react'
import { Form, Input } from 'semantic-ui-react'



const CreateForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        isValid: false
    })
    const handleChange = (event)=> {
        const {value} = event.target;
        const isValidForm  = (/^(?=.*[^\W_])[\w ]*$/).test(value) && value.length > 2;
        setFormData({name: value, isValid: isValidForm})
    }
  return (
    <Form>
    <Form.Field required>
      <label>Path Name</label>
      <Input value={formData.name} placeholder='React Developer path' onChange={handleChange} />
      <p>Please enter a valid name, only letters and numbers</p>
    </Form.Field>
    <Form.Button disabled={!formData.isValid} content='Add the path' />
  </Form>
  )
}

export default CreateForm
