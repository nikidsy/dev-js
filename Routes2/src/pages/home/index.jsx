import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <h1>Pagina Home</h1>
            <Link to="/contato">
                Pagina de contato
            </Link>
        </>
    )
}