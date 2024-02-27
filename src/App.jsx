import { useState, useEffect } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";
import { DATA_ENDPOINT } from "./consts.jsx";
export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log(dataType);
  console.log({ data });

  // Write code here.
  //

  function fn() {
    fetch(`${DATA_ENDPOINT}/${dataType}/`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }
  useEffect(() => {
    if (dataType !== "") {
      fn();
    } else {
      setData(null);
    }
  }, [dataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} dataType={dataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
