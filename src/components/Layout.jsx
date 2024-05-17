// index.css의 스타일 적용을 위한 html 코드 별도 생성하여 렌더링
const Layout = ({ children }) => { // children: app.jsx Layout 내부에 들어있는 '자식' 요소인 TodoContainer
  return <main className="layout">{children}</main>;
};

export default Layout;
