import Error from "@/views/Error";
import Home from "@/views/Home";
import NewEmp from "@/views/NewEmployee";
import Leaves from "@/views/Leaves";
import Employees from "@/views/Employee";
import EmpEdit from "@/views/EditEmp";

export const routes = [
  // Page not found
  { path: "/:pathMatch(.*)*", redirect: { name: "Error" } },
  { path: "/exception", name: "Error", component: Error },
  // Login Route
  { path: "/", component: Home, name: "Home" },
  { path: "/leaves", component: Leaves, name: "Leave Management" },
  { path: "/employees", component: Employees, name: "Employees Management" },
  // admin Panel Routes
  { path: "/employee/new", component: NewEmp, name: "Registration" },
  { path: "/employee/edit/:id", component: EmpEdit, name: "Edit Employee" },
];
