import "./home.css";

import { Button } from 'react-bootstrap'; // Importa solo los componentes que necesitas

const Home = () => {
  return (
    <div>
  
        <div className="jumbotron bg-light p-5 rounded-lg m-3">
          <h1 className="display-4" > Innovative Technology <br/><p className="text-success" >for Global Success</p></h1>
          <p className="lead">We are a software engineering and media services company focused on delivering innovative solutions to the media market</p>
          <hr className="my-4" />
          <p> Empowering businesses worldwide with cutting-edge technology and expert consulting services
            </p>
          <br />
          <Button variant="outline-success" href="/Services" role="button">Learn more</Button>
      
          <br />
        </div>
    
    </div>
  );
}

export default Home;