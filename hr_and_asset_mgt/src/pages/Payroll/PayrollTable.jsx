
import React from "react";
import "../../style/Payroll.css";

export default function PayrollEmployeesTable({ employees = [] }) {
  return (
    <div className="payroll-table-card">
      {/* Header */}
      <div className="payroll-table-header">
        <h3>Employee Payroll Details</h3>

        <div className="payroll-table-actions">
          <button className="outline-btn">Import Attendance</button>
          <button className="outline-btn">Add Adjustments</button>
        </div>
      </div>

      {/* Table */}
      <table className="payroll-table">
        <thead>
          <tr>
            <th>EMPLOYEE</th>
            <th>BASIC SALARY</th>
            <th>ALLOWANCES</th>
            <th>DEDUCTIONS</th>
            <th>NET SALARY</th>
            <th className="actions-col">ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              {/* Employee */}
              <td>
                <div className="payroll-employee-cell">
                  <div className="employee-name">{emp.name}</div>
                  <div className="employee-meta">
                    {emp.code} • {emp.department}
                  </div>
                </div>
              </td>

              <td>{emp.basicSalary} AED</td>

              <td className="amount-positive" style={{color:"green"}}>
                +{emp.allowances} AED
              </td>

              <td className="amount-negative" style={{color:"red"}}>
                -{emp.deductions} AED
              </td>

              <td className="amount-net">
                {emp.netSalary} AED
              </td>

              <td className="actions-col">
                <button className="view-link">View Details</button>
              </td>
            </tr>
          ))}

          {/* Total Row */}
          <tr className="payroll-total-row">
            <td>Total</td>
            <td>59,000 AED</td>
            <td className="amount-positive" style={{color:"green"}}>+11,500 AED</td>
            <td className="amount-negative" style={{color:"red"}}>-1,800 AED</td>
            <td className="amount-net">68,700 AED</td>
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
