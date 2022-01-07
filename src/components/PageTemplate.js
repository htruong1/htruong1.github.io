import * as React from 'react';

import Background from './Background'
import NavBar from './Navbar'

export function PageTemplate({children}) {
    return(
    <main id="main" className="flex flex-col sm:flex-row"> 
    <NavBar/>
       <Background className="sm:p-8 flex-auto flex sm:items-center sm:justify-center text-white">
          {children}
        </Background>
    </main>
    )
}