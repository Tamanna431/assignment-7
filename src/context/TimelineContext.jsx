import { createContext, useState, useEffect } from "react";

export const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("timeline");
    return saved ? JSON.parse(saved) : [];
  });

  const addEntry = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      friendName: friendName,
      date: new Date().toISOString().split("T")[0]
    };
    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem("timeline", JSON.stringify(updated));
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}