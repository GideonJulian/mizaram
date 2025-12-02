const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-[9999]">
      <div className="animate-spin h-10 w-10 border-4 border-black border-t-transparent rounded-full"></div>
    </div>
  );
};

export default Loader;