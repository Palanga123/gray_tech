function App() {
  return (
    /* Top Nav */
    <header className="w-full flex justify-between items-center p-4 text-gray-800">
        <div>
            <p className="font-semibold text-2xl text-blue-600">Zamola Logistics Ltd</p>
        </div>
        <div className="hidden md:block">
            <ul className="flex justify-even">
                <li className="py-4 px-2">Home</li>
                <li className="py-4 px-2">About</li>
                <li className="py-4 px-2">FAQ's</li>
            </ul>
        </div>
        <div className="md:hidden">
            <button className="rounded text-sky-400 font-semibold p-2 border border-sky-400">Menu</button>
        </div>
    </header>
  );
}

export default App;
