import Theme from '@swup/theme';

import styles from './index.css';

export default class SwupSlideTheme extends Theme {
	name = 'SwupSlideTheme';

	defaults = {
		mainElement: '#swup',
		reversed: false
	};

	constructor(options = {}) {
		super();
		this.options = { ...this.defaults, ...options };
	}

	mount() {
		this.applyStyles(styles);
		this.addClassName(this.options.mainElement, 'main');
		if (this.options.reversed) {
			document.documentElement.classList.add('swup-theme-reverse');
		}
	}

	unmount() {
		document.documentElement.classList.remove('swup-theme-reverse');
	}
}
