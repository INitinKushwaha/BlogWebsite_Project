import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user); // Access user info from Redux store
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {user && (
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border  shadow-sm px-4 py-2 bg-custom-gradient text-sm font-medium text-gray-700 hover:bg-red-400 focus:outline-none"
            onClick={toggleDropdown}
          >
            {user.name}
          </button>
          {dropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-50 rounded-md shadow-lg bg-custom-gradient ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <button
                  onClick={logoutHandler}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 "
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LogoutBtn;
