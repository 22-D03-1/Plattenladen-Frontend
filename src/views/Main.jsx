import Product from "../components/Product/Product"
import { useRecords } from "../context/ContextProvider"

export default function() {
    const {records} = useRecords()
    return (
        <>
            <h1>Vinyl für jedes Gefühl</h1>
            <section className="product-container">
            {records.map((r,i) => <Product key={i} record={r}/>)}
            </section>
        </>
    )
}
