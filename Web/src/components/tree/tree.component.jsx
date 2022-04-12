import { useRef } from "react";
import "./tree.css";
function TreeComponent({ rootNode, isShowAll, rootTemplate }) {
  const childrenRef = useRef();

  const select = () => {
      childrenRef.current.classList.toggle('collapsed');
  }
  return (
    <div className="tree_component">
      {!rootTemplate ? <div className="root" key={rootNode.id}>
        <button onClick={select}>{rootNode.name}</button>
      </div> : rootTemplate(rootNode, select) } 
      <div ref={childrenRef} className={`children ${!isShowAll ? 'collapsed' : ''}`}>
        <ul>
          {rootNode.children.map((child) => {
              if(child.children.length > 0){
                  return <li key={child.id}><TreeComponent isShowAll={isShowAll} rootNode={child}></TreeComponent></li>
              }else{
                  return <li key={child.id}>{child.name}</li>
              }
          })}
        </ul>
      </div>
    </div>
  );
}

export default TreeComponent;
