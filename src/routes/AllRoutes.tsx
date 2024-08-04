import { Routes, Route} from 'react-router-dom'
import Homepage from '../views/Homepage/Homepage'
import NotFound from '../views/NotFound/NotFound'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Homepage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default AllRoutes