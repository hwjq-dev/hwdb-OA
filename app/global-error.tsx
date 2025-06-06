'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <h2>出现意外问题!</h2>
        <button onClick={() => reset()}>请您刷新或者再试试ƒ</button>
      </body>
    </html>
  );
}
