import nlwLogo from "../assets/logo.svg"
import {NavLink} from "../components/nav-link"

export function Header(){
    return(
        <div className="flex items-center gap-5 py-2">
            <img src={nlwLogo} />

            <nav className="flex items-center gap-5">
                <NavLink href="/eventos">Eventos</NavLink>
                <NavLink  href='/participantes'>Participantes</NavLink>
            </nav>
        </div>
    )
}