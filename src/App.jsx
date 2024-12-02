import Navbar from "./components/navigation/Navbar";
function App() {
  return (
    <>
      <div className="flex overflow-hidden flex-col items-center w-full">
        <Navbar className="lg:mt-[60px] lg:w-[48%] 2xs:mt-[20px]  2xs:w-full" />
      </div>
    </>
  );
}

export default App;
