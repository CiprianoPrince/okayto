const PaginationButton = ({ label, isAvailable, onClick }) => (
    <button
        className={`relative block rounded px-4 py-2 text-sm transition-all duration-300 ${
            isAvailable ? 'text-secondary-600 hover:bg-neutral-100' : 'text-secondary-600/50'
        }`}
        onClick={onClick}
        disabled={!isAvailable}
    >
        {label}
    </button>
);

export default PaginationButton;
