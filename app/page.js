"use client";

import { Inter } from "@next/font/google";
import websiteShowcase from "./assets/Websiteshowcase.mp4";
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";

export default function Home() {
	return (
		<main className='container  h-full my-auto w-full'>
			<video muted autoPlay loop className='bg-black fixed top-0 left-0  '>
				<source src={websiteShowcase} type='video/mp4' />
			</video>
			<div className='w-full mix-blend-darken bg-black  my-auto ring-2 ring-white  max-h-screen h-screen'>
				<div className='  w-full h-full  relative flex justify-center items-center font-light tracking-tighter '>
					<div className='my-4 absolute left-12  top-[15%] rounded-[100%] ring-1 ring-white h-64 w-64'>
						<span className=' absolute top-[25%] left-[30%] text-9xl text-white'>
							01
						</span>
					</div>
					<div className='z-2 mt-12  mx-64 flex justify-center items-center w-full'>
						<h1 className='text-white text-6xl '>
							EXPERT WEBSITE DESIGN AND DEVELOPMENT
						</h1>
					</div>
				</div>
			</div>
		</main>
	);
}
