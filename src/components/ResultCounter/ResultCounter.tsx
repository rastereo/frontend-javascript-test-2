import React from 'react';

function ResultCounter(props: { numberOfBooks: number }) {
  const { numberOfBooks } = props;

  return (
    <section className="result-counter">
      <h2 className="result-counter__counter">
        {`Found ${numberOfBooks} result`}
      </h2>
    </section>
  );
}

export default ResultCounter;
