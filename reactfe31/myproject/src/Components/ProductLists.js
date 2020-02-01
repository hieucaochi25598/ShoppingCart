import React from 'react'
import Products from './Products'

export default function ProductLists() {
    return (
        <div>
            <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                <h1 className="text-light text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <Products/>
                    <Products/>
                    <Products/>
                    <Products/>
                </div>
            </section>

        </div>
    )
}
