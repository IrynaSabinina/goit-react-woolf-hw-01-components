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
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
)

}
