import * as React from 'react'

export function IconButton({onClick, children}) {
    return(
        <div className="p-4">
            <button >
                {children}
            </button>
        </div>
    )
}