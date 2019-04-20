import React, {useState} from 'react'
import { Form, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pathActions from "../../actions/path"

const CreateForm = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        isValid: false
    })
    const handleChange = (event)=> {
        const {value} = event.target;
        const isValidForm  = (/^(?=.*[^\W_])[\w ]*$/).test(value) && value.length > 2;
        setFormData({name: value, isValid: isValidForm})
    }
    const handleSubmit = ()=>{
      props.addPath({
        id: Math.floor(Math.random() * 1000) + 1,
        title: formData.name
      })
      setFormData({name: "", isValid: false})
    }
    return (
      <Form onSubmit={handleSubmit}>
      <Form.Field required>
        <label>Path Name</label>
        <Input value={formData.name} placeholder='React Developer path' onChange={handleChange} />
        <p>Please enter a valid name, only letters and numbers</p>
      </Form.Field>
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
