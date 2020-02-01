import React from 'react'
import Laptops from './Laptops'

export default function LaptopLists() {
    return (
        <div>
            <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                <h1 className="text-center">BEST LAPTOP</h1>
                <div className="row">
                    <Laptops/>
                    <Laptops/>
                    <Laptops/>
                    <Laptops/>
                </div>
            </section>

        </div>
    )
}
