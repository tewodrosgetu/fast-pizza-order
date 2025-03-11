import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  function handlesubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setquery("");
  }
  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className="rounded-full bg-yellow-100 px-4 py-2 placeholder:text-stone-400 w-28 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:opacity-70"
      />
    </form>
  );
}

export default SearchOrder;
