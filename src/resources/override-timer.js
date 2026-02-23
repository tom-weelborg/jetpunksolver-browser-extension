/* eslint-disable no-undef */
(() => {
	const wait = () => {
		if (!window.JetPunk || !JetPunk.shared || !JetPunk.shared.Timer) {
			return setTimeout(wait, 0);
		}

		const Timer = JetPunk.shared.Timer;
		const original = Timer.prototype.setSeconds;

		Timer.prototype.setSeconds = function (secs) {
			return original.call(this, 5);
		};
	};

	wait();
})();
