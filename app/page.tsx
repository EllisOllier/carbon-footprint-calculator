"use client";
import { useState } from "react";

export default function Home() {
    const [points, setPoints] = useState(0);
    return (
        <div>
            <h1>Carbon Footprint Calculator</h1>
            <div>
                <form>
                    <h2>Home Energy</h2>
                    <label>What is your primary home heating source?</label>
                    <input
                        id="home-heating-electric"
                        name="home-heating"
                        type="radio"
                        value={0}
                    ></input>
                    <label htmlFor="home-heating-electric">Electric</label>

                    <input
                        id="home-heating-natural-gas"
                        name="home-heating"
                        type="radio"
                        value={2000}
                    ></input>
                    <label htmlFor="home-heating-natural-gas">
                        Natural Gas
                    </label>

                    <input
                        id="home-heating-oil"
                        name="home-heating"
                        type="radio"
                        value={3000}
                    ></input>
                    <label htmlFor="home-heating-oil">Oil</label>

                    <input
                        id="home-heating-coal"
                        name="home-heating"
                        type="radio"
                        value={4500}
                    ></input>
                    <label htmlFor="home-heating-coal">Coal</label>

                    <label>
                        Do you use a renewable energy (Solar/Green Tariff)
                    </label>
                    <input value={-500} name="energy" id="energy-yes" type="radio"></input>
                    <label htmlFor="energy-yes">Yes</label>

                    <input value={0} name="energy" id="energy-no" type="radio"></input>
                    <label htmlFor="energy-no">No</label>

                    <h2>Travel & Transport</h2>
                    <label>What is your primary mode of transport?</label>

                    <input value={0} name="transport" type="radio" id="transport-walking-bike"></input>
                    <label htmlFor="transport-walking-bike">Walking/Bike</label>

                    <input value={500} name="transport" type="radio" id="transport-public-transport"></input>
                    <label htmlFor="transport-public-transport">
                        Public Transport
                    </label>

                    <input value={1000} name="transport" type="radio" id="transport-electric-car"></input>
                    <label htmlFor="transport-electric-car">Electric Car</label>

                    <input value={2500} name="transport" type="radio" id="transport-petrol-car"></input>
                    <label htmlFor="transport-petrol-car">Petrol Car</label>

                    <label>
                        How many hours do you fly per year on average?
                    </label>
                    <input value={0} name="flight" type="radio" id="flight-hours-0"></input>
                    <label htmlFor="flight-hours-0">0 hrs</label>

                    <input value={800} name="flight" type="radio" id="flight-hours-5"></input>
                    <label htmlFor="flight-hours-5">1-5 hrs</label>

                    <input value={3000} name="flight" type="radio" id="flight-hours-20"></input>
                    <label htmlFor="flight-hours-20">5-20 hrs</label>

                    <input value={7000} name="flight" type="radio" id="flight-hours-20-over"></input>
                    <label htmlFor="flight-hours-20-over">20+ hrs</label>

                    <label>Average weekly mileage in a car?</label>
                    <input value={100} name="mileage" type="radio" id="car-miles-less-10"></input>
                    <label htmlFor="car-miles-less-10">{`<10 miles`}</label>

                    <input value={800} name="mileage" type="radio" id="car-miles-50"></input>
                    <label htmlFor="car-miles-50">10-50 miles</label>

                    <input value={1600} name="mileage" type="radio" id="car-miles-100"></input>
                    <label htmlFor="car-miles-100">50-100 miles</label>

                    <input value={3000} name="mileage" type="radio" id="car-miles-100-over"></input>
                    <label htmlFor="car-miles-100-over">100+ miles</label>

                    <h2>Diet & Food</h2>
                    <label>Which best describes your diet?</label>
                    <input value={1000} name="diet" type="radio" id="diet-vegan"></input>
                    <label htmlFor="diet-vegan">Vegan</label>

                    <input value={1300} name="diet" type="radio" id="diet-vegetarian"></input>
                    <label htmlFor="diet-vegetarian">Vegetarian</label>

                    <input value={1800} name="diet" type="radio" id="diet-flexitarian"></input>
                    <label htmlFor="diet-flexitarian">Flexitarian</label>

                    <input value={3000} name="diet" type="radio" id="diet-meat"></input>
                    <label htmlFor="diet-meat">Heavy Meat Eater</label>

                    <label>How much food does your household waste?</label>
                    <input value={0} name="waste" type="radio" id="household-waste-none"></input>
                    <label htmlFor="household-waste-none">
                        None/Very Little
                    </label>

                    <input value={200} name="waste" type="radio" id="household-waste-some"></input>
                    <label htmlFor="household-waste-some">Some</label>

                    <input value={600} name="waste" type="radio" id="household-waste-alot"></input>
                    <label htmlFor="household-waste-alot">A lot</label>

                    <label>Do you prioritise seasonal/local product?</label>
                    <input value={-200} name="local-produce" type="radio" id="local-produce-always"></input>
                    <label htmlFor="local-produce-always">Always</label>

                    <input value={0} name="local-produce" type="radio" id="local-produce-sometimes"></input>
                    <label htmlFor="local-produce-sometimes">Sometimes</label>

                    <input value={200} name="local-produce" type="radio" id="local-produce-rarely"></input>
                    <label htmlFor="local-produce-rarely">Rarely</label>

                    <h2>Consumption & Lifestyle</h2>
                    <label>How often do you buy new clothes?</label>
                    <input value={100} name="clothes" type="radio" id="new-clothes-rarely"></input>
                    <label htmlFor="new-clothes-rarely">Rarely</label>

                    <input value={500} name="clothes" type="radio" id="new-clothes-monthly"></input>
                    <label htmlFor="new-clothes-monthly">Monthly</label>

                    <input value={1500} name="clothes" type="radio" id="new-clothes-weekly"></input>
                    <label htmlFor="new-clothes-weekly">Weekly</label>

                    <label>How often do you buy new electronics?</label>
                    <input value={200} name="electronics" type="radio" id="electronics-broken"></input>
                    <label htmlFor="electronics-broken">Only when broken</label>

                    <input value={800} name="electronics" type="radio" id="electronics-yearly"></input>
                    <label htmlFor="electronics-yearly">Every 1-2 years</label>

                    <input value={1500} name="electronics" type="radio" id="electronics-tech-drops"></input>
                    <label htmlFor="electronics-tech-drops">
                        When new tech drops
                    </label>

                    <label>How much do you recycle?</label>
                    <input value={0} name="recycle" type="radio" id="recycle-everything"></input>
                    <label htmlFor="recycle-everything">Everything</label>

                    <input value={200} name="recycle" type="radio" id="recycle-some"></input>
                    <label htmlFor="recycle-some">Some things</label>

                    <input value={500} name="recycle" type="radio" id="recycle-none"></input>
                    <label htmlFor="recycle-none">None</label>

                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
}
