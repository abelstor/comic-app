import { Alert } from "react-bootstrap";

export const Loading = () => {

    return (
        <Alert variant="primary">
            <Alert.Heading className="text-center mt-5 mb-5">Cargando...</Alert.Heading>
        </Alert>
    )
}