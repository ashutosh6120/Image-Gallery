const btn = document.querySelector('button');
const img = document.querySelector('.image');
btn.addEventListener('onclick', getRandomImage());

const apikey = process.env.API_KEY;

async function getRandomImage(){
    const res = await fetch(`https://api.unsplash.com/photos/random?client_id=${apikey}`);
    const data = await res.json();
    const imageUrl = data.urls.regular;

    img.src = imageUrl;
}
