import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getUserData, getEtherData, getConfirmedTokensData } from '../../MiniGameReducer';
import { getEthereumBalance, setTokenValues, getConfirmedTokens } from '../../MiniGameActions';
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
            tokenLenghtArry: [],
            ticketValue: 0.00,
            confirmedTokenValues: [],
        };
        this.addValue = this.addValue.bind(this);
        this.tokenSelect = this.tokenSelect.bind(this);
        this.resetToken = this.resetToken.bind(this);
        this.tokenSelect = this.tokenSelect.bind(this);
    // this.sendToken = this.sendToken.bind(this);
    }

    componentDidMount() {
        this.props.getEthereumBalance(this.props.userData.ethereumAddress);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ etherbalance: nextProps.ethereumBalance.data.ethereumBalance });

        if (!_.isEmpty(nextProps.confirmedTokens)) {
            this.setState({ confirmedTokenValues: nextProps.confirmedTokens.data.confirmedTokens });
            this.displayConfirmedTokens();
        }
        // console.log(this.props.confirmedTokens);
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
            tokenLenghtArry: [...this.state.tokenSelectedValue, this.state.tokenValue].length,
            ticketValue: [['0.01'] * [...this.state.tokenSelectedValue, this.state.tokenValue].length],
        });
    }

    removeToken(temp) {
        this.setState({
            tokenSelectedValue: _.filter(this.state.tokenSelectedValue, o => this.state.tokenSelectedValue[temp] !== o),
            tokenLenghtArry: _.filter(this.state.tokenSelectedValue, o => this.state.tokenSelectedValue[temp] !== o).length,
            ticketValue: [['0.01'] * _.filter(this.state.tokenSelectedValue, o => this.state.tokenSelectedValue[temp] !== o).length],
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
        // this.props.getConfirmedTokens(this.props.userData.ethereumAddress);
    }

    displayConfirmedTokens() {
        console.log(this.state.confirmedTokenValues);
   // this.setState({ confirmedTokenValues: this.props.getConfirmedTokensData });
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
                                    <img src="/assets/images/logo.png" alt="[Image: CoinBet]" title="CoinBet" className="img-responsive"/>
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
                                <div className="pull-left res-pull-none">
                                    <h3>{this.state.ticketValue} <sup>ETH</sup></h3>
                                    <p>ticket value</p>
                                </div>
                                <div className="circle-dashed">
                                    <div className="dashed-inner">
                                        <h3>49.58</h3>
                                        <p>left to select</p>
                                    </div>
                                </div>
                                <div className="pull-right res-pull-none">
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
                                {/* <div className="clearfix numbers-button">
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
                    </section> */}
                                <div className="clearfix numbers-button">
                                    <div className="pull-left res-pull-none">     
                                        <a><input className="btn btn-primary button" type="button" onClick={this.tokenSelect} value="+" disabled={!(this.state.tokenValue.length === 6)} /></a>
                                            <a href="javascript:{}" className="btn btn-primary ticket-added" title="Buy {this.state.tokenLenghtArry} Tickets" data-toggle="modal" data-target="#myModal2"> Buy  {this.state.tokenLenghtArry} Tickets</a>
                                    </div>
                                    <div className="pull-right res-pull-none">
                                        <a href="javascript:{}" className="btn btn-primary buy-now" title="My Tickets" data-toggle="modal" data-target="#myModal1" onClick={this.displayConfirmedTokens}>My Tickets</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="myModal1" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div className="transaction-modal">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="/assets/images/icon-close.png"/></button>
                                        </div>
                                        <div className="modal-body">
                                            <h4 className="text-uppercase" id="myModalLabel">your transaction / <span>confirmed tickets</span></h4>
                                            <div className="transaction-list">
                                                <ul className="list-unstyled clearfix">
                                                    <li>{this.state.confirmedTokenValues[0] ? this.state.confirmedTokenValues[0][0] : '' }</li>
                                                    <li>12</li>
                                                    <li>9</li>
                                                    <li>8</li>
                                                    <li>12</li>
                                                    <li>15</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div className="transaction-modal tickets-modal">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="/assets/images/icon-close.png"/></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-sm-7">
                                                    <h4>{this.state.tokenLenghtArry} <span>tickets</span></h4>
                                                    <div className="transaction-list">
                                                    {/* <form>
                                                    <div className="input-group"> 
                                                    <label>Are your sure ?</label> 
                                                    <div className="input-group-btn"> 
                                                    <button type="button" className="btn btn-default" aria-label="Help">

                                                    cancel
                                                    </button> 
                                                    <button type="button" className="btn btn-danger">Action</button> 
                                                    </div> 
                                                    </div>
                                                    </form> */}

                                                    {_.map(this.state.tokenSelectedValue, (arr, i) => {
                                                        return (
                                                            <div key={i}>
                                                                <ul className="list-unstyled clearfix">
                                                                    <li>{this.state.tokenSelectedValue[i][0]}</li> 
                                                                    <li>{this.state.tokenSelectedValue[i][1]}</li> 
                                                                    <li>{this.state.tokenSelectedValue[i][2]}</li> 
                                                                    <li>{this.state.tokenSelectedValue[i][3]}</li> 
                                                                    <li>{this.state.tokenSelectedValue[i][4]}</li> 
                                                                    <li>{this.state.tokenSelectedValue[i][5]}</li> 
                                                                    <li className="close-times-white">
                                                                        <a className="close-times-white" onClick={() => { this.removeToken(i); }}><img src="/assets/images/icon-close.png"/></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        ); })
                                                    }
                                                    </div>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="modal-inner-tickets">
                                                         <h3 className="shadow-text">49.58</h3>
                                                         <p>Left to select</p>
                                                    </div>
                                                    <div className="modal-inner-tickets no-mar">
                                                         <h3>{this.state.ticketValue}<sup>ETH</sup></h3>
                                                         <p className="text-uppercase">(Balance: {this.state.etherbalance})</p>
                                                     </div>
                                                     <div className="modal-inner-tickets">
                                                         <a href="javascript:{}" title="buy now" className="btn btn-danger" onClick={() => this.sendToken(this.state.tokenSelectedValue)}>Buy Now</a>
                                                     </div>
                                                </div>
                                            </div>
                                                    
                                        </div>
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
                                <li><a href="javascript:{}" title="" className="" onClick={this.resetToken}> <img src="/assets/images/recycle.png" /></a></li>
                                <li><a href="javascript:{}" title="" onClick={this.randomToken.bind(this)} className="">R</a></li>
                            </ul>
                        </div>

                        {/* <p>Selected Elements</p>
                        <ul>
                            {_.map(this.state.tokenSelectedValue, (arr, i) => {
                                return (
                                    <div key={i}>
                                        <li>
                                        {arr}
                                                                                &nbsp;
                                            <button onClick={() => { this.removeToken(i); }}>Remove</button>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul> */}
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
        confirmedTokens: getConfirmedTokensData(state),
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
        getConfirmedTokens: (data) => {
            dispatch(getConfirmedTokens(data));
        },
    };
};

MiniGameIndexPage.propTypes = {
    userData: PropTypes.object.isRequired,
    getEthereumBalance: PropTypes.func.isRequired,
    ethereumBalance: PropTypes.object.isRequired,
    setEthereumTokens: PropTypes.func.isRequired,
    getConfirmedTokens: PropTypes.func.isRequired,
    confirmedTokens: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniGameIndexPage);
