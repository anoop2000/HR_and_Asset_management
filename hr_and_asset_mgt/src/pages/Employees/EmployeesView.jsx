
import React, { useState } from "react";
import EmployeesHeader from "./EmployeesHeader.jsx";
import EmployeesTable from "./EmployeesTable.jsx";

export default function Employees() {
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState("All Status");
  const [search, setSearch] = useState("");

  const employees = [
    {
      id: 1,
      name: "Ahmed Al Mansoori",
      code: "EMP001",
      role: "Sales Manager",
      department: "Sales",
      email: "ahmed.m@company.ae",
      phone: "+971 50 123 4567",
      joinDate: "2022-03-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      code: "EMP002",
      role: "HR Executive",
      department: "HR",
      email: "sarah.j@company.ae",
      phone: "+971 55 234 5678",
      joinDate: "2021-06-20",
      status: "Active",
    },
    {
      id: 5,
      name: "David Brown",
      code: "EMP005",
      role: "IT Manager",
      department: "IT",
      email: "david.b@company.ae",
      phone: "+971 55 567 8901",
      joinDate: "2019-11-12",
      status: "On Leave",
    },
  ];

  return (
    <div className="employees-page">
      {/* HEADER */}
      <EmployeesHeader
        onAddEmployee={() => console.log("Add Employee")}
        department={department}
        setDepartment={setDepartment}
        status={status}
        setStatus={setStatus}
        search={search}
        setSearch={setSearch}
      />

      {/* TABLE */}
      <EmployeesTable employees={employees} />
    </div>
  );
}
