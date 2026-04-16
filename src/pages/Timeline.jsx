import { useContext, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { Phone, MessageSquare, Video, Handshake } from "lucide-react";

const Timeline = () => {
  // Get entries from Context
  const { entries } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  // Sort entries: Newest first
  const sortedEntries = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filter Logic
  const filteredEntries = filter === "All" 
    ? sortedEntries 
    : sortedEntries.filter(entry => entry.type === filter);

  // Helper to get the correct icon using if-else
  const getIcon = (type) => {
    if (type === "Call") {
      return <Phone size={20} className="text-gray-600" />;
    } else if (type === "Text") {
      return <MessageSquare size={20} className="text-gray-600" />;
    } else if (type === "Video") {
      return <Video size={20} className="text-gray-600" />;
    } else {
      return <Handshake size={20} className="text-gray-600" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Timeline</h1>

      {/* Filter Dropdown (Challenge Requirement) */}
      <div className="mb-6">
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {filteredEntries.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-500">No interactions logged yet. Go check in with a friend!</p>
          </div>
        ) : (
          filteredEntries.map((entry) => (
            <div 
              key={entry.id} 
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="mt-1 bg-gray-100 p-2 rounded-full flex-shrink-0">
                {getIcon(entry.type)}
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-800">
                  {entry.type} <span className="font-normal text-gray-600">with {entry.friendName}</span>
                </h3>
                <p className="text-sm text-gray-500 mt-1">{entry.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;