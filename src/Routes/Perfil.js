import React from 'react'
import ImgUser from '../Components/Perfil/ImgUser/ImgUser'
import ButtonUserConf from '../Components/Perfil/ButtonUserConfig/ButtonUserConfig'
import BannerPub from '../Components/Perfil/BannerPub/BannerPub'


function Perfil() {
    return (
      <div>
        <h1>Hola Perfil</h1>
        <ImgUser />
        <ButtonUserConf />
        <BannerPub />
      </div>
    )
  }

export default Perfil;