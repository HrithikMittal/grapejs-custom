import styled from "styled-components";

export const STYLED_GRID_WRAPPER = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100vh;
  box-sizing: border-box;
`;

export const STYLED_CANVAS = styled.main`
  width: 100%;
  flex-grow: 1;
  padding: 10px;
  /* max-height: calc(100vh - 120px); */
  height: max-content;
  overflow: auto;
  background-color: white;
`;

export const STYLED_ASIDE = styled.aside`
  display: block;
  width: 300px;
  /* flex-direction: column; */
  background: #f4f3f3;
  /* padding: 20px 0; */
  /* opacity: 0.5; */
  position: relative;
  top: 0;
  height: 100%;

  transition: all 500ms linear;
  z-index: 100;
  .blocks {
    transition: all 500ms linear;
    min-height: 100vh;
    max-height: 100vh;
    overflow-y: auto;
    .gjs-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #fff;
      border: 1px solid #dbe0e5;
      box-sizing: border-box;
      border-radius: 10px;
      padding: 24px;
      gap: 4px;
      svg {
        width: 35px;
        height: 35px;
      }
      .type-name {
        font-style: normal;
        font-weight: 500;
        font-size: 0.75rem;
        text-align: center;
        text-transform: capitalize;
        color: #9a9797;
      }
    }
  }
  /* border-right: 1px solid #ededed; */
  box-shadow: 0 2px 12px -2px rgba(34, 34, 34, 0.24); /* border: 2px dashed red; */
  ${(props) =>
    props.isHidden === true
      ? `
    margin-left: -100%;
    left: -100%;
    width: 0
  `
      : ``}
`;

export const STYLED_TOGGLE = styled.button`
  position: absolute;
  width: 100px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  box-shadow: -2px 2px 2px 0px rgba(34, 34, 34, 0.124); /* border: 2px dashed red; */
  background: #f4f3f3;
  border-radius: 0 0 10px 10px;
  transform: rotate(-90deg);
  border-left: 1px solid #f4f3f3;
  border-right: 1px solid #f4f3f3;
  border-bottom: 1px solid #f4f3f3;
  transform-origin: bottom left;
  margin-left: 25px;
  cursor: pointer;
  transition: left 500ms ease-in-out;
  left: 100%;
  right: 0;
  svg {
    width: 20px;
    height: 20px;
    color: #9a9797;
  }
`;

export const STYLED_SEARCH_INPUT = styled.label`
  background: #ffffff;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  gap: 0;
  align-items: center;
  &:focus-within {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
      rgb(255, 98, 6) 0px 0px 0px 2px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  }
  input {
    padding: 12px;
    min-width: 0;
    width: auto;
    display: block;
    border-radius: inherit;
    flex-grow: 1;
  }
  button {
    border-radius: inherit;
    background: #9a9797;
    padding: 12px;
  }
`;

export const STYLED_PANEL = styled.section`
  padding: 0 8px;
  overflow-y: auto;
  min-height: calc(100vh - 175px);
  max-height: calc(100vh - 175px);
`;

export const STYLED_PANEL_SECTION = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const STYLED_PANEL_SECTION_HEADER = styled.header`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #060e4f;
  text-transform: capitalize;
`;
export const STYLED_PANEL_SECTION_CONTENT = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat() (1fr, auto);
  grid-gap: 10px;
  margin-bottom: 30px;
`;

export const STYLED_HISTORY_BUTTON = styled.button`
  padding: 6px 12px;
  /* secondary color */
  border: 1.5px solid #ff6206;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const STYLED_ELEMENT_CARD = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1.5px solid #dbe0e5;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 24px;
  gap: 12px;
  svg {
    width: 35px;
    height: 35px;
  }
  .type-name {
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    text-align: center;
    text-transform: capitalize;
    color: #9a9797;
  }
`;

