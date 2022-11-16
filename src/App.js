import "@tremor/react/dist/esm/tremor.css";
import { useForm } from "react-hook-form";
import {
  Container,
  Grid,
  Row,
  Input,
  Button,
  Spacer,
  Loading,
} from "@nextui-org/react";
import Comments from "./comments/comments";
import WeeklyComments from "./barChart/weeklyComments";
import PositiveComments from "./areaChart/positiveComments";
import ConnectedDevices from "./donutChart/connectedDevices.jsx";
import apiClient from "./data/http-common";
import { useQuery } from "react-query";
import { useState } from "react";

import CommentsPeople from "./comments/commentsPeople";

function App() {
  const [variable, setVariable] = useState("");
  const { register, handleSubmit } = useForm();

  const getAnalyticSentiments = (topicName) => {
    return apiClient
      .get("search-tweets", { params: { topic: topicName } })
      .then((res) => res.data);
  };

  const query = useQuery(
    ["comments", variable],
    () => getAnalyticSentiments(variable),
    {
      enabled: !!variable,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const onSubmit = (data) => {
    setVariable(data.variable);
  };

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
      {query.data != null ? (
        <div>
          <Grid xs={15} css={{ margin: "$15 $4" }}>
            <Comments topic={variable} />
            <WeeklyComments topic={variable} />
          </Grid>
        </div>
      ) : query.isLoading ? (
        <div>
          <Spacer />
          <Loading size="xl" />
          <Spacer />
        </div>
      ) : (
        ""
      )}
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row wrap="wrap" align="center">
            <h2>Dashboard</h2>
            <Input
              clearable
              bordered
              placeholder="Search variable"
              color="gradient"
              css={{
                marginLeft: "3rem",
                width: "20rem",
                height: "4rem",
              }}
              {...register("variable")}
            />
            <Button
              auto
              color="gradient"
              bordered
              css={{
                marginLeft: "1rem",
                width: "5rem",
                height: "2.5rem",
              }}
              type="submit"
            >
              Send
            </Button>
          </Row>
        </form>
        <Container
          css={{
            paddingTop: "$4",
            background: "$purpleDark",
            height: "33rem",
            width: "54rem",
            borderRadius: "25px",
          }}
        >
          {query.data != null ? (
            <div>
              <h3>Statistics</h3>
              <PositiveComments topic={variable} />
              <Row align="flex-start">
                <CommentsPeople topic={variable} />
                <ConnectedDevices topic={variable} />
              </Row>
            </div>
          ) : query.isLoading ? (
            <div>
              <Spacer />
              <Loading
                loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
              />
              <Spacer />
            </div>
          ) : (
            ""
          )}
        </Container>
      </Container>
    </Container>
  );
}

export default App;
