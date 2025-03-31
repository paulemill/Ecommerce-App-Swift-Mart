const NoProductFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-4 bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          No Product Found
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Sorry, we couldn't find any products matching your search.
        </p>
        <button
          onClick={() => window.location.reload()} // to refresh the page
          className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default NoProductFound;
