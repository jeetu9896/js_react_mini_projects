import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const mockFetch = () =>
  new Promise((res) =>
    setTimeout(
      () =>
        res({
          users: 1245,
          revenue: 98740,
          orders: 321,
          active: 87,
          recent: [
            { id: 1, user: "Alice", action: "Placed order #1001", date: "2025-12-07" },
            { id: 2, user: "Bob", action: "Upgraded plan", date: "2025-12-06" },
            { id: 3, user: "Cara", action: "Cancelled subscription", date: "2025-12-05" },
          ],
          trend: [12, 18, 9, 24, 30, 28, 35],
        }),
      450
    )
  );

const Currency = ({ value }) =>
  value.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const Sparkline = ({ data = [] }) => {
  if (!data.length) return null;
  const w = 120;
  const h = 36;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / (max - min || 1)) * h;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="sparkline">
      <polyline fill="none" stroke="#4f46e5" strokeWidth="2" points={points} />
    </svg>
  );
};

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    mockFetch().then((d) => {
      if (mounted) {
        setData(d);
        setLoading(false);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="dashboard-root">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="header-actions">
          <button className="btn">New Report</button>
          <button className="btn btn-ghost">Settings</button>
        </div>
      </header>

      {loading && <div className="loader">Loading dashboard…</div>}

      {!loading && data && (
        <>
          <section className="kpi-grid">
            <div className="card">
              <div className="card-title">Users</div>
              <div className="card-value">{data.users}</div>
              <div className="card-meta">Active: {data.active}%</div>
            </div>

            <div className="card">
              <div className="card-title">Revenue</div>
              <div className="card-value">{Currency({ value: data.revenue })}</div>
              <div className="card-meta">This month</div>
            </div>

            <div className="card">
              <div className="card-title">Orders</div>
              <div className="card-value">{data.orders}</div>
              <div className="card-meta">Processed</div>
            </div>

            <div className="card">
              <div className="card-title">Growth</div>
              <div className="card-value">+{Math.round((data.trend[data.trend.length - 1] / data.trend[0] - 1) * 100)}%</div>
              <div className="card-spark">
                <Sparkline data={data.trend} />
              </div>
            </div>
          </section>

          <section className="main-grid">
            <div className="panel">
              <h3>Recent Activity</h3>
              <table className="activity-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Action</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recent.map((r) => (
                    <tr key={r.id}>
                      <td>#{r.id}</td>
                      <td>{r.user}</td>
                      <td>{r.action}</td>
                      <td>{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="panel small">
              <h3>Quick Actions</h3>
              <div className="actions">
                <button className="btn">Create User</button>
                <button className="btn">Export CSV</button>
                <button className="btn btn-ghost">Manage Plans</button>
              </div>
              <hr />
              <h4>Notifications</h4>
              <ul className="notifications">
                <li>Server CPU at 68%</li>
                <li>New signup: daniel@example.com</li>
                <li>Payment failed for order #998</li>
              </ul>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Dashboard;