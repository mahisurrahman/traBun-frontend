import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/homelayout/HomeLayout";
import LoginPage from "../pages/loginPage/LoginPage";
import Dashboard from "../pages/dashboard/Dashboard";
import MyTasks from "../pages/myTasks/MyTasks";
import Calender from "../pages/calender/Calender";
import Statistics from "../pages/statistics/Statistics";
import Documents from "../pages/documents/Documents";
import AddPeople from "../pages/addPeople/AddPeople";
import RemovePeople from "../pages/removePeople/RemovePeople";
import AssignedTasks from "../pages/assignedTasks/AssignedTasks";
import Kanban from "../pages/kanban/Kanban";
import Notes from "../pages/notes/Notes";
import Attendance from "../pages/attendance/Attendance";
import SalaryClearance from "../pages/salaryClearance/SalaryClearance";
import Settings from "../pages/settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/mytasks",
        element: <MyTasks />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/stats",
        element: <Statistics />,
      },
      {
        path: "/documents",
        element: <Documents />,
      },
      {
        path: "/add-people",
        element: <AddPeople />,
      },
      {
        path: "/remove-people",
        element: <RemovePeople />,
      },
      {
        path: "/assigned-tasks",
        element: <AssignedTasks />,
      },
      {
        path: "/trabun",
        element: <Kanban />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/salary",
        element: <SalaryClearance/>
      },
      {
        path: "/settings",
        element: <Settings/>
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
