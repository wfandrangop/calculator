import Card from "./Card";

function TableCard({ data, onShowDetails }) {

    return (
        <>
            {
                data.results?.map(
                    
                    (character) => <Card key={character.id} image={character.image} name={character.name} status={character.status} species={character.species} id={character.id} onShowDetails={onShowDetails} />
                )
                || <> <h3>No data found</h3> </>
            }
        </>
    )
}
export default TableCard;
