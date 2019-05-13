import Theme from '@swup/theme';
import styles from './index.styl';

export default class SlideTheme extends Theme {
	name = 'SlideTheme';

	constructor(options) {
		super();

		const defaultOptions = {
			mainElement: '#swup',
			reversed: false
		};

		this.options = {
			...defaultOptions,
			...options
		};
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
