import Pages from "./pages/index";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

function App() {
  return (
    <>
      <Theme
        theme="dark"
        accentColor="crimson"
        grayColor="sand"
        radius="large"
        scaling="95%"
      >
        <Pages />
        <ThemePanel/>
      </Theme>
    </>
  );
}

export default App;
