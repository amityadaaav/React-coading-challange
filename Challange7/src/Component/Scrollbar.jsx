import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";

const Scrollbar = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Fetch API function
  const fetchData = async (currentPage) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.github.com/repos/facebook/react/issues?page=${currentPage}&per_page=20`
      );

      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...response.data]);
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on page change
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Debounced scroll
  const handleScroll = useCallback(() => {
    let timeout;
    return () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= fullHeight - 100 && !loading && hasMore) {
          setPage((prev) => prev + 1);
        }
      }, 200); // 200ms debounce
    };
  }, [loading, hasMore]);

  useEffect(() => {
    const debouncedScroll = handleScroll();
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [handleScroll]);

  return (
    <div className="w-full p-4 bg-gray-50">
      {data.map((ele) => (
        <div
          key={ele.id}
          className="p-4 mb-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
        >
          <h1 className="text-lg font-bold text-gray-800">{ele.title}</h1>
          <p className="text-sm text-gray-600">
            Author: <span className="font-medium">{ele.user.login}</span>
          </p>
          <p className="mt-2 text-sm">
            Labels:{" "}
            {ele.labels.length > 0 ? (
              ele.labels.map((label, idx) => (
                <span
                  key={`${label.id}-${idx}`}
                  className="inline-block px-2 py-1 mr-2 text-xs font-medium rounded bg-blue-100 text-blue-700"
                >
                  {label.name}
                </span>
              ))
            ) : (
              <span className="italic text-gray-500">No labels</span>
            )}
          </p>
        </div>
      ))}

      {loading && (
        <p className="text-center text-blue-600 font-semibold animate-pulse">
          Loading...
        </p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!hasMore && <p className="text-center text-gray-500">No more issues.</p>}
    </div>
  );
};

export default Scrollbar;
