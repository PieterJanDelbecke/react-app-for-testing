import { useState } from "react";

const ColumnsPage = ({ columns, setColumns }) => {
  const [name, setName] = useState("");
  const handleAdd = () => {
    console.log("add");
    const data = {
      id: name,
      cell: name,
      color: "black",
    };
    setColumns((prevValue) => [...prevValue, data]);
  };
  return (
    <div>
      {columns.map((column) => {
        return (
          <div key={column.cell} style={{ border: "1px solid black" }}>
            <h3>{column.cell}</h3>
            <h4>{column.color}</h4>
          </div>
        );
      })}
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default ColumnsPage;
