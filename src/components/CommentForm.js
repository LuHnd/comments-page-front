import React, { useEffect } from 'react';
import { Button } from "react-bootstrap";
import styled from 'styled-components';

import Input from "./Input";
import Textarea from "./Textarea";

const Form = styled.form `
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.1);
    padding: 15px;
    margin-bottom: 1em;
`;

const CommentForm = ({ fields, onChange, onSubmit, errors }) => {

    useEffect(() => {
        console.log("CommentForm Rerendered");
    })

    return (
        <Form onSubmit={(e) => { onSubmit(e) }}>
            <Input
                onChange={(e) => { onChange(e) }}
                value={fields.author}
                errors={errors.author}
                placeholder="Your name"
                name="author"
            />

            <Textarea
                onChange={(e) => { onChange(e) }}
                value={fields.text}
                errors={errors.text}
                placeholder="Your comment"
                name="text"
            />

            <Button 
                variant="primary"
                type="submit"
            >Submit</Button>
        </Form>
    );
};

export default CommentForm;