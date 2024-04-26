const AdminTitle: React.FC<{
    title: string | undefined
}> = (
    { title }
) => {
    return (
        <div>
            <h1 className='text-4xl font-black leading-tight mt-2'>{title}</h1>
        </div>
    );
};

export default AdminTitle