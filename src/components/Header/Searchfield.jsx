import { useState } from "react"

import { useRecords } from "../../context/ContextProvider"
import { getProducts } from "../../api"

import { GoSearch } from "react-icons/go"

export default function() {
    // controlled Form
    const [searchValue, setSearchValue] = useState("")
    // value des inputs ist state variable
    // form hat onChange Funktion
    const changeHandler = (e) => {
        setSearchValue(e.target.value)
    }

    const {putRecords} = useRecords()

    const handleSearch = async () => {
        putRecords(await getProducts(searchValue))
    }

    return (
        <div className="search-field">
            <input 
                onChange={changeHandler}
                value={searchValue} 
                type="text" 
                placeholder="Suche"
            >
            </input>
            <GoSearch onClick={handleSearch} className="search-icon"/>
        </div>
    )
}