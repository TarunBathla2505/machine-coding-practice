import React, { useState } from "react";
import json from "./data.json";
import "./FileExplorer.css";

const List = ({ list, addFolder, deleteFileOrFolder }) => {
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

            <img
              className="delete"
              src="https://as1.ftcdn.net/jpg/11/74/04/76/1000_F_1174047600_GCOSR1l91ZDovtcEOKcT0SToIt9uZByx.jpg"
              alt="delete file"
              onClick={() => deleteFileOrFolder(node.id)}
            />

            {node?.children && isOpen[node.name] && (
              <List
                list={node.children}
                addFolder={addFolder}
                deleteFileOrFolder={deleteFileOrFolder}
              />
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
  };

  const deleteFileOrFolder = (elementId) => {
    const deleteElement = (list) => {
      return list
        .filter((node) => node.id !== elementId)
        .map((node) => {
          if (node.children) {
            return { ...node, children: deleteElement(node.children) };
          }
          return node;
        });
    };

    setData((prev) => deleteElement(prev));
  };

  return (
    <div className="container">
      <h1>File Explorer</h1>
      <List
        list={data}
        addFolder={addFolder}
        deleteFileOrFolder={deleteFileOrFolder}
      />
    </div>
  );
}
