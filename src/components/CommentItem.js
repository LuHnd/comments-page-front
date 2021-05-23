import styled from "styled-components";

const Container = styled.div`
    padding: 1em 2em;
    border: 1px solid rgba(0,0,0,.1);
    margin-bottom: 1em;
`;

const Author = styled.p`
    margin-bottom: 10px;
    font-weight: 600;
`;

const Text = styled.p`
    font-size: 14px;
    padding-left: 20px;
    word-wrap: break-word;
    margin: 0;
`;

const CommentItem = ({ author, text }) => {
    return (
        <Container>
            <Author>{author}</Author>
            <Text>{text}</Text>
        </Container>
    )
}

export default CommentItem;