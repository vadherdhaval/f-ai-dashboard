import { useSelector } from "react-redux"

const UserDetails = () => {
    const {account,status,program} = useSelector((state) => ({
        account: state.USER.account,
        status: state.USER.status,
        program: state.USER.program
    }))

    return(
        <div className="user-account-wrapper">
            <div className="item">
                <label>Account</label>
                <span>{account}</span>
            </div>
            <div className="item">
                <label>Status</label>
                <span>{status}</span>
            </div>
            <div className="item">
                <label>Program</label>
                <span>{program}</span>
            </div>
        </div>
    )

}
export default UserDetails;