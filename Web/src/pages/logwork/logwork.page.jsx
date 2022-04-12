import { useEffect } from "react";
import TagComponent, { TagType } from "../../components/tag/tag.component";
import "./logwork.css";
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
const LogworkPage = () => {
  const MySwal = withReactContent(Swal);
  const openModal = () => {
    MySwal.fire({
      title: "Instruction",
      html: (
        <p1>
          Step 1: Register with us by using your school domain <br></br> Step 2:
          Our staffs will contact you for validation <br></br> Step 3: Start
          using our system
        </p1>
      ),
      icon: "info",
      confirmButtonText: "Cool",
    });
  };
  useEffect(() => {
    const loggables = document.getElementsByClassName("loggable");
    for (let index = 0; index < loggables.length; index++) {
      const element = loggables.item(index);
      element.addEventListener("click", () => {
        openModal();
      });
    }
  }, []);
  return (
    <div className="logwork-page">
      <div className="main-tab">
        <table className="beautiful-table">
          <thead>
            <tr>
              <th className="loggable">Mã</th>
              <th className="loggable">Tên task</th>
              <th>Trạng thái</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
              <th>Tổng thời gian</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>111111111111111111</td>
              <td>
                <TagComponent name={"In Process"}></TagComponent>
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>
                <TagComponent name={"In Process"}></TagComponent>
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>
                <TagComponent
                  name={"In Process"}
                  type={TagType.DANGER}
                ></TagComponent>
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>
                <TagComponent name={"In Process"}></TagComponent>
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>
                <TagComponent name={"In Process"}></TagComponent>
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>
                <TagComponent
                  name={"In Process"}
                  type={TagType.WARNING}
                ></TagComponent>
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>
                <TagComponent
                  name={"In Process"}
                  type={TagType.SUCCESS}
                ></TagComponent>
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Display 1/10</td>
            </tr>
          </tbody>
        </table>
        <div className="beautiful-table">
          Detail task here (select task to see)
        </div>
      </div>
      <div className="additional-tab">
        <div className="tab-1">
          <Doughnut data={data}></Doughnut>
        </div>
        <div className="tab-2">
          <Chart type="bar" data={data2} />
        </div>
      </div>
    </div>
  );
};

export default LogworkPage;
