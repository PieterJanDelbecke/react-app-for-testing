import {useState} from 'react'

const ColumnsPage = ({setColumns}) => {
    const [name, setName] = useState("")
    const handleAdd = () => {
        data = {
            id: name,
            cell: name,
            color: "black"
        }
    setColumns(prevValue => [...prevValue, data])
    }
  return (
    <div>
    <input type="text" onChange={e => setName(e.target.value)}/>
    <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default ColumnsPage
