// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"name" : "My modified kit",
	"productList" : [
		{
			"id": 8,
			"quantity": 4
		},
		{
			"id": 5,
			"quantity": 2
		},
		{
			"id": 3,
			"quantity": 1
		},
		{
			"id": 4,
			"quantity": 1
		},
	]
}

test('Status code should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/8`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualstatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualstatusCode).toBe(200);
});

test('Response body should change the kit', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/8`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["_ip"]).toBe("::ffff:127.0.0.1");
});