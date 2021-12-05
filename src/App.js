import "./App.css";
import GalleryItem from "./ui-components/GalleryItem";

function App() {
  const item = {
    title: "キャットタワーにて",
    imageUrl:
      "https://images.unsplash.com/photo-1636543132856-8e2d31a79082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzODYwNDY1OQ&ixlib=rb-1.2.1&q=80&w=1080",
    category: "cute",
  };
  return (
    <div className="App">
      <GalleryItem GalleryItem={item}></GalleryItem>
    </div>
  );
}

export default App;
