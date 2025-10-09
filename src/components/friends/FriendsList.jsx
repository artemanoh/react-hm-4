import FriendsData from "../../Friends.json";
import "./FriendsList.css";

const Friends = () => {
  return (
    <ul className="friend-list">
      {FriendsData.map((friend) => (
        <li className="item">
          <span className="status">
            {friend.isOnline ? "status online" : "status offline"}
          </span>
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Friends;
