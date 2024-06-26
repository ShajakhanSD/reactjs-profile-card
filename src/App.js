import './App.css';
import {UserCard} from "./components/UserCard";

function App() {
  return (
    <div className="App">
      <h1>Profile Card</h1>
      <div className='userCard'>
      <UserCard />
      </div>
    </div>
  );
}

export default App;
