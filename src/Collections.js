import React from "react";

export default function Collections() {
    return (
        <div className="Collections">
            <div className="section" id="collections">
                <hr/>
                <div class="gallery">
                    <div>
                        <figure>
                            <img src="images/bedroom.jpg" class="gallery__img" alt="Image 1" />
                        </figure>
                        <h2>Bedroom</h2>
                    </div>

                    <div>
                        <figure>
                            <img src="images/dining-collection.jpg" class="gallery__img" alt="Image 1" />
                        </figure>
                        <h2>Dining Room</h2>
                    </div>

                    <div>
                        <figure>
                            <img src="images/bedroom.jpg" class="gallery__img" alt="Image 1" />
                        </figure>
                        <h2>Living Room</h2>
                    </div>

                    <div>
                        <figure>
                            <img src="images/dining-collection.jpg" class="gallery__img" alt="Image 1" />
                        </figure>
                        <h2>Work Space</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}