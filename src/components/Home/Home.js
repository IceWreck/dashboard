import React, { Component } from "react";
import {
  Gallery,
  GalleryItem,
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
              Body text should be Overpass Regular at 16px. It should have
              leading of 24px because <br />
              of it’s relative line height of 1.5.
            </Text>
          </TextContent>
        </PageSection>
        <PageSection>
          <GalleryItem>
            <TotalBuildsBarGraph />
          </GalleryItem>
        </PageSection>
        <PageSection style={{height: '15em'}} isFilled={true}>
        </PageSection>    


        
      </div>
    );
  }
}

export default Home;
