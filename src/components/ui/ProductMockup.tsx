export function ProductMockup() {
  return (
    <div className="relative">
      {/* Main mockup container with shadow */}
      <div className="bg-white border-2 border-black rounded-2xl shadow-[8px_8px_0_0_#000] overflow-hidden w-[540px]">
        {/* Header bar */}
        <div className="bg-gray-100 border-b-2 border-black px-5 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400 border border-black/20" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black/20" />
            <div className="w-3 h-3 rounded-full bg-green-400 border border-black/20" />
          </div>
          <div className="flex-1 text-center text-sm font-medium text-gray-500">
            Export Messages and Conversations
          </div>
        </div>

        {/* Tabs - matching actual app */}
        <div className="flex border-b border-gray-200 bg-white">
          <div className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-blue-600 border-b-2 border-blue-600 cursor-pointer">
            <span className="text-base">💬</span> Conversations
          </div>
          <div className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-500 cursor-pointer">
            <span className="text-base">📊</span> Messages
          </div>
          <div className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-500 cursor-pointer">
            <span className="text-base">📁</span> Export History
          </div>
          <div className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-500 cursor-pointer">
            <span className="text-base">🆘</span> Support
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-lg">Conversations</h3>
              <p className="text-xs text-gray-400">View, manage and export your data with filters</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5 text-center">
                <div className="text-lg font-bold text-blue-600">847</div>
              </div>
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg text-sm flex items-center gap-1.5">
                Export
              </button>
            </div>
          </div>

          {/* Search & Filters Panel */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-700">
              <span>🔍</span> Search & Filters
            </div>

            {/* Filter Grid - Row 1 */}
            <div className="grid grid-cols-3 gap-2.5 mb-2.5">
              <div>
                <div className="text-[10px] font-semibold text-gray-500 mb-1">Search</div>
                <div className="bg-white border border-gray-200 rounded-md px-2.5 py-1.5 text-xs text-gray-400">
                  Search conversations...
                </div>
              </div>
              <div>
                <div className="text-[10px] font-semibold text-gray-500 mb-1">Start Date</div>
                <div className="bg-white border border-gray-200 rounded-md px-2.5 py-1.5 text-xs text-gray-700">
                  2025-08-10
                </div>
              </div>
              <div>
                <div className="text-[10px] font-semibold text-gray-500 mb-1">End Date</div>
                <div className="bg-white border border-gray-200 rounded-md px-2.5 py-1.5 text-xs text-gray-700">
                  2026-02-10
                </div>
              </div>
            </div>

            {/* Filter Grid - Row 2 */}
            <div className="grid grid-cols-3 gap-2.5 mb-2.5">
              <div>
                <div className="text-[10px] font-semibold text-gray-500 mb-1">Last Message Type</div>
                <div className="bg-white border border-gray-200 rounded-md px-2.5 py-1.5 text-xs text-gray-700 flex items-center justify-between">
                  All Types <span className="text-gray-400">▾</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-semibold text-gray-500 mb-1">Direction</div>
                <div className="bg-white border border-gray-200 rounded-md px-2.5 py-1.5 text-xs text-gray-700 flex items-center justify-between">
                  All Directions <span className="text-gray-400">▾</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-semibold text-gray-500 mb-1">Status</div>
                <div className="bg-white border border-gray-200 rounded-md px-2.5 py-1.5 text-xs text-gray-700 flex items-center justify-between">
                  All <span className="text-gray-400">▾</span>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-end mt-3">
              <button className="bg-blue-600 text-white font-semibold py-1.5 px-6 rounded-lg text-xs flex items-center gap-1.5">
                🔍 Search
              </button>
            </div>
          </div>

          {/* Conversation Result */}
          <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shrink-0 flex items-center justify-center text-white text-sm font-bold">
              S
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm">Sarah Johnson</div>
              <div className="text-xs text-gray-400 truncate">Hey, just following up on the quote...</div>
            </div>
            <div className="text-xs text-gray-400 shrink-0">2/9/2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}
