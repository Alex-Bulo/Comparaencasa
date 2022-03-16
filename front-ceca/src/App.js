import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormContainer from './components/FormContainer/FormContainer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route exact path='/' element={<FormContainer />}/>      
      </Routes>
    </div>
  );
}

export default App;
