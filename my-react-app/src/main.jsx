import { createRoot } from 'react-dom/client'

function Favorites() {
  const season = "Winter";
  const month = "March";
  return (
    <>
      <h2>My Favorite Season and Month</h2>
      <p>It is the Season of {season} and {month}.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Favorites />
)
