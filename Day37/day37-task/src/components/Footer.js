import React from "react";

function Footer({ isDarkMode }) {
  const footerStyle = {
    backgroundColor: isDarkMode ? "#222" : "#f1f1f1",
    color: isDarkMode ? "#fff" : "#000",
    padding: "10px",
    marginTop: "20px",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 My Profile App | Built with ❤️ by Fahad</p>
    </footer>
  );
}

export default Footer;
