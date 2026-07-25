import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home/index.jsx'
import Presentes from './pages/Presentes/index.jsx'
import DataLocal from "./pages/DataLocal/index.jsx"

export default function Router() {
    return (
        <>

            <Routes>

                <Route path="*" element={   < Home />  }></Route>
                <Route path="/presentes" element={   < Presentes />  }></Route>
                <Route path="/data-e-local" element={   < DataLocal />  }></Route>

            </Routes>

        </>
    )
}