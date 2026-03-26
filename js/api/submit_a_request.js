/* submit_a_request.js 
   DESCR: Handles the "Submit Request" button that POSTs to 
   the api which then inserts a request into the database.
*/

const route = window.env.SUBMIT_A_REQUEST;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('submit-a-request-form');
    if (!form) {
        console.error("Form with id 'submit-a-request-form' was not found.")
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const data = {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            phone_number: formData.get('phone_number'),
            address_line_1: formData.get('address_line_1'),
            address_line_2: formData.get('address_line_2'),
            city: formData.get('city'),
            state: formData.get('state'),
            zip_code: formData.get('zip_code'),
            request_type_code: formData.get('request_type_code'),
            description: formData.get('description')
        };

        try {
            const response = await fetch(route, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });

            const result = await response.json();
            if (result.success) {
                alert(`Message: ${result.message}\nRequest Number: ${result.req_uid}`);
                form.reset();
            } else {
                alert(result.message);
            }
        } catch (err) {
            console.error(err);
            alert(`
                There was an error submitting a request to '/api/submit-a-request'.\n
                IT has been notified, please standby.
            `);
        }
    });
});