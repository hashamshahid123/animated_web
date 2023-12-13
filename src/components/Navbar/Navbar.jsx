import React, { useEffect, useState } from "react";
import './Navbar.css'

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const [dropdownStates, setDropdownStates] = useState({
    product: false,
    solutions: false,
    resources: false,
    company: false,
  });

  const handleDropdownToggle = (dropdown) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
    const dropdownMenu = document.querySelector(`.dropdown-menu.${dropdown}`);
  if (dropdownMenu) {
    dropdownMenu.classList.toggle('show');
  }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = prevScrollPos < currentScrollPos;

      setVisible(!scrollingDown);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div className="container">
        <nav className={`navbar navbar-expand-lg ${visible ? '' : 'navbar-hidden'}`} style={{backgroundColor: 'white'}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <svg
                width="168"
                height="33"
                viewBox="0 0 168 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M70.9816 5.5H67.5268V26.5133H70.9816V5.5ZM32.6848 5.97335H36.2507V14.4667H45.3927V5.97335H48.9586V26.5133H45.3927V17.9067H36.2507V26.5133H32.6848V5.97335ZM51.1681 18.8933C51.1681 13.9367 53.9201 10.8433 58.3293 10.8433C62.4868 10.8433 65.0297 13.58 65.0297 17.92V20.01H54.6229C54.7765 22.2433 56.0839 23.7767 58.4012 23.7767C60.2675 23.7767 61.2383 22.8033 61.8005 21.73L64.8205 22.82C63.7387 25.0967 61.6174 26.7433 58.277 26.7433C53.6717 26.7433 51.1714 23.6067 51.1714 18.8933H51.1681ZM61.5455 17.3867V17.26C61.5455 14.9833 60.1989 13.8067 58.2738 13.8067C56.1819 13.8067 54.904 15.2233 54.649 17.3867H61.5455ZM74.322 11.13H77.7474V13.4633C78.6168 11.76 80.0353 10.8433 82.2971 10.8433C86.5527 10.8433 88.7589 14.1233 88.7589 18.6767C88.7589 23.23 86.5527 26.51 82.284 26.51C80.0778 26.51 78.6331 25.6067 77.7768 23.9333V32.1133H74.322V11.13ZM81.5421 23.5033C83.915 23.5033 85.3074 21.6833 85.3074 18.6767C85.3074 15.67 83.9183 13.85 81.5421 13.85C79.1659 13.85 77.7768 15.67 77.7768 18.6767C77.7768 21.6833 79.1659 23.5033 81.5421 23.5033ZM97.9826 19.7667L94.4297 20.3967H94.4264C94.8906 24.35 98.4173 26.9867 102.84 26.9867C107.262 26.9867 110.141 24.3667 110.141 20.37C110.141 15.9433 106.602 15.27 102.938 14.5967C100.382 14.1233 98.2473 13.6667 98.2473 11.46C98.2473 9.62667 99.7214 8.69667 101.941 8.69667C104.667 8.69667 106.026 10.07 106.294 12.19L109.834 11.5733C109.314 7.92 106.507 5.5 102.111 5.5C97.7145 5.5 94.6389 7.76333 94.6389 11.83C94.6389 16.3267 98.3878 17.07 101.633 17.6867C104.232 18.19 106.562 18.6467 106.562 20.91C106.562 22.7 105.118 23.79 102.856 23.79C100.202 23.79 98.3061 22.3167 97.9826 19.7667ZM111.798 18.805C111.799 13.8493 114.453 10.8433 118.891 10.8433C122.669 10.8433 124.889 13.02 125.451 16.0867L122.107 16.6867C121.757 14.8833 120.646 13.88 118.891 13.88C116.574 13.88 115.253 15.5833 115.253 18.8367C115.253 22.09 116.502 23.72 118.835 23.72C120.62 23.72 121.757 22.7033 122.107 20.8833L125.451 21.4833C124.889 24.55 122.614 26.7533 118.835 26.7533C114.371 26.7533 111.799 23.6874 111.798 18.805ZM133.828 10.8433C129.445 10.8433 126.68 13.9233 126.68 18.7933C126.68 23.6633 129.432 26.7433 133.828 26.7433C138.224 26.7433 140.989 23.6633 140.989 18.7933C140.989 13.9233 138.211 10.8433 133.828 10.8433ZM137.534 18.7933C137.534 22.0133 136.175 23.7333 133.828 23.7333C131.498 23.7333 130.135 22 130.135 18.7933C130.135 15.5867 131.485 13.8533 133.828 13.8533C136.172 13.8533 137.534 15.5733 137.534 18.7933ZM143.061 21.4567V11.13H146.516V20.31C146.516 22.3167 147.346 23.59 149.144 23.59C151.223 23.59 152.501 21.9433 152.501 19.7933V11.1267H155.956V26.51H152.53V24.0767C151.743 25.58 150.396 26.74 148.023 26.74C144.849 26.74 143.065 24.65 143.065 21.4533L143.061 21.4567ZM160.59 14.2667V22.4733C160.59 25.78 162.388 26.74 165.042 26.74C166.013 26.74 167.01 26.6133 167.922 26.3833L167.768 23.49C167.163 23.59 166.604 23.6467 166.153 23.6467C164.045 23.6467 164.045 22.3167 164.045 21.5567V14.2667H167.654V11.13H164.045V6.59001L160.59 7.57667V11.13H157.838V14.2667H160.59Z"
                  fill="#131B24"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4956 9.05293C14.789 6.6911 14.789 2.86183 12.4956 0.5L1.8835 11.4287C-0.409896 13.7906 -0.409896 17.6198 1.8835 19.9817L12.4956 9.05293ZM1.90669 32.4144C-0.386702 30.0526 -0.386702 26.2233 1.90669 23.8615L24.5913 0.500005C26.8847 2.86183 26.8847 6.69111 24.5913 9.05293L1.90669 32.4144ZM13.9782 32.5C11.6848 30.1382 11.6848 26.3089 13.9782 23.9471L24.5902 13.0183C26.8836 15.3802 26.8836 19.2094 24.5902 21.5713L13.9782 32.5Z"
                  fill="#304DDB"
                ></path>
              </svg>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown" onMouseEnter={() => handleDropdownToggle('product')}
              onMouseLeave={() => handleDropdownToggle('product')}>
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Product
                  </a>
                  <ul className={`dropdown-menu ${dropdownStates.product ? 'show' : ''}`}>
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown" onMouseEnter={() => handleDropdownToggle('solutions')}
              onMouseLeave={() => handleDropdownToggle('solutions')}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Solutions
                  </a>
                  <ul className={`dropdown-menu ${dropdownStates.solutions ? 'show' : ''}`}>
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown" onMouseEnter={() => handleDropdownToggle('resources')}
              onMouseLeave={() => handleDropdownToggle('resources')}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resources
                  </a>
                  <ul className={`dropdown-menu ${dropdownStates.resources ? 'show' : ''}`}>
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown" onMouseEnter={() => handleDropdownToggle('company')}
              onMouseLeave={() => handleDropdownToggle('company')}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Company
                  </a>
                  <ul className={`dropdown-menu ${dropdownStates.company ? 'show' : ''}`}>
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-disabled="true">
                    Pricing
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
              <button type="button" className="btn">Login</button>
              <button type="button" className="btn btn-primary" style={{padding: '0px 19px'}}>Free Trail</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
