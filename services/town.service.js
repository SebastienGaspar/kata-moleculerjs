"use strict";

/**
 * town service
 */
module.exports = {

	name: "town",

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
				return "New town";
			}
		}
	},

	/**
	 * Events
	 */
	events: {
		async "**"(ctx) {
			this.logger.info("Something happened", Object.keys(ctx));
			this.logger.info("Something happened", ctx.eventName, ctx.eventGroups);
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
