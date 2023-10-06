import React from 'react';

function ResultCounter(props: { numberOfBooks: number }) {
  const { numberOfBooks } = props;

  return (
    <section>
      <h2>
        {`Found ${numberOfBooks} result`}
      </h2>
    </section>
  );
}

export default ResultCounter;
