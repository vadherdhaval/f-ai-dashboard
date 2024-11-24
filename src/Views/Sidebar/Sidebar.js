import Apps from './Apps';
import Menu from './Menu';
import './Sidebar.scss';
import UserDetails from './UserDetails';

const Sidebar = () => {
    return (
        <div className="side-bar">
            <Menu />
            <Apps/>
            <UserDetails/>
        </div>
    )
}
export default Sidebar;