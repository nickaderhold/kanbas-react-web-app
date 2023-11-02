function PassingFunctions({ theFunction }) {
  return (
    <div>
      <h2>Passing Functions</h2>
      <button className="btn-primal" onClick={theFunction}>
        Invoke the Function
      </button>
    </div>
  );
}
export default PassingFunctions;
