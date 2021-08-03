import Error from "@/views/Error";
import Home from "@/views/Home";
import NewEmp from "@/views/NewEmployee";

import Employees from "@/views/Employee";
import EmpEdit from "@/views/EditEmp";
import Password from "@/views/Password";
import Login from "@/views/Login";
// Leaves Management
import Leaves from "@/views/Leaves";
import NewLeave from "@/views/leaves/New";
import LeaveApplied from "@/views/leaves/Applied";
import LeaveQouta from "@/views/leaves/Qouta";

export const routes = [
  // Page not found
  { path: "/:pathMatch(.*)*", redirect: { name: "Error" } },
  { path: "/exception", name: "Error", component: Error },
  // Login Route
  { path: "/", component: Home, name: "Home" },
  // Leaves Management
  { path: "/leaves", component: Leaves, name: "Leave Management" },
  { path: "/leaves/new", component: NewLeave, name: "Apply Leave" },
  { path: "/leaves/applied", component: LeaveApplied, name: "Applied Leaves" },
  { path: "/leaves/qouta", component: LeaveQouta, name: "Leaves Qouta" },
  // admin Panel Routes
  { path: "/employees", component: Employees, name: "Employees Management" },
  { path: "/employee/new", component: NewEmp, name: "Registration" },
  { path: "/employee/edit/:id", component: EmpEdit, name: "Edit Employee" },
  { path: "/password/update", component: Password, name: "Password Change" },
  { path: "/login", component: Login, name: "Login" },
];
