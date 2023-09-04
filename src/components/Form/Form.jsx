import React, { useState, useEffect } from "react";
import SearchIcon from "../../asset/SearchIcon";
import GithubIcon from "../../asset/GithubIcon";
import axios from "axios";
import { toast } from "react-hot-toast";
const Form = ({ setDataUrl }) => {
  const [searchStr, setSearchStr] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  const handleSearch = async (e) => {
    const url = "https://api.github.com/search/users";
    const searchData = await axios.get(url, {
      params: {
        q: searchStr,
      },
    });
    console.log(searchData.data.items, "searchData");
    setSuggestions(searchData.data.items);
  };

  const Suggest = () => {
    const items = [];
    for(let i in suggestions){
      const value = suggestions[i];
      items.push(
        <div onClick={()=>{
          setDataUrl(value.url);
        }}  className="bg-white rounded-lg shadow-md p-4 border border-gray-300">
      
        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4">
          <img
            src={value.avatar_url}
            alt="User Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        
  
        {/* User ID */}
        <p className="text-gray-600 text-center">@{value.login}</p>
      </div>   
      )
    }

    return items;
  };

  return (
    <div className="_form">
      <div className="py-6">
        <div className="container mx-auto text-center">
          <div className="flex gap-4 px-6">
            <GithubIcon />
            <span className="text-2xl font-bold">Github Profile Finder</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="p-4 rounded-lg">
          <div className="relative">
            <input
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-gray-900"
              type="text"
              onChange={(e) => setSearchStr(e.target.value)}
              placeholder="Search for content..."
            />
            <button
              className="absolute right-4 top-2 text-gray-500 hover:text-gray-700"
              onClick={(e) => {
                searchStr.length > 0 ? handleSearch(e) : toast.error("Please enter a valid search string");
                // handleSubmit(e);
              }}
            >
              <SearchIcon />
            </button>
          </div>
          <div className="pt-2 grid grid-cols-3 gap-2" style={{maxHeight:'84vh',overflow:'auto',overflowX:'hidden'}}>
            <Suggest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
