import { useSelector } from "react-redux";

const UserProfile = () => {
    const {name,email} = useSelector((state) => ({
        name: state.USER.name,
        email: state.USER.email,
    }))
    return(
        <div className="user-profile">
            <img src="img/profilepic.png"/>
            <div className="name-email">
                <span>{name}</span>
                <span className="email">{email}</span>
            </div>
        </div>
    )
}
export default UserProfile;