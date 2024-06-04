import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ProtectRoute from './components/auth/ProtectRoute'
import Loaders from './components/layout/Loaders'

const Home = lazy(() => import("./pages/Home"))
const Chat = lazy(() => import("./pages/Chat"))
const Groups = lazy(() => import("./pages/Groups"))
const Login = lazy(() => import("./pages/Login"))
const Notfound = lazy(() => import("./pages/Notfound"))

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loaders/>}>

        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path='/' element={<Home />} />
            <Route path='/chat/:chatId' element={<Chat />} />
            <Route path='/groups' element={<Groups />} />
          </Route>

          <Route path='/login' element={
            <ProtectRoute user={!user} redirect='/'>
              <Login />
            </ProtectRoute>}
          />

          <Route path='*' element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App