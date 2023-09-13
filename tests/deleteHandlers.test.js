// eslint-disable-next-line no-undef
const config = require('../config');
const requestBody = {
    "products": [
		{
			"id": 1,
"quantity": 2
		}
	]
}

test('Code should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});

test('Response body delete the kit', async () => {
	let actualresponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true);
});
