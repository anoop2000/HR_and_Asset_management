import Card from "../../components/reusable/Card";
import SvgIcon from "../../components/svgIcon/svgView";
import "../../style/Assets.css";

const actions = [
  {
    id: "schedule",
    icon: "spanner",
    title: "Schedule Maintenance",
    description: "Plan and schedule maintenance for assets",
    buttonText: "Schedule",
    variant: "primary",
  },
  {
    id: "transfer",
    icon: "cube",
    title: "Transfer Asset",
    description: "Transfer assets between employees or stores",
    buttonText: "Transfer",
    variant: "success",
  },
  {
    id: "alerts",
    icon: "exclamation",
    title: "Service Due Alerts",
    description: "View assets requiring maintenance",
    buttonText: "View Alerts",
    variant: "warning",
  },
];

const AssetActions = () => {
  return (
    <div className="asset-actions">
      {actions.map((action) => (
        <Card key={action.id} className="asset-action-card">
          <div className="action-card-content">
            <div className="action-header">
            <div className={`action-icon ${action.variant}`}>
                <SvgIcon name={action.icon} size={22} />
            </div>

            <h4 className="action-title">{action.title}</h4>
            </div>

            <p className="action-description">{action.description}</p>


            <button
              className={`action-btn action-btn-${action.variant}`}
            >
              {action.buttonText}
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AssetActions;
