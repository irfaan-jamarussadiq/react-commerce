export default function Product({ title, img_path, img_class, img_alt, figure_class, product_id }) {
    return (
        <div className={"product"}>
            <div className="product-content" id={product_id}>
                <h2>{title}</h2>
                <figure class={figure_class}>
                    <img src={img_path} class={img_class} alt={img_alt} />
                </figure>

                {/* TODO: change this to general function parameters. */}
                <div className="product-name-container">
                    <h3 className="product-name">Queen Size Bed</h3>
                </div>

                <div className="product-price-container">
                    <h3 className="product-price">$350.99</h3>
                </div>
            </div>
        </div>
    );
}