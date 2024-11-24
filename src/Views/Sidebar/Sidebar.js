import Apps from './Apps';
import Menu from './Menu';
import './Sidebar.scss';
import UserDetails from './UserDetails';
import UserProfile from './UserProfile';

const Sidebar = () => {
    return (
        <div className="side-bar">
            <div className='top-section'>
                <div className='main-title'>Trading</div>
                <Menu />
                <Apps/>
                <UserDetails/>
            </div>
            <div className='bottom-section'>
                <UserProfile/>
            </div>
        </div>
    )
}
export default Sidebar;