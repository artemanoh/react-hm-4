import './App.css';
import Statistics from './components/statistic/statistic';
import data from './data.json';
import Friends from './components/friends/FriendsList'
import Profile from './components/profile/profile'
import user from './user.json';
import Transactions from './components/transactions/transactions';
import transactions from './transactions.json';

function App() {
  return (
    <div className="App">
      <Statistics stats={data}/>
      <Friends/>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Transactions items={transactions}/>
    </div>
  );
}

export default App;
