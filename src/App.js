import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "STARTERS & APPETISERS",
    },
    {
      id: 2,
      title: "SOUPS",
    },
    {
      id: 3,
      title: "MAIN",
    },
    {
      id: 4,
      title: "SALADS",
    },
    {
      id: 5,
      title: "DESSERTS",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
