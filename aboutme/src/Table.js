import React, { Component } from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th>
        </tr>
      </thead>
    )
  }

const TableBody = props => {
    const rows = props.tableData.map((row, index) => {
      return (
        <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
                <button onClick={() => props.removeItem(index)}>Delete</button>
            </td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const { tableData, removeItem } = props;
  
    return (
      <table>
        <TableHeader />
        <TableBody tableData={tableData} removeItem={removeItem} />
      </table>
    );
  }

export default Table