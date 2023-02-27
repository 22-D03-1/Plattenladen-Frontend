const baseUrl = "/api";

const products = [
    {
        id: "esfse234056520w3wsdmdobht",
        title: "Where the Light is",
        artist: "John Mayer",
        year: 2008,
        picture: "https://m.media-amazon.com/images/I/81lfMW3-N0L._SL1500_.jpg",
        price: 22.95,
    },
    {
        id: "esfse234056520w3wsdmdobhf",
        title: "Haus am See",
        artist: "Peter Fox",
        year: 2008,
        picture: "https://www.musik-sammler.de/cover/372000/349757_300.jpg",
        price: 17.99,
    }
]

export const getProducts = async (searchTerm = null) => {
    try {
        let urlGetAll = `${baseUrl}/products`
        if(searchTerm) urlGetAll += `?search=${searchTerm}`

        const response = await fetch(urlGetAll);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return products;
    }
}

export const addProduct = async (product) => {
    console.log(product)
    try {
        const response = await fetch(`${baseUrl}/products`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(product),
        });
        if (response.status !== 201) throw new Error(response);
        return true;
    } catch (error) {
        console.error(error);
        products.push(product)
        return true;
    }
}

export const updateProduct = async (product) => {
    try {
        const response = await fetch(`${baseUrl}/products/${product.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(product),
        });
        if (response.status !== 204) throw new Error(response);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const login = async (credentials) => {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(credentials)
        })
        if (response.status !== 200) throw new Error("Login nicht erfolgreicj")

        const data = await response.json()
        return data
    }
    catch (error) {
        console.log(error)
        return false
    }
}
