import React from 'react';

export default function Section({ title, content, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <hr/>
        <p class="text">{content}</p>
      </div>
    </div>
  );
}