import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'

export const Users = ({users, setUsers, followUnfollow}: UsersPropsType) => {
    if (!users.length) setUsers([
        {
            id: 1,
            photoUrl: 'https://img.freepik.com/free-vector/woman-with-red-hair_25030-68390.jpg',
            fullName: 'Anton',
            followed: true,
            status: 'I am a boss',
            location: {city: 'Burgas', country: 'Bulgaria'}
        },
        {
            id: 2,
            photoUrl: 'https://img.freepik.com/free-vector/woman-with-red-hair_25030-68390.jpg',
            fullName: 'Dima',
            followed: false,
            status: 'I am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://img.freepik.com/free-vector/woman-with-red-hair_25030-68390.jpg',
            fullName: 'Sasha',
            followed: false,
            status: 'I am a boss. HI!',
            location: {city: 'Minsk', country: 'Belarus'}
        },
    ])
    return (
        <div>
            {
                users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto}
                                 src={user.photoUrl} alt={'avatar'}/>
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
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};