import Footer from "./Footer.jsx";
function App() {
  return (
    <>
      <header className="row justify-between" id="one">
        <div>Logo</div>
        <div>
          <ul className="flex gap-[25vw]">
            <li>cart</li>
            <li>wishlist</li>
            <li>profile</li>
          </ul>
        </div>
      </header>
      <Footer />
    </>
  );
}

export default App;
