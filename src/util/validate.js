export const validate = (fields, validations) => {
    let errors = {};

    for(let rule of validations) {
        let field = fields[rule.name].trim();

        errors[rule.name] = [];

        if(rule.regex) {
            if(rule.regex.pattern.test(field)) errors[rule.name].push(rule.regex.error);
        }

        if(rule.length) {
            if(field.length < rule.length.min || field.length > rule.length.max) errors[rule.name].push(rule.length.error);
        }
    }

    return Object.keys(errors).some(error => errors[error].length) ? errors : false;
};