import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div>
        NotFound
        <button onClick={()=> navigate("/")}>Back</button>
    </div>
  )
}

export default NotFound