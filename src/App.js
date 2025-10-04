import './App.css';
import Statistics from './components/statistic';
import data from './data.json';
import Friends from './friends/FriendsList'


function App() {
  return (
    <div className="App">
      <Statistics stats={data}/>
      <Friends/>
    </div>
  );
}

export default App;
