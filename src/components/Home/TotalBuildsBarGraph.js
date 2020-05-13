import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Spinner,
  Bullseye,
} from "@patternfly/react-core";
import {
  Chart,
  ChartBar,
  ChartGroup,
  ChartAxis,
  ChartVoronoiContainer,
} from "@patternfly/react-charts";

class TotalBuildsBarGraph extends Component {
  state = {
    input_json: "",
    is_loaded: false,
  };

  componentDidMount() {
    // Hardcoding now, but when we integrate it with flask we'll pick up the API_URL from env var.
    fetch("https://other.abifog.com/test.php")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          input_json: json,
          is_loaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { is_loaded, input_json } = this.state;

    if (!is_loaded)
      return (
        <div>
          <Bullseye>
            <Spinner />
          </Bullseye>
        </div>
      );

    let successful = [];
    let failed = [];
    let domain_upper_limit = 0;

    input_json.map((item) => {
      let succ_day = {
        name: "Successful",
        x: item.date,
        y: item.successful_builds,
      };

      if (domain_upper_limit < item.successful_builds)
        domain_upper_limit = item.successful_builds;
      successful.push(succ_day);
      let fail_day = {
        name: "Failed",
        x: item.date,
        y: item.failed_builds,
      };
      failed.push(fail_day);
    });

    console.log(domain_upper_limit);

    return (
      <Card>
        <CardHeader>Successful/Failed Builds</CardHeader>
        <CardBody>
          <div style={{ width: "500px" }}>
            <Chart
              ariaDesc="Total Builds Per Day"
              ariaTitle="Total Builds"
              containerComponent={
                <ChartVoronoiContainer
                  labels={({ datum }) => `${datum.name}: ${datum.y}`}
                  constrainToVisibleArea
                />
              }
              domain={{ y: [0, domain_upper_limit + 5] }}
              domainPadding={{ x: [30, 25] }}
              height={250}
              padding={{
                bottom: 60,
                left: 60,
                right: 50,
                top: 50,
              }}
              width={500}
            >
              <ChartAxis label="Days" />
              <ChartAxis dependentAxis label="Builds" />
              <ChartGroup offset={20}>
                <ChartBar barWidth={20} data={successful} />
                <ChartBar barWidth={20} data={failed} />
              </ChartGroup>
            </Chart>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default TotalBuildsBarGraph;
