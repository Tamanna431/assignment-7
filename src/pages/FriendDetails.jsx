import { useParams } from "react-router-dom";
import { Phone, MessageSquare, Video } from "lucide-react";
import friends from "../data/friends.json";

const FriendDetails = () => {
  const { id } = useParams();
  const friend = friends.find(f => f.id === Number(id));

  if (!friend) {
    return <div>Friend not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* দুই কলামের লেআউট */}
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* বাম কলাম - Friend Info */}
        <div className="bg-white p-6 rounded-lg shadow">
          <img 
            src={friend.picture} 
            alt={friend.name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-center">{friend.name}</h2>
          <p className="text-center text-gray-600">{friend.bio}</p>
          <p className="text-center text-sm">{friend.email}</p>
          
          {/* Tags */}
          <div className="flex gap-2 justify-center mt-4">
            {friend.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Status */}
          <div className={`mt-4 text-center px-4 py-2 rounded-full text-white ${
            friend.status === 'overdue' ? 'bg-red-500' :
            friend.status === 'almost due' ? 'bg-yellow-500' : 'bg-green-500'
          }`}>
            {friend.status}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 space-y-2">
            <button className="w-full p-2 border rounded">⏰ Snooze 2 Weeks</button>
            <button className="w-full p-2 border rounded">📦 Archive</button>
            <button className="w-full p-2 border rounded text-red-500">🗑️ Delete</button>
          </div>
        </div>

        {/* ডান কলাম - Stats & Check-in */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-3xl font-bold">{friend.days_since_contact}</p>
              <p className="text-gray-600">Days Since Contact</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-3xl font-bold">{friend.goal}</p>
              <p className="text-gray-600">Goal (Days)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-xl font-bold">{friend.next_due_date}</p>
              <p className="text-gray-600">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Relationship Goal</h3>
              <button className="px-3 py-1 border rounded">Edit</button>
            </div>
            <p>Connect every <strong>{friend.goal} days</strong></p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center p-4 border rounded hover:bg-gray-50">
                <Phone size={24} />
                <span className="mt-2">Call</span>
              </button>
              <button className="flex flex-col items-center p-4 border rounded hover:bg-gray-50">
                <MessageSquare size={24} />
                <span className="mt-2">Text</span>
              </button>
              <button className="flex flex-col items-center p-4 border rounded hover:bg-gray-50">
                <Video size={24} />
                <span className="mt-2">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;