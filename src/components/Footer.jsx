import {} from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6"; 
import { FaLinkedin } from "react-icons/fa6"; 
import { FaVoicemail } from "react-icons/fa6";
import '../routes/style.css';

function Ropade (){
  return(
    <section >
    <FaFacebook />
    <FaInstagram />
    <FaLinkedin/>
    <FaVoicemail/>
    <h3 className='fotter-letra'>@2023 - Todos os direitos reservados - Code Crafter</h3>
    </section>
  )
}
export default Ropade