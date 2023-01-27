import React, { useEffect, useMemo, useState } from "react";

import "../index.css";

const UseMemoHook = () => {
  // This state use for useEffect()
  // const [count, setCount] = useState(0);
  // const [data, setData] = useState(0)

  // useEffect(() => {
  // console.log(Math.random())
  // }, [data])

  // And This state use for useMemo()
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);

  const notRender = useMemo(() => {
    return (
      <div style={{ marginTop: "13rem" }}>
        <h1 style={{ fontFamily: "cursive", fontWeight: 500, color: "#fff" }}>
          Not Render Again "{count}" -- {name}
        </h1>
        <div style={{ marginLeft: "34rem" }}>
          <button className="bn54" onClick={() => setName("Hey I'm here👋✌️ ")}>
            <span className="bn54">Update No Render</span>
          </button>
        </div>
      </div>
    );
  }, [name]);

  return (
    <div>
      {notRender}

      {/* This section i updated Values on useEffect Hook 
       <h1>{count}</h1>
      <h1>{100}</h1>
       <button onClick={()=> setCount(count + 1)}>Update Count</button>
  <button onClick={()=> setData(data + 1)}>Update Data</button> */}

      {/* And this section i updated Values on useMemo Hook */}

      <h1 style={{ fontFamily: "monospace", fontWeight: 300, color: "#fff" }}>
        Render it Again and Again {count}
      </h1>
      <button className="bn30" onClick={() => setCount(count + 1)}>
        Update Render Value
      </button>
    </div>
  );
};

export default UseMemoHook;
