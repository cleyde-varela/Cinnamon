/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CalendarTable = ({ title }) => {
  // Array with cell's info
  const [cellText, setCellText] = useState(Array(31).fill(""));

  // Handles users click on a cell
  const handleCellClick = (index) => {
    const updatedCellText = [...cellText];
    updatedCellText[index] = title;
    setCellText(updatedCellText);
  };

  // Handles user's double click on a cell
  const handleCellDoubleClick = (index) => {
    // Alert
    alert("Meal will be removed!");
    const updatedCellText = [...cellText];
    updatedCellText[index] = "";
    setCellText(updatedCellText);
  };

  // Creates the table
  const tableRows = [];
  for (let i = 0; i < 5; i++) {
    const tableCells = [];
    for (let j = 0; j < 7; j++) {
      const cellIndex = i * 7 + j; // unique cell index
      tableCells.push(
        <td key={cellIndex} className="table-data-cell">
          <button className="table-data-cell-btn"
            onClick={() => handleCellClick(cellIndex, title.title)}
            onDoubleClick={() => handleCellDoubleClick(cellIndex)}
          >
            {cellText[cellIndex]}
          </button>
        </td>
      );
    }
    tableRows.push(<tr key={i}>{tableCells}</tr>);
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        {tableRows}
      </tbody>
    </table>
  );
};

export default CalendarTable;
