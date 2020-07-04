import React from "react";

import ProjectItem from "../project-item/project-item.component"

import "./project-list.styles.scss"

import AOS from 'aos';
import 'aos/dist/aos.css';

class ProjectList extends React.Component{

    componentDidMount(){
        const allProjectTiles = document.querySelectorAll('.project');
        let index = 1;
        document.querySelector('.next-button').addEventListener('click',function(){
           allProjectTiles[index].classList.add('active');
           
           index === 0 ? allProjectTiles[allProjectTiles.length - 1].classList.remove('active') : allProjectTiles[index - 1].classList.remove('active')
           

           if(index === (allProjectTiles.length -1)){
               index = 0
           }else{
               index++
           }
        })

        this.aos = AOS;
        this.aos.init();
    
        
    }

    componentDidUpdate() {
        this.aos.refresh();
    }

    render(){
        
    
        return (
            <div className="projects-list" data-aos="zoom-in-right">
                <ProjectItem active 
                  title='Mom’s Care'
                  projectLink="#"
                  description="<p>The system enables the user to buy products for its children categorized under baby; toddler and kids. The
different categories help to easily access the products especially for the working parents as they can get
everything under one roof</p>"
                  image="/phcschoolofai.png"
                  techsUsed={['HTML', 'CSS','JavaScript','ASP (Classic)' ]}
                  githubLink="#"
                />
                <ProjectItem
                   title='Expense Manager'
                   projectLink="#"
                   description="<p>The system enables the user to manage the monthly expenses. The user needs to register itself by proving
the basic details and also the monthly salary as well as setting the limit of expenses. The user can see
various charts of his expenses, month wise, day wise and also product wise. This would help the user to
smartly plan its budget for the month.</p> 
                   <p>The app makes use of localstorage to store user highscores, info and state.</p>"
                   image="/trivaapp.png"
                   techsUsed={['HTML', 'CSS','Bootstrap','Angular Js', 'Jquery' , 'MYSQL' , 'PHP' ]}
                   githubLink="#"
                />
                <ProjectItem
                   title='Daksha (Book Donation)'
                   projectLink="#"
                   description="<p>Daksha -online book donation system provides a platform for all the people who need books, stationary and money for education and cannot afford it and also for people who want to give away their unused books or the books that are no longer required by them. The system has the facility to donate money and stationary as well. </p> 
                   <p>It makes use of the Push and Notification Web APIs alongside firebase functions to implement Push Notifications and background syncing.</p>"
                   image="/moneypaddy.png"
                   techsUsed={['HTML', 'CSS','Bootstrap','JavaScript', 'ASP.NET' ,'SQL Server' ]}
                   githubLink="#"
                />
                 <ProjectItem
                   title='Achievement'
                   projectLink="#"
                   description="<p>Participated in Paper Presentation (Title-BHIM App: Digitalization in Banking Sector) in 2
days National Conference on” Transition toward Digital Ecosystem-Managing the challenges”
held in January 2017 published in The Journal of Business Studies and Research with
ISSN:2455-233X.</p> "
                   image="/newsify.png"
                   techsUsed={['BHIM App', 'Digitalization','Business','Research','ISSN:2455-233X']}
                   githubLink="#"
                />
                <ProjectItem
                   title='Introduction to Block chains and Software Security'
                   projectLink="#"
                   description="<p>Attended a 15 day workshop organized by IIT Kanpur on “Introduction to Block chains and Software Security”.</p>"
                   image="/labrinthe.png"
                   techsUsed={['Block chains', 'AI','React']}
                   githubLink="#"
                />
                
                <button className="next-button">&#10095;</button>
            </div>
        )
    }

    
}

export default ProjectList;