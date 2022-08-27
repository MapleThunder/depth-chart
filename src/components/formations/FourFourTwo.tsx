import styled from "@emotion/styled";

export const FourFourTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  max-width: 900px;
  padding: 20px 10px;

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
    grid-row: 2/4;
  }
  .mid {
    grid-row: 3/4;
  }
  .def {
    grid-row: 4/5;
  }

  .keeper {
    grid-column: 2/3;
    grid-row: 5/6;
  }

  .centre.a-mid {
    grid-row: 2/3;
  }

  @media screen and (max-width: 700px) {
    padding: 20px 0;
    grid-gap: 2px;
  }
`;