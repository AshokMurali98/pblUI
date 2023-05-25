import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import LoginPage from './loginPage';
import SignupPage from './signUp';
import LandingPage from './landingComponent';
import LoginPageTest from './testLogin';



function App() {
  // return (
    
  //    <div>
      
  //     {/* <LandingPage /> */}
  //         <LoginPage />
  //          {/* <SignupPage /> */}
  //          {/* <LoginPageTest /> */}
  //    </div>

  // ); 

return(
<Router>
    <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
    </Routes>
</Router>
)

}

export default App;
