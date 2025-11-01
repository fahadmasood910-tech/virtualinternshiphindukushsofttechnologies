import React from "react";
import fahadPic from "../images/fahad.jpg";
function ProfileCard() {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        padding: "20px",
        textAlign: "center",
        maxWidth: "300px",
      }}
    >
      <img
       src={fahadPic}
       alt="profile"
       style={{ borderRadius: "50%", marginBottom: "15px", width: "150px", height: "150px", objectFit: "cover" }}
      />

      <h2>Fahad Masood</h2>
      <p> Computer Science Student</p>
      <p> Chitral, Pakistan</p>
      <button style={{
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "6px",
        cursor: "pointer"
      }}>
        View Profile
      </button>
    </div>
  );
}

export default ProfileCard;
