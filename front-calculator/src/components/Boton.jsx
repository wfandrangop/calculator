function Boton({ label, onClick }) {
    return (
        <button
            onClick={onClick}
        >
            {label}
        </button>
    );
}
export default Boton;