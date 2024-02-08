import React from "react";

function EmailInput({ setEmail }) {
  return (
    <input
      type="text"
      placeholder="Enter your email"
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}

export default EmailInput;
