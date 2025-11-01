import React from "react";

function UserCard({ name, email, role }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      margin: "15px",
      width: "250px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p style={{ color: "#555" }}>{role}</p>
    </div>
  );
}

export default UserCard;
