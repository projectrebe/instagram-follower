import './App.css';
import InstagramFollower from './component/InstagramFollower/InstagramFollower.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/InstagramFollower/Navbar';
import User from './component/User/User.js'
function App() {
  return (
    // <InstagramFollower />


    <Router>
      <Navbar />


      <Routes>


        <Route exact path='/' element={<InstagramFollower />} />
        <Route exact path='/user' element={<User />} />



        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>


      {/* <Footer /> */}
    </Router>
  );
}

export default App;
