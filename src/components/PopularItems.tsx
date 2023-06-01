import React, { useState, useEffect } from "react";

const PopularItems = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    // Get popular items from local storage
    const items = Object.keys(localStorage)
      .map((key) => ({
        id: key,
        views: JSON.parse(localStorage.getItem(key)),
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10); // Display top 10 popular items

    setPopularItems(items);
  }, []);

  return (
    <div>
      <h2>Popular Items</h2>
      <ul>
        {popularItems.map((item) => (
          <li key={item.id}>
            {item.id} - {item.views} views
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularItems;
