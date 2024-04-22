export const getGifs = async (category) => {
    const baseUrl = 'https://api.giphy.com/v1/gifs';
    const apiKey = 'u8Lvy8jBKm5f9bE4OxNG7gLsbA75M9AV';

    const response = await fetch(`${baseUrl}/search?api_key=${apiKey}&q=${category}&limit=10`);
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gifs)
    return gifs;
}