import { Link } from 'react-router-dom';

export default function Header() {

    return (
      <div>
        <header className="headerContainer">
            <Link className='logo' to='/'>Jon<br/> Famurewa</Link>
            <div className='nav'>
            <Link to='/'>landscape</Link>
            <Link to='/'>portraits</Link>
            <Link to='/'>sports</Link>
            <Link to='/contact'>contact</Link>
            </div>
          </header>
        </div>
    )
  
  }

