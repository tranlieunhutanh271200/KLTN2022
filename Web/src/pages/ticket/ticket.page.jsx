import { useEffect, useState } from "react";
import TagComponent, { TagType } from "../../components/tag/tag.component";
import "./ticket.css";
import {
  Chart as ChartJS,
  ArcElement,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";
import faker from "faker";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LoadingComponent from "../../components/loading/loading.component";
ChartJS.register(
  ArcElement,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);
export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data2 = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
};
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
  {
    id: 2,
    title: "Xin nghi hoc ngay 26/3",
    status: "Approved",
    supervisor: "Ms. Le Thi Minh Chau",
    detail: "Vi hom nay em bi om nen em xin phep nghi hoc",
  },
];
const TicketPage = () => {
  const [tickets, setTickets] = useState([]);
  const [currentTicket, setCurrentTicket] = useState(null);
  const [isSelectTicketLoading, setIsSelectTicketLoading] = useState({
    status: false,
    ticket: null,
  });
  useEffect(() => {
    let isMounted = true;
    let abortController = new AbortController();
    //Calling api here
    return () => {
      isMounted = false;
      abortController.abort();
    };
  });
  const MySwal = withReactContent(Swal);
  const openCreateModal = () =>{
    MySwal.fire({
      title: "",
      html: (
        <p>
          Step 1: Register with us by using your school domain <br></br> Step 2:
          Our staffs will contact you for validation <br></br> Step 3: Start
          using our system
        </p>
      ),
      icon: "info",
      confirmButtonText: "Create",
    });
  }
  const openEditModal = () => {
    MySwal.fire({
      title: "",
      html: (
        <p>
          Step 1: Register with us by using your school domain <br></br> Step 2:
          Our staffs will contact you for validation <br></br> Step 3: Start
          using our system
        </p>
      ),
      icon: "warning",
      confirmButtonText: "Cool",
    });
  };
  const openDeleteModal = () => {
    MySwal.fire({
      title: "",
      html: (
        <p>
          Step 1: Register with us by using your school domain <br></br> Step 2:
          Our staffs will contact you for validation <br></br> Step 3: Start
          using our system
        </p>
      ),
      icon: "danger",
      confirmButtonText: "Cool",
    });
  };
  const selectTicket = (ticket) => {
    setIsSelectTicketLoading({ status: true, ticket: ticket });
  };
  return (
    <div className="ticket-page">
      <div className="current-tickets">
        <button className="btn btn-primary" onClick={() => openCreateModal()}>Tạo ticket</button>
        <table>
          <thead>
            <tr>
              <th>Mã</th>
              <th>Loại phiếu</th>
              <th>Tiêu đề</th>
              <th>Trạng thái</th>
              <th>Ngày tạo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ticket.map((t, idx) => (
              <tr key={idx}>
                <td className="clickable" onClick={() => selectTicket(t)}>
                  AB-{t.id}
                </td>
                <td>
                  <TagComponent type={TagType.INFOR} name="Phép"></TagComponent>
                </td>
                <td className="clickable" onClick={() => selectTicket(t)}>
                  {t.title}
                </td>
                <td>
                  <TagComponent
                    type={TagType.INFOR}
                    name={t.status}
                  ></TagComponent>
                </td>
                <td>07/04/2022</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => openEditModal()}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => openDeleteModal()}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>1 - 3 of 3</div>
      </div>
      <div className="navigation">
        <div className="box-1">
          {isSelectTicketLoading.status ? (
            <LoadingComponent
              type={"circle"}
              timelapse={1000}
              end={() => {
                setCurrentTicket(isSelectTicketLoading.ticket);
                setIsSelectTicketLoading({ status: false });
              }}
            ></LoadingComponent>
          ) : (
            !currentTicket ?
              "Select ticket to see detail" : <div className="ticket-detail">
              <p>{currentTicket.title}</p>
              <p>{currentTicket.supervisor}</p>
              <p>{currentTicket.detail}</p>
            </div>
          )}
        </div>
        <div className="box-2">
          <Doughnut data={data}></Doughnut>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
