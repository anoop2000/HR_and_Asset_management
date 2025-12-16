import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../components/reusable/Card.jsx";
import SvgIcon from "../../components/svgIcon/svgView.jsx";
import "../../style/Dashboard.css";
import DashboardInfoCard from "../../components/reusable/DashboardInfoCard.jsx";

function Dashboard() {
  const metrics = [
    {
      title: "Total Employees",
      value: "247",
      subtext: "+12",
      iconName: "users",
      iconBgClass: "dashboard-icon-bg-blue",
    },
    {
      title: "Documents Expiring",
      value: "18",
      subtext: "This Month",
      iconName: "exclamation",
      iconBgClass: "dashboard-icon-bg-yellow",
    },
    {
      title: "Pending Approvals",
      value: "7",
      subtext: "3 Urgent",
      iconName: "clock (1)",
      iconBgClass: "dashboard-icon-bg-orange",
    },
    {
      title: "Assets In Service",
      value: "432",
      subtext: "12 Due",
      iconName: "cube",
      iconBgClass: "dashboard-icon-bg-green",
    },
  ];


  const companyDocumentExpiries = [
  {
    id: 1,
    primaryText: "Trade License",
    secondaryText: "Main Office",
    badge: { text: "16 days", variant: "warning" },
    dateText: "2025-12-15",
  },
  {
    id: 2,
    primaryText: "Insurance Policy",
    secondaryText: "Branch RAK",
    badge: { text: "9 days", variant: "danger" },
    dateText: "2025-12-08",
  },
  {
    id: 3,
    primaryText: "VAT Certificate",
    secondaryText: "Main Office",
    badge: { text: "52 days", variant: "success" },
    dateText: "2026-01-20",
  },
  {
    id: 4,
    primaryText: "Lease Agreement",
    secondaryText: "Dubai Branch",
    badge: { text: "26 days", variant: "warning" },
    dateText: "2025-12-25",
  },
];

const employeeVisaExpiries = [
  {
    id: 1,
    primaryText: "Ahmed Ali",
    secondaryText: "Employment Visa",
    badge: { text: "6 days", variant: "danger" },
    dateText: "2025-12-05",
  },
  {
    id: 2,
    primaryText: "Sarah Johnson",
    secondaryText: "Emirates ID",
    badge: { text: "19 days", variant: "warning" },
    dateText: "2025-12-18",
  },
  {
    id: 3,
    primaryText: "Mohammed Hassan",
    secondaryText: "Employment Visa",
    badge: { text: "47 days", variant: "success" },
    dateText: "2026-01-10",
  },
  {
    id: 4,
    primaryText: "Lisa Chen",
    secondaryText: "Emirates ID",
    badge: { text: "23 days", variant: "warning" },
    dateText: "2025-12-22",
  },
];


const pendingApprovals = [
  {
    id: 1,
    primaryText: "John Smith",
    secondaryText: "Annual Leave",
    actions: [
      {
        icon: "circle-tick",
        variant: "success",
        onClick: () => console.log("Approved John Smith"),
      },
      {
        icon: "circle-xmark",
        variant: "danger",
        onClick: () => console.log("Rejected John Smith"),
      },
    ],
  },
  {
    id: 2,
    primaryText: "Emma Wilson",
    secondaryText: "Salary Advance",
    actions: [
      {
        icon: "circle-tick",
        variant: "success",
        onClick: () => console.log("Approved Emma Wilson"),
      },
      {
        icon: "circle-xmark",
        variant: "danger",
        onClick: () => console.log("Rejected Emma Wilson"),
      },
    ],
  },
  {
    id: 3,
    primaryText: "David Brown",
    secondaryText: "Sick Leave",
    actions: [
      {
        icon: "circle-tick",
        variant: "success",
        onClick: () => console.log("Approved David Brown"),
      },
      {
        icon: "circle-xmark",
        variant: "danger",
        onClick: () => console.log("Rejected David Brown"),
      },
    ],
  },
];


const todaysAttendance = [
  {
    id: 1,
    primaryText: "Sales",
    progress: {
      present: 42,
      leave: 3,
      absent: 2,
      total: 47,
    },
  },
  {
    id: 2,
    primaryText: "Operations",
    progress: {
      present: 68,
      leave: 5,
      absent: 1,
      total: 74,
    },
  },
  {
    id: 3,
    primaryText: "Finance",
    progress: {
      present: 28,
      leave: 2,
      absent: 0,
      total: 30,
    },
  },
  {
    id: 4,
    primaryText: "IT",
    progress: {
      present: 35,
      leave: 1,
      absent: 1,
      total: 37,
    },
  },
];





  return (
    <Container fluid className="dashboard-page">
      <Row className="dashboard-cards-row">
        {metrics.map((metric, index) => (
          <Col key={index} className="dashboard-card-col">
            <Card className="dashboard-metric-card">
              <div className="dashboard-card-content">
                <div className="dashboard-card-text">
                  <div className="dashboard-card-title">{metric.title}</div>
                  <div className="dashboard-card-value">{metric.value}</div>
                  <div className="dashboard-card-subtext">{metric.subtext}</div>
                </div>
                <div className={`dashboard-icon-container ${metric.iconBgClass}`}>
                  <SvgIcon name={metric.iconName} size={24} />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* QUICK ACTIONS SECTION */}
      <div className="dashboard-quick-actions">
        <div className="dashboard-quick-actions-title">Quick Actions</div>

        <Card className="dashboard-quick-actions-wrapper">
          <div className="dashboard-quick-actions-grid">
            <Card className="dashboard-quick-action-card">
              <SvgIcon name="users" size={22} />
              <span>Add Employee</span>
            </Card>

            <Card className="dashboard-quick-action-card">
              <SvgIcon name="dollar" size={22} />
              <span>Process Payroll</span>
            </Card>

            <Card className="dashboard-quick-action-card">
              <SvgIcon name="document" size={22} />
              <span>View Documents</span>
            </Card>

            <Card className="dashboard-quick-action-card">
              <SvgIcon name="reports" size={22} />
              <span>Generate Report</span>
            </Card>
          </div>
        </Card>
      </div>


      <Row className="mt-4">
  <Col md={6}>
    <DashboardInfoCard
      title="Company Document Expiries"
      icon="document"
      actionLabel="View All"
      items={companyDocumentExpiries}
    />
  </Col>

  <Col md={6}>
    <DashboardInfoCard
      title="Employee Visa / ID Expiries"
      icon="exclamation"
      actionLabel="View All"
      items={employeeVisaExpiries}
    />
  </Col>
</Row>

<Row className="mt-4">
  <Col md={6}>
    <DashboardInfoCard
      title="Pending Approvals"
      icon="clock (1)"
      actionLabel="View All"
      items={pendingApprovals}
    />
  </Col>

  <Col md={6}>
    <DashboardInfoCard
      title="Today's Attendance"
      icon="calendar"
      actionLabel="View Details"
      items={todaysAttendance}
    />
  </Col>
</Row>

    </Container>

    
  );
}

export default Dashboard;
