import React, {useEffect,useState} from "react";
import './styles.css';
import Header from "./headerComponent";
import ProjectCards from "./projectCards/ProjectCards";
import {json} from "react-router-dom";


const LandingPage = () => {

  const [output, setOutput] = useState([]);
    const [searachvalue, setsearachvalue] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:1992/'+searachvalue); // Replace with your API endpoint URL
            const jsonData = await response.json();
            console.log(jsonData)
            //var keyValuePairs = Object.entries(jsonData);
           // console.log(keyValuePairs)
            setOutput(jsonData.map(project => {
              return  <li key={project.projectName}><ProjectCards title={project.projectName} description={project.projectDescription} /></li>

            }));
        } catch (error) {
            console.error('Error:', error);
        }
    };
  function createProject(project) {
    return <ProjectCards title={project.title} description={project.description} />
  }

    function onSearch() {
      // var input = [
      //     {title: "PBL PROJECT EXPLORER", description: "Project Explorer is an application where the projects are to be posted and requests are placed to work on those projects. The user receives requests for the projects which he/she has posted and can contact them through email or internal message system. After interviewing them, they can decide the team to work on their project."},
      //     {title: "Title 2", description: "Description 2"}
      // ];

        fetchData()
      // setOutput(input.map(createProject));


    }

function handleSearchValue(event) {
      console.log(event.target.value)
    event.preventDefault()
    setsearachvalue(event.target.value)

    if(searachvalue==="") {

        setOutput([])
        console.log("########"+output)
    }
}

    return (

        <div>
            <Header/>
            <div className="landing-page">

                <main className="login-background">
                    <section id="hero">
                        <h1>Welcome to Professional Based Learning</h1>
                        <p>Explore your innovative ideas!</p>
                        <input type="text" name="search" onChange={handleSearchValue} placeholder="Project search" style={{width: '300px'}}/>
                        <button type="submit" onClick={onSearch}>Search</button>
                    </section>


                </main>
                <div style={{display: "flex"}}>
    <ul style={{listStyle:"none"}}>{output}</ul>


                    {/*<div>*/}
                    {/*    /!* Render the data *!/*/}
                    {/*    {output.map((item) => (*/}
                    {/*        <p key={item.title}>{item.description}</p>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>
                <footer>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;
