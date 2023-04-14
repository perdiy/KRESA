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
    const [link, setLink] = useState('');
    const [title_section1, setTitle1] = useState('');
    const [desc_section1, setDesc1] = useState('');
    const [title_section2, setTitle2] = useState('');
    const [desc_section2, setDesc2] = useState('');
    const [title_section3, setTitle3] = useState('');
    const [desc_section3, setDesc3] = useState('');

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
        const response = await axios.get(`http://localhost:8000/api/video1/${id}`);
        //get response data
        const data = await response.data.data

        //assign data to state
        setTitle(data.title);
        setDesc(data.desc);
        setLink(data.link);
        setTitle1(data.title_section1);
        setDesc1(data.desc_section1);
        setTitle2(data.title_section2);
        setDesc2(data.desc_section2);
        setTitle3(data.title_section3);
        setDesc3(data.desc_section3);


    };

    //function "updatePost"
    const updatePost = async (e) => {
        e.preventDefault();
        
        //send data to server
        await axios.put(`http://localhost:8000/api/video1/${id}`, {
            title: title,
            desc: desc,
            link: link,
            title_section1: title_section1,
            desc_section1: desc_section1,
            title_section2: title_section2,
            desc_section2: desc_section2,
            title_section3: title_section3,
            desc_section3: desc_section3
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
                        <Button as={Link} to="/video1" variant="danger" className="mb-3">Back</Button>
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
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Masukkan Desc" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>LINK VIDEO</Form.Label>
                                    <Form.Control type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Masukkan Link video" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>TITITLE_SEC1</Form.Label>
                                    <Form.Control type="text" value={title_section1} onChange={(e) => setTitle1(e.target.value)} placeholder="Masukkan Title_section1" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>DESC_SE1</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={desc_section1} onChange={(e) => setDesc1(e.target.value)} placeholder="Masukkan Desc_section1" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>TITITLE_SEC2</Form.Label>
                                    <Form.Control type="text" value={title_section2} onChange={(e) => setTitle2(e.target.value)} placeholder="Masukkan Title_section2" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>DESC_SEC2</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={desc_section2} onChange={(e) => setDesc2(e.target.value)} placeholder="Masukkan Desc_section2" />
                                </Form.Group>



                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>TITITLE_SEC3</Form.Label>
                                    <Form.Control type="text" value={title_section3} onChange={(e) => setTitle3(e.target.value)} placeholder="Masukkan Title_section3" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>DESC_SEC3</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={desc_section3} onChange={(e) => setDesc2(e.target.value)} placeholder="Masukkan Desc_section3" />
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