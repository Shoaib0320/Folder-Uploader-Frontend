import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/templates").then((res) => setTemplates(res.data));
  }, []);

  const handleApprove = (id) => {
    axios.put(`http://localhost:5000/approve/${id}`).then(() => {
      alert("Template Approved!");
      window.location.reload();
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`).then(() => {
      alert("Template Deleted!");
      window.location.reload();
    });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {templates.map((temp) => (
        <div key={temp._id}>
          <h3>{temp.title}</h3>
          <p>{temp.description}</p>
          <p>Status: {temp.status}</p>
          {temp.status === "Pending" && <button onClick={() => handleApprove(temp._id)}>Approve</button>}
          <button onClick={() => handleDelete(temp._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
