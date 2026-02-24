import "./styles.css"
import Walker from "../../assets/Pjo Cast.jpeg"

export default function Header() {
    return (
        <header>
            <img src={Walker} alt="" />
            <nav>
                <a href="">Cast PJO</a>
                <a href="">Books</a>
                <a href="">Clothes</a>
                <a href="">To Attend</a>
            </nav>
            <div className="button-wrapper">
                <button>sign in</button>
                <button>sing up</button>
            </div>
        </header>
    )
}
