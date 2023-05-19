import React from "react"
const DashboardHome = React.lazy(() => import("./dashboard/home"))
const Users = React.lazy(() => import("./dashboard/users"))
const Leads = React.lazy(() => import("./dashboard/leads"))

export {DashboardHome,Users,Leads}