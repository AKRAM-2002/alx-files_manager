"use client";
import { useState, useEffect } from "react";
import axios from "../../utils/api";

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("/files");
        setFiles(response.data.files);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFiles();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Files</h1>
      <ul>
        {files.map((file) => (
          <li key={file.id} className="mb-2">
            <span>{file.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
