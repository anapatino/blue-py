import "@tremor/react/dist/esm/tremor.css";
import { useForm } from "react-hook-form";
import {
  Container,
  Grid,
  Row,
  Text,
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

const getTweets = (topicName, url) => {
  return apiClient
    .get(url, { params: { topic: topicName } })
    .then((res) => res.data);
};

function App() {
  const [variable, setVariable] = useState("");
  const { register, handleSubmit } = useForm();

  const query = useQuery(
    ["comments", variable],
    () => getTweets(variable, "search-tweets"),
    {
      enabled: !!variable,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const sentiments = useQuery(
    ["sentiments", variable],
    () => getTweets(variable, "analytics-sentiments"),
    {
      enabled: !!variable,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const source = useQuery(
    ["source", variable],
    () => getTweets(variable, "analytics-sources"),
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
            <Comments data={sentiments.data} />
            <WeeklyComments data={sentiments.data} />
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
            <Text
              css={{
                marginRight: "3rem",
                fontSize: "2.3rem",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </Text>
            <Input
              clearable
              bordered
              placeholder="Search variable"
              color="gradient"
              css={{
                width: "20rem",
                height: "4rem",
                marginRight: "1rem",
              }}
              {...register("variable")}
            />
            <Button
              auto
              color="gradient"
              bordered
              css={{
                width: "5rem",
                height: "2.5rem",
              }}
              type="submit"
            >
              Send
            </Button>
          </Row>
        </form>
        {query.data != null ? (
          <div>
            <Container
              css={{
                paddingTop: "$4",
                background: "$purpleDark",
                height: "33rem",
                width: "54rem",
                borderRadius: "25px",
              }}
            >
              <h3>Statistics</h3>
              <PositiveComments data={source.data} />
              <Row align="flex-start">
                <CommentsPeople data={query.data} />
                <ConnectedDevices data={source.data} />
              </Row>
            </Container>
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
  );
}

export default App;
