const HomeSearchBar = () => {
  return (
    <div className="flex w-[80%] h-[50px] border-2 border-gray-200 rounded-full">
      <input 
        type="text" 
        placeholder="Search a course eg. COMP1100" className="w-full h-full rounded-full px-4 focus:outline-blue-200" />
    </div>
  );
}

export default HomeSearchBar;