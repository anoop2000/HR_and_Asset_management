

import Card from "./Card";
import SvgIcon from "../../components/svgIcon/svgView";
import "../../style/Attendance.css";

export default function StatCard({
  title,
  value,
  percentage,
  icon,
  iconColor,
  footerLabel,
}) {
    
  return (
    <Card className="stat-card">
      <div className="stat-card-header">
        <span className="stat-title">{title}</span>
        <div
          className="stat-icon"
          style={{ color: iconColor }}
        >
          <SvgIcon name={icon} size={18} />
        </div>
      </div>

      <div className="stat-value">{value}</div>

      {percentage && (
        <div className="stat-percentage">{percentage}</div>
      )}

      {footerLabel && (
        <div className="stat-footer">{footerLabel}</div>
      )}
    </Card>
  );
}
