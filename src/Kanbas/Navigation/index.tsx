import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { useLocation } from "react-router-dom";
 
export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname.includes(path) ? 'bg-white text-danger' : 'bg-black text-white';
 
  return (
      <div id="wd-kanbas-navigation" className="list-group rounded-0">
      <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0">
      <img src="/images/NEU.png" width="75px" />
      </a>
      <a id="wd-account-link" href="#/Kanbas/Account" className={`list-group-item text-center ${isActive('/Kanbas/Account')}`}>
      <FaRegCircleUser className="fs-1" /><br />
              Account
      </a>
      <a id="wd-dashboard-link" href="#/Kanbas/Dashboard" className={`list-group-item text-center ${isActive('/Kanbas/Dashboard')}`}>
      <AiOutlineDashboard className="fs-1" /><br />
              Dashboard
      </a>
      <a id="wd-course-link" href="#/Kanbas/Courses" className={`list-group-item text-center ${isActive('/Kanbas/Courses')}`}>
      <LiaBookSolid className="fs-1" /><br />
              Courses
      </a>
      <a id="wd-calendar-link" href="#/Kanbas/Calendar" className={`list-group-item text-center ${isActive('/Kanbas/Calendar')}`}>
      <FaCalendarAlt className="fs-1" /><br />
              Calendar
      </a>
      <a id="wd-inbox-link" href="#/Kanbas/Inbox" className={`list-group-item text-center ${isActive('/Kanbas/Inbox')}`}>
      <FaInbox className="fs-1" /><br />
              Inbox
      </a>
      <a id="wd-labs-link" href="#/Kanbas/Labs" className={`list-group-item text-center ${isActive('/Kanbas/Labs')}`}>
      <CiSettings className="fs-1" /><br />
              Labs
      </a>
      </div>
  );
}