import suvaye_logo from "../assets/suvaye_logo.jpg"
import SearchBar from './SearchBar';
import {memo} from "react"
const Header = () => {
    return (
        <header className="container header mt-3">
            <div className="d-flex align-items-center  ">
                <img src={suvaye_logo} className="logo" height={54} alt="" />
                <h3 className="ms-3 logo_text ">Suvaye Dictionary</h3>
            </div>
            <SearchBar />
        </header>
    )
}

export default memo(Header)