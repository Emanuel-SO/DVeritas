import React from 'react'
import ImgUser from '../Components/Perfil/ImgUser/ImgUser'
import ButtonUserConfig from '../Components/Perfil/ButtonUserConfig/ButtonUserConfig'
import BannerPub from '../Components/Perfil/BannerPub/BannerPub'
import Feed from '../Components/Perfil/Publicaciones/Publicaciones'


function Perfil() {
    return (
      <div>
        <ImgUser />
        <ButtonUserConfig />
        <BannerPub />
        <Feed/>
      </div>
    )
  }

export default Perfil;