export function BackArrowIcon() {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 5H3.83L7.415 1.415L6 0L0 6L6 12L7.415 10.585L3.83 7H18V5Z"
        fill="white"
      />
    </svg>
  );
}
export function UndoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 32 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.9092 20.1606C30.6393 20.1606 30.3918 20.0062 30.2857 19.7528C30.2079 19.5689 28.2633 15.2071 20.9927 14.3432C19.4782 14.1593 17.6644 14.065 15.4616 14.0485V19.4853C15.4616 19.7363 15.3261 19.9638 15.1034 20.084C14.8818 20.1995 14.6166 20.183 14.4104 20.0451L0.441935 10.6424C0.253364 10.5163 0.142578 10.3042 0.142578 10.0814C0.142578 9.85634 0.253364 9.65127 0.441935 9.51927L14.4163 0.115448C14.6225 -0.027159 14.8853 -0.0365873 15.1093 0.0812698C15.3332 0.201484 15.4664 0.428948 15.4664 0.672913V5.73252C18.5047 6.12852 31.5821 8.47859 31.5821 19.4912C31.5821 19.8106 31.357 20.0899 31.0412 20.1535C30.9976 20.1606 30.9516 20.1606 30.9092 20.1606Z"
        fill="#FF6206"
      />
    </svg>
  );
}
export function RedoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 32 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.758742 20.1551C0.439695 20.0883 0.214844 19.8118 0.214844 19.4927C0.214844 8.47367 13.2957 6.12644 16.3343 5.72992V0.673889C16.3343 0.424734 16.471 0.196847 16.6913 0.0768275C16.9146 -0.0386347 17.179 -0.0219232 17.3841 0.113289L31.3644 9.52346C31.5482 9.64804 31.6591 9.85466 31.6591 10.0841C31.6591 10.3074 31.5482 10.5155 31.3644 10.6401L17.3917 20.0488C17.1835 20.1855 16.9162 20.2007 16.6974 20.0837C16.4756 19.9652 16.3388 19.7358 16.3388 19.4851V14.0462C14.1405 14.0599 12.3204 14.1571 10.8057 14.3395C3.53596 15.2009 1.59282 19.5656 1.51382 19.7525C1.40595 20.0032 1.15983 20.1642 0.890918 20.1642C0.84534 20.1673 0.799762 20.1642 0.758742 20.1551Z"
        fill="#FF6206"
      />
    </svg>
  );
}
export function CogIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.4646 10.9597L24.2712 10.6808C24.0903 10.1243 23.8675 9.58767 23.6073 9.07783L24.9619 7.33367C25.5102 6.62783 25.4461 5.6315 24.8195 5.02483L22.982 3.18733C22.3694 2.555 21.3731 2.492 20.666 3.03917L18.9241 4.39367C18.4143 4.1335 17.8776 3.91067 17.3199 3.72983L17.041 1.54C16.936 0.6615 16.1905 0 15.3073 0H12.6939C11.8107 0 11.0651 0.6615 10.9601 1.5365L10.6813 3.72983C10.1236 3.91067 9.5869 4.13233 9.07704 4.39367L7.33397 3.03917C6.62928 2.492 5.6329 2.555 5.02504 3.1815L3.18747 5.01783C2.55511 5.6315 2.49094 6.62783 3.03929 7.33483L4.39385 9.07783C4.1325 9.58767 3.91083 10.1243 3.72999 10.6808L1.54006 10.9597C0.661528 11.0647 0 11.8102 0 12.6933V15.3067C0 16.1898 0.661528 16.9353 1.53656 17.0403L3.72999 17.3192C3.91083 17.8757 4.13367 18.4123 4.39385 18.9222L3.03929 20.6663C2.49094 21.3722 2.55511 22.3685 3.18163 22.9752L5.01921 24.8127C5.6329 25.4438 6.62811 25.5068 7.33514 24.9597L9.07821 23.6052C9.58807 23.8665 10.1248 24.0893 10.6813 24.269L10.9601 26.4577C11.0651 27.3385 11.8107 28 12.6939 28H15.3073C16.1905 28 16.936 27.3385 17.041 26.4635L17.3199 24.2702C17.8764 24.0893 18.4131 23.8665 18.923 23.6063L20.6672 24.9608C21.3731 25.5092 22.3694 25.445 22.9761 24.8185L24.8137 22.981C25.4461 22.3673 25.5102 21.3722 24.9619 20.6652L23.6073 18.9222C23.8687 18.4123 24.0915 17.8757 24.2712 17.3192L26.4599 17.0403C27.3385 16.9353 28 16.1898 28 15.3067V12.6933C28.0012 11.8102 27.3396 11.0647 26.4646 10.9597ZM14.0006 19.8333C10.7839 19.8333 8.16701 17.2165 8.16701 14C8.16701 10.7835 10.7839 8.16667 14.0006 8.16667C17.2172 8.16667 19.8342 10.7835 19.8342 14C19.8342 17.2165 17.2172 19.8333 14.0006 19.8333Z"
        fill="white"
      />
    </svg>
  );
}
