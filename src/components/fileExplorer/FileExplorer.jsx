import React, { useState } from "react";
import json from "./data.json";
import "./FileExplorer.css";

const List = ({ list, addFolder }) => {
  const [isOpen, setIsOpen] = useState({});
  return (
    <div className="container2">
      {list.map((node) => {
        return (
          <div key={node?.id}>
            {node.isFolder && (
              <span
                onClick={() =>
                  setIsOpen((prev) => ({
                    ...prev,
                    [node.name]: !prev[node.name],
                  }))
                }
              >
                {isOpen[node.name] ? "-" : "+"}{" "}
              </span>
            )}
            {node?.name}
            {node?.isFolder && (
              <img
                src="https://img.freepik.com/free-vector/yellow-folder-flat-style_78370-6671.jpg?semt=ais_hybrid"
                alt="add file"
                onClick={() => addFolder(node.id)}
              />
            )}
            {node?.children && isOpen[node.name] && (
              <List list={node.children} addFolder={addFolder} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function FileExplorer() {
  const [data, setData] = useState(json);

  const addFolder = (parentId) => {
    let nameOfFolder = prompt("Enter name for the folder?");

    const updateData = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now(),
                name: nameOfFolder,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
        if (node?.children) {
          return {
            ...node,
            children: updateData(node.children),
          };
        }
        return node;
      });
    };

    setData((prev) => updateData(prev));
    console.log(data);
  };

  return (
    <div className="container">
      <h1>File Explorer</h1>
      <List list={data} addFolder={addFolder} />
    </div>
  );
}
