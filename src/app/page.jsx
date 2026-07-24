'use client'
import Profile from "@/Presentation/components/profile";
import ThemeToggle from "@/Presentation/components/theme-siwtch";
import Link from "next/link";
import { useState, useEffect } from "react"

const Home = () => {
   const [data, setData] = useState(null)
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true)
      const requestData = async() => {
         try {
            const response = await fetch('api/people')
            const dataArray = await response.json()
            if (!response.ok) {
               console.error(response)
            } else {
               setData(dataArray.people)
            }
         } catch (error) {
            console.error('ERROR FROM CLIENT', error);
         }
      }
      requestData()
   }, [])

   if (!mounted) return null;

   return (
      <div className="w-full min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col gap-3 justify-start items-center p-3">

         <div className="w-full h-15 bg-gray-100 dark:bg-zinc-700 rounded-2xl flex justify-between items-center p-2 pr-4">
            <div className="text-black dark:text-white text-xl font-bold">نفوذ شناسی</div>
            <ThemeToggle />
         </div>

         <div className="w-full h-full border border-gray-200 dark:border-zinc-800 rounded-2xl p-2 gap-4">
               {
                  data?.map((prof, index) => (
                     <Link href={`/profile/${index}`} key={index}>
                        <Profile
                           data={prof}
                        />
                     </Link>
                  ))
               }
         </div>
      </div>
   );
}

export default Home;