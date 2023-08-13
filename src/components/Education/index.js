import { React, useState } from 'react'
import SectionTitle from '../SectionTitle'
import AnimatedEducationLottie from '../../assets/education.json'
import Lottie from 'react-lottie-player'


const Timeline = () => {

    return (
        <ol class="relative border-l border-gray-200 dark:border-gray-700 ">
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500">June 2020 - Present</time>
                <h3 class="text-3xl font-semibold text-gray-900 dark:text-white">Bharati Vidyapeeth College of Enginnering</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A Final year student, pursuing B.Tech in Information Technology </p>

            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500">July 2019</time>
                <h3 class="text-3xl font-semibold text-gray-900 dark:text-white"> St. Xavier's School</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Completed my class 12th</p>
            </li>
            <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500">July 2017</time>
                <h3 class="text-3xl font-semibold text-gray-900 dark:text-white"> St. Xavier's School</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Completed my class 10th</p>
            </li>
        </ol>
    )
}

const EducationLottie = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    if (windowWidth <= 800) {
        return (<></>)
    }
    else {
        return (
            <Lottie
                loop
                animationData={AnimatedEducationLottie}
                play
                style={{ width: 400, height: 350 }}
            />

        )
    }
}

function Education() {
    return (
        <div id="education" className=" w-full overflow-hidden-web flex items-centerenter justify-center my-20 ">
            <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
                <div className="w-full">
                    <SectionTitle title="Education" subtitle="Where did i study?" />
                </div>
                <div className='flex justify-between py-20 px-10'>
                    <Timeline />
                    <EducationLottie />
                </div>
            </div>
        </div>
    )
}

export default Education