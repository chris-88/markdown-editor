"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { Textarea } from "@/components/ui/textarea";
import Title from "../directives/title";
import { Label } from "../ui/label";
import ButtonBack from "../directives/buttonBack";
import Callout from "../directives/callout";
import Text from "../directives/text";
import Bullet from "../directives/bullet";

export default function Editor({
  selectedFile,
}: {
  selectedFile: string;
}): JSX.Element {
  const [markdown, setMarkdown] = useState<string>("");
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  useEffect(() => {
    setMarkdown(markdownContent);
  }, [markdownContent]);

  useEffect(() => {
    if (selectedFile) {
      const apiUrl =
        "https://h7d9sv70kd.execute-api.eu-west-1.amazonaws.com/prod/";
      const queryParams = `?content-id=${selectedFile}`;

      axios
        .get(apiUrl + queryParams)
        .then((response) => {
          setMarkdownContent(response.data);
        })
        .catch((error) => {
          console.error("Error fetching markdown content:", error);
        });
    }
  }, [selectedFile]);

  return (
    <>
      <div className="flex flex-col w-1/2 bg-gray-800 border-slate-200 border border-solid rounded-lg">
        <div className=" justify-center text-center text-white text-2xl ">
          <Label htmlFor="markdown">{selectedFile}.md</Label>
        </div>
        <Textarea
          className=" bg-transparent border-none"
          placeholder="Write your markdown here..."
          id="markdown"
          value={markdown}
          onChange={handleMarkdownChange}
        />
      </div>
      <div className="flex w-1/2 rounded-lg p-2 border-slate-200 border border-solid text-base px-10">
        <Markdown
          options={{
            overrides: {
              h1: Title,
              p: Text,
              Bullet: Bullet,
              Button: ButtonBack,
              Callout: Callout,
            },
          }}
        >
          {markdown}
        </Markdown>
      </div>
    </>
  );
}
