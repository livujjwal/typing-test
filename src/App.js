import './App.css';
import './Components/navbarStyle.css'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TimerDisplay from './Components/TimerDisplay';
import UserInput from './Components/UserInput';
import TimerSetting from './Components/TimerSetting';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <TimerDisplay/>
      <UserInput/>
      <TimerSetting/>
      <Footer/>
    </div>
  );
}

export default App;
