const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'a99f13b4-63b3-490d-abf2-a5b9100fefae '}`,
		PORT: `${process.env.PORT||8080}`
	}
})
