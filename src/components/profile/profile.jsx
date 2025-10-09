import PropTypes from "prop-types";
import "./profile.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profileSquare">
      <div className="profileBoxes">
        <img src={avatar} alt={username} className="profileImage" />
        <h2>{username}</h2>
        <p>@{tag}</p>
        <p>{location}</p>

        <div className="profileBox">
          <div>
            <h2>Followers</h2>
            <p>{stats.followers}</p>
          </div>
          <div>
            <h2>Views</h2>
            <p>{stats.views}</p>
          </div>
          <div>
            <h2>Likes</h2>
            <p>{stats.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
