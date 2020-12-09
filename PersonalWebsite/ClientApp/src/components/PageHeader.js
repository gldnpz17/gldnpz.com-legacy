import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledJumbotron = styled(Jumbotron)`
  background-color: ${props => props.theme.primaryLight};
  color: ${props => props.theme.textOnPrimary};
`;

const StyledHeaderContentRow = styled(Row)`
  animation-duration: 1s;
  animation-name: header-content-entrance-anim;
  
  @keyframes header-content-entrance-anim {
    from {
      margin-top: 5%;
      opacity: 0;
    }

    to {
      margin-top: 0%;
      opacity: 1;
    }
  }
`;

const StyledPeekingKurumi = styled.img`
  max-height: 15rem;
  animation-duration: 1s;
  animation-name: kurumi-entrance-anim;

  @keyframes kurumi-entrance-anim {
    from {
      margin-left: 100%;
    }

    to {
      margin-left: 0%;
    }
  }
`;

export default class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <StyledJumbotron fluid className="mb-5 pl-3 pl-lg-5">
        <Row className="w-100 m-0 flex-nowrap">
          <Col className="col-10">
            <StyledHeaderContentRow className="d-flex flex-nowrap">
              <span className="mr-auto">
                <h1 className="mb-0">{this.props.pageTitle}</h1>
                <h5>{this.props.pageSubtitle}</h5>
                <p className="text-justify" style={{width:"0px", minWidth:"100%"}}>{this.props.pageDescription}</p>
              </span>
            </StyledHeaderContentRow>
          </Col>
          <Col className="col-auto d-flex p-0 ml-auto">
            <StyledPeekingKurumi src="./PeekingKurumi.png" />
          </Col>
        </Row>
      </StyledJumbotron>
    );
  }
}