import React , {useState} from 'react';
import {Box, Button} from '@mui/material';

import Excersies from '../components/Exercises'
import SearchExercises from  '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';


const Home = () => {
  const[exercises,setExercises]=useState([]);
  const[bodyPart,setBoadyPart]=useState('all');

  

  
  return (

   
   <Box>
    <HeroBanner/>
    <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBoadyPart={setBoadyPart}/>
    <Excersies setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />

   
   </Box>
  )
}

export default Home
