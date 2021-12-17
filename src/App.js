import './App.scss';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import {RecoilRoot} from 'recoil'
import BlobBackground from './svg/blob-scatter-haikei';

function App() {

  
  return (
    <>
    <RecoilRoot>
      <div className='position-absolute' style={{zIndex:'-1'}}>
        <BlobBackground/>
        </div>
        <div className='position-absolute w-100' id='waves' style={{zIndex:'-2'}}></div>
    <div className="d-flex flex-row justify-content-between">
      <UserList />
      <UserProfile/>
    </div>
    </RecoilRoot>
    </>
  );
}

export default App;
