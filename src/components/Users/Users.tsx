import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/avatar.jpg'

export const Users = ({users, setUsers, followUnfollow}: UsersPropsType) => {

    const getUser = () => {
        if (!users.length) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => setUsers(response.data.items)
                )
        }
    }
    return (
        <div>
            <button onClick={getUser}>Get Users</button>
            {
                users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto}
                                 src={
                                     user.photos.small
                                         ? user.photos.small
                                         : userPhoto
                                 } alt={'avatar'}/>
                        </div>
                        <div>
                            <button
                                onClick={() => followUnfollow(user.id)}>
                                {user.followed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};