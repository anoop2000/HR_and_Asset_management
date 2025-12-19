
import "../../style/Attendance.css";

export default function AttendanceFilters({ selectedDate, onDateChange }) {
  return (
    <div className="attendance-filters">
      <div className="filter-group">
        <label className="filter-label">Date</label>
        <div className="filter-input-wrapper">
          <input
            type="date"
            className="filter-input"
            value={selectedDate}            
            onChange={(e) => onDateChange(e.target.value)} 
          />
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">Department</label>
        <select className="filter-input filter-select">
          <option>All Departments</option>
          <option>Sales</option>
          <option>HR</option>
          <option>Finance</option>
          <option>Operations</option>
          <option>IT</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Shift</label>
        <select className="filter-input filter-select">
          <option>All Shifts</option>
          <option>Day Shift</option>
          <option>Night Shift</option>
          <option>Flexible</option>
        </select>
      </div>
    </div>
  );
}
