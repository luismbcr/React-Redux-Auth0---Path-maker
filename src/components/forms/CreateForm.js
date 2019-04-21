import React, {useState} from 'react'
import { Form, Input} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pathActions from "../../actions/path"

const CreateForm = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        isValid: false
    })
    const handleChangeTitle = (event)=> {
        console.log(event.target);
        const {value} = event.target;
        const isValidForm  = (/^(?=.*[^\W_])[\w ]*$/).test(value) && value.length > 2;
        setFormData({name: value, isValid: isValidForm})
    }
    const handleChangeDescription = (event)=> {
      
      const {value} = event.target;
      console.log(value);
      const isValidForm  = (/^(?=.*[^\W_])[\w ]*$/).test(formData.name) && value.length > 2;
      setFormData({name: formData.name, description: value, isValid: isValidForm})
  }
    const handleSubmit = ()=>{
      props.addPath({
        "title": formData.name,
        "description": formData.description
      })
      setFormData({name: "",description:"", isValid: false})
    }

    return (
      <Form onSubmit={handleSubmit}>
      <Form.Field required>
        <label>Path Name</label>
        <Input value={formData.name} placeholder='React Developer path' onChange={handleChangeTitle} />
        <p>Please enter a valid name, only letters and numbers</p>
      </Form.Field>
      <Form.TextArea required label='What is your goal?' placeholder='Tell us more about your goal' value={formData.description} onChange={handleChangeDescription} />
      <Form.Button disabled={!formData.isValid} content='Add the path' />
    </Form>
    )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
      ...pathActions,
  }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(CreateForm)
