"use strict";

const { ServiceBroker } = require("moleculer");
const { ValidationError } = require("moleculer").Errors;
const TestService = require("../../../services/gopher.service");

describe("Test 'gopher' service", () => {
	let broker = new ServiceBroker({ logger: false });
	broker.createService(TestService);

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe("Test 'gopher.sum' action", () => {

		it("should sum 1+2", async () => {
			const res = await broker.call("gopher.sum", {a: 1, b: 2});
			expect(res).toBe(3);
        });

        it("should fail to sum non-numeric parameters", async () => {
			await expect(() => broker.call("gopher.sum", {a: "a", b: "b"})).rejects.toThrow(ValidationError);
        });

        it("should fail to sum non-numeric parameters 2", async () => {
            try
            {
                const res = await broker.call("gopher.sum", {a: 1, b: 2});
            }
			catch (error) {
                expect(error).toBeInstanceOf(ValidationError);
            }
        });

	});
});
