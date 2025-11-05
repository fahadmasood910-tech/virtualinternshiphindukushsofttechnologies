
import React from "react";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt="avatar" className="avatar" />
      <h2>{user.name || "No name available"}</h2>
      <p className="login">@{user.login}</p>
      <p className="bio">{user.bio || "No bio available"}</p>

      <div className="stats">
        <span>Followers: {user.followers}</span>
        <span>Following: {user.following}</span>
        <span>Repos: {user.public_repos}</span>
      </div>

      <a href={user.html_url} target="_blank" rel="noreferrer" className="profileLink">
        View on GitHub
      </a>
    </div>
  );
}

export default UserCard;
