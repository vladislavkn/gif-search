import { API_URL } from "./index";

const mapRecords = (records: Array<any>): Array<Gif> =>
  records.map((record) => ({
    src: record.images.original.url,
    url: record.url,
    title: record.title,
    id: record.id,
  }));

const fetchGifs = (query: string, limit: number = 24): Promise<Array<Gif>> =>
  fetch(`${API_URL}&limit=${limit}&q=${query}`)
    .then((res) => res.json())
    .then((res) => mapRecords(res.data));

export default fetchGifs;
