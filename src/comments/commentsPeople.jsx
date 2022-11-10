import { Container, Text } from "@nextui-org/react";

function CommentsPeople (){
    return(
        
        <Container css={{
            marginTop: "$4",
            height:"13rem",
            minWidth:"10rem",
            overflow:'hidden',
          }}>
            <h4>Recent Activity</h4>
            <Container css={{
                height:"10rem",
                width:"25rem",
               overflowY:'auto',
            }}>
            <Container 
            css={{
                background: "$greyMedium",
                borderRadius: "10px",
                marginTop:'$2',
                marginBottom:'$2',
            }}>
                <Text css={{fontSize:'0.91rem',fontWeight:'$bold'}}>Pedro Acosta</Text>
                <Text css={{fontSize:'0.91rem'}}>this is an example of a normal comment</Text>
            </Container>
             <Container 
            css={{
                background: "$greyMedium",
                borderRadius: "10px",
                marginTop:'$2',
                marginBottom:'$2',
            }}>
                <Text css={{fontSize:'0.91rem',fontWeight:'$bold'}}>Pedro Acosta</Text>
                <Text css={{fontSize:'0.91rem'}}>this is an example of a normal comment</Text>
            </Container>
            <Container 
            css={{
                background: "$greyMedium",
                borderRadius: "10px",
                marginTop:'$2',
                marginBottom:'$2',
            }}>
                <Text css={{fontSize:'0.91rem',fontWeight:'$bold'}}>Pedro Acosta</Text>
                <Text css={{fontSize:'0.91rem'}}>this is an example of a normal comment</Text>
            </Container>
            <Container 
            css={{
                background: "$greyMedium",
                borderRadius: "10px",
                marginTop:'$2',
                marginBottom:'$2',
            }}>
                <Text css={{fontSize:'0.91rem',fontWeight:'$bold'}}>Pedro Acosta</Text>
                <Text css={{fontSize:'0.91rem'}}>this is an example of a normal comment</Text>
            </Container>
            </Container>
        </Container>
    );
}

export default CommentsPeople;