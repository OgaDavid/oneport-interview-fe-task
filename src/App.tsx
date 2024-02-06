import RatesComponent from "@/components/rates/rates-component";

function App() {
  return (
    <div className="py-14 container">
      <div className="relative">
        <h1 className="text-[40px] satoshi text-custom-black font-medium">
          Special Rates
        </h1>
        <RatesComponent />
      </div>
    </div>
  );
}

export default App;
