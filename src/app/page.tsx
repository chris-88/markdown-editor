"use client";
import React, { useState } from "react";
import Header from "@/components/parts/header";
import { Input } from "@/components/ui/input";
import NewFile from "@/components/parts/newFile";
import Editor from "@/components/parts/editor";
import FileList from "@/components/parts/fileList";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<string>("Welcome");
  const [searchInput, setSearchInput] = useState<string>("");

  const handleFileSelect = (file: string) => {
    setSelectedFile(file);
  };
  return (
    <main className="flex h-screen w-screen flex-col p-2">
      <Header />
      <div className="flex flex-row h-full w-full gap-2">
        <div className="flex flex-col w-60 items-center rounded-lg gap-2">
          <div className="flex flex-col h-full">
            <div className="flex flex-row gap-1">
              <Input
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <NewFile />
            </div>
            <FileList onSelectFile={handleFileSelect} />
          </div>
        </div>
        <div className="flex w-full gap-2 justify-center">
          <Editor selectedFile={selectedFile} />
        </div>
      </div>
    </main>
  );
}
