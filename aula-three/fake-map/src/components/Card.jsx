function Card({title, price, image, description, category}) {
    return (
        <article id="card">
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <p>{category}</p>
        </article>
    )
    
}

export default Card