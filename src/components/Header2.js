import React, { useState } from 'react';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex flex-col lg:flex-row justify-between items-center lg:items-start">
      <div className="flex items-center w-full lg:w-auto">
        <button
          className="lg:hidden text-gray-600 hover:text-gray-800"
          onClick={() => document.getElementById('sidebarCollapse').click()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="text-lg font-semibold lg:ml-4">Dashboard</div>
      </div>

      <div className={`lg:flex flex-grow lg:items-center ${searchOpen ? 'block' : 'hidden'}`}>
        <form className="relative flex-1" action="#" method="get">
          <input
            type="text"
            className="w-full p-2 pl-10 border rounded-md border-gray-300 placeholder-gray-500"
            placeholder="Search (Ctrl+/)"
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setSearchOpen(false)}
          />
          <button
            type="submit"
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
          <span className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500">(Ctrl+/)</span>
        </form>

        <nav className="mt-4 lg:mt-0 lg:ml-6">
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <li className="relative group">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 flex items-center space-x-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18m-7 5h7" />
                </svg>
                <span>Home</span>
              </a>
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li><a className="dropdown-item" href="../index.html">Home (Main)</a></li>
                <li><a className="dropdown-item" href="../home-classic.html">Home (Classic)</a></li>
                <li><a className="dropdown-item" href="../home-rounded.html">Home (Rounded)</a></li>
                <li><a className="dropdown-item" href="../home-map.html">Home (Map)</a></li>
                <li><a className="dropdown-item" href="../home-grid.html">Home (Grid)</a></li>
                <li><a className="dropdown-item" href="../home-waves.html">Home (Waves)</a></li>
                <li><a className="dropdown-item" href="../home-car.html">Home (Car)&nbsp;<span className="badge text-bg-primary fw-semibold">New</span></a></li>
              </ul>
            </li>

            <li className="relative group">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 flex items-center space-x-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 10l5 5m0 0l-5 5m5-5H3" />
                </svg>
                <span>Dashboard</span>
              </a>
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li><a className="dropdown-item" href="dashboard.html">Dashboard</a></li>
                <li><a className="dropdown-item" href="bookings.html">Bookings</a></li>
                <li><a className="dropdown-item" href="messages.html">Message</a></li>
                <li><a className="dropdown-item" href="wallet.html">Wallet</a></li>
                <li><a className="dropdown-item" href="profile.html">Edit Profile</a></li>
                <li><a className="dropdown-item" href="add-listing.html">Add listing</a></li>
                <li><a className="dropdown-item" href="my-listing.html">My listing</a></li>
                <li><a className="dropdown-item" href="bookings.html">Bookings</a></li>
                <li><a className="dropdown-item" href="reviews.html">Reviews</a></li>
                <li><a className="dropdown-item" href="bookmark.html">Bookmark</a></li>
                <li><a className="dropdown-item" href="setting-app.html">Settings</a></li>
              </ul>
            </li>

            <li className="relative group">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 flex items-center space-x-1"
              >
                <span>Listing</span>
              </a>
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li className="relative group">
                  <a className="dropdown-item dropdown-toggle" href="#">List View</a>
                  <ul className="absolute left-48 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li><a className="dropdown-item" href="../listings-list-left.html">Left Sidebar</a></li>
                    <li><a className="dropdown-item" href="../listings-list-right.html">Right Sidebar</a></li>
                  </ul>
                </li>
                <li className="relative group">
                  <a className="dropdown-item dropdown-toggle" href="#">Grid View 1</a>
                  <ul className="absolute left-48 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li><a className="dropdown-item" href="../listings-grid-1-left.html">Left Sidebar</a></li>
                    <li><a className="dropdown-item" href="../listings-grid-1-right.html">Right Sidebar</a></li>
                  </ul>
                </li>
                <li className="relative group">
                  <a className="dropdown-item dropdown-toggle" href="#">Grid View 2</a>
                  <ul className="absolute left-48 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li><a className="dropdown-item" href="../listings-grid-2-left.html">Left Sidebar</a></li>
                    <li><a className="dropdown-item" href="../listings-grid-2-right.html">Right Sidebar</a></li
                    </ul>
                </li>
                <li className="relative group">
                  <a className="dropdown-item dropdown-toggle" href="#">Half Map + Sidebar</a>
                  <ul className="absolute left-48 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li><a className="dropdown-item" href="../listings-map.html">Half Map List</a></li>
                    <li><a className="dropdown-item" href="../listings-map-car.html">Half Map List (Car)&nbsp;<span className="badge text-bg-primary fw-semibold">New</span></a></li>
                    <li><a className="dropdown-item" href="../listings-map-grid-1.html">Half Map Grid 1</a></li>
                    <li><a className="dropdown-item" href="../listings-map-grid-2.html">Half Map Grid 2</a></li>
                  </ul>
                </li>
                <li className="relative group">
                  <a className="dropdown-item dropdown-toggle" href="#">Listing Details</a>
                  <ul className="absolute left-48 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li><a className="dropdown-item" href="../listing-details.html">Listing Details 1</a></li>
                    <li><a className="dropdown-item" href="../listing-details-2.html">Listing Details 2</a></li>
                    <li><a className="dropdown-item" href="../listing-details-car.html">Listing Details Car&nbsp;<span className="badge text-bg-primary fw-semibold">New</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 flex items-center space-x-1"
              >
                <span>Template</span>
              </a>
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li className="relative group">
                  <a className="dropdown-item dropdown-toggle" href="#">About</a>
                  <ul className="absolute left-48 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li><a className="dropdown-item" href="../about.html">About us 1</a></li>
                    <li><a className="dropdown-item" href="../about-2.html">About us 2</a></li>
                  </ul>
                </li>
                <li className="relative group">
                  <a className="dropdown-item dropdown-toggle" href="#">Agent</a>
                  <ul className="absolute left-48 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li><a className="dropdown-item" href="../agent.html">Agent</a></li>
                    <li><a className="dropdown-item" href="../agent-details.html">Agent Details</a></li>
                  </ul>
                </li>
                <li className="relative group">
                  <a className="dropdown-item dropdown-toggle" href="#">Blog</a>
                  <ul className="absolute left-48 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li><a className="dropdown-item" href="../blog.html">Blog</a></li>
                    <li><a className="dropdown-item" href="../blog-details.html">Blog Details</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="../add-listing.html">Add Listing</a></li>
                <li><a className="dropdown-item" href="../contact.html">Contact</a></li>
                <li><a className="dropdown-item" href="../pricing.html">Pricing</a></li>
                <li className="relative group">
                  <a className="dropdown-item dropdown-toggle" href="#">Authentication</a>
                  <ul className="absolute left-48 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Add authentication-related links here */}
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
