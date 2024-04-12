import { SearchBar } from "./SearchBar";

export const AppBar = () => {
  return (
    <div className="flex justify-between">
      <div>YouTube</div>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div>SignIn</div>
    </div>
  );
};
