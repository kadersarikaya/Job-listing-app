import "./App.css";
import data from "./data.json"
import JobList from "./components/JobList";

function App() {
  return (
    <div className="App">
        {data.map((item)=> (
         <JobList key={item.id} item={item}/>
        ))}
    </div>
  );
}

export default App;
