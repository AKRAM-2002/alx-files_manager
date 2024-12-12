"use client";
import { useState } from "react";
import axios from "../../utils/api";

export default function FileUploader() {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("/files", formData);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("File upload failed!");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Upload File</h1>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="block mb-4"
        />
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Upload
        </button>
      </form>
    </div>
  );
}
