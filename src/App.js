import Header from "./components/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";

function App() {
  return (
    <div>
     <Header />
    <InvestmentForm />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

     <InvestmentTable />
    </div>
  );
}

export default App;
