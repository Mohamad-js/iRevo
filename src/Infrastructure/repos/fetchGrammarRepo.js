import { fetchFromServer } from "../http/fecth-data";


export const fetchGrammarRepo = {
   async getAllGrammar() {
      return fetchFromServer('http://localhost:3001', '/grammar')
   }
}