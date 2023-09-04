import React from "react";
import GithubIcon from "../../asset/GithubIcon";

const Card = ({ data }) => {
  console.log(data);
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dt = date.getDate();
    return `${dt}-${month}-${year}`;
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex-row  bg-white rounded-lg shadow-md w-96 p-6">
        <div className="text-center mb-6">
          <img
            src={data.avatar_url}
            alt={data.login}
            className="w-24 h-24 mx-auto rounded-full"
          />
        </div>
        <div className="text-lg text-gray-800 mb-6 text-center">
          <p className="font-bold text-2xl">{data.login}</p>
          <p className="mt-2 text-sm">Name: {data.name || "N/A"}</p>
          <p className="text-sm">Public Repositories: {data.public_repos}</p>
          <p className="text-sm">Public Gists: {data.public_gists}</p>
          <p className="text-sm">Created At: {formatDate(data.created_at)}</p>
        </div>
        <div className="text-center">
        <a
            className="justify-center bg-white border border-black text-black py-2 px-2 rounded-full flex items-center transition-shadow hover:shadow-md"
            href={data.html_url}
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon height={20} width={20}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
