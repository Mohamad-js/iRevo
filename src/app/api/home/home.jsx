'use client'
import { Word } from "@/Domain/entities/word"
import { useState, useEffect } from "react"



const Home = () => {
   const [words, setWords] = useState(null)


   // useEffect(()=> {
   //    const requestWords = async() => {
   //       try{
   //          const response = await fetch('api/words')
   //          const data = await response.json()
   //          const dataArray = data.a1
      
   //          const { validWords, invalidWords } = Word.checkDataArray(dataArray)

            
   //          if (invalidWords.length > 0){
   //             console.error('Some words did NOT match the Word Class in the domain/entities/word.js');
   //             console.log('Invalid Words:', invalidWords);

   //          } else {
   //             setWords(validWords)
   //          }
            
   //       } catch (error){
   //          console.error('ERROR FROM CLIENT', error);
   //       }
   //    }
      
   //    requestWords()
      
   // }, [])

   

   function factorial(n) {
      if(n === 0){
         return 0;
         
      } else {
         return n + factorial(n - 2)
      }
   }

   console.log(factorial(8))







   return (
      <div className="w-full min-h-screen flex flex-wrap gap-5 justify-between items-center p-3">

      </div>
   );
}

export default Home;
