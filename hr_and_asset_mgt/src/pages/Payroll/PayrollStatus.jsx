
import { useState } from "react";
import SvgIcon from "../../components/svgIcon/svgView";
import "../../style/Payroll.css";

export default function PayrollStatus() {
  // 0 = Draft, 1 = Processing, 2 = Completed
  const [step, setStep] = useState(0);

  const handleAction = () => {
    if (step === 0) setStep(1);
    else if (step === 1) setStep(2);
  };

  const buttonConfig = () => {
    if (step === 0) {
      return {
        text: "Start Processing",
        className: "status-btn primary",
      };
    }
    if (step === 1) {
      return {
        text: "Complete Payroll",
        className: "status-btn success",
      };
    }
    return {
      text: "Completed",
      className: "status-btn completed",
      icon: "circle-tick",
    };
  };

  const btn = buttonConfig();

  return (
    <div className="payroll-status-card">
      {/* Header */}
      <div className="payroll-status-header">
        <div>
          <h3 className="payroll-status-title">Payroll Status</h3>
          <p className="payroll-status-subtitle">
            Current processing status for 2025-11
          </p>
        </div>

        <button
          className={btn.className}
          onClick={handleAction}
          disabled={step === 2}
        >
          {btn.icon && <SvgIcon name={btn.icon} size={16} />}
          {btn.text}
        </button>
      </div>

      {/* Stepper */}
      <div className="payroll-stepper">
        {/* Step 1 */}
        <div className={`step ${step >= 0 ? "active" : ""}`}>
          <span className="step-circle">1</span>
          <span className="step-label">Draft</span>
        </div>

        <div className={`step-line ${step >= 1 ? "active" : ""}`} />

        {/* Step 2 */}
        <div className={`step ${step >= 1 ? "active" : ""}`}>
          <span className="step-circle">2</span>
          <span className="step-label">Processing</span>
        </div>

        <div className={`step-line ${step >= 2 ? "completed" : ""}`} />

        {/* Step 3 */}
        <div className={`step ${step === 2 ? "completed" : ""}`}>
          <span className="step-circle">3</span>
          <span className="step-label">Completed</span>
        </div>
      </div>
    </div>
  );
}
