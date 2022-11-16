import { Container, Text } from "@nextui-org/react";

function CommentsPeople(props) {
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
          height: "12rem",
          width: "25rem",
          overflowY: "auto",
        }}
      >
        {props.data != null
          ? props.data.map((message) => (
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
