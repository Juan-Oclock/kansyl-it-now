"use client"

export function PhoneGallery() {
  return (
    <div className="flex justify-center">
      {/* Single video placeholder frame */}
      <div className="w-96 h-[600px] bg-neutral-900 rounded-xl border border-neutral-800 flex items-center justify-center">
        <div className="text-center text-neutral-400">
          <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-lg flex items-center justify-center">
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          <p className="text-sm">Video placeholder</p>
          <p className="text-xs text-neutral-500 mt-1">App demo will go here</p>
        </div>
      </div>
    </div>
  )
}
