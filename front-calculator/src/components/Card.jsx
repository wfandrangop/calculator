function Card({ image, name, status, species, id, onShowDetails }) {

    return (
        <section>
            <img src={image} alt={name} />
            <ul>
                <li>{name}</li>
                <li>{status}</li>
                <li>{species}</li>
            </ul>
            <button onClick={() => onShowDetails(id)}> Details</button>
        </section>
    )
}
export default Card;
