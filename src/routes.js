import Error from "@/views/Error";
import Home from "@/views/Home";
import NewEmp from "@/views/NewEmployee";

import Admin from "@/views/admin/Index";

import Employees from "@/views/Employee";
import EmpEdit from "@/views/EditEmp";
import Password from "@/views/Password";
import Login from "@/views/Login";
// Leaves Management
import Leaves from "@/views/leaves/Index";
import NewLeave from "@/views/leaves/New";
import LeaveApplied from "@/views/leaves/applied/Applied";
import LeaveQouta from "@/views/leaves/qouta/Index";
import LeaveSingle from "@/views/leaves/Single";
import MoreLeaves from "@/views/leaves/More";
import AppliedLeavesIndex from "@/views/leaves/applied/Index";

export const routes = [
  // Page not found
  { path: "/:pathMatch(.*)*", redirect: { name: "Error" } },
  { path: "/exception", name: "Error", component: Error },
  // Login Route
  { path: "/", component: Home, name: "Home" },
  // Leaves Management
  { path: "/admin", component: Admin, name: "Admin Panel" },
  { path: "/leaves", component: Leaves, name: "Leave Management" },
  { path: "/leaves/new", component: NewLeave, name: "Apply Leave" },
  {
    path: "/leaves/applied/:year",
    component: LeaveApplied,
    name: "Applied Leaves Selected",
  },
  {
    path: "/leaves/applied",
    component: AppliedLeavesIndex,
    name: "Applied Leaves",
  },
  { path: "/leaves/qouta", component: LeaveQouta, name: "Leaves Qouta" },
  { path: "/leaves/single/:id", component: LeaveSingle, name: "Single Leave" },
  {
    path: "/leaves/qouta/more",
    component: MoreLeaves,
    name: "More Leave Request Form",
  },

  // admin Panel Routes
  {
    path: "/admin/employees",
    component: Employees,
    name: "Employees Management",
  },
  { path: "/admin/employee/new", component: NewEmp, name: "Registration" },
  {
    path: "/admin/employee/edit/:id",
    component: EmpEdit,
    name: "Edit Employee",
  },
  { path: "/password/update", component: Password, name: "Password Change" },
  { path: "/login", component: Login, name: "Login" },
];
