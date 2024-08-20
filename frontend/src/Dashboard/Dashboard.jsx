import "./dasboard.css";

const Dashboard = () => {
  return (
    <div className="max-w-7xl">
      <div className="px-4">
        <div className="w-full mx-auto">
          <div className="p-8 mb-5 bg-white rounded-3xl">
            <h1 className="mb-10 text-3xl font-bold">
              Dashboard for the book inventory
            </h1>
            {/* <div className="flex items-center justify-between">
            <div className="flex items-stretch">
              <div className="text-xs text-gray-400">Members <br />connected</div>
              <div className="mx-4 border-l h-100"></div>
              <div className="flex -space-x-3 flex-nowrap">
                <div className="h-9 w-9">

                  <img className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random" />
                </div>
                <div className="h-9 w-9">
                  <img className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <button type="button" className="inline-flex items-center justify-center px-3 text-gray-800 transition border h-9 rounded-xl hover:border-gray-400 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                </svg>
              </button>
              <button type="button" className="inline-flex items-center justify-center px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 h-9 rounded-xl hover:text-white">
                Open
              </button>
            </div>
          </div>

          <hr className="my-10" />

          <div className="grid grid-cols-2 gap-x-20">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Stats</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="p-4 bg-green-100 rounded-xl">
                    <div className="text-xl font-bold leading-none text-gray-800">Good day, <br/> Kristin</div>
                    <div className="mt-5">
                      <button type="button" className="inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-gray-800 transition bg-white rounded-xl hover:text-green-500">
                        Start tracking
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-gray-800 bg-yellow-100 rounded-xl">
                  <div className="text-2xl font-bold leading-none">20</div>
                  <div className="mt-2">Tasks finished</div>
                </div>
                <div className="p-4 text-gray-800 bg-yellow-100 rounded-xl">
                  <div className="text-2xl font-bold leading-none">5,5</div>
                  <div className="mt-2">Tracked hours</div>
                </div>
                <div className="col-span-2">
                  <div className="p-4 text-gray-800 bg-purple-100 rounded-xl">
                    <div className="text-xl font-bold leading-none">Your daily plan</div>
                    <div className="mt-2">5 of 8 completed</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">Your tasks today</h2>

              <div className="space-y-4">
                <div className="p-4 space-y-2 text-gray-800 bg-white border rounded-xl">
                  <div className="flex justify-between">
                    <div className="text-xs text-gray-400">Number 10</div>
                    <div className="text-xs text-gray-400">4h</div>
                  </div>
                  <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">Blog and social posts</a>
                  <div className="text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="inline mr-1 text-gray-800 align-middle" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>Deadline is today
                  </div>
                </div>
                <div className="p-4 space-y-2 text-gray-800 bg-white border rounded-xl">
                  <div className="flex justify-between">
                    <div className="text-xs text-gray-400">Grace Aroma</div>
                    <div className="text-xs text-gray-400">7d</div>
                  </div>
                  <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">New campaign review</a>
                  <div className="text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="inline mr-1 text-gray-800 align-middle" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>New feedback
                  </div>
                </div>
                <div className="p-4 space-y-2 text-gray-800 bg-white border rounded-xl">
                  <div className="flex justify-between">
                    <div className="text-xs text-gray-400">Petz App</div>
                    <div className="text-xs text-gray-400">2h</div>
                  </div>
                  <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">Cross-platform and browser QA</a>
                </div>

              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
