"use strict";

/**
 * gopher service
 */
module.exports = {

	name: "gopher",

	/**
	 * Service settings
	 */
	settings: {},

	/**
	 * Service metadata
	 */
	metadata: {},

	/**
	 * Service dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		/**
		* Test action
		*/
		test: {
			async handler(ctx) {
				ctx.emit("some.thing1", {});
				const pipo = await this.pipo();
				const town = await ctx.call("town.test");
				return `Gopher Machine: ${town} - ${pipo}`;
			}
		},
		sum: {
			params: {
				a: "number",
				b: "number"
			},
			async handler(ctx) {
				return ctx.params.a + ctx.params.b;
			}
		}
	},

	/**
	 * Events
	 */
	events: {
		async "some.*"(ctx) {
			this.logger.info("Something happened", ctx.params);
		}
	},

	/**
	 * Methods
	 */
	methods: {
		pipo() {
			return "pipo";
		}
	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
