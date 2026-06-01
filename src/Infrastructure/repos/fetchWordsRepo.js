import { fetchFromServer } from "../http/fecth-data";
import { readJsonFile } from "../fileSystem/read-json";

export const fetchWordsRepo = {
   async getAllWords() {
   
      // return fetchFromServer('http://localhost:3001', '/words')

      return readJsonFile("data.json")
   },
}