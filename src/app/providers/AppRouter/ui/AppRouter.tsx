import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
        ))}
    </Routes>
);

export default AppRouter;
