export function Header({ myData, comparerData, clearDataCallBack }) {
  const handleDataClear = () => {
    clearDataCallBack();
  };

  return (
    <header className="flex bg-white min-h-[60px]  bg-opacity-[10%] backdrop-blur-md rounded-[50px] text-[18px] px-9 justify-between text-white items-center">
      <div className="logo">Avik Mukherjee</div>

      <ul className="menu-container flex gap-9">
        {myData && comparerData ? (
          <li onClick={handleDataClear} className="cursor-pointer">
            Home
          </li>
        ) : (
          <li className="cursor-not-allowed">Home</li>
        )}

        <li className="max-md:hidden cursor-pointer hidden">About</li>
        <a href="https://x.com/avikm744" target="_blank">
          Hello!
        </a>
      </ul>
    </header>
  );
}
