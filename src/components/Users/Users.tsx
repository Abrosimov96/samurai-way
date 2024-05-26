import s from './Users.module.css';
import {UserType} from '../../redux/users-reducer';
import userPhoto from '../../assets/images/avatar.jpg';
import {NavLink} from 'react-router-dom';
import {userAPI} from '../../api/api';

type UsersProps = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    followUnfollow: (userId: number) => void
    setProgressInFollowing: (isFollowing: boolean, id: number) => void
    followingInProgress: number[]
};
export const Users = ({users, totalUsersCount, pageSize, followUnfollow, onPageChanged, currentPage, setProgressInFollowing,followingInProgress}: UsersProps) => {
    const pagesCount = Math.round(totalUsersCount / pageSize)
    const pages = []
    const min = currentPage - 10 < 1 ? 1 : currentPage - 10
    const max = currentPage + 10 > pagesCount ? pagesCount : currentPage + 10
    for (let i = min; i <= max; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={s.pagination}>
                {
                    pages.map(page => <div
                        onClick={() => onPageChanged(page)}
                        className={currentPage === page ? s.selectedPage : ''}>
                        {page}
                    </div>)
                }
            </div>
            {
                users.map((user: UserType) => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img className={s.userPhoto}
                                     src={
                                         user.photos.small
                                             ? user.photos.small
                                             : userPhoto
                                     } alt={'avatar'}/>
                            </NavLink>
                        </div>
                        <div>
                            <button
                                disabled={followingInProgress.some((id: number) => id === user.id)}
                                onClick={async () => {
                                    setProgressInFollowing(true, user.id)
                                    if (!user.followed) {
                                        const {resultCode} = await userAPI.followUser(user.id)
                                        if (resultCode === 0) {
                                            followUnfollow(user.id)
                                        }
                                    } else {
                                        const {resultCode} = await userAPI.unfollowUser(user.id)
                                        if (resultCode === 0) {
                                            followUnfollow(user.id)
                                        }
                                    }
                                    setProgressInFollowing(false, user.id)
                                }}>
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