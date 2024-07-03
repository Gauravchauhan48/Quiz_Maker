const app = require('./app');

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
































