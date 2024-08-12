import React from "react";

const Test = () => {
  return (
    <div className="flex rounded-lg shadow-lg overflow-hidden w-[500px]">
      <div className="w-[200px] bg-blue-950 px-4 py-5 font-semibold text-white">
        <h3 className="text-xs pb-3 text-gray-300">COURSE</h3>
        <p className="text-lg pb-6">JavaScript <br /> Fundamentals</p>
        <p>
          <a href="#" className="text-slate-400 text-xs">View all chapters &gt;</a>
        </p>
      </div>
      <div className="bg-white p-4 w-[300px] flex flex-col justify-between">
        {/* Row containing chapter info and progress bar */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xs text-slate-600 font-semibold">CHAPTER 4</h3>
          <div className="flex flex-col items-end">
            <div className="h-2 w-[100px] bg-gray-300 rounded-full mb-1">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <p className="text-slate-400 text-xs">6/9 Challenges</p>
          </div>
        </div>
        {/* Chapter title and button */}
        <div>
          <p className="text-lg text-sky-950 font-bold mb-6">Callbacks & Closures</p>
          <button className="rounded-2xl bg-blue-900 text-white py-2 px-5 ml-auto block">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
