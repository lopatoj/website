type Theme = 'light' | 'dark';

class ThemeHandler {
	private theme: Theme;

	constructor() {
		this.theme = $state('light');
	}

	public initTheme() {
		this.theme =
			localStorage.theme ||
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		localStorage.theme = this.theme;
		this.loadTheme();
	}

	public toggleTheme() {
		this.theme = this.theme === 'dark' ? 'light' : 'dark';
		localStorage.theme = this.theme;
		this.loadTheme();
	}

	public loadTheme() {
		document.body.classList.toggle('dark', this.theme === 'dark');
	}

	public currentTheme(): Theme {
		return this.theme;
	}
}

export const theme = new ThemeHandler();
