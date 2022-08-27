import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background: #000;
}

h1,h4,p,a {
  color: #fff;
  text-decoration: none;
}

.btn {
  margin: 1rem 0.2rem;
  padding: 12px 32px;
  font-size: 1rem;
  text-transform: uppercase;
  background: rgb(248, 217, 15);
  color: #222;
  border: 1px solid #fff;
  font-weight: 600;
  cursor: pointer;
}
.btn-light {
  background: transparent;
  color: #fff;
}
.btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  transition: 0.3s;
}
`;

export default GlobalStyle;
