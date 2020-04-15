import React from 'react';
import './App.css';
import Component from "./Component"

function App() {
    return ( 
    <div className = "App" >
        <Component 
            backgroundColor="white"
            title="White Block"
            subtitle="White is for snow"
            information="wavelength ~ 400 - 700 nm"
        />
        <Component 
            backgroundColor="pink"
            title="Pink Block"
            subtitle="Pink is for p..p..p..piglet"
            information="wavelength not found"
        />
        <Component 
            backgroundColor="red"
            title="Red Block"
            subtitle="Red is for roses"
            information="wavelength ~ 700–635 nm"
        />        
        <Component             
            backgroundColor="brown"
            title="Brown Block"
            subtitle="Brown is for chocolate"
            information="wavelength ~ 600 nm"
        />
        <Component 
            backgroundColor="orange"
            title="Orange Block"
            subtitle="Orange is for oranges"
            information="wavelength ~ 635–590 nm"
        />        
        <Component 
            backgroundColor="yellow"
            title="Yellow Block"
            subtitle="Yellow is for sunshine"
            information="wavelength ~ 590–560 nm"
        />
        <Component 
            backgroundColor="green"
            title="Green Block"
            subtitle="Green is for grass"
            information="wavelength ~ 560–520 nm"
        />
        <Component 
            backgroundColor="blue"
            title="Blue Block"
            subtitle="Blue is for blueberries"
            information="wavelength ~ 490–450 nm"
        />
        <Component 
            backgroundColor="purple"
            title="Purple Block"
            subtitle="Purple is for lavender"
            information="wavelength ~ 450–400 nm"
        />
        <Component             
            backgroundColor="black"
            title="Black Block"
            subtitle="Black is for the night sky"
            information="wavelength ~ 0 nm"
        />
    </div>
    );
}

export default App;