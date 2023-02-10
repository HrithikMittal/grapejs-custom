import styled from "styled-components";

const maxHeight = "calc(100vh - 90px)";

export const PanelHeading = styled("div")`
  display: flex;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  justify-content: space-between;
  color: #060e4f;
  /* padding: 4px; */
  max-height: 45px;
  height: 45px;
  width: 100%;
  position: relative;
  border-bottom: 1px solid rgba(234, 234, 234, 0.53);
  background: rgba(255, 255, 255, 0.53);
  .gjs-pn-panel {
    background-color: transparent;
  }
  .gjs-pn-buttons {
    justify-content: space-between;
    gap: 8px;

    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
    .gjs-pn-btn {
      font-size: inherit;
      &.gjs-pn-active {
        box-shadow: none;
        box-shadow: 0 0 1px 1px currentColor;
        background-color: rgba(255, 255, 255, 0.76);
      }
    }
  }
  &:hover {
    scrollbar-width: thin;
  }
`;
export const AsideTop = styled("div")`
  min-height: ${maxHeight};
  max-height: ${maxHeight};

  .gjs-pn-buttons {
    justify-content: space-between;
    gap: 8px;
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
    .gjs-pn-btn {
      font-size: inherit;
      &.gjs-pn-active {
        box-shadow: none;
        border-bottom: 2px currentColor solid;
        background: transparent;
      }
    }
  }
`;
export const BottomLeftPanel = styled("div")`
  position: sticky;
  height: 45px;
  background: #3b3b3d;
  display: flex;
  color: white;
  gap: 8px;
  scrollbar-width: thin;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
  z-index: 100;
  ${(props) => (props.buttom ? "bottom: 0" : "top: 0")}
`;
export const PanelSection = styled("section")`
  display: flex;
  padding: 8px;
  position: relative;
  box-sizing: border-box;
`;
export const PanelContent = styled("div")`
  overflow-y: auto;
  display: none;
  /* border: 1px dashed red; */
  /* min-height: ${maxHeight}; */
  max-height: ${maxHeight};
  background: transparent;
  .gjs-sm-sector {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    border: none;
    .gjs-sm-title {
      border: none;
      color: rgb(168, 165, 165);
      padding: 0
    }
  }
  .gjs-blocks-cs {
    padding: 8px;
    background: transparent;
    .gjs-block {
      box-shadow: none;
      color: #c4c4c4;
      background: white;

      &:hover {
        color: #ff6206;
      }
    }

    .gjs-block-category {
      border: none;
      padding: 8px;
      .gjs-title {
        background: transparent;
        border: none;
        font-style: normal;
        font-weight: 500;
        padding:0
       
      }
    }
  }
`;
export const EditorAside = styled("div")`
  background: #f4f3f3;
  flex-basis: 200px;
  position: relative;
  padding: 0;
  font-size: 14px;
  max-width: 300px;
  border-right: 1px solid rgba(234, 234, 234, 0.53);
`;
export const EditorGrid = styled("div")`
  display: flex;
  min-height: calc(100vh - 45px);
  max-height: calc(100vh - 45px);
  /* grid-template-columns: minmax(300px, 300px) auto; */
  /* grid-template-rows: 1fr; */
  overflow: hidden;
  width: 100%;
`;
export const EditorMain = styled("div")`
  background: #535353;
  overflow: hidden;
  position: relative;
  /* outline: 2px dashed orange; */
  /* outline-offset: -4px; */
  flex-grow: 1;
  .gjs-frame-wrapper {
    padding: 10px;
    background: #888;
  }
  .gjs-editor {
    background: transparent;
    .gjs-cv-canvas {
      background: #c3c3c3;
      height: 100%;
      top: 0;
      width: 100%;
      left: 0;
      position: absolute;
    }
  }
`;
export const EditorCanvas = styled("section")`
  display: block;
  overflow: scroll;
  scrollbar-width: thin;

  /* background: white; */
  /* border: 1px dashed #8a8a8a; */

  /* left: 0; */
  /* top: 0; */
`;
