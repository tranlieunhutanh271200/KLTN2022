import { useEffect, useState } from "react";
import "./ticket.css";
const ticket = [
  {
    id: 0,
    title: "Xin nghi hoc ngay 22/3",
    status: "Pending",
    supervisor: "Ms. Le Thi Minh Chau",
    detail: "Vi hom nay em bi om nen em xin phep nghi hoc",
  },
  {
    id: 1,
    title: "Xin nghi hoc ngay 24/3",
    status: "Approved",
    supervisor: "Ms. Le Thi Minh Chau",
    detail: "Vi hom nay em bi om nen em xin phep nghi hoc",
  },
];
const TicketPage = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    let isMounted = true;
    let abortController = new AbortController();
    //Calling api here
    return () => {
      isMounted = false;
      abortController.abort();
    };
  });
  return (
    <div className="ticket-page">
      <div className="current-tickets">this is your current tickets</div>
      <div className="navigation">
        <div className="box">This is box one</div>
        <div className="box">This is box two</div>
      </div>
    </div>
  );
};

export default TicketPage;
