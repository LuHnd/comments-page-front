import React, { useState, useEffect } from 'react';
import { Alert } from "react-bootstrap";

import Api from "../services/Api";
import { validate } from "../util/validate";
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";

const Comments = () => {

    const [ comments, setComments ] = useState([]);
    const [ fields, setFields ] = useState({ author: "", text: ""});
    const [ errors, setErrors ] = useState({ author: [], text: []});
    const [ apiError, setApiError ] = useState(null);

    useEffect(() => {
        Api.get("/api/comments").then(({ data }) => {
            setComments(data.result);
        }).catch((error) => {
            if(error.message) setApiError(error.message);
        })
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        let fieldsErrors = validate(fields, [{
            name: "author",
            regex: {
                pattern: /[^0-9a-zA-Z_ ]/g,
                error: "Unacceptable symbols"
            },
            length: {
                min: 3,
                max: 20,
                error: "Allowed field length 3-20 characters"
            },
        },
        {
            name: "text",
            regex: {
                pattern: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
                error: "Links not allowed"
            },
            length: {
                min: 1,
                max: 255,
                error: "Allowed field length 10-255 characters"
            },
        }]);

        if(!fieldsErrors) {

            Api.post("/api/comments", fields).then(({ data }) => {
                setComments([data.result, ...comments,]);
            }).catch(error => {
                if(error.message) setApiError(error.message);
            });

            setFields({...fields, text: ""});
        } else {
            setErrors({...errors, ...fieldsErrors});
        }
    };

    const onChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        });

        setErrors({
            ...errors,
            [e.target.name]: []
        });
    };

    return (
        <>
            <h1>Guest Book</h1>
            <CommentForm 
                fields={fields}
                onChange={onChange}
                onSubmit={onSubmit}
                errors={errors}
            />
            {apiError && <Alert variant="danger">{ apiError }</Alert>}
            <CommentsList comments={comments} />
        </>
    )
}

export default Comments;