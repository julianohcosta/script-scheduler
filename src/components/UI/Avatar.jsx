import userLogo from '../../assets/userLogo.png'
import {useEffect, useState} from "react";
import './Avatar.css'

const Avatar = () => {

  const [user, setUser] = useState({
    username: 'Usuário',
    cargo: 'null'
  });

  useEffect(() => {

    fetch('https://localhost:8443/ctx/run/Agendador/user')
      .then(response => response.json())
      .then(user => {
        if (user.username) {
          setUser(user)
        }
      })
      .catch(e => {
        console.log(e)
      })

  }, [user]);

  return (
    <div className='profile'>
      <div className='avatar'>
        <div className='ellipse'/>
        <img src={userLogo} alt="profile"/>
      </div>
      <div className='name mb-1'>
        {user.username}
      </div>
      <div className='position'>
        {user.cargo}
      </div>
    </div>
  )
};

export default Avatar;