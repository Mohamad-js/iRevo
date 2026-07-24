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
      <div className='fixed min-w-screen h-screen p-5 gap-5 flex justify-start items-start flex-col'>
         <div className="text-4xl">{data?.name}</div>

         <div className="w-full min-h-0 flex-1 border rounded-2xl overflow-auto">
            <div className="w-full flex flex-col gap-5 p-4">
               <div className="text-2xl border-0 border-b pb-2">جناح ها</div>
               {
                  data?.parties.map((party, index) => (
                     <div key={index} className="">
                        <div className="">{party.from} تا {party.to}</div>
                        <div className="">{party.title}</div>
                     </div>
                  ))
               }
            </div>

            <div className="w-full flex flex-col gap-5 p-4">
                  <div className="text-2xl border-0 border-b pb-2">سمت ها</div>
               {
                  data?.positions.map((party, index) => (
                     <div key={index} className="">
                        <div className="">{party.from} تا {party.to}</div>
                        <div className="">{party.title}</div>
                     </div>
                  ))
               }
            </div>

         </div>

      </div>
   )
}

export default DynamicProfile;