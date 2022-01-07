import * as React from 'react'

export function IconButton({onClick, children}) {
    console.log(children)
    return(
        <div className="p-4">
            <button >
                {children}
            </button>
        </div>
    )
}