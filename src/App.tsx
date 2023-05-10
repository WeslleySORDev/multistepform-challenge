import bgSidebarMobile from "/assets/images/bg-sidebar-mobile.svg";

function App() {
  return (
    <div className="flex flex-col">
      <nav className="bg-[url(/assets/images/bg-sidebar-mobile.svg)] h-[172px] pt-8">
        <div className="flex gap-4 w-fit mx-auto">
          <button className="bg-primary-LightBlue font-medium h-8 w-8 rounded-full">1</button>
          <button className="text-neutral-White border border-neutral-White font-medium h-8 w-8 rounded-full">2</button>
          <button className="text-neutral-White border border-neutral-White font-medium h-8 w-8 rounded-full">3</button>
          <button className="text-neutral-White border border-neutral-White font-medium h-8 w-8 rounded-full">4</button>
        </div>
      </nav>
    </div>
  );
}

export default App;
