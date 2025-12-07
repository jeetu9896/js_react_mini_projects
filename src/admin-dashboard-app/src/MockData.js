export const notifications = [
  { id: 1, message: "Low stock alert: Gaming Console", type: "warning" },
  { id: 2, message: "New order received from Priya Singh", type: "info" },
  {
    id: 3,
    message: "Revenue milestone achieved: ₹1,00,000 this month",
    type: "success",
  },
  { id: 4, message: "Order #103 cancelled by customer", type: "error" },
];

export const activityLog = [
  { time: "09:00 AM", activity: "New user registered: Neha" },
  { time: "09:30 AM", activity: "Order #105 shipped" },
  { time: "10:00 AM", activity: "Revenue updated for Week 2" },
  { time: "11:15 AM", activity: "Admin added new product: Drone" },
  { time: "12:00 PM", activity: "Order #106 delivered" },
  { time: "01:30 PM", activity: "Stock updated for Headphones" },
];

export const productsData = [
  { id: 1, name: "Laptop", stock: 35, category: "Electronics", price: 75000 },
  { id: 2, name: "Phone", stock: 120, category: "Electronics", price: 25000 },
  {
    id: 3,
    name: "Headphones",
    stock: 200,
    category: "Accessories",
    price: 3000,
  },
  { id: 4, name: "Smartwatch", stock: 80, category: "Wearables", price: 12000 },
  { id: 5, name: "Tablet", stock: 50, category: "Electronics", price: 18000 },
  { id: 6, name: "Camera", stock: 40, category: "Electronics", price: 45000 },
  {
    id: 7,
    name: "Gaming Console",
    stock: 25,
    category: "Entertainment",
    price: 55000,
  },
];

export const ordersData = [
  {
    id: 101,
    customer: "Amit Sharma",
    product: "Laptop",
    amount: 75000,
    status: "Delivered",
    date: "2025-11-01",
  },
  {
    id: 102,
    customer: "Priya Singh",
    product: "Phone",
    amount: 25000,
    status: "Pending",
    date: "2025-11-03",
  },
  {
    id: 103,
    customer: "Rahul Verma",
    product: "Headphones",
    amount: 3000,
    status: "Cancelled",
    date: "2025-11-04",
  },
  {
    id: 104,
    customer: "Sneha Gupta",
    product: "Smartwatch",
    amount: 12000,
    status: "Delivered",
    date: "2025-11-05",
  },
  {
    id: 105,
    customer: "Karan Mehta",
    product: "Tablet",
    amount: 18000,
    status: "Shipped",
    date: "2025-11-06",
  },
  {
    id: 106,
    customer: "Neha Kapoor",
    product: "Camera",
    amount: 45000,
    status: "Delivered",
    date: "2025-11-07",
  },
  {
    id: 107,
    customer: "Vikas Yadav",
    product: "Gaming Console",
    amount: 55000,
    status: "Pending",
    date: "2025-11-08",
  },
];

export const salesData = [
  { week: "Week 1", orders: 120, revenue: 45000, refunds: 2000 },
  { week: "Week 2", orders: 150, revenue: 52000, refunds: 1500 },
  { week: "Week 3", orders: 180, revenue: 60000, refunds: 3000 },
  { week: "Week 4", orders: 200, revenue: 75000, refunds: 2500 },
];

export const userStats = [
  { month: "Jan", newUsers: 120, activeUsers: 950 },
  { month: "Feb", newUsers: 200, activeUsers: 1100 },
  { month: "Mar", newUsers: 150, activeUsers: 1050 },
  { month: "Apr", newUsers: 300, activeUsers: 1250 },
  { month: "May", newUsers: 250, activeUsers: 1300 },
  { month: "Jun", newUsers: 400, activeUsers: 1500 },
  { month: "Jul", newUsers: 350, activeUsers: 1450 },
  { month: "Aug", newUsers: 500, activeUsers: 1700 },
  { month: "Sep", newUsers: 450, activeUsers: 1650 },
  { month: "Oct", newUsers: 600, activeUsers: 1900 },
  { month: "Nov", newUsers: 550, activeUsers: 1850 },
  { month: "Dec", newUsers: 700, activeUsers: 2100 },
];


export const recentActivities = [
  { time: "30 mins ago", activity: "New user registered" },
  { time: "1 hour ago", activity: "Order #1045 completed" },
  { time: "2 hours ago", activity: "Revenue report generated" },
  { time: "3 hours ago", activity: "New feature deployed" },
  { time: "1 day ago", activity: "Order #1040 refunded" },
];

export const statCards = [
  { title: "Users", value: 2300, change: "+35.7%", trend: "up", color: "green" },
  { title: "Revenue", value: "₹3,56,000", change: "+12.6%", trend: "up", color: "green" },
  { title: "Orders", value: 4580, change: "-3.4%", trend: "down", color: "red" },
  { title: "Refunds", value: 236, change: "+1.1%", trend: "up", color: "green" },
];

export const userGrowthData = [
  { month: "J", users: 120 },
  { month: "F", users: 180 },
  { month: "M", users: 250 },
  { month: "A", users: 300 },
  { month: "M", users: 350 },
  { month: "J", users: 400 },
  { month: "J", users: 450 },
  { month: "A", users: 500 },
  { month: "S", users: 550 },
  { month: "O", users: 600 },
  { month: "N", users: 650 },
  { month: "D", users: 700 },
];

export const revenueData = [
  { week: "Week 1", revenue: 1196 },
  { week: "Week 2", revenue: 1050 },
  { week: "Week 3", revenue: 980 },
  { week: "Week 4", revenue: 875 },
];

export const latestOrders = [
  { id: 105, customer: "Amandeep Singh", amount: "₹1,200.00", status: "Completed", date: "23 Oct 2023" },
  { id: 104, customer: "Priya Sharma", amount: "₹749.00", status: "Pending", date: "22 Oct 2023" },
  { id: 103, customer: "Rahul Verma", amount: "₹499.99", status: "Declined", date: "21 Oct 2023" },
  { id: 102, customer: "Sneha Patel", amount: "₹999.00", status: "Completed", date: "20 Oct 2023" },
  { id: 101, customer: "Arjun Deshmukh", amount: "₹249.99", status: "Pending", date: "19 Oct 2023" },
  { id: 100, customer: "Neha Kapoor", amount: "₹849.00", status: "Completed", date: "19 Oct 2023" },
];
