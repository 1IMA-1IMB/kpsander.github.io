console.log('Pisspreik')

async function logMovies() {
    const response = await fetch("http://localhost:3000/getallstudents");
    const movies = await response.json();
    console.log(movies);
}