"use client"
import React from 'react';

type Props = {
};

const NavBar = (props: Props): JSX.Element => {
  return (
    <header>
        <nav className="container mx-auto flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-primary">
            Suin Kim
            </div>
            <ul className="flex space-x-6">
            <li><a href="#about" className="text-primary hover:text-secondary">About</a></li>
            <li><a href="#projects" className="text-primary hover:text-secondary">Projects</a></li>
            <li><a href="#contact" className="text-primary hover:text-secondary">Contact</a></li>
            </ul>
        </nav>
      
    </header>
  );
};

export default NavBar;