import * as React from "react";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class Privacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <a id="myModalTrigger" href="#" onClick={this.toggle}>{this.props.buttonLabel} Privacy</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <div className="field">
          <ModalHeader toggle={this.toggle}><h3>TALENT NINJA – PRIVACY POLICY</h3></ModalHeader>
          <ModalBody>
            <p>As the operators of the Talent Ninja recruitment platform <strong>(“Platform”)</strong>,
            Talent Ninja Ltd, with registered company number 09950744 <strong>(“us”, “our”, “we”)</strong>, is committed to protecting and respecting your
            privacy. This Privacy Policy sets out the basis on which the Personal Data collected from you, or that
            you provide to us will be processed by us. Please read the following carefully to understand our views
            and practices regarding your Personal Data and how we will treat it.</p><br />

            <p>For the purpose of the Data Protection Act 1998, Talent Ninja Ltd is a Data Controller and a Data Processor. 
                As an online “social recruiting” platform provider, we provide the Platform to assist businesses 
                <strong> (“Employers”)</strong> in various aspects of their recruitment process, including the delivery of job 
                vacancies <strong>(“Vacancy” or “Vacancies”)</strong> across selected online channels and the processing of job 
                seeker applications..</p> <br />

            <p>The processing of your application (e.g. your CV and any covering letter) on behalf of Employers results<br /> in the collection and processing of your Personal Data.</p><br />

            <h3 className="text-header3">INFORMATION WE MAY COLLECT FROM YOU</h3><br/>


            <p>We collect and process the following information from you:</p><br />
            <li>information that you provide to an Employer when applying for a Vacancy;</li>
            <li>details of Vacancies you have applied for and the relevant channels through which you applied; and</li>
            <li>if you contact us, we may keep a record of that correspondence</li><br/>

            <h3 className="text-header3">RETENTION OF YOUR PERSONAL DATA</h3><br/>

            <p>We take appropriate measures to ensure that any Personal Data is kept secure. 
                Unfortunately, the transmission of information via the internet is not completely 
                secure. Although we will do our best to protect your Personal Data, we cannot guarantee
                 the security of your data when transmitted to us and any transmission is at your own 
                 risk. Once we have received your information, we will use strict procedures and security 
                 features to try to prevent unauthorised access.</p> <br />

            <p>If you have any questions about how we use data collected which relates to you, please contact us 
                by sending a request by e-mail to the contact details below.</p><br />

            <h3 className="text-header3">USES MADE OF YOUR INFORMATION</h3><br/>

            <p>We use information held about you (including Personal Data) in the following ways:</p><br />
            <li>to perform our obligations under our agreement with the Employers;</li><br />
            <li>to ensure that Vacancies handled by our Platform are presented in the most effective manner for you and for your device;</li><br />
            <li>to provide you with information or services that we feel may interestyou, where you have consented to be contacted for such purpose; and</li><br/>
            <li>as part of our efforts to keep our Platform safe and secure.</li><br />

            <p>In addition to the above uses, we may retain your information (including any CV submitted by you) for
            the purposes of compiling and maintaining a CV library for the benefit of third party Employers. As part of the CV library, 
            your information may be searched and viewed by third party Employers registered to use our Platform and you consent to such third 
            party Employers contacting you by e-mail or text message in respect of Vacancies that may arise from time to time.</p><br />

            <p>If you do not want us to retain your information for the purpose of the Talent Ninja CV library, do not tick the relevant
                 box on the Vacancy (if any).</p><br />
            
            <h3 className="text-header3">DISCLOSURE OF YOUR INFORMATION</h3><br/>

            <p>We may disclose your Personal Data to any member of our group, which means our subsidiaries, our
            ultimate holding company and its subsidiaries, as defined in section 1159 of the UK Companies Act 2006 (where applicable).</p> <br />

            <li>service providers for enabling you to apply for Vacancies through our Platform.</li><br />
            <li> in the event that we sell or buy any business or assets, in which case we may disclose your Personal Data to the prospective seller or buyer of such business or assets.</li><br />
            <li>if we or substantially all of our assets are acquired by a third party, in which case Personal Data held by us will be one of the transferred assets.</li><br/>
            <li>if we are under a duty to disclose or share your Personal Data in order to comply with any legal obligation.</li><br />
            <li>to protect the rights, property, or safety of Talent Ninja Ltd, our users and any third party we interact with to provide the Platform.</li><br />

            <h3 className="text-header3">YOUR RIGHTS</h3><br/>

            <p>You have the right to ask us not to process your Personal Data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes 
                or if we intend to disclose your information to any third party for such purposes. You can exercise your right to prevent such processing by checking/ticking certain tick boxes we use to collect 
                your data. You can also exercise the right at any time by contacting us using our contact details set out below.</p> <br />

            <h3 className="text-header3">ACCESS TO INFORMATION</h3><br/>

            <p>The Data Protection Act gives you the right to access information held about you. Your right of access can be exercised in accordance with the Data Protection Act. Any access request may be subject 
                to a fee of £10 to meet our costs in providing you with details of the information we hold about you.</p> <br />

            <h3 className="text-header3">CHANGES TO OUR PRIVACY POLICY</h3><br/>

            <p>We reserve the right to modify this Privacy Policy at any time. Any changes we may make to our Policy in the future will be notified and made available to you using the Website. Your continued use of the 
                services and the Website shall be deemed your acceptance of the varied Privacy Policy.</p><br />

            <h3 className="text-header3">CONTACT</h3><br/>
            <p>All questions, comments and requests regarding this Privacy Policy should be addressed to <a id="blue-text" href="mailto:support@talent-ninja.com">support@talent-ninja.com</a>.</p>
          </ModalBody>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Privacy;