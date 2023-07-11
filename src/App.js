 
// import React from 'react';
// // import { Route, Routes } from 'react-router-dom';
// // import { Box } from '@mui/material';

// import './App.css';
// import ExerciseDetail from './pages/ExerciseDetail';
// import Home from './pages/Home';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// const App = () => (
//   // <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
//   //   <Navbar />
//   //   <Routes>
//   //     <Route path="/" element={<Home />} />
//   //     <Route path="/exercise/:id" element={<ExerciseDetail />} />
//   //   </Routes>
//   //   <Footer />
//   // </Box>

//   return(
//     <div>
//       App
//     </div>
//   )
// );

// export default App;

// import { Audio } from 'react-loader-spinner';
// import React from 'react';
// import { Route,Routes } from 'react-router-dom';

// const App = () => {
//   return (
//     <div></div>
//   )
// }

// export default App
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
 
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;