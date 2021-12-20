import React from 'react'
import{Container,Row,Col,Button,label} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import useForm from './useForm'
import validate from './ValidateInfor'

const FormSub = ({submitform}) => {
const{handleChange, values, handleSubmit, errors} = useForm(submitform,validate)

    return (

        <Container>
          <Row>
            <Col md= {{span:4, offset:3}}>
          <h2>Registration form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId= "forBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter Name"
            name='name'
            value={values.name}
            onChange={handleChange}
            />
              {errors.name && <p>{errors.name}</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId= "forBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"
            placeholder="Enter Email"
            name='email'
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId  = "forBasicCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text"
             placeholder="Enter Country" 
             name='country'
             value={values.country}
             onChange={handleChange}
             
             />
              {errors.country && <p>{errors.country}</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId = "forBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="pwd" 
            placeholder="Enter your Password" 
            name='password'
            value={values.password}
            onChange={handleChange}
            
            />
             {errors.password && <p>{errors.password}</p>}
            </Form.Group>
            
            <Form.Group className="mb-3" controlId = "forBasicCheckbox">

            <Form.Check type="checkbox" 
            label="I accept terms & Condition" 
            name='checkbox'
            value={values.checkbox}
            onChange={handleChange}
            />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
             </Button>

            </Form>
            </Col>
            </Row>
      </Container>
    )
}

export default FormSub
