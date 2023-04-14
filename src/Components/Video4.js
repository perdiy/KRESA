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
        const response = await axios.get('http://localhost:8000/api/video4');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPosts(data);
    }

    return (
        <DhasboardStyled>

        <Container className="mt-3">
            <h1 className="judul">Edit Page Video 4</h1>
             <SidePage />
            <Row>
                <Col md="{4}">
                    <Card className="border-1 rounded shadow-sm">
                        <Card.Body>
                            <Button as={Link} to="/video4" variant="danger" className="mb-3">Logout</Button>
                            <Table striped bordered hover className="mb-1">
                                <thead>
                                    <tr>
                                        <th>NO.</th>
                                        <th>TITLE</th>
                                        <th>DESCKRIPSI</th>
                                        <th>LINK_VIDEO</th>
                                        <th>TITLE_SEC1</th>
                                        <th>DESC_SEC1</th>
                                         <th>TITLE_SEC2</th>
                                        <th>DESC_SEC2</th>
                                        <th>TITLE_SEC3</th>
                                        <th>DESC_SEC3</th>
                                        <th>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { posts.map((post, index) => (
                                        <tr key={ post.id }>
                                            <td>{ index + 1 }</td>
                                            <td>{ post.title }</td>
                                            <td>{ post.desc }</td>
                                            <td>{ post.link }</td>
                                            <td>{ post.title_section1 }</td>
                                            <td>{ post.desc_section1 }</td>
                                            <td>{ post.title_section2 }</td>
                                            <td>{ post.desc_section2 }</td>
                                            <td>{ post.title_section3 }</td>
                                            <td>{ post.desc_section3 }</td>
                                            
                                            <td className="text-center">
        	<Button as={Link} to={`/editvid4/edit/${post.id}`} variant="primary" size="sm" className="me-2">EDIT</Button>
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
            
            
           margin: 24rem;
           padding-top : 0rem;
        }
        .border-1 {
            margin-left: -9rem;
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