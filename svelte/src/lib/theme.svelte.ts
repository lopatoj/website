/**
 * Represents the theme of the application.
 */
export type Theme = "light" | "dark";

function isTheme(value: string | null | undefined): value is Theme {
  return value === "light" || value === "dark";
}

/**
 * Safari Private Browsing / "Block all cookies" throws on any localStorage access.
 */
function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem("theme");
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

function writeStoredTheme(theme: Theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Persistence unavailable; theme still works for this session.
  }
}

function preferredTheme(): Theme {
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

/**
 * Handles theme state and persistence.
 */
export class ThemeProvider {
  /**
   * The current theme displayed.
   */
  private theme: Theme;

  /**
   * Creates a new ThemeSource defaulting to a light theme.
   */
  public constructor() {
    this.theme = $state("light");
  }

  /**
   * Loads theme state from user's prefered color scheme and local storage.
   */
  public initTheme() {
    this.theme = readStoredTheme() ?? preferredTheme();
    writeStoredTheme(this.theme);
    this.applyTheme();
  }

  /**
   * Toggles the current theme between light and dark.
   */
  public toggleTheme() {
    this.theme = this.theme === "dark" ? "light" : "dark";
    writeStoredTheme(this.theme);
    this.applyTheme();
  }

  /**
   * Loads the current theme into the DOM via the body element.
   */
  public applyTheme() {
    document.body.classList.toggle("dark", this.theme === "dark");
  }

  /**
   * Returns the current theme.
   *
   * @returns the current theme
   */
  public currentTheme(): Theme {
    return this.theme;
  }
}
