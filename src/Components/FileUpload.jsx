// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FileUpload = () => {
//     const [files, setFiles] = useState(null);
//     const [folderName, setFolderName] = useState("");
//     const [uploadedFiles, setUploadedFiles] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:5000/files").then((res) => setUploadedFiles(res.data));
//     }, []);

//     const handleUpload = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         for (let i = 0; i < files.length; i++) {
//             formData.append("files", files[i]);
//         }
//         formData.append("folderName", folderName);

//         const response = await axios.post("http://localhost:5000/upload", formData);
//         setUploadedFiles([...uploadedFiles, { folderName, downloadUrl: response.data.downloadUrl }]);
//     };

//     return (
//         <div>
//             <h2>Upload Component & Folder</h2>
//             <input type="text" placeholder="Folder Name" onChange={(e) => setFolderName(e.target.value)} />
//             <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
//             <button onClick={handleUpload}>Upload</button>

//             <h3>Uploaded Files:</h3>
//             {/* <ul>
//                 {uploadedFiles.map((file, index) => (
//                     <li key={index}>
//                         {file.folderName} - <a href={file.downloadUrl} target="_blank" rel="noopener noreferrer">Download</a>
//                     </li>
//                 ))}
//             </ul> */}

//             <ul>
//                 {uploadedFiles.map((file, index) => (
//                     <li key={index}>
//                         {file.folderName} -
//                         <a href={`http://localhost:5000/download/${file._id}`} download>
//                             <button>Download</button>
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default FileUpload;





import React, { useState, useEffect } from "react";
import axios from "axios";

const FileUpload = () => {
  const [files, setFiles] = useState(null);
  const [folderName, setFolderName] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/files").then((res) => setUploadedFiles(res.data));
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    formData.append("folderName", folderName);

    const response = await axios.post("http://localhost:5000/upload", formData);
    // Append the new file info to the uploaded files list
    setUploadedFiles([...uploadedFiles, { _id: response.data._id, folderName, downloadUrl: response.data.downloadUrl }]);
  };

  const handleDownload = (id) => {
    // Create a hidden link and simulate a click to start the download
    const link = document.createElement("a");
    link.href = `http://localhost:5000/download/${id}`;
    link.setAttribute("download", ""); // The filename is set by the server's headers
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h2>Upload Component & Folder</h2>
      <input type="text" placeholder="Folder Name" onChange={(e) => setFolderName(e.target.value)} />
      <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
      <button onClick={handleUpload}>Upload</button>

      <h3>Uploaded Files:</h3>
      <ul>
        {uploadedFiles.map((file, index) => (
          <li key={index}>
            {file.folderName} - <button onClick={() => handleDownload(file.downloadUrl)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
