import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {getUserData} from '../../PostReducer';
import Participate from './Participate';
import CountryAgreement from './CountryAgreement';
import Deposit from './Deposit';

// import styles from './assets/css/pages.css';
// import Participate from 'Participate.js';

export class TermsandConditions extends Component {
  constructor(props) {
    super(props)
    this.state = {
        showTermsandConditions: true,
        showParticipation: false,
        showCountryPage: false
    }
  }

  previousStep() {
      this.setState({
          showTermsandConditions: false,
          showParticipation: true
      })
  }
  nextStep() {
      this.setState({
          showTermsandConditions: false,
          showCountryPage: true,
      })
  }

  render() {
    const termsText = `
    PRINCIPLES OF WORKSMART CONTRACT SYSTEM AND RISKS NOTIFICATION
    
    1. Terms and Definitions
    
    In the present document the following terms shall have the meaning specified below:
    
    «Site» - The website on the Internet https://coin-bet.bet.
    
    «Ethereum» - A platform which has no particular owners and which is used for creation of decentralized applications. It consti-tutes an open source code for users all over the world. Find more on www.ethereum.org.
    
    «Service» - Application LOTC created on the basis of Ethereum.
    
    «Smart Contract System» - Program code on Ethereum blockchain at the address 0x80aa81029df9afdc70a621c86d7a81d7e9ed7e3a, which contains certain functionalities described herein. Smart Contract System based applications function only as programmed providing no opportunity for censorship, fraud or third party interference. To the extent Terms contained herein or in any other document or communication or website contradict the ones set forth in the Smart Contract System, the terms of the Smart Contract System prevail.
    
    «User» - Person or persons who have transferred ETH to the Smart Contract System.
    
    «Client» - A person participating in the Action for the purpose of entertainment, including but not limited to winning a prize.
    
    «System» - A distributed data base of functions of the Smart Contract System managed by the Smart Contract System.
    
    «Token» - A record of participation in the System with a range of functionalities programmed in the Smart Contract System.
    
    «Blockchain» - Register of records of the transactions in order of their execution, kept by a large number of independent members. All the members of the system have the register, which automatically updates up to the latest version whenever it is amended. Every account owner has access to the information about any transaction ever made starting from the first one. The users play the role of notary proving the accuracy of information in the database.
    
    «Fork» - Alternative order of record of transactions in Blockchain. In the event of receiving more support by the majority of members it may result in cancellation of the previous transactions.
    
    «Ether or ETH» - Crypto-fuel used for making transactions in all the created on the basis of Ethereum Blockchain.
    
    «Action» - Games, draws and other similar gaming activities conducted on the Internet..
    
    2. GENERAL PROVISIONS
    
    1. The Service provides the Users with the infrastructure for creation, organization and conduct of Actions as well as attraction of Clients for the purpose of participation in the Actions, including advertising campaigns relating to the Actions, and distribution of royalties, which are calculated from performing the Actions. The aforementioned relationships between the Service and the Users, the Users and the Client as well as the development, programming and issuance of the Smart Contract System, managing and executing marketing programs, operation of user interfaces by the company and/or individuals providing services (“Workshop”) and its advisors and affiliates as well as any use and allocation of funds transferred to the Smart Contract System are regulated exclusively by the Smart Contract System to the Workshop and / or third parties and no other terms shall be relevant or can be relied upon.
    
    3. Status of these Terms
    
    2. The purpose of these Terms is to explain the functionality of the Smart Contract System and to notify the persons who intend to enter into the Smart Contract System about the risks connected with the use of Smart Contract System, as well as about the risks connected with the organization and conduct of Actions.
    
    3. The list of risks specified in these Terms is not comprehensive, as well as it may not contain those risks which cannot be predicted at the present moment. If you are not sure that you can estimate the probability of occurrence of such risks by yourself, you are advised to contact an appropriate specialist (a lawyer, an auditor, an adviser or a programmer) before making a decision about entering into the Smart Contract System.
    
    4. Reviewing these Terms does not substitute reviewing the Smart Contract System. By transferring ETH to the Smart Contract System you confirm that you have read the Smart Contract System and fully and unconditionally agree with the conditions hereof.
    
    5. You may not take legal actions against any Users and/or the Service connected with the Smart Contract System, including, but not limited to claims based on the fact that you did not read the terms and conditions of the Smart Contract System, or you did not understand the terms and conditions of the Smart Contract System and/or the principles of the work of the Ethereum Blockchain.
    
    6. You may not take legal actions against any Users and/or the Service connected with the Smart Contract System, including, but not limited to claims based on the fact that you did not read the terms and conditions of the Smart Contract System, or you did not understand the terms and conditions of the Smart Contract System and/or the principles of the work of the Ethereum Blockchain.
    
    7. These Terms might be amended and/or updated in the future. The relevant Terms are the ones showed on the Site.
    
    4. Entry to, Execution of and Amendment to the Smart Contract System
    
    8. If User has acquired the Token from a third party, User acquires the functionality of the Smart Contract System.
    
    9. Tokens do not originate and do not provide any rights for participation in property, joint stock or authorized capital of any associations, partnerships, companionships or any other forms of legal entities of whatever jurisdiction. Tokens cannot be used as any kind of security, and the Smart Contract System cannot be considered as an initial public offer, securities issue prospectus, investment offer, attraction of funds of citizens on any grounds in any jurisdiction.
    
    10. Tokens do not provide their holders with any additional rights in material, as well as non-material nature, except for those rights that are stipulated by the Smart Contract System. Token allows the holders to execute functions as programmed in to the Smart Contract System.
    
    11. The execution is nominated in Ether and is provided automatically at occurrence of the terms specified in the Smart Contract System. The Users of the Smart Contract System understand and accept that they are not able to challenge the data in the System or ask for the reimbursement for the Service or any other reimbursement.
    
    12. In some cases, the availability of Token gives the Party the possibility to amend the Smart Contract System, though nobody guarantees the Party that the availability of Token is sufficient for such amendments. The Party who transferred the Token for whatever reason to a third party or lost the Token as a result of the actions of the third party, may not pretend to obtain automatic execution in accordance with the terms and conditions of the Smart Contract System, nor can he/she request to amend its terms and conditions.
    
    13. The System includes Tokens named LOTC Platform Token, LOTC (LOTC) Token and LOTC Control Tokens, distinguished by the order of obtainment and the functionality of the Smart Contract System, and the terms of receipt of such execution.
    
    14. The Users/holders of LOTC Control Token are entitled to take part in the process of voting regarding the amendments to the Smart Contract System and conduct of Actions defined and agreed upon in the Smart Contract System. The Users\Holders of the Control Tokens are entitled to vote for the amendment of those terms and conditions of the Smart Contract System, which do not affect the main functionalities of Users in the Smart Contract System. Possible amendments are also programmed in the Smart Contract System.
    
    5. Notification About Risks
    
    The User understands and accepts the risks in connection with transferring ETH to the Smart Contract System and creating Token as exemplary set forth above and hereinafter. In particular, but not limited, the User understands the inherent risks listed hereinafter:
    
    15. Risk of software weaknesses: The User understands and accepts that the Smart Contract System concept, the underlying software application and software platform (i.e. the Ethereum blockchain) is still in an early development stage and unproven, why there is no warranty that the process for creating Tokens will be uninterrupted or error-free and why there is an inherent risk that the software could contain weaknesses, vulnerabilities or bugs causing, inter alia, the complete loss of ETH and/or Tokens.
    
    16. Regulatory risk: The User understands and accepts that the blockchain technology allows new forms of interaction and that it is possible that certain jurisdictions will apply existing regulations on, or introduce new regulations addressing, blockchain technology based applications, which may be contrary to the current setup of the Smart Contract System and which may, inter alia, result in substantial modifications of the Smart Contract System, including its termination and the loss of Tokens for the User.
    
    17. Risk of abandonment / lack of success: The User understands and accepts that the creation of the Tokens and the development of the Service may be abandoned for a number of reasons, including lack of interest from the public, lack of funding, lack of commercial success or prospects (e.g. caused by competing projects). The User therefore understands that there is no assurance that, even if the Services are partially or fully developed and launched, the User will receive any revenues through the Tokens held by him.
    
    18. Risk of Loss of private key: Tokens can only be accessed with a wallet seed or combination of private key and password. The private key is encrypted with a password. The User understands and accepts that if his wallet file or password respectively his private key got lost or stolen, the obtained Tokens associated with the User's Wallet or password will be unrecoverable and will be permanently lost with the wallet seed.
    
    19. Risk of theft: The User understands and accepts that the Smart Contract System concept, the underlying software application and software platform (i.e. the Ethereum blockchain) may be exposed to attacks by hackers or other individuals that that could result in theft or loss of Tokens or ETH, impacting the ability to develop the Services.
    
    20. Risk of Ethereum mining attacks: The User understands and accepts that, as with other cryptocurrencies, the blockchain used for the Smart Contract System is susceptible to mining attacks, including but not limited to double-spend attacks, majority mining power attacks, “selfish-mining” attacks, and race condition attacks. Any successful attacks present a risk to the Smart Contract System, expected proper execution and sequencing of Token transactions, and expected proper execution and sequencing of contract computations.
    
    6. Guarantees of the User
    
    By using to the Smart Contract System the User guarantees that:
    
    21. To the extent the terms contained herein or in any other document or communication contradict to the ones set forth in the Smart Contract System, the terms of the Smart Contract System prevail;
    
    22. By transferring ETH to and / or reclining Token from the Smart Contract System, the User expressly agrees to all functionality set forth in Smart Contract System Code existing on the Ethereum blockchain (at the addresses set forth above) and the notification made in these Terms, which is incorporated by reference herein. The User further confirms to have carefully reviewed the Smart Contract System Code and these Terms and fully understand the risks and costs of contributing into the Smart Contract System;
    
    23. The User has a deep understanding of the functionality, usage, storage, transmission mechanisms and intricacies associated with cryptographic tokens, like bitcoin (BTC) and Ether (ETH), and blockchain-based software systems;
    
    24. The User has carefully reviewed the code of the Smart Contract System located on the Ethereum blockchain at the addresses set forth above and fully understands and accepts the functions implemented therein;
    
    25. The User waives the right to participate in a class action lawsuit or a class wide arbitration against any entity or individual involved with the creation of Token;
    
    26. The User understands the creation of Token does not involve the purchase of shares or any equivalent in any existing or future public or private company, corporation or other entity in any jurisdiction;
    
    27. The User understands that the transfer of ETH to the Smart Contract System, the creation of Token and the development of and the operation of the Services carries significant financial, storage, regulatory and reputational risks as further set forth in the Terms;
    
    28. The User understands and expressly accepts that there is no warranty whatsoever on, the Smart Contract System and/or the success of the Services or Actions, expressed or implied, to the extent permitted by law, and that the Smart Contract System is used and Tokens are created and obtained at the sole risk of the User on an “as is” and “under development” basis and without, to the extent permitted by law, any warranties of any kind, including, but not limited to, warranties of title or implied warranties, merchantability or fitness for a particular purpose;
    
    29. The User understands that ETH transferred to the Smart Contract System can be transferred to individuals and/or entities which provide services for the development of Services, for Smart Contract System, for marketing and operation of the Services;
    
    30. The User understands that the User has no right against any party whatsoever to request any refund of the ETH submitted to the Smart Contract System for the creation of the Tokens under any circumstance;
    
    31. The User understands that Tokens are not designed to form any form of currency, that no market liquidity may be guaranteed and that the value of Tokens over time may experience extreme volatility or depreciate in full; he\she has sufficient legal capacity in accordance with the law to enter into the Smart Contract System;
    
    32. The User understands that he\she is not going to make attempts to amend in any way the Smart Contract System or to prohibit the work of Ethereum Blockchain;
    
    33. The User understands that he\she is not going to enter the Smart Contract System and/or to use Token for the purpose of avoidance of bans and/or restrictions put on it by the law, as well as not to use the Smart Contract Systems with the aim of creating speculative, misleading and/or fraudulent schemes;
    
    34. the User understands and accepts that Tokens cannot be used for participation in property rights, joint stock or authorized capital of any associations, partnerships, companionships or any other forms of legal entities of whatever jurisdiction.
    
    7. User Wallet
    
    35. As part of the creation process the User will generate a wallet seed, need to provide a password and save their private wallet keys. The password will be used to encrypt the User’s seed and private keys to the User's Wallet.
    
    36. Following the creation of Tokens by the Smart Contract System, the Tokens will be transferred to the User's Wallet by the Smart Contract System. The User understands that the User must keep his seed, password and private keys safe and that the User may not share them with anybody. The User further understands that if his seed is lost or stolen, the User will not be able to generate a new password or recover his private keys, and if the User also loses his private keys and password, the ETH or Tokens associated with the User's Wallet will be unrecoverable and will be permanently lost. Furthermore, the User understands that there is no recovery mechanism for lost seeds, and without the seeds there is no recovery mechanism for lost passwords and private keys, so no one will be able to help the User retrieve or reconstruct a lost seed, password and private keys and provide the User with access to any lost Tokens or ETH. Furthermore, the User understands that it is not possible to reconstruct a lost or stolen wallet.
    
    8. Taxation
    
    37. The Users bears the sole responsibility to determine if the contribution to and receipt from the Smart Contract System, including but not limited to the acquisition of Tokens, change of the Token's value with the course of time and the receive function of the Smart Contract System shall be a taxable event for the User. The Users bear full responsibility for timely and correct calculation and payment of all taxes due in accordance with the legislation applicable to the Users. The Service is not a tax agent of the User, as well as it does not advise the User on the order of calculation and/or the payment of taxes.
    
    9. No Forward-Looking Statements
    
    38. Nothing in the Smart Contract System, in the Terms or in any statements or information contained on the Site at any moment, or in any means of communication of the Service (including but not limited to the publications in social media, as well as the statements or declarations made by inter alia the representatives of the Service, notwithstanding whether they had been made personally or on behalf of the Service), notwithstanding the time of their occurrence, shall be construed as the guarantee of gaining profit or benefit in any other form. Any strategies in a form of models of interaction between the Users under the Smart Contract System and/or the use of Token are suppositions, forecasts, expectations, objectives, possibilities and do not have any legal force. The Users understand that entry into Smart Contract System and/or use of Token may result in financial losses.
    
    39. The User understands and accepts that while the individuals and entities assigned to provide certain tasks to develop and issue the Smart Contract System, develop Service and Action (smart contract programmers, smart contract releaser, operator of user interfaces on standard solutions or any other person and/or affiliates involved with the setting up and operation of the Services) will make reasonable efforts to develop, complete these tasks as well as operating the Services under any regulatory scheme, it is possible that such development may fail and Tokens become useless or valueless due to technical, commercial, regulatory or any other reasons.
    
    40. Hence, User therefore understands and accepts that the transfer of ETH to the Smart Contract System may result in a total loss and that User shall not have any claim whatsoever to reclaim any ETH lost.
    
    10. No Liability
    
    41. The User acknowledges and agrees that, to the fullest extent permitted by any applicable law, the User will not hold any developers, auditors, contractors or founders of the Service, the Smart Contract System liable for any and all damages or injury whatsoever caused by or related to the use of, or the inability to use, Tokens, Services, Actions or the Smart Contract System under any cause or action whatsoever of any kind in any jurisdiction, including, without limitation, actions for breach of warranty, breach of contract or tort (including negligence) and that developers, auditors, contractors or founders of the Smart Contract System, the Tokens and/or the Services shall not be liable for any indirect, incidental, special, exemplary or consequential damages, including for loss of profits, goodwill or data, in any way whatsoever arising out of the use of, or the inability to use of the Smart Contract System, Services and/or Tokens. The User further specifically acknowledges that developers, auditors, contractors or founders of the Tokens, Smart Contract System and/or the Services are not liable, and the User agrees not to seek to hold them liable, for the conduct of third parties, including other creators of Token, and that the risk of creating, holding and using Token rests entirely with the User. By creating or holding Token, and to the extent permitted by law, the User agrees not to hold any third party (including developers, auditors, contractors or founders) liable for any regulatory implications or liability associated with or arising from the creation or ownership of Token or any other action or transaction related to the Smart Contract System.
    
    42. The Service does not guarantee the permanent and uninterruptible operation of the Site and does not take any responsibility for direct, indirect, accidental, special, circumstantial or punitive damages, including but not limited to the losses in the form of lost profit for the mistakes and/or technical issues in operation of the Site, or restriction of the access to the Site on the territory of any jurisdiction.
    
    43. The Service waives any guarantees to organize and conduct any Actions, does not bear any obligations to the Client or the Users and does not bear any responsibility for the Actions and any activities of the Users. The Users are independently responsible for the compliance of Actions with the applicable laws governing the relations of the Users and the Client.
    
    11. Miscellaneous
    
    44. The User understands and accepts that the network of miners will be ultimately in control of the Smart Contract System. The User understands that a majority of these miners could agree at any point to make changes to the official Smart Contract System and to run the new version of the Smart Contract System. Under such a scenario, Tokens will likely have no intrinsic value.
    
    45. The Smart Contract System is located in Alderney. Consequently, the Tokens creation and allocation and the assignment of the development and execution of the Services and Smart Contract System are considered to be executed in Alderney.
    
    46. The User agrees that if any portion of these Terms is found illegal or unenforceable, in whole or in part, such provision shall, as to such jurisdiction, be ineffective solely to the extent of such determination of invalidity or unenforceability without affecting the validity or enforceability thereof in any other manner or jurisdiction and without affecting the remaining provisions of the Terms, which shall continue to be in full force and effect.
    
    47. The Terms govern the creation, transfer and holding of Token and supersede any public statements about the launch of Tokens and/or the Smart Contract System made by anyone in the past, present and future.
    
    48. The applicable law is Swiss law. Any dispute arising out of or in connection with the creation of the Tokens and the development of Services shall be finally settled by the ordinary courts of the registered domicile of the defendant.
    
    
    `
    return(
    <div>
      <div>
          {this.state.showTermsandConditions &&
          <div>
          <nav className="header bg-header transparent-light minimized dark" data-pages="header" data-pages-header="autoresize" data-pages-resize-class="dark">
                <div className="container relative">
                    <div className="text-center">
                    <div className="header-inner">
                        <img src="assets/images/logo_white.png" />
                        <a href="/logout"><button type="button" className="pull-right btn btn-primary logout">Logout</button></a>
                    </div>
                    </div>
                </div>
            </nav>
            <h5>Coin-Bet Terms and Conditions</h5>
            <section className="mobile-wrapper full-width border-radius-none">
  <div className="inner full-height">
    <div className="container-xs-height full-height">
      <div className="col-xs-height col-middle text-left">
        <div className="container">
        <div className="row">
        <div className="col-md-12 m-t-5 m-b-5 p-t-5  top-list">
        <div className="col-md-12 text-center">
          <br />
         <h5>Coin-Bet Terms and Conditions</h5>
           <textarea className="form-control countdown" id="exampleTextarea" rows="20" wrap="soft">
            {termsText}
           </textarea>
           <br/>
           <br/>
           <button type="button" className=" countdown btn btn-primary btn-lg btn-block" onClick={this.nextStep.bind(this)}>I Agree</button>
              </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
</div>
          }
          {this.state.showParticipation &&
            <Participate />
          }

          {this.state.showCountryPage &&
            <CountryAgreement />
          }
      </div>
      </div>
    )
  }
}


// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    userData: getUserData(state)
  }
}

TermsandConditions.propTypes = {
};

export default connect(mapStateToProps)(TermsandConditions);
