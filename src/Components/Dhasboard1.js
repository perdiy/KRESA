//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
import SidePage from './SidePage';
import styled, { keyframes } from 'styled-components';
//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap';

//import axios
import axios from 'axios';

function PostIndex() {

    //define state
    const [posts, setPosts] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await axios.get('http://localhost:8000/api/page2');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPosts(data);
    }

    return (
        <DhasboardStyled>

        <Container className="mt-3">
            <h1 className="judul">Edit Page 2</h1>
             <SidePage />
            <Row>
                <Col md="{4}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                            <Button as={Link} to="/dhasboard" variant="danger" className="mb-3">Logout</Button>
                            <Table striped bordered hover className="mb-1">
                                <thead>
                                    <tr>
                                        <th>NO.</th>
                                        <th>TITLE</th>
                                        <th>DESCKRIPSI</th>
                                        <th>IMAGE1</th>
                                        <th>IMAGE2</th>
                                        <th>IMAGE3</th>
                                        <th>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { posts.map((post, index) => (
                                        <tr key={ post.id }>
                                            <td>{ index + 1 }</td>
                                            <td>{ post.title }</td>
                                            <td>{ post.desc }</td>
                                            <td> <img src={post.image1}/></td>
                                            <td><img src={post.image2}/></td>
                                            <td><img src={post.image3}/></td>
                                            <td className="text-center">
        	<Button as={Link} to={`/edit1/edit/${post.id}`} variant="primary" size="sm" className="me-2">EDIT</Button>
        </td>
                                            <td className="text-center"></td>
                                        </tr>
                                    )) }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </DhasboardStyled>
    );
}
const DhasboardStyled = styled.div`
    display: grid;
    
    grid-template-columns: repeat(2, 1fr);
    
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    
}
.mt-3{
            
            
           margin: 15rem;
           padding-top : 0rem;
        }

        .judul{
            font-weight: 800;
            font-family: futura;
            font-size: 2rem;
            color: black;
         }

         .desc{  
            color: black;
         }

         
`;

export default PostIndex;