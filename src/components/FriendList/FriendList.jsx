import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from "./FriendList.module.css"

const FriendList=({friends})=>{
return(
    <ul className={css.friendList}>
 {friends.map(friend =>(
     <FriendListItem
     key = {friend.id}
     id={friend.id}
     avatar={friend.avatar}
     name={friend.name}
     isOnline={friend.isOnline}
     ></FriendListItem>
 )
    
 )}
</ul>
)
}

FriendList.propTypes ={
    friends: PropTypes.array.isRequired
}
export default FriendList;
