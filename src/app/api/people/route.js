import { fetchWordsRepo } from "@/Infrastructure/repos/fetchWordsRepo";
import { getWords } from "@/Application/use-cases/get-words";


export const dynamic = 'force-dynamic';


export const GET = async() => {
   try{

      const requestWordsData = await getWords(fetchWordsRepo)
      return new Response(JSON.stringify(requestWordsData))

   } catch(error){
      console.error('Fucking Error:', error)
   }
}