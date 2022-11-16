import { Card, Text, Row, Col, Grid } from "@nextui-org/react";
import button from "../assets/icons/button.png";
import left from "../assets/icons/left.png";
import top from "../assets/icons/top.png";
function Comments(props) {
  return (
    <Grid>
      <Card
        variant="bordered"
        css={{
          margin: "$5 $2",
          height: "112px",
          border: "5px solid",
          backgroundColor: "$purpleMedium",
          borderColor: "$purpleLight",
        }}
      >
        <Row align="center" css={{ padding: "5px" }}>
          <Col css={{ width: "90px", paddingLeft: "10px" }}>
            <img alt="nextui logo" src={top} width="50px" height="50px" />
          </Col>
          <Col css={{ paddingLeft: "10px" }}>
            <Text
              css={{
                height: "45px",
                fontSize: "2rem",
                fontWeight: "$bold",
              }}
            >
              {props.data != null ? props.data.good : "0"}
            </Text>
            <Text
              css={{
                fontSize: "1.2rem",
                fontWeight: "$semibold",
              }}
            >
              Positive Comments
            </Text>
          </Col>
        </Row>
      </Card>
      <Card
        variant="bordered"
        css={{
          margin: "$5 $2",
          height: "112px",
          border: "5px solid",
          backgroundColor: "$purpleMedium",
          borderColor: "$purpleLight",
        }}
      >
        <Row align="center" css={{ padding: "5px" }}>
          <Col css={{ width: "90px", paddingLeft: "10px" }}>
            <img alt="nextui logo" src={left} width="50px" height="50px" />
          </Col>
          <Col css={{ paddingLeft: "10px" }}>
            <Text
              css={{
                height: "45px",
                fontSize: "2rem",
                fontWeight: "$bold",
              }}
            >
              {props.data != null ? props.data.neutral : "0"}
            </Text>
            <Text
              css={{
                fontSize: "1.2rem",
                fontWeight: "$semibold",
              }}
            >
              Neutral Comments
            </Text>
          </Col>
        </Row>
      </Card>
      <Card
        variant="bordered"
        css={{
          margin: "$5 $2",
          height: "112px",
          border: "5px solid",
          backgroundColor: "$purpleMedium",
          borderColor: "$purpleLight",
        }}
      >
        <Row align="center" css={{ padding: "5px" }}>
          <Col css={{ width: "90px", paddingLeft: "10px" }}>
            <img alt="nextui logo" src={button} width="50px" height="50px" />
          </Col>
          <Col css={{ paddingLeft: "10px" }}>
            <Text
              css={{
                height: "45px",
                fontSize: "2rem",
                fontWeight: "$bold",
              }}
            >
              {props.data != null ? props.data.bad : "0"}
            </Text>
            <Text
              css={{
                fontSize: "1.2rem",
                fontWeight: "$semibold",
              }}
            >
              Negative Comments
            </Text>
          </Col>
        </Row>
      </Card>
    </Grid>
  );
}

export default Comments;
