import "./index.css";

export default function Search_city() {
  return (
    <div className="Search_city">
      Temp in:{" "}
      <button class="unit" id="C_button">
        C
      </button>
      <span> | </span>
      <button class="unit" id="F_button">
        F
      </button>
    </div>
  );
}
