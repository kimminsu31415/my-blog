import React from "react";

const Header = () => {
    return (
        <header>
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="h-full p-4 lg:w-1/3">
                <div class=" bg-gray-100 px-8 pt-16 pb-16 relative">
                    <h2 class="text-xs mb-1">CATEGORY</h2>
                    <h1 class="title-font sm:text-2xl text-xl  mb-3">Raclette Blueberry Nextious</h1>
                    <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <a class="text-indigo-500 inline-flex items-center">Learn More</a>
                </div>
                </div>
                <div class="h-full p-4 lg:w-1/3">
                <div class="bg-gray-100 px-8 pt-16 pb-16 relative">
                    <h2 class="text-xs mb-1">CATEGORY</h2>
                    <h1 class="title-font sm:text-2xl text-xl  mb-3">Ennui Snackwave Thundercats</h1>
                    <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <a class="text-indigo-500 inline-flex items-center">Learn More</a>
                </div>
                </div>
                <div class="h-full p-4 lg:w-1/3">
                <div class="bg-gray-100 px-8 pt-16 pb-16 relative">
                    <h2 class="text-xs mb-1">CATEGORY</h2>
                    <h1 class="title-font sm:text-2xl text-xl mb-3">Selvage Poke Waistcoat</h1>
                    <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <a class="text-indigo-500 inline-flex items-center">Learn More</a>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Header;