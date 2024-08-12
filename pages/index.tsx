import Image from "next/image";



import { BsBookmark, BsTwitter } from "react-icons/bs";
import React, { useCallback } from "react";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { list } from "postcss";
import { RiNotification2Line } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import FeedCard from "./components";
import { CiCircleMore } from "react-icons/ci";
import { FaMoneyBillAlt } from "react-icons/fa";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { log } from "console";





interface twitterSidebarButtons{
  title:string;
  icon:React.ReactNode;
}
const sidebarMenuItems:twitterSidebarButtons[] = [
  { title:"Home",
   icon:<GoHome/>},

   {
    title:"Explore",
    icon:<FiSearch/>
   },
   {
    title:"Notifications",
    icon:<RiNotification2Line />
   },
   {
    title:"Messages",
    icon:<MdMailOutline />
   },
   
   {
    title:"Twitter Blue",
    icon:<FaMoneyBillAlt />
   },
   {
    title:"Bookmarks",
    icon:<BsBookmark />
   },
   {
    title:"Profile",
    icon:<LuUser2 />
   },
   {
    title:"More",
    icon:<CiCircleMore />
   }
];



export default function Home() {

  const handleLogininWithGoogle = useCallback(async(cred: CredentialResponse)=>{
    const googleToken = cred.credential
    if(!googleToken) return toast.error('Google Token not found')
    const verifyGoogleToken= await graphqlClient.request(verifyUserGoogleTokenQuery,{token:googleToken})

    toast.success('verify success')
    console.log(verifyGoogleToken);

    if(verifyGoogleToken) {window.localStorage.setItem("__twitter__token", JSON.stringify(verifyGoogleToken))};
    
   },[]);
  return (
    <div  >
          <div className="grid grid-cols-12 h-screen w-screen px-56  " >
            <div className=" pl-35 col-span-3  pt-0 px-2 ml-14 ">
               <div className="text-2xl p-4 hover:bg-gray-800 h-fit w-fit rounded-full cursor-pointer transition-all">
                   <BsTwitter />
                 </div>
                   <div className="mt-1 text-xl font-semibold pr-2 ">
                    <ul>
                      {sidebarMenuItems.map(item => <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-2 py-2 w-fit cursor-pointer"  key={item.title}><span className="text-2xl">{item.icon}</span><span className="text-lg">{item.title}</span></li>)}
                    </ul>
                    <div className="mt-5 px-3">
                    <button className="bg-[#1a8cd8] text-lg p-3 rounded-full w-full font-semibold  ">Tweet</button>
                    </div>
                    
                   </div>
             </div>
           <div className="col-span-5 border-r-[1px]  border-b-0  border-t-0 border-l-[1px]  border border-gray-600 h-screen overflow-y-scroll">
                 <div>
                  <div>
                  <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 transition-all">
                  <div className="grid grid-cols-12 gap-2">
                     <div className="col-span-1">
                          <Image className="rounded-full" src="https://avatars.githubusercontent.com/u/151810599?s=400&u=aa1af31fb0e47edb610872640cab0044afbd663c&v=4" alt="profile" height={50} width={40}  />
                     </div>
                  </div>
                  </div>

                  </div>
                  <FeedCard/>
                  <FeedCard/>
                  <FeedCard/>
                  <FeedCard/>
                  <FeedCard/>
                  <FeedCard/>
                 </div>
           </div>
          <div className="col-span-3 ">
            <div className="p-4 bg-slate-700 rounded-lg ">
              <h1 className="text-2xl my-2">New to Twitter?</h1>
            <GoogleLogin onSuccess={handleLogininWithGoogle}/>
            </div>
          </div>
      

     </div>
    </div>
    
    
  );
}
