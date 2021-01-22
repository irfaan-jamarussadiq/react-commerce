import React from 'react';

export default function Section({ title, text, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <hr/>
        <p class="text">{text}</p>
      </div>
    </div>
  );
}