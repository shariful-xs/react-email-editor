import React from "react";

const ColumnNoContent = () => {
  return (
    <div>
      <p
        style={{
          padding: "10px 20px",
          fontSize: "15px",
          color: "skyblue",
          fontWeight: "bold",
        }}
      >
        No content here. Drug content right now
      </p>
      <button
        style={{
          background: "skyblue",
          fontSize: "15px",
          fontWeight: "bold",
          padding: "5px 10px",
          color: "white",
          marginBottom: "20px",
        }}
      >
        Add Content
      </button>
    </div>
  );
};

export default ColumnNoContent;
