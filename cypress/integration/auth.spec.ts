describe("Auth", function () {
	before(() => {
		cy.fixture("auth").as("auth")
	})

	it('auth as manager', function () {
		cy.visit(this.auth.url)

		const accounts = this.auth.accounts
		cy
			.get("form input[type=text]")
			.type(accounts.correct.login)

		cy
			.get("input[type=password]")
			.type(accounts.correct.password)

		cy
			.get("button")
			.click()

		cy
			.contains(`You are authorized as`).should("contain", `${accounts.correct.login}`)

		cy.wait(5000)

		cy
			.get(".office-list__item__head-name")
			.should("exist")
	})
})