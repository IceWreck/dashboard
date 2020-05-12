import React, { Component } from "react";
import { Card, CardBody, Spinner } from "@patternfly/react-core";
import {
  Chart,
  ChartBar,
  ChartVoronoiContainer,
} from "@patternfly/react-charts";

class TotalBuildsBarGraph extends Component {
  state = {
    tbl_json: "",
    isLoaded: false,
  };

  componentDidMount() {
    fetch("https://other.abifog.com/test.php")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          tbl_json: json,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    const { isLoaded, tbl_json } = this.state;

    if (!isLoaded)
      return (
        <div>
          <Spinner />
        </div>
      );

    let table_data = [];

    tbl_json.map((item) => {
      let temp_var = {
        name: item.date,
        x: item.date,
        y: item.total_builds,
      };
      table_data.push(temp_var);
    });

    return (
      <Card>
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
              domain={{ y: [0, 50] }}
              domainPadding={{ x: [30, 25] }}
              height={250}
              padding={{
                bottom: 50,
                left: 50,
                right: 50,
                top: 50,
              }}
              width={500}
            >
              <ChartBar barWidth={30} data={table_data} />
            </Chart>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default TotalBuildsBarGraph;
