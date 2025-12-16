import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../components/reusable/Card.jsx";
import SvgIcon from "../../components/svgIcon/svgView.jsx";
import "../../style/Dashboard.css";

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
    </Container>
  );
}

export default Dashboard;
