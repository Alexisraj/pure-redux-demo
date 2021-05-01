import '../footer/footer.css'
import Typed from 'react-typed';
import { Facebook, Instagram, Twitter } from 'react-feather';


function Footer() {
    return ( <div className = 'footer' >
        <Typed backDelay = { 200 }
        strings = {
            ['We are welcoming you to', 'React Champianship Program'] }
        typeSpeed = { 200 }
        loop / >
            <br />
            Follow Us On: 
            <Facebook color="black" size={20} />            
            <Instagram color="black" size={20} />
            <Twitter color="black" size={20} />
        </div>
    );
}

export default Footer;