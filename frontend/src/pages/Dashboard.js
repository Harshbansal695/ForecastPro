import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const COLORS = ["#4a90e2", "#5ba3f5", "#6bb6ff", "#87ceeb", "#b0e0e6"];

  // ===============================
  // Monthly Revenue Data
  // ===============================
  const monthlyRevenueData = [
    { month: "Jan 2017", revenue: 113278.41, avgWeekly: 22655.68 },
    { month: "Feb 2017", revenue: 297698.35, avgWeekly: 74424.59 },
    { month: "Mar 2017", revenue: 398497.63, avgWeekly: 99624.41 },
    { month: "Apr 2017", revenue: 488573.29, avgWeekly: 97714.66 },
    { month: "May 2017", revenue: 529555.99, avgWeekly: 132388.99 },
    { month: "Jun 2017", revenue: 491746.57, avgWeekly: 122936.64 },
    { month: "Jul 2017", revenue: 654795.65, avgWeekly: 130959.13 },
    { month: "Aug 2017", revenue: 572772.82, avgWeekly: 143193.21 },
    { month: "Sep 2017", revenue: 702480.57, avgWeekly: 175620.14 },
    { month: "Oct 2017", revenue: 876263.09, avgWeekly: 175252.62 },
    { month: "Nov 2017", revenue: 1046938.3, avgWeekly: 261734.57 },
    { month: "Dec 2017", revenue: 1077146.06, avgWeekly: 215429.21 },
  ];

  // ===============================
  // Top Categories Overall
  // ===============================
  const topCategoriesData = [
    { name: "Health & Beauty", sales: 1258681.34 },
    { name: "Watches & Gifts", sales: 1205005.68 },
    { name: "Bed Bath Table", sales: 1036988.68 },
    { name: "Sports & Leisure", sales: 988048.97 },
    { name: "Computers & Accessories", sales: 911954.32 },
  ];

  // ===============================
  // Regional Orders
  // ===============================
  const regionalSalesData = [
    { name: "Southeast", value: 2287 },
    { name: "South", value: 668 },
    { name: "Central-West", value: 79 },
    { name: "Northeast", value: 56 },
    { name: "North", value: 5 },
  ];

  // ===============================
  // Top Category by Season
  // ===============================
  const seasonalCategoryData = [
    { season: "Winter", category: "Health & Beauty", sales: 3454 },
    { season: "Summer", category: "Bed Bath Table", sales: 2303 },
    { season: "Spring", category: "Bed Bath Table", sales: 2061 },
    { season: "Rainy", category: "Bed Bath Table", sales: 3223 },
  ];

  // ===============================
  // KPI Calculations
  // ===============================
  const totalRevenue = monthlyRevenueData.reduce(
    (sum, item) => sum + item.revenue,
    0,
  );

  const totalOrders = regionalSalesData.reduce(
    (sum, item) => sum + item.value,
    0,
  );

  const avgOrderValue = totalRevenue / totalOrders;

  const bestMonth = monthlyRevenueData.reduce((prev, current) =>
    prev.revenue > current.revenue ? prev : current,
  );

  return (
    <div className="dashboard">
      <div className="dashboard-hero">
        <div className="container">
          <h1 className="dashboard-title">E-Commerce Analytics Dashboard</h1>
          <p className="dashboard-subtitle">Olist Brazilian Dataset Analysis</p>
        </div>
      </div>

      <main className="dashboard-main">
        <div className="container">
          {/* KPI CARDS */}
          <div className="metrics-grid">
            <div className="metric-card large">
              <h3>Total Revenue</h3>
              <p>R$ {totalRevenue.toLocaleString()}</p>
            </div>

            <div className="metric-card large">
              <h3>Total Orders</h3>
              <p>{totalOrders.toLocaleString()}</p>
            </div>

            <div className="metric-card large">
              <h3>Average Order Value</h3>
              <p>R$ {avgOrderValue.toFixed(2)}</p>
            </div>

            <div className="metric-card large highlight">
              <h3>Best Month</h3>
              <p>{bestMonth.month}</p>
              <small>R$ {bestMonth.revenue.toLocaleString()}</small>
            </div>
          </div>

          {/* Monthly Revenue */}
          <div className="card">
            <h2>Monthly Revenue & Avg Weekly Revenue</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e1e1e",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#4a90e2"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="avgWeekly"
                  stroke="#87ceeb"
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Charts Grid */}
          <div className="charts-grid">
            {/* Top Categories */}
            <div className="card wide-card">
              <h2>Top Categories by Sales</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={topCategoriesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    interval={0}
                    angle={-10}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e1e1e",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Bar dataKey="sales" fill="#4a90e2" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Regional Distribution */}
            <div className="card">
              <h2>Regional Orders Distribution</h2>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={regionalSalesData}
                    dataKey="value"
                    outerRadius={130}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {regionalSalesData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e1e1e",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* NEW: Seasonality Chart */}
          <div className="card">
            <h2>Top Category Sales by Seasonality</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={seasonalCategoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="season" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e1e1e",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="sales" fill="#5ba3f5" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
