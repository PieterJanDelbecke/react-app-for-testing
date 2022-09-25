import { useState } from "react"
import ColumnsPage from "./components/columns";

function App() {

	const initialColumns = [
		{
			id: "new",
			cell: "new",
			color: "cyan",
		},
		{
			id: "contacted",
			cell: "contacted",
			color: "blue",
		},
		{
			id: "trail started",
			cell: "trail started",
			color: "orange",
		},
		{
			id: "trail completed",
			cell: "trail completed",
			color: "purple",
		},
		{
			id: "successful",
			cell: "successful",
			color: "green",
		},
		{
			id: "abandoned",
			cell: "abandoned",
			color: "red",
		},
	];
	const [columns, setColumns] = useState(initialColumns);

  return (
    <div>
      <h1>Hello</h1>
      <ColumnsPage columns={columns} setColumns={setColumns}/>
    </div>
  )
}

export default App
