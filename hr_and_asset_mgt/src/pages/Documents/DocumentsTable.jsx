import DataTable from "../../components/reusable/DataTable.jsx";
import "../../style/Document.css";
import SvgIcon from "../../components/svgIcon/svgView.jsx";

const StatusBadge = ({ status }) => {
  const map = {
    Valid: "status-valid",
    "Expiring Soon": "status-warning",
    Critical: "status-critical",
  };

  return (
    <span className={`status-badge ${map[status]}`}>
      {status}
    </span>
  );
};

const DocumentsTable = ({ documents = [] }) => {
  const columns = [
    {
      key: "document",
      header: "DOCUMENT",
      width: "28%",
      render: (row) => (
        <div className="doc-info">
          <div className="doc-icon">
            <SvgIcon name="document (1)" size={20} />
          </div>
          <div>
            <div className="doc-title">{row.title}</div>
            <div className="doc-sub">{row.type}</div>
          </div>
        </div>
      ),
    },
    {
      key: "company",
      header: "COMPANY / LOCATION",
      width: "18%",
      render: (row) => (
        <>
          <div className="primary">{row.location}</div>
          <div className="secondary">{row.department}</div>
        </>
      ),
    },
    {
      key: "issueDate",
      header: "ISSUE DATE",
      width: "12%",
      render: (row) => row.issueDate,
    },
    {
      key: "expiryDate",
      header: "EXPIRY DATE",
      width: "14%",
      render: (row) => (
        <>
          <div className="primary">{row.expiryDate}</div>
          {row.daysLeft && (
            <div className="secondary">
              {row.daysLeft} days left
            </div>
          )}
        </>
      ),
    },
    {
      key: "status",
      header: "STATUS",
      width: "14%",
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      key: "actions",
      header: "ACTIONS",
      width: "14%",
      render: () => (
        <div className="action-icons">
          <SvgIcon name="eye" size={18} />
          <SvgIcon name="download" size={18} />
          <span className="danger">
            <SvgIcon name="delete" size={18} />
          </span>
        </div>
      ),
    },
  ];

  return <DataTable columns={columns} data={documents} />;
};

export default DocumentsTable;
