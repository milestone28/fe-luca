import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";
import CategoryMenu from "../../Components/CategoryMenu";

const Menu = () => {
  return (
    <div className="menu">
      <div class="bg-menu-pattern bg-cover h-1/4 w-full flex">
        <div class="container  my-8 ">
          <h1 class="text-6xl text-center font-['Gilroy'] font-semibold text-white">
            THE MENU
          </h1>
        </div>
      </div>

      <CategoryMenu />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Menu;
