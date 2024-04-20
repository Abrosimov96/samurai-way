import {Component} from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.jpg';
import axios from 'axios';
import {UserType} from '../../redux/users-reducer';
import {UsersPropsType} from './UsersContainer';


export class User extends Component<UsersPropsType, any> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const pagesCount = Math.round(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            if (i > 20) break
            pages.push(i)
        }
        return <div>
            <div className={s.pagination}>
                {
                    pages.map(page => <div
                        onClick={()=> this.onPageChanged(page)}
                        className={this.props.currentPage === page ? s.selectedPage : ''}>
                        {page}
                    </div>)
                }
            </div>
            {
                this.props.users.map((user: UserType) => <div key={user.id}>
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
                                onClick={() => this.props.followUnfollow(user.id)}>
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
    }
}
