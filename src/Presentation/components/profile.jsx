import Image from "next/image";
import { LiaUserSolid } from "react-icons/lia";




const Profile = ({name, photo, side}) => {



   return(
      <div className={`${side ? 'hover:bg-green-500' : 'hover:bg-red-500'} group min-w-50 pl-2 flex gap-2 items-center overflow-hidden bg-gray-100 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-2xl hover:scale-105 transition-all cursor-pointer active:scale-100 flex-1`}>
         <div className="size-12 overflow-hidden relative flex justify-center items-center">
            {
               photo ?
                  <Image className="object-cover"
                     src = {photo}
                     alt = {name}
                     fill
                     loading="eager"
                     sizes={100}
                  />
               :
               <LiaUserSolid size={40} />
            }
         </div>
         <div className={`${side ? 'group-hover:text-white dark:text-white' : 'group-hover:text-white dark:text-white'} text-lg whitespace-nowrap`}>{name}</div>
      </div>
   )
}

export default Profile;