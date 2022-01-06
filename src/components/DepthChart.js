import styled from "@emotion/styled";

export function DepthChart() {
  return (
    <ChartStyles>
      <div className="striker">Test</div>

      <div className="left a-mid">Test</div>
      <div className="centre a-mid">Test</div>
      <div className="right a-mid">Test</div>

      <div className="left mid">Test</div>
      <div className="centre mid">Test</div>
      <div className="right mid">Test</div>

      <div className="left d-mid">Test</div>
      <div className="centre d-mid">Test</div>
      <div className="right d-mid">Test</div>

      <div className="left def">Test</div>
      <div className="centre def">Test</div>
      <div className="right def">Test</div>

      <div className="keeper">Test</div>
    </ChartStyles>
  );
}

const ChartStyles = styled.div`
  border: var(--debug);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 10px;
  max-width: 900px;
  background-color: var(--pitch);
  padding: 20px 10px;

  div {
    border: 2px solid var(--black);
    border-radius: var(--br);
    text-align: center;
    padding: 5px;
  }

  .striker {
    grid-column: 2/3;
  }

  .left {
    grid-column: 1/2;
  }
  .centre {
    grid-column: 2/3;
  }
  .right {
    grid-column: 3/4;
  }

  .a-mid {
    grid-row: 2/3;
  }
  .mid {
    grid-row: 3/4;
  }
  .d-mid {
    grid-row: 4/5;
  }
  .def {
    grid-row: 5/6;
  }

  .keeper {
    grid-column: 2/3;
    grid-row: 6/7;
  }
`;
