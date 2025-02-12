import { useState } from "react";
import axios from "axios";

const UploadTemplate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {

    console.log('Clicked')

    e.preventDefault();

    if (!file) {
      alert("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("templateFile", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data.message);
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Error uploading template");
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
      <input type="file" accept=".rar" onChange={(e) => setFile(e.target.files[0])} required />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadTemplate;
