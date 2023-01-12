import './App.css'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import VideoPage from './pages/VideoPage';
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    // <div>
    //   <SignIn/>
    // </div>
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/video/:videoId" element={<VideoPage/>}/>
        <Route path="/log-sign" element={<SignIn/>}/>
    </Routes>
  </Router>
  );
}

export default App;
