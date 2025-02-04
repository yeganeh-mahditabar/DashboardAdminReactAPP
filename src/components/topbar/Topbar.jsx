import './Topbar.css';
import { Notifications, Language, Settings } from '@mui/icons-material';


export default function Topbar() {
    
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>

            <div className='topLeft'>
                <span className='logo'>DashboardAdmin❤</span>
            </div>

            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <Notifications />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <Language />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <Settings />
                </div>
                <img src="images/profile.png" alt="#" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}
