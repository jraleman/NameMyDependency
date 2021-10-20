const port = 3000;
const baseUrl = `http://localhost:${port}`;
const verifyEndpoint = '/verify_input';
const inputId = 'name-input';

const onSubmit = async (event) => {
    try {
        const { value } = document.getElementById(inputId);
        event.preventDefault();
        const req = {
            method: 'POST',
            body: JSON.stringify({ value }),
            headers: { 'Content-Type': 'application/json' }
        };
        const url = `${baseUrl}${verifyEndpoint}`;
        const res = await fetch(url, req);
        const isValid = await res.json();
        console.log({ isValid });
    } catch (e) {
        throw new Error(e.message);
    }
    return false;
};
