
import NavBar from './navbar';
import Home from './home';
function App(){
    return (
    <div className="container">
        <div className="App">
            <NavBar />
        </div>
        <div className="content">
            <Home></Home>
        </div>
     </div>
    );
}
export default App;