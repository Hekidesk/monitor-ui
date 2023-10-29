/*!

=========================================================
* Now UI Dashboard React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "media-2_sound-wave",
    component: <Dashboard />,
    layout: "/monitor",
  },
  {
    path: "/patients",
    name: "Patients",
    icon: "users_single-02",
    component: <UserPage />,
    layout: "/monitor",
  },
];
export default dashRoutes;
