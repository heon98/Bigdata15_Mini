const API_KEY = "&key=AIzaSyBeymQmQdVEAPAciY51spK3v0kvJM-Um4o";

const baseUrl =
    "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=6&regionCode=KR";

const requests = {
    BasicTrending: `${baseUrl}${API_KEY}`,
    FilmTrending: `${baseUrl}&videoCategoryId=1${API_KEY}`,
    AutosTrending: `${baseUrl}&videoCategoryId=2${API_KEY}`,
    MusicTrending: `${baseUrl}&videoCategoryId=10${API_KEY}`,
    PetTrending: `${baseUrl}&videoCategoryId=15${API_KEY}`,
    TravelTrending: `${baseUrl}&videoCategoryId=19${API_KEY}`,
    GamingTrending: `${baseUrl}&videoCategoryId=20${API_KEY}`,
};
export default requests;
