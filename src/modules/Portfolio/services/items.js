function getItems({state, output, services}) {
	services.http.get("/data/items.json")
		.then([output.success])
		.catch(output.error)
}

export default [getItems];