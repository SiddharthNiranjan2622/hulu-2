import { useRouter } from "next/router";
import requests from "../util/requests";

function Nav() {
  const router =  useRouter()
  return (
    <nav>
      <div className="relative flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
          onClick={()=>router.push(`/?gnere=${key}`)}
            key={key}
            className=" last:pr-24 cursor-pointer tansition duration-100 transform hover:text-white active:text-red-500 hover:scale-125"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className=" absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/2"></div>
    </nav>
  );
}

export default Nav;
