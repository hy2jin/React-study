import axios from "axios";
import React, { useState } from "react";

const PostForm = () => {
  const url = "";
  const [data, setData] = useState({
    name: "",
    date: "",
    iduser: "",
  });

  function onSubmithandler(e) {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        date: data.date,
        iduser: parseInt(data.iduser),
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function onChangehandler(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  return (
    <div>
      <form onSubmit={(e) => onSubmithandler(e)}>
        <input
          onChange={(e) => onChangehandler(e)}
          id="name"
          value={data.name}
          placeholder="name"
          type="text"
        ></input>
        <input
          onChange={(e) => onChangehandler(e)}
          id="date"
          value={data.date}
          placeholder="date"
          type="date"
        ></input>
        <input
          onChange={(e) => onChangehandler(e)}
          id="iduser"
          value={data.iduser}
          placeholder="iduser"
          type="number"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
