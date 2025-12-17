

import React from "react";
import PayrollSummaryCards from "./PayrollCards";
import PayrollStatus from "./PayrollStatus";
import PayrollEmployeesTable from "./PayrollTable";


function Payroll() {
    const payrollEmployeesData = [
  {
    id: 1,
    name: "Ahmed Al Mansoori",
    code: "EMP001",
    department: "Sales",
    basicSalary: "15,000",
    allowances: "3,000",
    deductions: "500",
    netSalary: "17,500",
  },
  {
    id: 1,
    name: "Ahmed Al Mansoori",
    code: "EMP001",
    department: "Sales",
    basicSalary: "15,000",
    allowances: "3,000",
    deductions: "500",
    netSalary: "17,500",
  },
  {
    id: 1,
    name: "Ahmed Al Mansoori",
    code: "EMP001",
    department: "Sales",
    basicSalary: "15,000",
    allowances: "3,000",
    deductions: "500",
    netSalary: "17,500",
  },
  {
    id: 1,
    name: "Ahmed Al Mansoori",
    code: "EMP001",
    department: "Sales",
    basicSalary: "15,000",
    allowances: "3,000",
    deductions: "500",
    netSalary: "17,500",
  },
];

    return (
        <div>
            <PayrollSummaryCards />
            <PayrollStatus />
            <PayrollEmployeesTable employees={payrollEmployeesData}/>
        </div>
    );
}


export default Payroll;