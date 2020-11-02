const API_URL: string =
  "https://api.giphy.com/v1/gifs/search?api_key=GJ5mCO3aNOJ5YCCNlCGNFrYD9uvwxVRt&limit=25&offset=0&rating=g&lang=en";

const mapRecords = (records: Array<any>): Array<Gif> =>
  records.map((record) => ({
    src: record.images.original_still.url,
    title: record.title,
    id: record.id,
  }));

const fetchGifs = (query: string, limit: number = 24) =>
  fetch(`${API_URL}&limit=${limit}&q=${query}`)
    .then((res) => res.json())
    .then((res) => mapRecords(res.data));

export default fetchGifs;
