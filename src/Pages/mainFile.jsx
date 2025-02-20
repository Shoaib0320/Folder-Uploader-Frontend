
import { Tabs } from "antd";
import UploadTemplate from '../Components/UploadTemplate';
import ApprovedTemplates from '../Components/ApprovedTemplates';
import AdminDashboard from '../Components/AdminDashboard'
import '../App.css';
import Sidebar from "../Components/Sidebar/Sidebar";

export const MainFile = () => {

    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: "1",
            label: "Upload Templete",
            children: <UploadTemplate />,
        },
        {
            key: "2",
            label: "Approved Templete",
            children: <ApprovedTemplates />,
        },
        {
            key: "3",
            label: "Admin Dashboard",
            children: <AdminDashboard />,
        },
    ];

    return (
        <>
            <main>
                <Sidebar />
                <div className="p-4 sm:ml-[85px] min-h-screen">
                    <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
                    <p>This is the main content area. The sidebar will collapse on mobile devices.</p>
                </div>
            </main>            <div>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
        </>
    )
}



