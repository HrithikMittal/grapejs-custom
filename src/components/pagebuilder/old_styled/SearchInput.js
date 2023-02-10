import { STYLED_SEARCH_INPUT } from ".";

export function SearchInput() {
  return (
    <STYLED_SEARCH_INPUT htmlFor="search-elements">
      <input
        type="search"
        className="w-full"
        name="search-elements"
        placeholder="Search widgets"
        id="searc-elements"
      />
      <button className="" title="search button">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.87646 17.5431C14.0985 17.5431 17.5204 13.9928 17.5204 9.61311C17.5204 5.23351 14.0985 1.68311 9.87646 1.68311C5.65446 1.68311 2.23145 5.23351 2.23145 9.61311C2.23145 13.9928 5.65446 17.5431 9.87646 17.5431Z"
            stroke="white"
            strokeWidth="2.5"
          />
          <path
            d="M15.8916 15.853L21.2386 21.3996"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </STYLED_SEARCH_INPUT>
  );
}
