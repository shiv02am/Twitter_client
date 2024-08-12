import React from "react"
import Image from "next/image"
import { BiBarChart, BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxBookmark } from "react-icons/rx";

const  FeedCard: React.FC = () => {


    return  <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 transition-all">
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1">
                <Image className="rounded-full" src="https://avatars.githubusercontent.com/u/151810599?s=400&u=aa1af31fb0e47edb610872640cab0044afbd663c&v=4" alt="user-imaeg" height={50} width={40}  />
            </div>
            <div className="col-span-11 ">
                <h6> Shivam pandey</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio dicta eligendi aliquid omnis reprehenderit vero facere expedita vel, dolorum incidunt? Asperiores .</p>
             <div className="flex justify-between mt-5 text-xl item-center cursor-pointer w-[90%]">
                <div>
                 <BiMessageRounded />
                </div>
                <div>
                <AiOutlineRetweet />
                </div>
                <div>
                <IoMdHeartEmpty />
                </div>
                <div>
                <BiBarChart />
                </div>
                <div>
                <RxBookmark />
                </div>
            </div>
                
            </div>
        </div> 
    </div>
};

export default FeedCard;