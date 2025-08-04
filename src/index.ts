import Theme from '@swup/theme';

import styles from './index.css';

type Options = { mainElement: string; reversed: boolean };

export default class SwupSlideTheme extends Theme {
	name = 'SwupSlideTheme';

	defaults: Options = { mainElement: '#swup', reversed: false };

	options: Options;

	constructor(options: Partial<Options> = {}) {
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
