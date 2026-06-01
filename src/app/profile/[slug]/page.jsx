'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";




function DynamicProfile(){
   const params = useParams()
   const [data, setData] = useState(null)


   useEffect(() => {
      const requestData = async() => {
         try {
            const response = await fetch('/api/people')
            const dataArray = await response.json()

            if (!response.ok) {
               console.error(response)
            } else {
               const matchedPerson = dataArray.people.find((person, index) => {
                  return index == params.slug
               })
               setData(matchedPerson)
            }

         } catch (error) {
            console.error('ERROR FROM CLIENT', error);
         }
      }
      requestData()
   }, [params.slug])


   return(
      <div className='min-w-screen min-h-screen flex justify-center items-center text-black bg-white dark:bg-black dark:text-white'>
         {data?.name}
      </div>
   )
}

export default DynamicProfile;