import {Link} from "react-router-dom";

export function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light p-4">
                <Link to="/GreenBank/" className="navbar-brand">
                    <h1 style={{color: "green"}}>Green Bank</h1>
                </Link>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/GreenBank/" className="nav-link">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/GreenBank/contexte" className="nav-link">Contexte</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}