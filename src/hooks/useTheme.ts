import { useDispatch, useSelector } from "react-redux";
import { setTheme as st, toggleTheme as tt } from "../store/slices/themeSlice";

/**
 * A custom hook that provides theme-related functionality.
 */
export default function useTheme() {
  const theme: string = useSelector((state: { theme: string }) => state.theme);
  const dispatch = useDispatch();

  /**
   * Sets the current theme to the value provided as argument.
   */
  const setTheme = (theme: string): void => {
    dispatch(st(theme));
  };

  /**
   * Toggles the current theme between "light" and "dark".
   */
  const toggleTheme = (): void => {
    dispatch(tt(null));
  };

  /**
   * Indicates whether the current theme is "dark".
   * @type {boolean}
   */
  const isDark = theme === "dark";

  return { theme, setTheme, toggleTheme, isDark };
}
