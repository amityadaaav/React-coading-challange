import React, { useState,useEffect } from "react";
import axios from "axios";
import Loader from "../Component/Loader";

const Github = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=>{ 
    const debounce=setTimeout(()=>{
    const fetchUsers = async () => {
    if (!query) return;
    setLoading(true);
   setError(""); // Reset error before new search
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`
      );
      setUsers(response.data.items || []);
    } catch (err) {
     setError("Error fetching users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
    fetchUsers()
    },1000)
    return ()=>clearTimeout(debounce)///crean the set time out

   },[query])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          GitHub User Search
        </h2>

        {/* Input + Button */}
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search GitHub username..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <button
            onClick={fetchUsers}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Search
          </button> */}
        </div>

        {/* Loader */}
        {loading && (
          <div className="mt-6 flex justify-center">
            <Loader />
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="mt-4 text-red-500 text-center font-medium">{error}</p>
        )}

        {/* User List */}
        {!loading  && users.length > 0 && (
          <ul className="mt-6 space-y-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex items-center gap-4 p-3 border rounded-lg hover:shadow-md transition"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full"
                />
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  {user.login}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Github;
