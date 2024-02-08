function PasswordInput({ setPassword }) {
  return (
    <input
      type="text"
      placeholder="Enter your password"
      onChange={(e) => setPassword(e.target.value)}
    />
  );
}

export default PasswordInput;
