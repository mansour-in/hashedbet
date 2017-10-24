import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getUserData, getEtherData } from '../../MiniGameReducer';
import { getEthereumBalance, setTokenValues } from '../../MiniGameActions';
import * as _ from 'lodash';

export class MiniGameIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenValue: [],
            tokenSelectedValue: [],
            etherbalance: null,
            ethereumAddress: this.props.userData.ethereumAddress,
            etherEmail: this.props.userData.email,
            tokenDisplayArray: [],
        };
        this.addValue = this.addValue.bind(this);
        this.tokenSelect = this.tokenSelect.bind(this);
        this.resetToken = this.resetToken.bind(this);
 
    // this.sendToken = this.sendToken.bind(this);
    }

    componentDidMount() {
        this.props.getEthereumBalance(this.props.userData.ethereumAddress);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ etherbalance: nextProps.ethereumBalance.data.ethereumBalance });
    }
    addValue(temp) {
        this.setState({
            tokenDisplayArray: [...this.state.tokenDisplayArray, temp],
            tokenValue: [...this.state.tokenValue, temp],
        });
    }

    tokenSelect() {
        this.setState({
            tokenSelectedValue: [...this.state.tokenSelectedValue, this.state.tokenValue],
            tokenValue: [],
            tokenDisplayArray: [],
        });
    }

    removeToken(temp) {
        this.setState({
            tokenSelectedValue: _.filter(this.state.tokenSelectedValue, o => this.state.tokenSelectedValue[temp] !== o),
        });
    }

    resetToken() {
        this.setState({
            tokenDisplayArray: [],
            tokenValue: []
        });
    }

    randomToken() {
        const temprandomtoken = _.times(6, () => _.random(0, 15));
        this.setState({
            tokenDisplayArray: temprandomtoken,
            tokenValue: temprandomtoken,
        });

        // this.setState({
        //     tokenValue: this.state.tokenDisplayArray,
        //     tokenSelectedValue: [...this.state.tokenSelectedValue, this.state.tokenDisplayArray]
        // });
        // this.setState({tokenSelectedValue: [...this.state.tokenSelectedValue, this.state.tokenDisplayArray]});
    }

    sendToken() {
        const bodyData = {
            ethereumAddress: this.state.ethereumAddress,
            lotteryTokens: this.state.tokenSelectedValue,
            lotteryTokenExpireAt: '2017-10-13T09:25:52.173Z',
        };
        this.props.setEthereumTokens(bodyData);
    }

    render() {
        return (
            <div>
                <header id="header" className="header-navbar">
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <h1 className="h4 clearfix">
                                    <a href="/dashboard" title="Coinbet">
                                        <img src="/assets/images/login.png" alt="[Image: CoinBet]" title="CoinBet" className="img-responsive logo" />
                                    </a>
                                </h1>
                            </div>
                            <div className="collapse navbar-collapse" id="collapse">
                                <div className="navbar-right">
                                    <ul className="list-inline text-capitalize">
                                        <li className="dropdown">
                                            <a href="#" title="Users" className="dropdown-toggle" data-toggle="dropdown">
                                                <span>
                                                    hey {this.state.etherEmail} 
                                                </span>
                                                <span className="user-circle">
                                                    <img src="/assets/images/user.png" alt="[Image: User]" title="User" className="img-circle img-responsive" />
                                                </span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="/logout">Logout</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar-right">
                                    <ul className="nav navbar-nav text-uppercase">
                                        <li>
                                            <a href="/dashboard" title="dashboard" data-toggle="tab">dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#appointments" title="appointments" data-toggle="tab">Balance :  {this.state.etherbalance} ETH</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <main id="main" className="content">
                    <section className="ticket-value-blk">
                        <div className="section-container">
                            <div className="clearfix">
                                <div className="pull-left">
                                    <h3>6.25 <sup>ETH</sup></h3>
                                    <p>ticket value</p>
                                </div>
                                <div className="circle-dashed">
                                    <div className="dashed-inner">
                                        <h3>49.58</h3>
                                        <p>left to select</p>
                                    </div>
                                </div>
                                <div className="pull-right">
                                    <h3>5783 <sup>ETH</sup></h3>
                                    <p>total jackpot</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="number-ticket">
                        <div className="section-container">
                            <div className="box-img">
                                <div className="clearfix number-table">
                        {/* <div className="gold-bg"><div className="inner-cell"><h3>{this.state.tokenDisplayArray}</h3></div></div>
                        <div className="gold-bg"><div className="inner-cell"><h3>12</h3></div></div>
            <div className="gold-bg"><div className="inner-cell"><h3>13</h3></div></div> */}

                                    <div className={_.isInteger(this.state.tokenDisplayArray[0]) ? 'gold-bg' : 'astrick-bg'}><div className="inner-cell"><h3>{this.state.tokenDisplayArray ? this.state.tokenDisplayArray[0] : ''}</h3></div></div>
                                    <div className={_.isInteger(this.state.tokenDisplayArray[1]) ? 'gold-bg' : 'astrick-bg'}><div className="inner-cell"><h3>{this.state.tokenDisplayArray ? this.state.tokenDisplayArray[1] : ''}</h3></div></div>
                                    <div className={_.isInteger(this.state.tokenDisplayArray[2]) ? 'gold-bg' : 'astrick-bg'}><div className="inner-cell"><h3>{this.state.tokenDisplayArray ? this.state.tokenDisplayArray[2] : ''}</h3></div></div>
                                    <div className={_.isInteger(this.state.tokenDisplayArray[3]) ? 'gold-bg' : 'astrick-bg'}><div className="inner-cell"><h3>{this.state.tokenDisplayArray ? this.state.tokenDisplayArray[3] : ''}</h3></div></div>
                                    <div className={_.isInteger(this.state.tokenDisplayArray[4]) ? 'gold-bg' : 'astrick-bg'}><div className="inner-cell"><h3>{this.state.tokenDisplayArray ? this.state.tokenDisplayArray[4] : ''}</h3></div></div>
                                    <div className={_.isInteger(this.state.tokenDisplayArray[5]) ? 'gold-bg' : 'astrick-bg'}><div className="inner-cell"><h3>{this.state.tokenDisplayArray ? this.state.tokenDisplayArray[5] : ''}</h3></div></div>
                                    {/* <div className="gold-bg"><div className="inner-cell"><h3>{this.state.tokenDisplayArray[1]}</h3></div></div> */}
                                </div>
                                <div className="clearfix numbers-button">
                                    <div className="pull-left">
                                        <a><input className="btn btn-primary button" type="button" onClick={this.tokenSelect} value="+" disabled={!(this.state.tokenValue.length === 6)} /></a>
                                        <a href="#" className="btn btn-primary ticket-added">33 ticket added</a>
                                    </div>
                                    <div className="pull-right">
                                        <a type="button" onClick={() => this.sendToken(this.state.tokenSelectedValue)} className="btn btn-primary buy-now">buy now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="number-list">
                        <div className="section-container">
                            <ul className="list-inline">
                            {_.range(0, 16).map((values, i) => {
                                return <li key={i}> <a href="javascript:{}" title="" type="button" onClick={() => { this.addValue(values); }} value={values}>{values}</a></li>; })}
                                <li><a href="#" title="" className="" onClick={this.resetToken}> <img src="/assets/images/recycle.png" /></a></li>
                                <li><a href="javascript:{}" title="" onClick={this.randomToken.bind(this)} className="">R</a></li>
                            </ul>
                        </div>

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
                    </section>
                </main>

            </div>
    );
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        userData: getUserData(state),
        ethereumBalance: getEtherData(state),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEthereumBalance: (data) => {
            dispatch(getEthereumBalance(data));
        },
        setEthereumTokens: (data) => {
            dispatch(setTokenValues(data));
        },
    };
};

MiniGameIndexPage.propTypes = {
    userData: PropTypes.object.isRequired,
    getEthereumBalance: PropTypes.func.isRequired,
    ethereumBalance: PropTypes.object.isRequired,
    setEthereumTokens: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(MiniGameIndexPage);
