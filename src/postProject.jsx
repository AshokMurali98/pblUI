
import React from "react";
import Popup from 'reactjs-popup';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ProjectCards from "./projectCards/ProjectCards";

function PostProject() {
    const [show, setShow] = useState(false);
    const [output, setOutput] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function createProject(project) {
        return <ProjectCards description={project.description} title={project.title}/>
    }

    function onSubmit() {


        var input = [
            {title: "PBL PROJECT EXPLORER", description: "Project Explorer is an application where the projects are to be posted and requests are placed to work on those projects. The user receives requests for the projects which he/she has posted and can contact them through email or internal message system. After interviewing them, they can decide the team to work on their project."},

        ];

        setOutput(input.map(createProject));
    }

    return (
        <>
            <Button variant="outline-success" style={{background:'#024930',color:'white'}} onClick={handleShow}>
                Post Your Project
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="project"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Project Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={onSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            <div style={{display: "flex"}}>

                {output}
            </div>
        </>

    );
}

export default PostProject;