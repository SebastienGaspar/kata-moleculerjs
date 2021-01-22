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
				return "Gopher Machine";
			}
		}
	},

	/**
	 * Events
	 */
	events: {
		async "some.thing"(ctx) {
			this.logger.info("Something happened", ctx.params);
		}
	},

	/**
	 * Methods
	 */
	methods: {

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
