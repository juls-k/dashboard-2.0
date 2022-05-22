import './App.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<div>gege</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
