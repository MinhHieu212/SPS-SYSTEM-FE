import Home from "../Pages/Home/Home";
import Printing from "../Pages/Printing/Printing";
import Support from "../Pages/Support/Support";
import History from "../Pages/History/History";
import Login from "../Pages/Login/Login";
import Report from "../Pages/Report/Report";
import Manage from "../Pages/Manage/Manage";
import Config from "../Pages/Config/Config";
import Activities from "../Pages/Activities/Activities";
import Test from "../Pages/TestModal/Test";
import ConfigFile from "../Pages/ConfigFile/ConfigFile";
import Bkpay from "../Pages/Bkpay/BkPay";

// no required login
const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: "beforeLogin",
  },
  {
    path: "/SPS-FE-Project",
    component: Home,
    layout: "beforeLogin",
  },
  {
    path: "/Home",
    component: Home,
    layout: "default",
  },
  {
    path: "/Printing",
    component: Printing,
    layout: "default",
  },
  {
    path: "/History",
    component: History,
    layout: "default",
  },
  {
    path: "/Support",
    component: Support,
    layout: "default",
  },
  {
    path: "/Config",
    component: Config,
    layout: "default",
  },
  {
    path: "/Manage",
    component: Manage,
    layout: "default",
  },
  {
    path: "/Report",
    component: Report,
    layout: "default",
  },
  {
    path: "/Activities",
    component: Activities,
    layout: "default",
  },
  {
    path: "/ConfigFile",
    component: ConfigFile,
    layout: "default",
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/Bkpay",
    component: Bkpay,
  },
  {
    path: "/Test",
    component: Test,
  },
  {
    path: "*",
    component: Error,
  },
];

// required login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
