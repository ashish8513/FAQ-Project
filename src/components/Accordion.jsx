import React, { useEffect, useState } from "react";
import faq from "../api/FAQ.json";
import FAQ from "./FAQ";

function Accordion() {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);
  console.log(data);
  const handleButton = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
    console.log(activeId);
  };
  return (
    <div>
      <h1>F&Q Question</h1>
      <ul className="section-accordion">
        {data.map((element) => {
          return (
            <FAQ
              key={element.id}
              curData={element}
              isActive={activeId === element.id}
              onToggle={() => handleButton(element.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Accordion;
