import "@tremor/react/dist/esm/tremor.css";
import { Container, Grid, Row, Input } from "@nextui-org/react";
import Comments from "./comments/comments";
import WeeklyComments from "./barChart/weeklyComments";
import PositiveComments from "./areaChart/positiveComments";

function App() {
  return (
    <Container
      css={{
        minHeight: "100vh",
        margin: "auto",
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "30% auto",
      }}
    >
      <div>
        <Grid xs={15} css={{ margin: "$15 $4" }}>
          <Comments />
          <WeeklyComments />
        </Grid>
      </div>
      <Container>
        <Row wrap="wrap" align="center">
          <h2>Dashboard</h2>
          <Input
            clearable
            placeholder="Search variable"
            color="$purpleDark"
            css={{
              marginLeft: "3rem",
              width: "20rem",
              height: "4rem",
            }}
          />
        </Row>
        <PositiveComments />
      </Container>
    </Container>
  );
}

export default App;
