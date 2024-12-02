import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdHistoryEdu } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";

export const SideBar = () => {
  return (
    <Stack gap={1}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          <MdDashboard /> Dashboard
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/books">
          <MdLibraryBooks /> Books
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/all">
          <FaUserFriends /> All User
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/borrow-history">
          <MdHistoryEdu /> Borrow History
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
          <AiFillProfile /> Profile
        </Link>
      </div>
    </Stack>
  );
};
