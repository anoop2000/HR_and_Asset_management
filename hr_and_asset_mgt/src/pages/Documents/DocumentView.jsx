
import React,{useState} from "react";
import DocumentLibraryHeader from "./DocumentCards";
import "../../style/Document.css";  
import DocumentsTable from "./DocumentsTable";
import DocumentsFilter from "./DocumentsFilter";
import DocumentsGrid from "./DocumentsGrid";
import ExpiryReminders from "./DocumentExpiryCards";


 const documentsData = [
    {
      id: 1,
      title: "Insurance Policy",
      type: "Policy Document",
      location: "Head Office",
      department: "Finance",
      issueDate: "01-01-2024",
      expiryDate: "01-01-2025",
      daysLeft: 120,
      status: "Valid",
    },
    {
      id: 2,
      title: "Compliance Certificate",
      type: "Certificate",
      location: "Branch Office",
      department: "HR",
      issueDate: "10-02-2024",
      expiryDate: "10-03-2024",
      daysLeft: 20,
      status: "Expiring Soon",
    },
  ];

function Documents(){

        const [viewGrid, setViewGrid] = useState("list");

        const [search, setSearch] = useState("");
        const [type, setType] = useState("All Types");
        const [status, setStatus] = useState("All Status");
        const [view, setView] = useState("list");

        
    return (
        <div>
            <DocumentLibraryHeader />

            <DocumentsFilter
        search={search}
        onSearchChange={setSearch}
        type={type}
        onTypeChange={setType}
        status={status}
        onStatusChange={setStatus}
        total={6}
        view={view}
        onViewChange={setView}
      />

            {view === "list" ? (
        <DocumentsTable documents={documentsData} />
      ) : (
        <DocumentsGrid documents={documentsData} />
      )}

      <ExpiryReminders />
        </div>
    );
}
export default Documents;
