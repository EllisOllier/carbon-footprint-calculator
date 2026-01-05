"use client";
import { useState } from "react";

export default function Home() {
    const [points, setPoints] = useState(0);
    return (
        <div className="bg-green-800 text-white flex flex-col items-center">
            <div className="mt-5">
                <form className="bg-green-500 p-15 rounded-lg flex flex-col gap-5">
                  <h1 className="font-extrabold text-center text-xl">Carbon Footprint Calculator</h1>
                    <h2 className="font-extrabold">Home Energy</h2>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">What is your primary home heating source?</label>
                        <div>
                            <input
                                id="home-heating-electric"
                                name="home-heating"
                                type="radio"
                                value={0}
                            ></input>
                            <label htmlFor="home-heating-electric">
                                Electric
                            </label>
                        </div>
                        <div>
                            <input
                                id="home-heating-natural-gas"
                                name="home-heating"
                                type="radio"
                                value={2000}
                            ></input>
                            <label htmlFor="home-heating-natural-gas">
                                Natural Gas
                            </label>
                        </div>
                        <div>
                            <input
                                id="home-heating-oil"
                                name="home-heating"
                                type="radio"
                                value={3000}
                            ></input>
                            <label htmlFor="home-heating-oil">Oil</label>
                        </div>

                        <div>
                            <input
                                id="home-heating-coal"
                                name="home-heating"
                                type="radio"
                                value={4500}
                            ></input>
                            <label htmlFor="home-heating-coal">Coal</label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">
                            Do you use a renewable energy (Solar/Green Tariff)
                        </label>
                        <div>
                            <input
                                value={-500}
                                name="energy"
                                id="energy-yes"
                                type="radio"
                            ></input>
                            <label htmlFor="energy-yes">Yes</label>
                        </div>
                        <div>
                            <input
                                value={0}
                                name="energy"
                                id="energy-no"
                                type="radio"
                            ></input>
                            <label htmlFor="energy-no">No</label>
                        </div>
                    </div>

                    <h2 className="font-extrabold">Travel & Transport</h2>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">What is your primary mode of transport?</label>

                        <div>
                            <input
                                value={0}
                                name="transport"
                                type="radio"
                                id="transport-walking-bike"
                            ></input>
                            <label htmlFor="transport-walking-bike">
                                Walking/Bike
                            </label>
                        </div>
                        <div>
                            <input
                                value={500}
                                name="transport"
                                type="radio"
                                id="transport-public-transport"
                            ></input>
                            <label htmlFor="transport-public-transport">
                                Public Transport
                            </label>
                        </div>
                        <div>
                            <input
                                value={1000}
                                name="transport"
                                type="radio"
                                id="transport-electric-car"
                            ></input>
                            <label htmlFor="transport-electric-car">
                                Electric Car
                            </label>
                        </div>
                        <div>
                            <input
                                value={2500}
                                name="transport"
                                type="radio"
                                id="transport-petrol-car"
                            ></input>
                            <label htmlFor="transport-petrol-car">
                                Petrol Car
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">
                            How many hours do you fly per year on average?
                        </label>
                        <div>
                            <input
                                value={0}
                                name="flight"
                                type="radio"
                                id="flight-hours-0"
                            ></input>
                            <label htmlFor="flight-hours-0">0 hrs</label>
                        </div>
                        <div>
                            <input
                                value={800}
                                name="flight"
                                type="radio"
                                id="flight-hours-5"
                            ></input>
                            <label htmlFor="flight-hours-5">1-5 hrs</label>
                        </div>
                        <div>
                            <input
                                value={3000}
                                name="flight"
                                type="radio"
                                id="flight-hours-20"
                            ></input>
                            <label htmlFor="flight-hours-20">5-20 hrs</label>
                        </div>
                        <div>
                            <input
                                value={7000}
                                name="flight"
                                type="radio"
                                id="flight-hours-20-over"
                            ></input>
                            <label htmlFor="flight-hours-20-over">
                                20+ hrs
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Average weekly mileage in a car?</label>
                        <div>
                            <input
                                value={100}
                                name="mileage"
                                type="radio"
                                id="car-miles-less-10"
                            ></input>
                            <label htmlFor="car-miles-less-10">{`<10 miles`}</label>
                        </div>

                        <div>
                            <input
                                value={800}
                                name="mileage"
                                type="radio"
                                id="car-miles-50"
                            ></input>
                            <label htmlFor="car-miles-50">10-50 miles</label>
                        </div>

                        <div>
                            <input
                                value={1600}
                                name="mileage"
                                type="radio"
                                id="car-miles-100"
                            ></input>
                            <label htmlFor="car-miles-100">50-100 miles</label>
                        </div>

                        <div>
                            <input
                                value={3000}
                                name="mileage"
                                type="radio"
                                id="car-miles-100-over"
                            ></input>
                            <label htmlFor="car-miles-100-over">
                                100+ miles
                            </label>
                        </div>
                    </div>

                    <h2 className="font-extrabold">Diet & Food</h2>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Which best describes your diet?</label>

                        <div>
                            <input
                                value={1000}
                                name="diet"
                                type="radio"
                                id="diet-vegan"
                            ></input>
                            <label htmlFor="diet-vegan">Vegan</label>
                        </div>

                        <div>
                            <input
                                value={1300}
                                name="diet"
                                type="radio"
                                id="diet-vegetarian"
                            ></input>
                            <label htmlFor="diet-vegetarian">Vegetarian</label>
                        </div>

                        <div>
                            <input
                                value={1800}
                                name="diet"
                                type="radio"
                                id="diet-flexitarian"
                            ></input>
                            <label htmlFor="diet-flexitarian">
                                Flexitarian
                            </label>
                        </div>

                        <div>
                            <input
                                value={3000}
                                name="diet"
                                type="radio"
                                id="diet-meat"
                            ></input>
                            <label htmlFor="diet-meat">Heavy Meat Eater</label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">How much food does your household waste?</label>
                        <div>
                            <input
                                value={0}
                                name="waste"
                                type="radio"
                                id="household-waste-none"
                            ></input>
                            <label htmlFor="household-waste-none">
                                None/Very Little
                            </label>
                        </div>

                        <div>
                            <input
                                value={200}
                                name="waste"
                                type="radio"
                                id="household-waste-some"
                            ></input>
                            <label htmlFor="household-waste-some">Some</label>
                        </div>

                        <div>
                            <input
                                value={600}
                                name="waste"
                                type="radio"
                                id="household-waste-alot"
                            ></input>
                            <label htmlFor="household-waste-alot">A lot</label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Do you prioritise seasonal/local product?</label>
                        <div>
                            <input
                                value={-200}
                                name="local-produce"
                                type="radio"
                                id="local-produce-always"
                            ></input>
                            <label htmlFor="local-produce-always">Always</label>
                        </div>

                        <div>
                            <input
                                value={0}
                                name="local-produce"
                                type="radio"
                                id="local-produce-sometimes"
                            ></input>
                            <label htmlFor="local-produce-sometimes">
                                Sometimes
                            </label>
                        </div>

                        <div>
                            <input
                                value={200}
                                name="local-produce"
                                type="radio"
                                id="local-produce-rarely"
                            ></input>
                            <label htmlFor="local-produce-rarely">Rarely</label>
                        </div>
                    </div>

                    <h2 className="font-extrabold">Consumption & Lifestyle</h2>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">How often do you buy new clothes?</label>
                        <div>
                            <input
                                value={100}
                                name="clothes"
                                type="radio"
                                id="new-clothes-rarely"
                            ></input>
                            <label htmlFor="new-clothes-rarely">Rarely</label>
                        </div>

                        <div>
                            <input
                                value={500}
                                name="clothes"
                                type="radio"
                                id="new-clothes-monthly"
                            ></input>
                            <label htmlFor="new-clothes-monthly">Monthly</label>
                        </div>

                        <div>
                            <input
                                value={1500}
                                name="clothes"
                                type="radio"
                                id="new-clothes-weekly"
                            ></input>
                            <label htmlFor="new-clothes-weekly">Weekly</label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">How often do you buy new electronics?</label>

                        <div>
                            <input
                                value={200}
                                name="electronics"
                                type="radio"
                                id="electronics-broken"
                            ></input>
                            <label htmlFor="electronics-broken">
                                Only when broken
                            </label>
                        </div>

                        <div>
                            <input
                                value={800}
                                name="electronics"
                                type="radio"
                                id="electronics-yearly"
                            ></input>
                            <label htmlFor="electronics-yearly">
                                Every 1-2 years
                            </label>
                        </div>

                        <div>
                            <input
                                value={1500}
                                name="electronics"
                                type="radio"
                                id="electronics-tech-drops"
                            ></input>
                            <label htmlFor="electronics-tech-drops">
                                When new tech drops
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">How much do you recycle?</label>
                        <div>
                            <input
                                value={0}
                                name="recycle"
                                type="radio"
                                id="recycle-everything"
                            ></input>
                            <label htmlFor="recycle-everything">
                                Everything
                            </label>
                        </div>

                        <div>
                            <input
                                value={200}
                                name="recycle"
                                type="radio"
                                id="recycle-some"
                            ></input>
                            <label htmlFor="recycle-some">Some things</label>
                        </div>

                        <div>
                            <input
                                value={500}
                                name="recycle"
                                type="radio"
                                id="recycle-none"
                            ></input>
                            <label htmlFor="recycle-none">None</label>
                        </div>
                    </div>

                    <input className="bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-md" type="submit"/>
                </form>
            </div>
        </div>
    );
}
