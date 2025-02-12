import { useEffect, useState } from "react";
import axios from "axios";

const ApprovedTemplates = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/templates").then((res) =>
            setTemplates(res.data.filter((temp) => temp.status === "Approved"))
        );
    }, []);

    return (
        <div>
            <h2>Available Templates</h2>
            {templates.map((temp) => (
                <div key={temp._id}>
                    <h3>{temp.title}</h3>
                    <p>{temp.description}</p>
                    <button onClick={async () => {
                        try {
                            const response = await axios.get(`http://localhost:5000/download/${temp._id}`);
                            if (response.data.success) {
                                window.open(response.data.downloadUrl, "_blank"); // File new tab mein open hogi
                            }
                        } catch (error) {
                            console.error("Download Error:", error);
                        }
                    }}>
                        Download File
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ApprovedTemplates;
