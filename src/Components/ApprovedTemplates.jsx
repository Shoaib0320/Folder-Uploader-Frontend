import { useEffect, useState } from "react";
import axios from "axios";

const ApprovedTemplates = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/templates")
            .then((res) => setTemplates(res.data.filter((temp) => temp.status === "Approved")))
            .catch((err) => console.error("Error fetching templates:", err));
    }, []);

    const handleDownload = async (templateId) => {
        try {
            // Backend se download URL le rahe hain
            const response = await axios.get(`http://localhost:5000/download/${templateId}`);

            if (response.data.success) {
                const fileUrl = response.data.downloadUrl;
                const fileName = fileUrl.split("/").pop(); // File ka naam extract kar rahe hain

                // Fetch file as blob
                const fileResponse = await fetch(fileUrl);
                const fileBlob = await fileResponse.blob();

                // Create a temporary download link
                const link = document.createElement("a");
                link.href = URL.createObjectURL(fileBlob);
                link.download = fileName; // File ka naam set kar rahe hain
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link); // Cleanup
            } else {
                alert("File download failed!");
            }
        } catch (error) {
            console.error("Download Error:", error);
            alert("Error downloading file!");
        }
    };

    return (
        <div>
            <h2>Available Templates</h2>
            {templates.map((temp) => (
                <div className="card" key={temp._id}>
                    <h3>{temp.title}</h3>
                    <p>{temp.description}</p>
                    <button className="button" onClick={() => handleDownload(temp._id)}> {/* Corrected */}
                        Download File
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ApprovedTemplates;


