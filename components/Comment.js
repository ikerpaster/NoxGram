import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import Moment from "react-moment";
const imgUser =
  "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg";

function Comment() {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      <img src={imgUser} alt="" className="h-11 w-11 rounded-full mr-4" />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4 className="font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block group-hover:underline">
                iker paster
              </h4>
              <span className="ml-1.5 text-sm sm:text-[15px]">@ikerkaka</span>
            </div>{" "}
            ·{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
              <Moment fromNow>2second ago</Moment>
            </span>
            {/* text-[#d9d9d9] mt-0.5 max-w-lg overflow-scroll text-[15px] sm:text-base h-auto */}
            <p className="">hey hey this mi first comment wallala</p>
          </div>
          <div className="icon group flex-shrink-0">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>

        <div className="text-[#6e767d] flex justify-between w-10/12">
          <div className="icon group">
            <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>

          <div className="flex items-center space-x-1 group">
            <div className="icon group-hover:bg-pink-600/10">
              <HeartIcon className="h-5 group-hover:text-pink-600" />
            </div>
            <span className="group-hover:text-pink-600 text-sm"></span>
          </div>

          <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="icon group">
            <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
