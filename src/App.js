import Form from "./components/Form/Form";
import "./App.css";
import { Toaster} from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import SearchIcon from "./asset/SearchIcon";

function App() {
  const [dataUrl, setDataUrl] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    const resData = await axios.get(dataUrl);
    setData(resData.data);
  };

  useEffect(() => {
    if (dataUrl === "") return;
    handleSubmit();
  }, [dataUrl]);
  console.log(data);
  return (
    <div className="App">
      <Toaster />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form setDataUrl={setDataUrl} />
        {data.length === 0 ? (
          <div className="flex justify-center items-center h-screen">
            <div className="bg-white-500 text-gray-400 py-4 px-6 text-center">
              <p className="text-5xl font-bold">Search for a user</p>
              <p className="flex justify-center items-center gap-2 text-lg mt-2">Enter a username and hit <SearchIcon/></p>
            </div>
          </div>
        ) : (
          <Card data={data} />
        )}
      </div>
    </div>
  );
}

export default App;
