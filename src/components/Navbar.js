import TextField from "@mui/material/TextField";
import MicNoneIcon from '@mui/icons-material/MicNone';
import userS from '../assets/userS.png';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      
         <div className="searchbar">
          <TextField  variant="standard"   InputProps={{ disableUnderline: true }} />
         <i><MicNoneIcon/></i>  
         </div>

         <div className="navbar-right">
            <ul>
               <li className="videocam">
                 <a><VideocamOutlinedIcon/></a>
               </li>
               <li>
                 <a><NotificationsNoneOutlinedIcon/></a>
               </li>
               <li>
               <a>
                  <img src={userS}/>
               </a> 
              </li> 
            </ul>
            <img></img>
         </div>

    </div>
  )
}


