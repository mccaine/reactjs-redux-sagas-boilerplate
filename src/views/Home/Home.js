import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { testAction } from "../../containers/Global/actions";

import { Root } from "../../components/Layout";
import Button from "../../components/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Home extends React.Component {
  testAction = () => {
    const { testActionDispatch } = this.props;
    testActionDispatch();
  };

  testNavigate = () => {
    const { history } = this.props;
    history.push("/test");
  };

  render() {
    const { globalProcessing } = this.props;
    return (
      <Root>
        <Wrapper>
          <h1>HC Dashboard</h1>
          <Button onClick={this.testAction}>Test redux and sagas</Button>
          {globalProcessing && (
            <h4>
              Sagas picked up test action and redux stored stated, this message
              should stya for 3600 milliseconds
            </h4>
          )}
          <Button onClick={this.testNavigate}>Test navigation</Button>
        </Wrapper>
      </Root>
    );
  }
}

const mapStateToProps = state => ({
  globalProcessing: state.global.processing
});

const actions = dispatch => ({
  testActionDispatch: () => dispatch(testAction())
});

export default connect(mapStateToProps, actions)(Home);
