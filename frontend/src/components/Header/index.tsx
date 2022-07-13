import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.linkedin.com/in/ricardo-farias-de-souza-2501614a/" target={'_blank'}> Ricardo Farias de Souza</a>
                </p>
            </div>
        </header>



    )
}

export default Header;