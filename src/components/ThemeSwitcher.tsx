import { BulbFilled } from "@ant-design/icons";
import { Switch } from "antd";
import { useTheme } from "../hooks";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const defaultCheckedSwitch = theme === "light" ? true : false;

  const handleSwitchChange = () => {
    let newTheme = theme;
    if (theme === "light") {
      newTheme = "dark"
    } else {
      newTheme = "light"
    }
    setTheme(newTheme)
  }
  return (
    <div className="flex switcher">
      <BulbFilled style={{ fontSize: "20px", color: "#476D7C" }} />
      <Switch onChange={handleSwitchChange} defaultChecked={defaultCheckedSwitch} style={{ background: theme === "light" ? "rgb(0, 165, 154)" : "#476D7C" }} />
    </div>
  )
}