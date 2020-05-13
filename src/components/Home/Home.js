import React, { Component } from "react";
import {
  Grid,
  GridItem,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
} from "@patternfly/react-core";

import TotalBuildsBarGraph from "./TotalBuildsBarGraph.js";


class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Home</Text>
            <Text component="p">
            Using mock JSON from <a href="https://other.abifog.com/test.php">other.abifog.com/test.php</a> because this data is not yet provided by the API.
            </Text>
          </TextContent>
        </PageSection>
        <PageSection>
          <Grid gutter="md">
            <GridItem span={6}>
              <TotalBuildsBarGraph />
            </GridItem>
            <GridItem span={6}>
              <TotalBuildsBarGraph />
            </GridItem>
          </Grid>
        </PageSection>
        <PageSection style={{ height: "15em" }} isFilled={true}></PageSection>
      </div>
    );
  }
}

export default Home;
