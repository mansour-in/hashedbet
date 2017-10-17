import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../MiniGameReducer';
import * as _ from 'lodash';

export class MiniGameIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenValue: [],
            tokenSelectedValue: [],
            etherbalance: null,
            ethereumAddress: '0x281055afc982d96fab65b3a49cac8b878184cb99',
        };
        this.addValue = this.addValue.bind(this);
        this.tokenSelect = this.tokenSelect.bind(this);
    // this.sendToken = this.sendToken.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:5000/api/v1/getEtherBalance/${this.state.ethereumAddress}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain',
            },
        })
    .then(response => response.json())
    .then(responseJSON => {
        this.setState({ etherbalance: responseJSON.data.ethereumBalance });
        return Promise.resolve(responseJSON);
    })
    .catch(err => {
        return Promise.reject(err);
    });
    }

    addValue(temp) {
        this.setState({
            tokenValue: [...this.state.tokenValue, temp],
        });
    }

    tokenSelect() {
        this.setState({
            tokenSelectedValue: [...this.state.tokenSelectedValue, this.state.tokenValue],
            tokenValue: [],
        });
    }

    removeToken(temp) {
        this.setState({
            tokenSelectedValue: _.filter(this.state.tokenSelectedValue, o => this.state.tokenSelectedValue[temp] !== o),
        });
    }

    randomToken() {
        this.setState({
            tokenSelectedValue: [...this.state.tokenSelectedValue, _.times(6, () => _.random(0, 15))],
        });
    }

    sendToken() {
        const bodyData = {
            ethereumAddress: this.state.ethereumAddress,
            lotteryTokens: this.state.tokenSelectedValue,
            lotteryTokenExpireAt: '2017-10-13T09:25:52.173Z',
        };

        const results = fetch('http://localhost:5000/api/v1/assignTokenToUser', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData),
        })
    .then(response => {
        return response;
    })
    .catch(err => {
        return err;
    });
        return results;
    }

    render() {
        return (
            <div>
              {
                _.range(0, 16).map((values, i) => {
                    return <input type="button" onClick={() => { this.addValue(values); }} value={values} key={i} />;
                })
              }
                <button type="button" onClick={this.tokenSelect} disabled={!(this.state.tokenValue.length === 6)}>SELECT</button>
                <button onClick={this.randomToken.bind(this)}>Random Number</button>
                <div>
                    <p>Your Ethereum Balance: {this.state.etherbalance} </p>
                </div>
                <div>
                    <p>Selected Elements</p>
                    <ul>
                        {_.map(this.state.tokenSelectedValue, (arr, i) => {
                            return (
                                <div key={i}>
                                    <li>{arr}
                                    &nbsp;
                                        <button onClick={() => { this.removeToken(i); }}>Remove</button>
                                    </li>
                                </div>
                            );
                        })}

                    </ul>
                </div>
                <div>
                    <button type="button" onClick={() => this.sendToken(this.state.tokenSelectedValue)}>Confirm Token</button>
                </div>
            </div>
    );
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        userData: getUserData(state),
    };
}

MiniGameIndexPage.propTypes = {
};

export default connect(mapStateToProps)(MiniGameIndexPage);
