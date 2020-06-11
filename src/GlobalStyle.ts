import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
} from 'styled-components';
export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
@import url("https://www.fontzip.com/storage/2018/12/11/play-pretend/webfonts/Play Pretend.css");
@import url("http://fonts.googleapis.com/earlyaccess/nanumgothic.css");
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
  }
  html, body, #root{
    width:100%;
    height: 100%;
    background-color: #e3e6f0;
    font-size: 16px;
    font-family: 'Nanum Gothic';
    min-width: 1360px;
    overflow: auto;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  a {
    &:link{
      text-decoration: none;
    }
    &:visited{
      text-decoration: none;
    }
  }
  button {
    all: unset;
    cursor: pointer;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  
@media screen and (max-width: 1680px) {
  html {
    font-size: 14px;
  }
}

@media screen and (max-width: 1620px) {
  html {
    font-size: 13.5px;
  }
}

@media screen and (max-width: 1560px) {
  html {
    font-size: 13px;
  }
}

@media screen and (max-width: 1440px) {
  html {
    font-size: 11.383px;
  }
}

  `;

export const MainColor = '#55109b';
export const SubColor = '#e0ee06';
export const DeactColor = '#707070';
