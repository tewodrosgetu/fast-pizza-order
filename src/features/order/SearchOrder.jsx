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
      />
    </form>
  );
}

export default SearchOrder;
