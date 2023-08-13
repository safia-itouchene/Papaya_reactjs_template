import '../styles/Sidebar.css'
import {Link} from 'react-router-dom';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { useLocation } from "react-router-dom";
import {useState} from 'react';

export default function Sidebar() {

const location = useLocation();
const { pathname } = location;
const splitLocation = pathname.split("/");


const [isActive, setIsActive] = useState(true);


  const displaySidebar = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

return (
<div class="sidebar-wrapper">
  <aside className= {isActive? 'sidebar' : 'sidebar sidebarmin'}>
        <header>
           <ul>
              <li className='logo'>
              <Link to="/">
                  <i><FormatListBulletedIcon/></i>
                 <button onClick={displaySidebar}><FormatListBulletedIcon/></button>
                         <span>Papaya</span>
                </Link>
              </li>
           </ul>
        </header>
        <nav>
          <div className='menu'>
              <ul className='items'>
                 <li className={splitLocation[1] === "" ? "active" : ""}>
                  <Link to="/">
                    <i><HomeOutlinedIcon /></i> 
                    <span>Home</span>
                  </Link>
                  </li>
                 <li>
                  <Link to="/">
                   <i><SlideshowOutlinedIcon/></i>
                   <span>Shorts</span>
                  </Link>
                  </li>
                 <li>
                 <Link to="/">
                  <i> <SubscriptionsOutlinedIcon/></i>
                   <span>Subscriptions</span>
                   </Link>
                   </li>
                <li>
                <Link to="/">
                 <i><MusicVideoOutlinedIcon/></i> 
                  <span>Papaya Music</span>
                </Link>
                  </li>
              </ul>
              <h3>MY CHANNEL</h3>
              <ul className='items'>
                 <li>
                 <Link to="/">
                  <i> <VideoLibraryOutlinedIcon/></i>
                  <span>Library</span>
                 </Link>
                  </li>
                 <li>
                 <Link to="/">
                  <i> <RestoreOutlinedIcon/></i>
                  <span>History</span>
                 </Link>
                  </li>
                 <li>
                 <Link to="/">
                  <i><PlayCircleOutlinedIcon/></i>
                  <span>Your Videos</span>
                  </Link>
                  </li>
                 <li>
                 <Link to="/">
                  <i><AccessTimeOutlinedIcon/></i>
                  <span>Watch Later</span>
                  </Link>
                  </li>
                 <li>
                 <Link to="/">
                 <i><FileDownloadOutlinedIcon/></i>
                  <span>Downloads</span>
                  </Link>
                  </li>
               </ul>
               <h3>SUBSCRIPTIONS</h3>
                <ul>
                  <li>user</li>
               </ul>
         </div>
        </nav>
  </aside>
 </div>
  )
}

