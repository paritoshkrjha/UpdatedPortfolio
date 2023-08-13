function Button() {
    return (
        <a href="#connect" class="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-color no-underline align-middle bg-primaryColor border border-black border-transparent rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-primaryColor hover:border-primaryColor hover:text-black focus-within:bg-primaryColor focus-within:border-primaryColor">
            Let's Connect
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
    )
}

const LeftHeroSection = () => {
    return (
        <div className="flex flex-col items-center  px-2 gap-10">
            <div className=" flex flex-col text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-light text-center  text-white gap-6">
                <h1 className="font font-bold"><span className="underline">Hey!</span> <span>👋</span></h1>
                <p>My name is <span className="font-bold">Paritosh Kumar Jha</span> and I'm a Flutter and React Developer. </p>
                <p>I enjoy development and I am constantly looking for an environment where I'll be able to learn, connect and grow. 😊</p>
            </div>
            <div>
                <Button/>
            </div>
        </div>
    )
}

export default LeftHeroSection;