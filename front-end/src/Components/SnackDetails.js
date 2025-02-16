import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartReg from "../assets/heart-regular.png";

function SnackDetails() {
  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((response) => {
      setSnack(response.data);
    });
  }, [id, navigate, API]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteSnack();
  };

  console.log(snack)
  return (
    <>
      <article>
        <aside>
          {/* {<img src={heartSolid} alt='healthy food'></img>} */}
          {snack.is_healthy ? <img src={heartSolid} alt='healthy food' /> : <img src={heartReg} alt='unhealthy food' />} 
          <h3>{snack.name}</h3>
        </aside>
        <div>
          <h6>Fiber: {snack.fiber}</h6>
        </div>
        <div>
          <h6>Protein: {snack.protein}</h6>
        </div>
        <div>
          <h6>Added Sugar: {snack.added_sugar}</h6>
        </div>
        <div>
          <img src={snack.image} alt={snack.name}></img>
        </div>
        <div>
          <Link to={`/snacks`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/snacks/${snack.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </article>

    </>
  )
}

export default SnackDetails