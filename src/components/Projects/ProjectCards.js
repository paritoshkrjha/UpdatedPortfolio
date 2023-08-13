import {
    BsGithub
} from 'react-icons/bs';
const ProjectCards = ({title, desc, link}) => {
    return (
        <div class="flex w-full items-center justify-center  py-12 px-6">
            <div>
                <div class="max-w-xs h-64 flex flex-col justify-between hover:transf bg-gray-100 hover:border-[#ffdd35] duration-300  dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div>
                        <h4 tabindex="0" class="text-gray-400  text-xl font-bold mb-3">{title}</h4>
                        <p tabindex="0" class="focus:outline-none text-gray-800 dark:text-gray-100 text-sm">{desc}</p>
                    </div>
                    <div> 
                        <div class="flex items-center justify-between text-gray-800">
                            <p tabindex="0" class="focus:outline-none text-sm dark:text-gray-100">March 28, 2020</p>
                            <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                <a href={link} target='__blank'><BsGithub/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectCards;