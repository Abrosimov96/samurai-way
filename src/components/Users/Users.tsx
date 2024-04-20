import {Component} from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.jpg';
import axios from 'axios';
import {UserType} from '../../redux/users-reducer';


export class User extends Component<any, any> {


    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return <div>
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
