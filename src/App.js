import Directory from "./components/directory/directory.component";
import "./font/palatino.ttf";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "STARTERS & APPETISERS",
      imageUrl:
        "https://images-gmi-pmc.edge-generalmills.com/fca4b25f-5859-4048-974c-4ef02a0014ee.jpg",
    },
    {
      id: 2,
      title: "SOUPS",
      imageUrl:
        "https://hellosubscription.com/wp-content/uploads/2021/01/image_5ff45b34dfa20.png?quality=100",
    },
    {
      id: 3,
      title: "MAIN",
      imageUrl:
        "https://i.swncdn.com/media/800w/cms/CW/28282-thanksgiving-meal-feast-dinner.1200w.tn.webp",
    },
    {
      id: 4,
      title: "SALADS",
      imageUrl:
        "https://www.gatherandfeast.com/sites/gatherandfeast/files/styles/slider/public/images/posts/01-nectarine-roasted-walnut-salad-title.jpg?itok=Bu0UbiPO",
    },
    {
      id: 5,
      title: "DESSERTS",
      imageUrl:
        "https://www.choice.com.au/-/media/e9d5085fe5bd4af48eb25b77b647fc63.ashx",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
