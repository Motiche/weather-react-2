import React, { useState } from "react";
import "./index.css";
export default function SearchBox() {
  return (
    <div class="input-group mb-3" id="Search-City">
      <input
        type="text"
        class="form-control"
        placeholder="Enter the City..."
        aria-label="Enter the City..."
        aria-describedby="button-addon2"
        id="Input-city"
      />
      <button class="btn btn-outline-dark" type="button" id="button-addon2">
        Search 🔍
      </button>
      <button class="btn btn-outline-info" type="button" id="My-coords">
        My Location 📍
      </button>
    </div>
  );
}
