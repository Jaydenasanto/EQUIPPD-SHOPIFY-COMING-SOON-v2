import { useUrl, Link, useCart } from "@shopify/hydrogen";
import { Drawer, useDrawer } from "./Drawer.client";
import { CartDetails } from "./CardDetails/CardDetails.client";
import GlobalCareLogo from "./../assets/images/global-care-logo-landscape.jpeg";
import style from "./componentCSS/Header/Header.module.scss";

export default function Header({ shop }) {
  const { pathname } = useUrl();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  const isHome = pathname === "/";
  return (
    <>
      <Drawer open={isOpen} onClose={closeDrawer}>
        <div className="grid">
          <Drawer.Title>
            <h2 className="sr-only">Cart Drawer</h2>
          </Drawer.Title>
          <CartDetails onClose={closeDrawer} />
        </div>
      </Drawer>
      <header
        role="banner"
        className="flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-2 antialiased transition bg-white/80
        "
      >
        <div className="flex justify-start items-center gap-6 font-small text-lg">
          <div className="flex">
            <Link className="logo" to="/">
              {/* {shop.name} */}
              <img
                src={GlobalCareLogo}
                alt="Equippd logo"
                width="160px !important"
              />
            </Link>
          </div>
          <div className={`${style.NavTitle} flex`}>
            <Link to="/">Home</Link>
          </div>
          <div className={`${style.dropDown} ${style.NavTitle} flex`}>
            <Link to="/">About Us</Link>
            <div className={style.DownArrow}>
              <KeyboardArrowDownIcon />
            </div>
            <div className={style.dropDownContent}>
              <Link className={style.dropDownlink} to="/">
                Image Gallery
              </Link>
            </div>
          </div>
          <div className={`${style.dropDown} ${style.NavTitle} flex`}>
            <Link to="/">How We Care</Link>
            <div className={style.DownArrow}>
              <KeyboardArrowDownIcon />
            </div>
            <div className={style.dropDownContent}>
              <Link className={style.dropDownlink} to="/">
                Disaster Relief
              </Link>
              <Link className={style.dropDownlink} to="/">
                Local Global Care Operations
              </Link>
              <Link className={style.dropDownlink} to="/">
                Global Care International
              </Link>
              <Link className={style.dropDownlink} to="/">
                Global Case Stories
              </Link>
              <Link className={style.dropDownlink} to="/">
                Red Dust Challenge
              </Link>
            </div>
          </div>
          <div className={`${style.dropDown} ${style.NavTitle} flex`}>
            <Link to="/">Donate</Link>
            <div className={style.DownArrow}>
              <KeyboardArrowDownIcon />
            </div>
            <div className={style.dropDownContent}>
              <Link className={style.dropDownlink} to="/">
                Ukraine
              </Link>
              <Link className={style.dropDownlink} to="/">
                Disaster Relief
              </Link>
              <Link className={style.dropDownlink} to="/">
                Single Donations
              </Link>
              <Link className={style.dropDownlink} to="/">
                Monthly Donations
              </Link>
              <Link className={style.dropDownlink} to="/">
                Well Bequests
              </Link>
              <Link className={style.dropDownlink} to="/">
                Business Partnerships
              </Link>
              <Link className={style.dropDownlink} to="/">
                Seeds For Needs
              </Link>
            </div>
          </div>

          <div className={`${style.NavTitle} flex`}>
            <Link to="/">Volunteer</Link>
          </div>
          <div className={`${style.NavTitle} flex`}>
            <Link to="/">Shop</Link>
          </div>
          <div className={`${style.NavTitle} flex`}>
            <Link to="/">Contact Us</Link>
          </div>
        </div>

        <button
          onClick={openDrawer}
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconBag />
          <CartBadge dark={isHome} />
        </button>
      </header>
    </>
  );
}

function KeyboardArrowDownIcon() {
  return (
    <svg
      class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiBox-root css-1om0hkc"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="KeyboardArrowDownIcon"
    >
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
    </svg>
  );
}

function IconBag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <title>Bag</title>
      <path
        fillRule="evenodd"
        d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
      />
    </svg>
  );
}

function CartBadge({ dark }) {
  const { totalQuantity } = useCart();

  if (totalQuantity < 1) {
    return null;
  }
  return (
    <div
      className={`${
        dark ? "text-black bg-white" : "text-white bg-black"
      } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
    >
      <span>{totalQuantity}</span>
    </div>
  );
}
