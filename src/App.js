import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer";
import Cafeimg from "./img/cafe.jpg";
import Lecheimg from "./img/leche.jpg";
import Galletitasimg from "./img/galletitas.jpg";
import Azucarimg from "./img/azucar.jpg";


import "bulma/css/bulma.css";
function App(){
    return(
        <div>
            <nav>
                <NavBar/>
            </nav>
            <section>
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <ItemListContainer titulo ="Cafe" precio="$1300" img={Cafeimg}/>
                        </div>
                        <div className="column is-4">
                            <ItemListContainer titulo ="Leche" precio="$480" img= {Lecheimg}/>
                        </div>
                        <div className="column is-4">
                            <ItemListContainer titulo ="Galletitas" precio="$850" img= {Galletitasimg}/>
                        </div>
                        <div className="column is-4">
                            <ItemListContainer titulo ="Azucar" precio="$650" img={Azucarimg}/>
                        </div>
                    </div>
                </div>
            </section>
        </div> 
    )

}
export default App;