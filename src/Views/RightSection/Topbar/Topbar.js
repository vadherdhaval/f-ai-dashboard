import { useSelector } from 'react-redux';
import ActionButtons from './actionButtons';
import './Topbar.scss';
const Topbar = (props) => {
    const {userName} = useSelector((state) => ({
        userName: state.USER.name
    }))
    return(
        <div className="top-bar">
            <h1>Welcome back, {userName}</h1>
            <ActionButtons/>
        </div>
    )
}
export default Topbar;