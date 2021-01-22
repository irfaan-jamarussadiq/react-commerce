export default function Product({ title, img_path, img_class, img_alt, figure_class, product_id }) {
    return (
        <div className={"product"}>
            <div className="product-content" id={product_id}>
                <h1>{title}</h1>
                <figure class={figure_class}>
                    <img src={img_path} class={img_class} alt={img_alt} />
                </figure>
            </div>
        </div>
    );
}