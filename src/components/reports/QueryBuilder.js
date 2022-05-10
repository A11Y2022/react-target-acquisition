import React, { Component } from 'react';
import { Query, Builder, BasicConfig, Utils as QbUtils } from 'react-awesome-query-builder';
import {Card} from 'react-bootstrap';
// For AntDesign widgets only:
import AntdConfig from 'react-awesome-query-builder/lib/config/antd';
import 'antd/dist/antd.css'; // or import "react-awesome-query-builder/css/antd.less";

import 'react-awesome-query-builder/lib/css/styles.css';
// import 'react-awesome-q uery-builder/lib/css/compact_styles.css'; //optional, for more compact styles

// Choose your skin (ant/material/vanilla):
const InitialConfig = AntdConfig; // or MaterialConfig or MuiConfig or BootstrapConfig or BasicConfig


// You need to provide your own config. See below 'Config format'
const config = {
  ...InitialConfig,
  fields: {
    user: {
      label: 'User',
      type: 'select',
      valueSources: ['value'],
      fieldSettings: {
        listValues: [
          { value: 'usr1', title: 'Subject1' },
          { value: 'usr2', title: 'Subject2' },
          { value: 'usr3', title: 'Subject3' }
        ],
      }
    },
    trials: {
      label: 'Trials',
      type: 'number',
      valueSources: ['value'],
      fieldSettings: {
        min: 1,
        max: 20,
      },
      preferWidgets: ['slider', 'rangeslider'],
    },
    assitance: {
      label: 'Assistance',
      type: 'select',
      valueSources: ['value'],
      fieldSettings: {
        listValues: [
          { value: 'magnifier', title: 'Magnifier' },
          { value: 'none', title: 'None' },
        ],
      }
    },
  }
};

// You can load query value from your backend storage (for saving see `Query.onChange()`)
const queryValue = { "id": QbUtils.uuid(), "type": "group" };


export default class QueryBuilder extends Component {
  state = {
    tree: QbUtils.checkTree(QbUtils.loadTree(queryValue), config),
    config: config
  };

  render = () => (

    <div>
      <Card>
        <Card.Body>
          <Query
            {...config}
            value={this.state.tree}
            onChange={this.onChange}
            renderBuilder={this.renderBuilder}
          />
          {this.renderResult(this.state)}
        </Card.Body>
      </Card>
    </div>
  )

  renderBuilder = (props) => (
    <div className="query-builder-container" style={{ padding: '10px' }}>
      <div className="query-builder qb-lite">
        <Builder {...props} />
      </div>
    </div>
  )

  renderResult = ({ tree: immutableTree, config }) => (
    <div className="query-builder-result">
      <div>MongoDb query: <pre>{JSON.stringify(QbUtils.mongodbFormat(immutableTree, config))}</pre></div>
      {/* <div>JsonLogic: <pre>{JSON.stringify(QbUtils.jsonLogicFormat(immutableTree, config))}</pre></div> */}
    </div>
  )

  onChange = (immutableTree, config) => {
    // Tip: for better performance you can apply `throttle` - see `examples/demo`
    this.setState({ tree: immutableTree, config: config });

    const jsonTree = QbUtils.getTree(immutableTree);
    console.log(jsonTree);
    // `jsonTree` can be saved to backend, and later loaded to `queryValue`
  }
}