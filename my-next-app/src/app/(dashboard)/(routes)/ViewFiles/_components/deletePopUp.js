import React from 'react'

export default function deletePopUp() {
  return (
    <div className="rounded-lg bg-white p-8 shadow-2xl">
  <h2 className="text-lg font-bold">Are you sure you want to do that?</h2>

  <p className="mt-2 text-sm text-gray-500">
    Doing that could have cause some issues elsewhere, are you 100% sure it's OK?
  </p>

  <div className="mt-4 flex gap-2">
    <button type="button" className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
      Yes, I'm sure
    </button>

    <button type="button" className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
      No, go back
    </button>
  </div>
</div>
  )
}
