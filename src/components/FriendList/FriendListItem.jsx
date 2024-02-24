import PropTypes from 'prop-types';
import css from "./FriendList.module.css"

const FriendListItem=({avatar,name,isOnline, id})=>{
  const status = isOnline? css.online: css.offline
    
return(
<li className={css.item} key={id}>
    <span className={status} ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</li>
    )
}
FriendListItem.propTypes ={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id:PropTypes.number.isRequired,
}
export default FriendListItem;