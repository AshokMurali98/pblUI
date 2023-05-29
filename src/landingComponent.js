import React, {useState} from "react";
import './styles.css';
import Header from "./headerComponent";
import ProjectCards from "./projectCards/ProjectCards";


const LandingPage = () => {

  const [output, setOutput] = useState([]);


  function createProject(project) {
    return <ProjectCards description={project.description} title={project.title}/>
  }

    function onSearch() {


      var input = [
          {title: "Title 1", description: "Description 1"},
          {title: "Title 2", description: "Description 2"}
      ];

      setOutput(input.map(createProject));
    }



    return (

        <div>
            <Header/>
            <div className="landing-page">

                <main className="login-background">
                    <section id="hero">
                        <h1>Welcome to Professional Based Learning</h1>
                        <p>Explore your innovative ideas!</p>
                        <input type="text" name="search" placeholder="Project search" style={{width: '300px'}}/>
                        <button type="submit" onClick={onSearch}>Search</button>
                    </section>


                </main>
                <div style={{display: "flex"}}>

                  {output}
                </div>
                <footer>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;
