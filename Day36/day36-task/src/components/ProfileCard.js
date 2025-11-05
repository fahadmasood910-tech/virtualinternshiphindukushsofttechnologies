import React from "react";
import styles from "./ProfileCard.module.css";

function ProfileCard({ name, role, location, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="profile" className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.info}>{role}</p>
      <p className={styles.info}>{location}</p>
      <button className={styles.button}>View Profile</button>
    </div>
  );
}

export default ProfileCard;
