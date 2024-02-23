import PropTypes from 'prop-types';
import css from "./Profile.module.css";

export const Profile = ({username,tag,location,avatar,stats}) => {
return (
    <div className={css.profile}>
  <div className={css.description}>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p class={css.tag}>{tag}</p>
    <p class={css.location}>{location}</p>

  </div>
  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quant}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quant}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quant}>{stats.likes}</span>
    </li>
  </ul>
</div>
)

}
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };
  
  export default Profile;
