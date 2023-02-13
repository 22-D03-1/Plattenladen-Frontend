import Product from "../components/Product/Product"

export default function({records}) {
    return (
        <>
            <h1>Vinyl für jedes Gefühl</h1>
            <section className="product-container">
            {records.map((r,i) => <Product key={i} record={r}/>)}
            </section>
        </>
    )
}
