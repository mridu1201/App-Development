import "./index.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login";
import { States } from "./services/States";
import ApplicationstatusDashboard from "./pages/user/ApplicationstatusDashboard";
import Home from "./pages/user/Home";
import Email from "./assets/components/Email";
import About from "./assets/components/home/About";
import Admission from "./assets/components/home/Admission";
import Testimonial from "./assets/components/home/Testimonial";
import Faq from "./assets/components/home/Faq";
import ContactUs from "./assets/components/home/ContactUs";
import TermsCondition from "./pages/user/TermsCondition";
import Application from "./pages/user/Application";
import PrivacyPolicy from "./pages/user/Privacy";
import AdmissionHome from "./pages/user/AdmissionHome";
import EditUser from "./pages/user/UserUpdate";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Report from "./pages/admin/Report";
import Payment from "./pages/user/Payment";

function App() {
  
  return (
    <div>
      <>
        <States>
        <Routes>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/home/about" exact element={<About />}></Route>
          <Route path="/home/admission" exact element={<Admission />}></Route>
          <Route path="/home/testimonials" exact element={<Testimonial />}></Route>
          <Route
            path="/home/testimonial"
            exact
            element={<Testimonial />}
          ></Route>
          <Route path="/home/faq" exact element={<Faq />}></Route>
          <Route path="/home/contact" exact element={<ContactUs />}></Route>
          <Route path="/admin/dashboard" exact element={<Dashboard />}></Route>
          <Route path="/car" exact element={<Email />}></Route>
          <Route
            path="/appstatussuccess"
            exact
            element={<ApplicationstatusDashboard />}
          />
          <Route path="/application" exact element={<Application />} />
          <Route path="/terms" exact element={<TermsCondition />} />
          <Route path="/privacy" exact element={<PrivacyPolicy />} />
          <Route path="/admissionhome" exact element={<AdmissionHome />} />
          <Route path="/profile" exact element={<Profile/>} />
          <Route path="/editprofile" exact element={<EditUser/>} />
          <Route path="/admin/users" exact element={<Users/>}/>
          <Route path="/admin/reports" exact element={<Report/>}/>
          <Route path="/payment" exact element={<Payment/>}/>
          {/* <Route path="/admin/dashboard" exact element={<AdminDashboard/>} /> */}
          {/* <Route path="/admin/dashboard" exact element={<AdminHome/>} /> */}
        </Routes>
        </States>
      </>
    </div>
  );
}

export default App;


