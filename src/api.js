const baseUrl = "/api";

export const getProducts = async () => {
    try {
        const response = await fetch(`${baseUrl}/products`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [
            {
                id: "esfse234056520w3wsdmdobht",
                title: "Where the Light is",
                artist: "John Mayer",
                year: 2008,
                picture: "https://m.media-amazon.com/images/I/81lfMW3-N0L._SL1500_.jpg",
                price: 17.99,
            },
            {
                id: "esfse234056520w3wsdmdobhf",
                title: "Haus am See",
                artist: "Peter Fox",
                year: 2008,
                picture: "https://www.musik-sammler.de/cover/372000/349757_300.jpg",
                price: 17.99,
            }
        ];
    }
}
