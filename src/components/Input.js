import styled from "styled-components";
import { Alert } from "react-bootstrap";

const InputContainer = styled.div`
    margin-bottom: 1em;
`;

const CustomInput = styled.input`
    width: 100%;
    padding: 5px 10px;
`;

const ErrorMessage = styled(Alert)`
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 0;
`;

const Input = ( props ) => {

    const { errors } = props;

    return (
        <InputContainer>
            <CustomInput
                { ...props }
            />
            {
                errors.map((error, idx) => (
                    <>
                        <ErrorMessage variant="danger" key={idx}>{error}</ErrorMessage>
                    </>
                ))
            }
        </InputContainer>
    )
};

export default Input;