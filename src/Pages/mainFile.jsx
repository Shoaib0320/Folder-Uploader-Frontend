import React from 'react'

import { Tabs } from "antd";
import UploadTemplate from '../Components/UploadTemplate';
import ApprovedTemplates from '../Components/ApprovedTemplates';
import AdminDashboard from '../Components/AdminDashboard'


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
        <div>  
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}



