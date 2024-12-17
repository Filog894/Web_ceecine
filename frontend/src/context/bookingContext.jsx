import React, { createContext, useContext, useState } from 'react';

// Tạo context
const BookingContext = createContext();

// Tạo Provider cho BookingContext
export const BookingProvider = ({ children }) => {
  const [bookingInfo, setBookingInfo] = useState({
    movie: '',
    showtime: '',
    cinema: '',
    seats: [],
    snacks: [],
    totalPrice: 0,
  });

  const updateBookingInfo = (key, value) => {
    setBookingInfo((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <BookingContext.Provider value={{ bookingInfo, updateBookingInfo }}>
      {children}
    </BookingContext.Provider>
  );
};

// Custom hook để dùng BookingContext
export const useBooking = () => {
  return useContext(BookingContext);
};
