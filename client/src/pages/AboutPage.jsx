import { useState } from 'react';
import '../index.css';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import SlidingMenu from '../components/SlidingMenu';

const AboutPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-[#222831] text-[#EEEEEE]">
                <Logo />
                <SlidingMenu />
                <main className="flex-grow p-6">
                    <h1 className="text-4xl font-bold mb-4 text-center">About RPG.AI</h1>
                    <h2 className="text-2xl font-semibold mb-2 text-center">Created by Kevin Wagner, Ruobin Chen, & Alexander Aziz</h2>
                    <section className="bg-[#31363F] p-5 rounded-lg shadow-md max-w-3xl mx-auto mt-6">
                        <p className="mt-2 text-gray-300">
                            Welcome to RPG.AI! This game is designed to provide players with an immersive experience in managing rainfall scenarios, leveraging cutting-edge artificial intelligence to create innovative solutions for preparedness and strategic gameplay. Dive into the world of simulated hurricanes and storms, where your decisions shape the outcome of each challenge. Enjoy the adventure!
                        </p>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default AboutPage;
