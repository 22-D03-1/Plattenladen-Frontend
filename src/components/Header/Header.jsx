import { BiUser } from "react-icons/bi"
import { GrCart } from "react-icons/gr"

import { Link } from "react-router-dom"
import SearchField from "./Searchfield"

import "./Header.scss"

export default function() {
    return (
        <header>
            <div className="logo-container">
                <Link to="/">
                    <span>Groove City</span>
                </Link>
            </div>
            <div className="header-function-search">
                <SearchField />
            </div>
            <div className="header-function-container">
                <BiUser size={30} className="user-icon"/>
                <Link to="/cart">
                    <GrCart  size={27} className="cart-icon"/>
                </Link>
            </div>
        </header>
    )
}
