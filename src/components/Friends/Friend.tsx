import s from './Friend.module.css'

type Props = {
    name: string
};

export const Friend = (props: Props) => {
    return <div className={s.friend}>
        <div className={s.avatar}></div>
        <p>{props.name}</p>
    </div>
}