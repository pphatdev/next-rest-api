const AdminTitle: React.FC<{
    title: string | undefined
}> = ({ title }) => {
    return (
        <div>
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-black leading-tight mb-5 sm:mb-0 mt-2">{title}</h1>
        </div>
    );
};

export default AdminTitle