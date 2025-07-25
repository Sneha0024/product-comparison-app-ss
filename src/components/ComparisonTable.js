import React from "react";

const ComparisonTable = ({ items, onRemove }) => {
  const keys = ["name", "brand", "price"];
  const diffClass = (field) =>
    new Set(items.map((item) => item[field])).size > 1 ? "diff" : "";

  return (
    <>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              {items.map((item) => (
                <th key={item.id}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {keys.map((key) => (
              <tr key={key}>
                <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                {items.map((item) => (
                  <td key={item.id} className={diffClass(key)}>
                    {item[key]}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td>Features</td>
              {items.map((item) => (
                <td key={item.id}>
                  <ul>
                    {item.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ComparisonTable;
