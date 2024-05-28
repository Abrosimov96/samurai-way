import React from 'react'
import s from './ProfileInfo.module.css'
import {UserProfile} from '../../../redux/store';
import {Loader} from '../../common/Loader/Loader';

type ProfileInfoPropsType = {
    userProfile: UserProfile | null
}
export const ProfileInfo = ({userProfile}: ProfileInfoPropsType) => {
    if (!userProfile) return <Loader/>
    const {
        photos,
        aboutMe,
        fullName,
        lookingForAJobDescription,
        userId,
        lookingForAJob,
        contacts
    } = userProfile
    return (
        <div>
            <div>
                <img src={photos.large} alt={userId.toString()}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={photos.small} alt="ava"/>
                <p>{fullName}</p>
                <p>{aboutMe}</p>
                <input type={'checkbox'} checked={lookingForAJob}/>
                <p>{lookingForAJobDescription}</p>
                {JSON.stringify(contacts)}
            </div>
        </div>)

}