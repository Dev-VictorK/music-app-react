import { useLocation, useParams, useNavigate } from "react-router-dom";
import AlbumsContainer from "./AlbumsContainer";

export function withRouter(Component) {
    return function WrapperComponent(props) {
        const location = useLocation();
        const params = useParams();
        const navigate = useNavigate();

        return (
            <Component
            {...props}
            location={location}
            params={params}
            navigate={navigate}
            />
        );
    };
}