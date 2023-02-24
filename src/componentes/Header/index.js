import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return (
        <div>
            <header>
                <Link className='logo' to={"/"}>BarbosaFlix</Link>
                <Link className='favoritos' to={"/favoritos"}>Meus Filmes</Link>
            </header>
        </div>
    )
}

export default Header;