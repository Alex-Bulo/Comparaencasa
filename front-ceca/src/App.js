import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormContainer from './components/FormContainer/FormContainer';
import Header from './components/Header/Header';
import LogInContainer from './components/LogInContainer/LogInContainer';
import Profile from './components/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route exact path='/' element={<FormContainer />}/>      
        
        <Route path='/login' element={<LogInContainer />}/>      
        
        <Route path='/profile/:id' element={<ProtectedRoute component={Profile} />}/>

        <Route path='/404' element={<h4> Ups... something went wrong :(</h4>}/>

      </Routes>
    </div>
  );
}

export default App;
