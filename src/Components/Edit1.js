//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
//import component Bootstrap React
import { Card, Container, Row, Col , Form, Button, Alert } from 'react-bootstrap';

//import axios
import axios from 'axios';

//import hook history dan params dari react router dom
import { useHistory, useParams } from "react-router-dom";

function EditPost() {

    //state
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    //state validation
    const [validation, setValidation] = useState({});

    //history
    // const history = useHistory();

    //get ID from parameter URL
    const { id } = useParams();

    //hook useEffect
    useEffect(() => {

        //panggil function "getPOstById"
        getPostById();
        
    }, []);

    //function "getPostById"
    const getPostById = async() => {

        //get data from server
        const response = await axios.get(`http://localhost:8000/api/page2/${id}`);
        //get response data
        const data = await response.data.data

        //assign data to state
        setTitle(data.title);
        setDesc(data.desc);

    };

    //function "updatePost"
    const updatePost = async (e) => {
        e.preventDefault();
        
        //send data to server
        await axios.put(`http://localhost:8000/api/page2/${id}`, {
            title: title,
            desc: desc
        })
        .then(() => {

            //redirect
            // history.push('/posts');

        })
        .catch((error) => {

            //assign validation on state
            setValidation(error.response.data);
        })
        
    };

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                        <Button as={Link} to="/dhasboard1" variant="danger" className="mb-3">Back</Button>
                            {
                                validation.errors &&
                                    <Alert variant="danger">
                                        <ul class="mt-0 mb-0">
                                            { validation.errors.map((error, index) => (
                                                <li key={index}>{ `${error.param} : ${error.msg}` }</li>
                                            )) }
                                        </ul>
                                    </Alert>
                            }

                            <Form onSubmit={ updatePost }>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>TITLE</Form.Label>
                                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan Title" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Desc</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Masukkan Desc" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    UPDATE
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default EditPost;