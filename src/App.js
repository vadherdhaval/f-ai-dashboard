
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Views/Sidebar/Sidebar';
import RightSection from './Views/RightSection/RightSection';
import { ThemeUpdater } from './themeupdater';

function App() {
  return (
    <div className='root'>
      <BrowserRouter>
        <ThemeUpdater/>
        <div className="main-wrapper">
          <Sidebar/>
          <RightSection/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
