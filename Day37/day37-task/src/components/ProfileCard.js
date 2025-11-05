import React from "react";
import styles from "./ProfileCard.module.css";

function ProfileCard({ name, role, location, image, darkMode }) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: darkMode ? "#1f1f1f" : "white",
        color: darkMode ? "#f8f9fa" : "black",
        boxShadow: darkMode
          ? "0px 4px 12px rgba(255, 255, 255, 0.1)"
          : "0px 4px 12px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease",
      }}
    >
      <img src={image} alt="profile" className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.info}>{role}</p>
      <p className={styles.info}>{location}</p>
      <button className={styles.button}>View Profile</button>
    </div>
  );
}

export default ProfileCard;
