import React from "react";

export default function ProductList() {
    return (
        <div className="ProductList">
            <div className="section" id="shop">
                <hr></hr>
                <div class="gallery">
                    <div className="gallery-item">
                        <figure class="gallery__item gallery__item--1">
                            <img src="images/bedroom.jpg" class="gallery__img" alt="Image 1" />
                        </figure>
                        <div className="product-name-container">
                            <h3 className="product-name">Queen Size Bed</h3>
                        </div>

                        <div className="product-price-container">
                            <h3 className="product-price">$350.99</h3>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <figure class="gallery__item gallery__item--2">
                            <img src="images/bedroom.jpg" class="gallery__img" alt="Image 2" />
                        </figure>
                        <div className="product-name-container">
                            <h3 className="product-name">Queen Size Bed</h3>
                        </div>

                        <div className="product-price-container">
                            <h3 className="product-price">$350.99</h3>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <figure class="gallery__item gallery__item--3">
                            <img src="images/bedroom.jpg" class="gallery__img" alt="Image 3" />
                        </figure>
                        <div className="product-name-container">
                            <h3 className="product-name">Queen Size Bed</h3>
                        </div>

                        <div className="product-price-container">
                            <h3 className="product-price">$350.99</h3>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <figure class="gallery__item gallery__item--4">
                            <img src="images/wooden-drawer.jpg" class="gallery__img" alt="Image 4" />
                        </figure>
                        <div className="product-name-container">
                            <h3 className="product-name">White Wooden Drawer</h3>
                        </div>

                        <div className="product-price-container">
                            <h3 className="product-price">$24.99</h3>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <figure class="gallery__item gallery__item--5">
                            <img src="images/table2.jpg" class="gallery__img" alt="Image 5" />
                        </figure>
                        <div className="product-name-container">
                            <h3 className="product-name">Kitchen Table</h3>
                        </div>

                        <div className="product-price-container">
                            <h3 className="product-price">$199.99</h3>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <figure class="gallery__item gallery__item--6">
                            <img src="images/table.jpg" class="gallery__img" alt="Image 6" />
                        </figure>
                        <div className="product-name-container">
                            <h3 className="product-name">Brown Wooden Table</h3>
                        </div>

                        <div className="product-price-container">
                            <h3 className="product-price">$109.99</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}