const DropDownContainer = ({ children }) => {
    return (
        <nav
            className="absolute left-0 top-0 translate-y-[20%] rounded-lg bg-primary-50 shadow-xl ring-1 ring-secondary-900/5"
            aria-label="main"
        >
            <ul className="flex flex-col gap-y-4 p-4">
                <li className="text-lg font-semibold ">{children}</li>
            </ul>
        </nav>
    );
};

export default DropDownContainer;
