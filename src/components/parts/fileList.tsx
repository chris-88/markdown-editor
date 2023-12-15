"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface SidebarProps {
  onSelectFile: (file: string) => void;
}

const FileList: React.FC<SidebarProps> = ({ onSelectFile }) => {
  const [files, setFiles] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://h7d9sv70kd.execute-api.eu-west-1.amazonaws.com/prod/files")
      .then((response) => {
        const fileList: string[] = JSON.parse(response.data.body);
        setFiles(fileList);
      })
      .catch((error) => {
        console.error("Error fetching file list:", error);
      });
  }, []);

  const handleFileClick = (file: string) => {
    const contentId = file.replace(/\.md$/, "");
    onSelectFile(contentId);
  };

  // Filter files based on search input
  const filteredFiles = files.filter((file) =>
    file.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-between border-gray-200 border rounded-md mt-2 h-full ">
      <nav className=" p-2">
        <div className=" font-semibold ">Files</div>
        <ul className="">
          {filteredFiles.length > 0 ? (
            filteredFiles.map((file, index) => (
              <li
                className="hover:bg-gray-100 text-sm border-b-gray-200 border-b p-1 "
                key={index}
                onClick={() => handleFileClick(file)}
                style={{
                  cursor: "pointer",
                }}
              >
                {file}
              </li>
            ))
          ) : (
            <li>No matching files found</li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default FileList;
