import React from "react";

export const EmptyContent = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 8px",
        border: "1px dotted skyblue",
      }}
    >
      <div>
        <p
          style={{
            marginBottom: "0",
            fontSize: "15px",
            color: "skyblue",
            fontWeight: "bold",
          }}
        >
          No content here. Drug content right now
        </p>
        <button
          style={{
            display: "block",
            margin: "6px auto",
            padding: "4px 8px",
            background: "skyblue",
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          Add Content
        </button>
      </div>
    </div>
  );
};
