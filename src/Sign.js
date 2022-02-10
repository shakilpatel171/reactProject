import React from 'react'
import { Form } from "react-bootstrap"
import { Button } from 'react-bootstrap'
import "./App.css"
import { FaGooglePlusG } from "react-icons/fa";
const Sign = () => {
    return (
        <>
            <div className='sign'>
                <Form style={{ width: "20%", margin: "auto", marginLeft: "auto", marginRight: "auto", marginBottom: "auto", marginTop: "15%" }}>
                    <div className="logo">
        
                    <FaGooglePlusG size="3.5em"/>
                    </div>
                    <div className="sign">
                        <h5 className='mb-3'>Please Sign in</h5>
                    </div>
                    <Form.Group className="mb-1" controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-0" controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" />

                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicCheckbox">

                        <div className="checkbox mt-2">
                            <Form.Check type="checkbox " label="Remember me" />
                        </div>

                    </Form.Group>

                    <Button className='button' variant="primary" style={{ width: "100%" }} type="submit">
                        Sign in
                    </Button>
                </Form>

            </div>
        </>
    )
}

export default Sign;
