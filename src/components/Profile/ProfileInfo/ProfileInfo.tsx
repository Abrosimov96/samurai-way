import React from 'react'
import s from './ProfileInfo.module.css'
import {UserProfile} from '../../../redux/store';
import {Loader} from '../../common/Loader/Loader';

type ProfileInfoPropsType = {
    userProfile: UserProfile
}
export const ProfileInfo = ({userProfile}: ProfileInfoPropsType) => {
    console.log(userProfile)
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
            <img src={photos.large} alt='large' />
        </div>
        <div className={s.descriptionBlock}>
            <img src={photos.small} alt='ava'/>
            <p>{aboutMe}</p>
            <input type={'checkbox'} checked={lookingForAJob}/>
        </div>
    </div>)

}