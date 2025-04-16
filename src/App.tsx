import { useEffect } from 'react'
import { SafeAreaLayout } from './components/SafeAreaLayout'
import { Bluerage } from './Bluerage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// !--IMPORTANT: DO NOT DELETE THE FOLLOWING code or this comment, only add/replace/delete routes--!

function App() {
  useEffect(() => {
    Bluerage.init()
  }, [])

  return (
    <SafeAreaLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SafeAreaLayout>
  )
}

export default App