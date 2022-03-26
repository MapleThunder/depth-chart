import { useState } from "react";

export function AddPlayer() {
  const [playerName, setPlayerName] = useState("");

  return (
    <form>
      <input
        type="text"
        name="name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}
