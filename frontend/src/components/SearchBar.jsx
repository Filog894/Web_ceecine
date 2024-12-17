import { nodeName } from 'jquery';
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { FaSearch } from "react-icons/fa";

// Hàm chức năng thu nhỏ mở rộng tìm kiếm

const SearchBar = ({ onSearch }) => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const [searchTerm, setSearchTerm] = useState(''); // State for search input value

  // Toggle the visibility of the search bar
  const toggleSearchBar = () => {
    if (isVisible) {
      // Nếu thanh tìm kiếm đã hiển thị, thì thực hiện tìm kiếm
      onSearch(searchTerm); // Gọi hàm tìm kiếm từ component cha
    }
    // Nếu thanh tìm kiếm chưa hiển thị, thì hiển thị thanh tìm kiếm
    setIsVisible((prev) => !prev);
  };

  // Handle the search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Search bar, conditionally rendered based on isVisible state */}
      {isVisible && (
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          style={{
            position: 'absolute',
            top: '50%',
            right: '50px',
            transform: 'translateY(-50%)',
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
            transition: 'width 0.3s ease',
            width: isVisible ? '200px' : '0', // Smooth transition
          }}
        />
      )}

      {/* Button/Icon to toggle the search bar */}      
      <button id="search" onClick={toggleSearchBar} style={{ cursor: 'pointer', verticalAlign:'middle'}}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 28 28" fill="none" >
      <path d="M26.75 26.75L19.388 19.388M19.388 19.388C21.3108 17.4653 22.5 14.809 22.5 11.875C22.5 6.00697 17.743 1.25 11.875 1.25C6.00697 1.25 1.25 6.00697 1.25 11.875C1.25 17.743 6.00697 22.5 11.875 22.5C14.809 22.5 17.4653 21.3108 19.388 19.388Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg> </button>
      
    </div>
  );
};

export default SearchBar;