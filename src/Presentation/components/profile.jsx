import Image from "next/image";
import { LiaUserSolid } from "react-icons/lia";




const Profile = ({data}) => {

   console.log('DATA:', data.parties);

   return(
      <div className={`${data.side ? 'hover:border-green-500' : 'hover:border-red-500'} group w-full h-fit p-2 flex gap-4 items-end overflow-hidden bg-gray-100 dark:bg-white/10 border-2 border-black/10 dark:border-white/20 rounded-2xl mb-2 transition-all cursor-pointer active:bg-background`}>

         <div className="w-full h-full flex flex-col items-start gap-2">
            <div className="w-fit flex gap-2 items-center">
               <div className="size-12 overflow-hidden relative flex justify-center items-center rounded-[50%]">
                  {
                     data.imgURL ?
                        <Image className="object-cover"
                           src = {data.imgURL}
                           alt = {data.name}
                           fill
                           loading="eager"
                           sizes={100}
                        />
                     :
                     <LiaUserSolid size={40} />
                  }
               </div>
               <div className='text-lg font-bold whitespace-nowrap'>{data.name}</div>
            </div>
            <div className="w-fit h-full flex flex-col">
               <div className="flex gap-2 text-sm">
                  <div className="">تاریخ تولد:</div>
                  <div className="">{data.birth}</div>
               </div>
               <div className="flex gap-2 text-sm">
                  <div className="">تاریخ وفات:</div>
                  <div className="">{data.death}</div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default Profile;