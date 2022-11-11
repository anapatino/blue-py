import { Container, Text } from "@nextui-org/react";
import apiClient from "../data/http-common";
import { useQuery } from "react-query";

function CommentsPeople(props) {
  const getComments = () => {
    return apiClient
      .get("search-tweets", { params: { topic: props.topic } })
      .then((res) => res.data);
  };

  const query = useQuery("comments", getComments, { enable: !!props.topic });

  /*const query = useMutation((auth) => {
    console.log("si entre");
    return apiClient.get("search-tweets", auth).then((res) => res.data);
  });

  if (props.topic != null) {
    query.mutate({ topic: props.topic });
  }*/

  return (
    <Container
      css={{
        marginTop: "$4",
        height: "13rem",
        minWidth: "10rem",
        overflow: "hidden",
      }}
    >
      <h4>Recent Activity</h4>

      <Container
        css={{
          height: "10rem",
          width: "25rem",
          overflowY: "auto",
        }}
      >
        {query.data != null
          ? query.data.map((message) => (
              <Container
                key={message.id}
                css={{
                  background: "$greyMedium",
                  borderRadius: "10px",
                  marginTop: "$2",
                  marginBottom: "$2",
                }}
              >
                <Text css={{ fontSize: "0.91rem", fontWeight: "$bold" }}>
                  {message.author_name}
                </Text>
                <Text css={{ fontSize: "0.91rem" }}>{message.text}</Text>
              </Container>
            ))
          : "No hay comentarios"}
      </Container>
    </Container>
  );
}

export default CommentsPeople;
