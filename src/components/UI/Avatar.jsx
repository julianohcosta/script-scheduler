import profile1 from '../../assets/profile1.jpeg'
import './Avatar.css'

const Avatar = () => {
    return (
        <div className='profile'>
            <div className='avatar'>
                <div className='ellipse'/>
                <img src={profile1} alt="profile"/>
            </div>
            <p className='name'>
                Juliano Costa
            </p>
            <p className='position'>
                Auditor-Fiscal
            </p>
        </div>
    )
};

export default Avatar;