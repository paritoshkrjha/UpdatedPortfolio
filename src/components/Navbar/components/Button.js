 function Button() {
    return (
        <div>
            <a href="#_" class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-bold leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:font-bold">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#ffdd35] group-hover:-rotate-180 ease"></span>
                    <span class="relative">Resume</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#ffdd35] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
        </div>
    )
}