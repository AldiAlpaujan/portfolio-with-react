import { Func } from "../../../utils/function";
import BurgerMenu from "../../atom/BurgerMenu";
import Button from "../../atom/Button";
import ToggleThemeMode from "../../atom/ToggleThemeMode";

const HeaderAction = () => {
  return (
    <>
      <BurgerMenu className="lg:hidden" />
      <div className="hidden lg:flex gap-7 items-center w-[229px]">
        <ToggleThemeMode />
        <Button onClick={Func.downloadCv} >Download CV</Button>
      </div>
    </>
  )
}

export default HeaderAction;