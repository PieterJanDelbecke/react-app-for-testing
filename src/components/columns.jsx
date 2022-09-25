import React from 'react'

const ColumnsPage = ({columns, setColumns}) => {
  return (
    <div>
        {columns.map(column => {
            return <div style={{border: "1px solid black"}}>
                <h3>{column.cell}</h3>
                <h4>{column.color}</h4>
            </div>
        })
    }
    </div>
  )
}

export default ColumnsPage
