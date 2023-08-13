import React from 'react'
import ProjectCards from './ProjectCards'
import SectionTitle from '../SectionTitle'
const ProjectsList = [
    {
        id: '1',
        title: 'JobCadet - An EdTech platform',
        desc: 'Developed a full stack Web Application to share resources and scheduling DCS and personal mentoring sessions from the app',
        link: 'https://www.jobcadet.com/',
        tags: ['HTML', 'Tailwind CSS', 'MERN Stack'],
    },
    {
        id: '2',
        title: 'Eyemate - OTT platform redesign',
        desc: ' An eye pleasing, easy to navigate and a minimal OTT platform responsive redesign',
        link: 'https://eyemate.netlify.app/',
        tags: ['HTML', 'Tailwind CSS', "React JS"],
    },
    {
        id: '3',
        title: 'Meals App',
        desc: 'Designed a visually appealing and user-friendly interface for browsing and exploring recipes. Integrated interactive features such as favorites and filtering enhance user engagement.',
        link: 'https://github.com/paritoshkrjha/Flutter_Meals_App',
        tags: ['Flutter', 'Dart', "Riverpod"],
    },
    {
        id: '4',
        title: 'ShopEasy - Ecommerce Application',
        desc: 'Designed and implemented responsive UI/UX components for optimal user engagement and satisfaction.Integrated a shopping cart feature, enabling users to add and manage products for purchase',
        link: 'https://github.com/paritoshkrjha/FlutterEcommerceProject',
        tags: ['Flutter', 'Dart', 'VelocityX'],
    },

]

function Projects() {
    return (
        <div id="projects" className=" w-full overflow-hidden-web flex items-centerenter justify-center my-20 ">
            <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
                <div className="w-full">
                    <SectionTitle title="Projects" subtitle="Curious about my Work?" />
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 '>
                    {ProjectsList.map((project) => {
                        return (<ProjectCards title={project.title} desc={project.desc} link={project.link} key={project.id} />)
                    })}
                </div>

            </div>
        </div>

    )
}

export default Projects