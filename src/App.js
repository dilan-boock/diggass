import './App.css';
import Profile from './profile';
import Tabe from './tabe';

function App() {
  return (
    <div className="App">
      <div className='box'>
        <div className='box_left'>
          <Profile/>
          <Tabe/>
        </div>
      </div>
    </div>
  );
}

export default App;
