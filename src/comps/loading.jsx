const Loader = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center h-screen bg-background">
            <div className="relative flex items-center justify-center">
                <div className="absolute h-16 w-16 rounded-full animate-spin border-t-4 border-[#EF001C]"></div>
                <div className="absolute h-12 w-12 rounded-full animate-spin border-t-4 border-[#111010] dark:border-white"></div>
            </div>
        </div>
    );
};

export default Loader;