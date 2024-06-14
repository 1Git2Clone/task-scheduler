import { FormEvent, useState } from "react";
import Header from "./Header.tsx";

export default function App() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setMessage(username);
  };
  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-center items-center w1/2"
      >
        <label htmlFor="username">Enter your username</label>
        <input
          className={"bg-rose-400 text-gray-50"}
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input type="submit"></input>
      </form>
      <p>{message}</p>
    </>
  );
}
