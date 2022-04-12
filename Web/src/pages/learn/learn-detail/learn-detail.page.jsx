import { useState } from "react";
import { Link } from "react-router-dom";
import './learn-detail.css'
import TreeComponent from "../../../components/tree/tree.component";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const rootTemplate = (rootNode, select) => {
  console.log(rootNode);
  return (
    <div className="root" key={rootNode?.id}>
      <button className="custom_btn" onClick={select}>
        {rootNode?.name}
      </button>
    </div>
  );
};
const LearnDetailPage = () => {
  const test = {
    name: "Section",
    id: "root",
    children: [
      {
        name: "Section 1",
        icon: "math-icon",
        id: 1,
        children: [
          {
            name: "Week 1",
            icon: "math-icon",
            id: 4,
            children: [
              {
                name: "video bai giang",
                icon: "super math icon",
                id: 11,
                children: [],
              },
              {
                name: "tai lieu",
                icon: "super math icon",
                id: 13,
                children: [],
              },
            ],
          },
        ],
      },
      {
        name: "Section 2",
        icon: "math-icon",
        id: 14,
        children: [
          {
            name: "Week 1",
            icon: "math-icon",
            id: 4,
            children: [
              {
                name: "video bai giang",
                icon: "super math icon",
                id: 5,
                children: [],
              },
              {
                name: "tai lieu",
                icon: "super math icon",
                id: 6,
                children: [],
              },
            ],
          },
        ],
      },
      {
        name: "English 1",
        icon: "english-icon",
        id: 2,
        children: [],
      },
      {
        name: "Physic 1",
        icon: "physic-icon",
        id: 3,
        children: [],
      },
    ],
  };
  const courses = [
    {
      id: 1,
      title: "Math 1",
      cover: "this is the cover",
    },
    {
      id: 2,
      title: "Math 1",
      cover: "this is the cover",
    },
    {
      id: 3,
      title: "Math 1",
      cover: "this is the cover",
    },
  ];
  const [isShowAll, setIsShowAll] = useState(false);
  const {location} = useHistory();
  console.log(location);
  return (
    <div className="learning-detail">
      <div className="learning-navigation">
        <Link to="#" onClick={() => setIsShowAll(!isShowAll)}>
          Show all
        </Link>
        <TreeComponent
          rootTemplate={rootTemplate}
          rootNode={test}
          isShowAll={isShowAll}
        ></TreeComponent>
      </div>
      <div className="learning-area">
        <Link to={`${location.pathname}/online`}>Go to online meeting</Link>
      </div>
    </div>
  );
};

export default LearnDetailPage;
