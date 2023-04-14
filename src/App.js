
import Header from "./Components/Header";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Show from "./Components/Show";
import Klik from "./Components/Klik";
import Mat from "./Components/Mat";
import Mat1 from "./Components/Mat1";
import Mat2 from "./Components/Mat2";
import Mat3 from "./Components/Mat3";
import Mat4 from "./Components/Mat4";
import Dhasboard from "./Components/Dhasboard";
import Dhasboard1 from "./Components/Dhasboard1";
import Edit from "./Components/Edit";
import Edit1 from "./Components/Edit1";
import Dhasboard2 from "./Components/Dhasboard2";
import Edit2 from "./Components/Edit2";
import Dhasboard3 from "./Components/Dhasboard3";
import Edit3 from "./Components/Edit3";

import Video1 from "./Components/Video1";
import Editvid1  from "./Components/Editvid1";

import Video2 from "./Components/Video2";
import Editvid2  from "./Components/Editvid2";

import Video3 from "./Components/Video3";
import Editvid3  from "./Components/Editvid3";

import Video4 from "./Components/Video4";
import Editvid4  from "./Components/Editvid4";

import Video5 from "./Components/Video5";
import Editvid5  from "./Components/Editvid5";

import Register  from "./Components/Register";
import Login  from "./Components/Login";

import Merchan from "./Components/Merchan";
import styled from 'styled-components';
import {Switch, Route, Routes} from 'react-router-dom';



function App() {
  return (

   
<Routes>
    <Route path='/' element={<Header/>}/>
    <Route path='/matgeci' element={<Page1/>}/>
    <Route path='/about' element={<Page2/>}/>
    <Route path='/letsget' element={<Page3/>}/>
    <Route path='/show' element={<Show/>}/>
    <Route path='/work' element={<Klik/>}/>
    <Route path='/video' element={<Mat/>}/>
    <Route path='/1' element={<Mat1/>}/>
    <Route path='/2' element={<Mat2/>}/>
    <Route path='/3' element={<Mat3/>}/>
    <Route path='/4' element={<Mat4/>}/>
    <Route path='/merchan' element={<Merchan/>}/>
    <Route path='/dhasboard' element={<Dhasboard/>}/>
    <Route path='/edit/edit/:id' element={<Edit/>}/>
    <Route path='/dhasboard1' element={<Dhasboard1/>}/>
    <Route path='/edit1/edit/:id' element={<Edit1/>}/>
    <Route path='/dhasboard2' element={<Dhasboard2/>}/>
    <Route path='/edit2/edit/:id' element={<Edit2/>}/>
    <Route path='/dhasboard3' element={<Dhasboard3/>}/>
    <Route path='/edit3/edit/:id' element={<Edit3/>}/>

    <Route path='/video1' element={<Video1/>}/>
    <Route path='/editvid1/edit/:id' element={<Editvid1/>}/>

    <Route path='/video2' element={<Video2/>}/>
    <Route path='/editvid2/edit/:id' element={<Editvid2/>}/>

    <Route path='/video3' element={<Video3/>}/>
    <Route path='/editvid3/edit/:id' element={<Editvid3/>}/>

    <Route path='/video4' element={<Video4/>}/>
    <Route path='/editvid4/edit/:id' element={<Editvid4/>}/>

    <Route path='/video5' element={<Video5/>}/>
    <Route path='/editvid5/edit/:id' element={<Editvid5/>}/>

    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>

</Routes>
     
  );
}

const MainStyled = styled.main`


`;

export default App;
