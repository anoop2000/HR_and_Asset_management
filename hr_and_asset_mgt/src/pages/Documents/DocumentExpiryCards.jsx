import "../../style/Document.css";
import Card from "../../components/reusable/Card";
import SvgIcon from "../../components/svgIcon/svgView";

const reminders = [
  {
    title: "Critical Alert",
    message: "Notify 7 days before expiry",
    recipients: "Send to: Admin, Department Head",
  },
  {
    title: "Warning Alert",
    message: "Notify 30 days before expiry",
    recipients: "Send to: Admin, Responsible Person",
  },
  {
    title: "Early Warning",
    message: "Notify 60 days before expiry",
    recipients: "Send to: Admin",
  },
];


const ExpiryReminders = () => {
  return (
    <Card className="expiry-reminders-card">
      {/* Section Header */}
      <div className="expiry-header">
        <SvgIcon name="calendar" size={20} />
        <span>Expiry Reminders</span>
      </div>

      {/* Reminder Cards */}
      <div className="expiry-grid">
        {reminders.map((item, index) => (
          <div key={index} className="expiry-item">
            <h4>{item.title}</h4>
            <p className="expiry-message">{item.message}</p>
            <p className="expiry-recipients">{item.recipients}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ExpiryReminders;
