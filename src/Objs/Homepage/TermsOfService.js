import * as React from "react";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class TermsOfService extends React.Component {
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
                <a id="myModalTrigger" href="#" onClick={this.toggle}>{this.props.buttonLabel} Terms Of Service</a>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>&nbsp;&nbsp;
                    <div className="field">
                        <ModalHeader toggle={this.toggle}>&nbsp;&nbsp;<h3>TERMS AND CONDITIONS</h3></ModalHeader>
                        <ModalBody>
                            <div className="terms-of-service-body">
                                <p>&nbsp;&nbsp;<strong>THESE TERMS AND CONDITIONS (“TERMS") SET OUT THE TERMS ON WHICH TALENT
                                    NINJA LIMITED (“TALENT NINJA”, “US”, “WE”, “OUR”) PROVIDE YOU
                                    (“YOU”, “YOUR”, “CUSTOMER”) WITH ACCESS TO THE TALENT NINJA PLAFORM SERVICE
                                    (“SERVICE”) AT </strong><a style={{ 'color': '#337ab7','text-decoration': 'underline' }} href="https://www.talent-ninja.com">WWW.TALENT-NINJA.COM</a><strong> (“WEBSITE"). PLEASE READ THESE TERMS
                                    CAREFULLY AND ENSURE THAT YOU HAVE UNDERSTOOD THEM.
                                    BY CLICKING ON THE BUTTON MARKED “SIGN UP” YOU WARRANT THAT YOU
                                    UNDERSTAND AND ACCEPT THESE TERMS. IF YOU ARE ACCEPTING THESE TERMS
                                    ON BEHALF OF YOUR EMPLOYER OR ACTING AS AN EMPLOYEE, YOU WARRANT
                                    THAT YOU ARE AUTHORISED TO ENTER INTO LEGALLY BINDING CONTRACTS ON
                                    BEHALF OF YOUR EMPLOYER. THE SAME RIGHTS, LIMITATIONS AND RESTRICTIONS
                                    APPLY TO YOUR EMPLOYER. YOU AGREE THAT THESE TERMS ARE ENFORCEABLE AS
                                    IF THEY WERE A WRITTEN NEGOTIATED AGREEMENT SIGNED BY YOUR EMPLOYER.
                                    IF YOU DO NOT AGREE TO THESE TERMS, PLEASE CEASE USE OF THE SERVICE IMMEDIATELY.
                                </strong></p><br />
                                <p>&nbsp;&nbsp;For the purpose of the Data Protection Act 1998, Talent Ninja Ltd is a Data Controller and a Data Processor.
                                    As an online “social recruiting” platform provider, we provide the Platform to assist businesses
                                    <strong> (“Employers”)</strong> in various aspects of their recruitment process, including the delivery of job
                                    vacancies <strong>(“Vacancy” or “Vacancies”)</strong> across selected online channels and the processing of job
                                    seeker applications..</p> <br />
                                
                                <p>&nbsp;&nbsp;YOU ARE ADVISED TO PRINT AND RETAIN A COPY OF THESE TERMS FOR YOUR FUTURE REFERENCE.
                                </p><br />
                                
                                <h3 className="text-header3">1. DEFINITIONS</h3><br/>
                                
                                
                                <p>&nbsp;&nbsp;<strong>“Account”</strong> means your social media and/or job aggregator accounts the Service permits you to Connect to, as may be updated by us from time to time;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Candidate”</strong> means any individual applying for a Job through the Service;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Connected Accounts”</strong> means those Accounts Connected to your Profile;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Connect”</strong> means the act of linking your Profile to an Account;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Contract”</strong> means the contract between us and you for provision of the Service and which incorporates these Terms and your online registration form;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>"Content"</strong> means any and all data, text, files, documents, links, images, videos, and any other information or material whatsoever (in any format) submitted by you or the Users to us or the Service (including your Profile);
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>"Fee"</strong> means the fee payable by you for use of the Service as specified at the time of registration or otherwise agreed between us and you in writing;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Free Trial”</strong> where permitted by us, shall have the meaning attributed at clause 8.1;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Intellectual Property Rights”</strong> means all intellectual property rights including without limitation, performer’s reproduction rights, performer’s distribution rights, performer’s rental rights and performer’s lending rights (collectively referred to as “Performer’s Property Rights”), patents, utility models, trade and service marks, trade names, domain names, right in designs, copyrights, moral rights, topography rights, rights in databases, trade secrets and know-how and in all cases whether or not registered or register able and including registrations and applications for registration of any of these and rights to apply for the same, and all rights and forms of protection of a similar nature or having equivalent or similar effect to any of these anywhere in the world;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Jobs”</strong> means job vacancies relating to your company posted by you to your Profile from time to time;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Login Details”</strong> means the unique username and password required for all Users to access the Service;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Network”</strong> means the electronic communications network used by us to provide the Service;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Period”</strong> means the period specified during registration;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Profile”</strong> means your customisable company profile which includes information relating to you and where you can post Jobs, Connect to Accounts and promote your active Jobs through the Connected Accounts;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Service”</strong> means the talent engagement service made available by us to you through the Website;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“Subscription”</strong> means any subscriptions packages to Use the Service from time to time;
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>"Use"</strong> means having access to the Service for your organisation’s own internal business purposes only; and
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“User”</strong> means an individual employee of your organisation who you have permitted to use the Service and who has been given the Login Details.
                                </p><br />
        
                                <p>&nbsp;&nbsp;<strong>“User”</strong> means an individual employee of your organisation who you have permitted to use the Service and who has been given the Login Details.
                                </p><br />
        
                                <h3 className="text-header3">2. INFORMATION ABOUT TALENT NINJA AND THE SERVICE</h3><br/>
        
                                <p>&nbsp;&nbsp;2.1 The Service and Website are owned and managed by Talent Ninja Limited, a company registered in England and Wales with the company registration number 09950744 and having its registered address at Pickwick Bunces Lane, Burghfield Common, Reading, RG7 3DL.
                                </p><br />
        
                                <h3 className="text-header3">3. REGISTRATION</h3><br/>
        
                                <p>&nbsp;&nbsp;3.1 In order to access and Use the Service you shall be required to register using the online registration form made available to you on the Website. By completing the online registration form, you consent to us conducting verification and security procedures in respect of the information provided in such online registration form.
                                </p><br />
        
                                <p>&nbsp;&nbsp;3.2 Upon the completion and submission of the online registration form by you on the Website, you shall be sent an email (“Confirmation Email”) confirming your registration with us.
                                </p><br />
        
                                <p>&nbsp;&nbsp;3.3 You hereby warrant that the information provided by you is true, accurate and correct. You further warrant that you shall promptly notify us in the event of any changes to such information provided.
                                </p><br />
        
                                <p>&nbsp;&nbsp;3.4 You shall keep, and procure that all Users keep, any Login Details confidential and secure. Without prejudice to our other rights and remedies, we reserve the right to promptly disable your Login Details and suspend your access to the Service in the event we have any reason to believe that any User has breached any of the provisions set out herein.
                                </p><br />
        
                                <h3 className="text-header3">4. FORMATION AND TERMINATION OF YOUR CONTRACT</h3><br/>
        
                                <p>&nbsp;&nbsp;4.1 Your Contract with us shall commence on the date we send your Confirmation Email and will be subject to the rights and restrictions determined by your selected Subscription. Certain features and functionality of the Service may not be available to you, depending on your level of Subscription.
                                </p><br />
        
                                <p>&nbsp;&nbsp;4.2 Your Contract shall continue for the duration of any Free Trial or Period (as applicable) and, subject to the termination provisions in these Terms, on expiry of any Free Trial or Period your Contract shall automatically renew for a further recurring Period.
                                </p><br />
        
                                <p>&nbsp;&nbsp;4.3 You may terminate your Contract with us at any time by providing notice in writing or by e-mail sent to the postal or e-mail address provided at clause 17, such notice to expire at the end of the Free Trial or the relevant Period (as applicable) in which we received your notice to terminate.
                                </p><br />
        
                                <p>&nbsp;&nbsp;4.4 We may give you notice to terminate your Contract and your Use of the Service at any time, your Contract and Use of the Service to terminate at the end of the then current Period.
                                </p><br />
        
                                <p>&nbsp;&nbsp;4.5 We may suspend or terminate your access and Use of the Service immediately on notice to you in the event that:
                                </p><br />
        
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;4.5.1 third party services and network providers cease to make the third party service or network available to us;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;4.5.2 you fail to comply with one or more of these Terms;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;4.5.3 we believe that there has been fraudulent use, misuse or abuse of features and functionalities of the Service (in whole or in part); or
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;4.5.4 we believe that you have provided us with any false, inaccurate or misleading information, and for the avoidance of doubt, no Fees shall be refunded to you in the event of termination by us in accordance with the foregoing.
                                </p><br />
    
                                <p>&nbsp;&nbsp;4.6 Upon termination of your Contract with us in accordance with this clause 4, your and any User’s access to the Website and the Service shall cease and any Content will no longer be accessible through the Service. We may retain copies of your Content and/or other data (including any User’s data) made available through the Service for auditing and/or tax purposes, or as may be required by us to comply with applicable law.
                                </p><br />
    
                                <h3 className="text-header3">5. ACCESS TO THE SERVICE AND SUPPORT
                                </h3><br/>
    
                                <p>&nbsp;&nbsp;5.1 In consideration for payment of the applicable Fees, we hereby grant to you a non-exclusive, non-transferable (without a right to sub-licence) licence to access and Use, and permit Users to access and Use, the Service for the duration of your Contract. You acknowledge that you shall be responsible for all Use of the Service by Users and shall ensure that these Terms are brought to the attention of all Users. You shall be liable for breach of these Terms by a User as if it were a breach by you.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.2 The Service permits you and your Users to Connect to Accounts and post Jobs to the Connected Accounts through the Service. Jobs posted to your Profile will automatically be posted to your Connected Accounts. You may update your Connected Accounts through your Profile.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.3 In order to post a Job you must include all information required by the Service and you warrant that all such information included in a Job is accurate and correct. We do not vet or verify any Jobs posted by you from time to time and you are solely responsible for ensuring the details of any Job are correct, including but not limited to job title, description, skill requirements, start dates and remuneration.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.4 The number of active Jobs you are permitted to make available on your Profile at any time shall depend on your level of Subscription. We reserve the right to adjust the number of active Jobs permitted under each Subscription from time to time. You may remove active Jobs from your Profile at any time.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.5 All Jobs posted through your Profile must relate to the company listed in your Profile only. You are not permitted to list Jobs relating to any other company, including any subsidiary or holding company.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.6 We shall use reasonable endeavours to make the Service available to you and the Users at all times, but we cannot guarantee an uninterrupted or fault free service.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.7 Our ability to provide the Service may be impaired by conditions or circumstances that are beyond our control, including, without limitation third party service providers, geographic or atmospheric conditions, local physical obstructions, software and hardware features or functionality of your personal computer, operating system and the number of other users logging onto the Service, server and/or Network at the same time. We shall take reasonable action to minimise the disruption caused by such circumstances but you acknowledge, agree and accept that some such interruptions may not be avoidable.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.8 The Network is not controlled by us and may from time to time be upgraded, modified, subject to maintenance work or otherwise amended by the owner of the Network. Such circumstances may result in the Service being temporarily unavailable. We will take reasonable action to minimise the disruption caused by such circumstances, but some such interruptions may not be avoidable.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.9 We use industry standard security measures to protect against the loss, misuse and alteration of the information, data, and/or content handled by our Service. However, you acknowledge and agree that we cannot guarantee complete security of such information, data, and/or content or that our security measures will prevent hacks, worms, bugs, trojans or such other similar devices that may allow access to or unauthorised viewing of such information, data, and/or content.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.10 We reserve the right to make changes to the Service or part thereof, from time to time at our sole discretion, and we may from time to time update, add, remove, modify and/or vary any features or functionalities of the Service.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.11 We offer support services between 9am – 5pm, UK time, Monday to Friday (excluding UK bank and public holidays) for the duration of your Contract in respect of your Use of the Service, which comprises of:
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;5.11.1 advice on access and Use of the Service; and
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;5.11.2 diagnosis of interruptions to the Service (“Fault”),
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;in each case by e-mailing us at support@talent-ninja.com.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.12 Fault diagnosis is subject to you or any User providing a clear and accurate description of any Fault requiring support, including the circumstances in which it arose, the area of the Service to which the Fault relates and any other information reasonably required by us to remedy the Fault.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.13 Subject to receiving a description in accordance with clause 5.12 above, we shall use our reasonable efforts to resolve the Faults within a reasonable time following receipt of your or a User’s request pursuant to clause 5.11.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.14 The support detailed in this clause 5 shall not include the diagnosis and rectification of any Fault resulting from:
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;5.14.1 use of the Service other than in accordance with these Terms or the use of the Service for a purpose for which it was not designed;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;5.14.2 a fault in your or a third party’s software, hardware, network connections or application or any upgrade in respect thereof; or
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;5.14.3 a fault in the equipment or in any other software operating in conjunction with or integrating with the Service.
                                </p><br />
    
                                <p>&nbsp;&nbsp;5.15 The provision of the support described in clauses 5.11 to 5.14 shall be subject to fair and reasonable use by you and we shall be entitled to levy additional charges if in our reasonable determination, you have exceeded or abused the provision of the support set out herein.
                                </p><br />
    
                                <h3 className="text-header3">6. YOUR OBLIGATIONS</h3><br/>
    
                                <p>&nbsp;&nbsp;6.1 You shall promptly notify us in the event of a breach of security or any unauthorised Use of Login Details.
                                </p><br />
    
                                <p>&nbsp;&nbsp;6.2 You are responsible for ensuring that all Jobs and Content are not deemed to be offensive, illegal, inappropriate or that in any way:
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.2.1 promotes racism, bigotry, hatred or physical harm of any kind against any group or individual;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.2.2 harasses or advocates harassment of another person;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.2.3 displays pornographic or sexually explicit material;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.2.4 promotes any conduct that is abusive, threatening, obscene, defamatory or libellous;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.2.5 promotes any illegal activities;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.2.6 provides instructional information about illegal activities, including violating someone else’s privacy or providing or creating computer viruses;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.2.7 promotes or contain information that you know or believe to be inaccurate, false or misleading;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.2.8 engages in the promotion of contests, sweepstakes and pyramid schemes, without our prior written consent;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.2.9 contains any virus or other thing or device which may prevent, impair or otherwise adversely affect the operation of the Website; or
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.2.10 infringes any Intellectual Property Rights or any other proprietary rights of any third party.
                                </p><br />
    
                                <p>&nbsp;&nbsp;6.3 You hereby grant, and procure that any User grants, to us a non-exclusive, worldwide royalty free licence to use the Content and all other materials submitted by you or any User for the purpose of performing our obligations under these Terms and delivering the Service to you and your Users.
                                </p><br />
    
                                <p>&nbsp;&nbsp;6.4 You acknowledge that the Service does not verify the rights and restrictions applicable to any Content. Where you do not own the Content, you are solely responsible for checking the relevant licence rights and restrictions applicable to any Content. We shall not be liable to you for any losses, damages, costs or expenses incurred by you arising out of or in connection with your use of any Content through the Service.
                                </p><br />
    
                                <p>&nbsp;&nbsp;6.5 You warrant and represent that you own, are licensed or otherwise have a right to use any and all the Intellectual Property Rights in any Content that you submit to the Service. You hereby indemnify and hold us harmless against all damages, losses, costs and expenses (including reasonable legal expenses) incurred or suffered by us arising out of or in connection with any claim, action or proceeding made against us by a third party arising out of or in connection with our or your use or possession of any Content.
                                </p><br />
    
                                <p>&nbsp;&nbsp;6.6 You further agree that at all times, you shall, and procure that any User shall:
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.6.1 not use Login Details with the intent of impersonating another individual;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.6.2 not allow any other person other than a User to use your Login Details;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.6.3 not do anything likely to impair, interfere with or damage or cause harm or distress to any persons using the Service or in respect of the Network;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.6.4 not use the Service, the content therein and/or do anything that will infringe any intellectual property right or other rights of any third parties;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.6.5 not use any information obtained using the Service otherwise than in accordance with these Terms;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.6.6 comply with all our instructions and policies from time to time in respect of your Use of the Service;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.6.7 co-operate with any reasonable security or other checks or requests for information made by us from time to time; and
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;6.6.8 use the information made available to you using the Service at your own risk.
                                </p><br />
    
                                <p>&nbsp;&nbsp;6.7 In the event that You or any Users breach any of the terms in this clause 6, or we in our sole and absolute discretion, reasonably suspect that you or any User have breached any of the terms set out in this clause 6, we reserve the right to take any action that we deem to be necessary, including without limitation, the termination of your Contract forthwith and without notice.
                                </p><br />
    
                                <p>&nbsp;&nbsp;6.8 You shall, and you procure that all your Users shall, use the Service in accordance with all applicable laws, statutes, regulations, orders, guidance or industry codes of practice, in particular all employment and discrimination laws and ensure that any Job and your recruitment process does not in any way discriminate on grounds including but not limited to sex, gender, race, class, age or disability.
                                </p><br />
    
                                <h3 className="text-header3">7. FEES AND PAYMENT</h3><br/>
    
                                <p>&nbsp;&nbsp;7.1 Certain Subscriptions may be provided free of charge. Where your Subscription is provided free of charge, we reserve the right to start charging you Fees for your Subscription on the provision of seven (7) days notice to you. Any continued use of the Service by you following expiry of our notice will be subject to our receipt of the relevant Fees.
                                </p><br />
    
                                <p>&nbsp;&nbsp;7.2 Where your Subscription is subject to the payment of Fees, the Fees shall be based on the type of Subscription you are allocated, as set out on the Website from time to time. All Fees are payable in advance and are non-refundable, save as expressly stated in these Terms.
                                </p><br />
    
                                <p>&nbsp;&nbsp;7.3 In order to automatically renew your Contract in accordance with clause 4.1, we shall automatically charge you for the relevant Fees by using the details of your debit or credit card which you used to pay for the first Period. If your debit or credit card details have changed since your last use through the Service, we may not be able to automatically renew your Contract and we reserve the right to withhold access and/or terminate your Use of the Service in the event we do not receive payment of any Fee.
                                </p><br />
    
                                <p>&nbsp;&nbsp;7.4 We reserve the right to increase the Fees at any time on notice to you, any increase to take effect from the start of the next Period.
                                </p><br />
    
                                <p>&nbsp;&nbsp;7.5 Subject to the payment of any additional Fees in advance, you may upgrade your Subscription at any time by accessing your Profile. You acknowledge that you shall not be permitted to any refund of Fees paid in advance for any downgrade of your Subscription permitted by the Service.
                                </p><br />
    
                                <p>&nbsp;&nbsp;7.6 You shall notify us immediately in the event you cease to comply with any of the restrictions applicable to your Contract. In the event we receive your notice, or we deem acting reasonably that you have exceeded the restrictions of your Contract, we may charge additional Fees reflecting the exceeded restrictions. We reserve the right to deduct such Fees from your original method of payment or invoice you for the additional amount, which shall be payable within thirty (30) days of the date of the invoice.
                                </p><br />
    
                                <h3 className="text-header3">8. FREE TRIAL</h3><br/>
    
                                <p>&nbsp;&nbsp;8.1 We may offer you a one-time free trial for such period decided at our sole discretion, during which you can try out Use of the Service for free (“Free Trial”). You acknowledge that during any Free Trial, the Service may have certain restrictions and limited functionality (e.g. a limit on the number of active Jobs that may be posted).
                                </p><br />
    
                                <p>&nbsp;&nbsp;8.2 On expiry of any Free Trial, you will have the option to either (i) continue access to the Service by paying the Fees (where applicable); or (ii) cease access to and Use of the Service.
                                </p><br />
    
                                <p>&nbsp;&nbsp;8.3 During the Free Trial, you agree that we will have the right to send you communications, notices and news about the Service to your e-mail address and to use any alternate email address you may have provided.
                                </p><br />
    
                                <p>&nbsp;&nbsp;8.4 We reserve the right to modify, cancel and/or limit this Free Trial offer at any time.
                                </p><br />
    
                                <p>&nbsp;&nbsp;8.5 If you choose not to continue Use of the Service after the Free Trial, you acknowledge and agree that all Content shall no longer be accessible through the Service on expiry of the Free Trial.
                                </p><br />
    
                                <h3 className="text-header3">9. INTERACTIONS WITH CANDIDATES</h3><br/>
    
                                <p>&nbsp;&nbsp;9.1 The Service is designed to connect you with prospective Candidates and assist you with your recruitment process. You understand that we are not involved or a participant, in any way, in respect of any contact, meetings (face-to-face or otherwise), negotiations, transactions or contracts between you and the Candidates. Consequently, you acknowledge and agree that we shall not be liable in any way and for any reason whatsoever in respect of your relationship with the Candidates.
                                </p><br />
    
                                <p>&nbsp;&nbsp;9.2 You acknowledge that we do not have any control of and therefore cannot reasonably accept any liability in respect of the behaviour, response or actions of any Candidates. We are not able to vet, verify the accuracy, correctness and completeness, monitor, edit or modify any Candidate applications for Jobs. Consequently, all such Candidate information and content is provided to you “as is” and you agree that any use made of such content shall be strictly at your own risk.
                                </p><br />
    
                                <p>&nbsp;&nbsp;9.3 We do not guarantee or warrant that you will receive enquiries or responses to Jobs or otherwise generate Job applications as a result of the Service, or achieve any result whatsoever through your use of the Service. You acknowledge and agree that you are solely responsible for all communication with, and any subsequent dealings with, the Candidates.
                                </p><br />
    
                                <h3 className="text-header3">10. EXCLUSION OF WARRANTIES AND LIMITATION OF LIABILITY</h3><br/>
    
                                <p>&nbsp;&nbsp;10.1 You hereby warrant that (a) all Users are at least 18 years old; (b) you have the right and capacity to enter into and be bound by these Terms; (c) you shall comply with all applicable laws regarding the Use of the Service; and (d) you are not acting as a consumer under your Contract.
                                </p><br />
    
                                <p>&nbsp;&nbsp;10.2 All warranties, representations, guarantees, conditions and terms other than those expressly set out herein whether express or implied by statute, common law, trade usage or otherwise, and whether written or oral are hereby expressly excluded to the fullest extent permissible by law. Consequently all information, advice, suggestions and recommendations made available to you are provided to you on an “as is” basis.
                                </p><br />
    
                                <p>&nbsp;&nbsp;10.3 Nothing in these Terms shall be deemed to exclude, restrict or limit liability for the following categories:
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;10.3.1 death or personal injury resulting from negligence;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;10.3.2 any liability for fraudulent misrepresentation; or
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;10.3.3 any indemnity provided hereunder.
                                </p><br />
    
                                <p>&nbsp;&nbsp;10.4 Subject to clause 10.3, we shall not be responsible for any:
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;10.4.1 loss of profits, sales, business, or revenue;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;10.4.2 loss or corruption of data, information or software;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;10.4.3 loss of business opportunity;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;10.4.4 loss of anticipated savings;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;10.4.5 loss of goodwill; or
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;10.4.6 special, indirect or consequential loss, whether such losses resulted from our negligence, failure to comply with these Terms or otherwise.
                                </p><br />
    
                                <p>&nbsp;&nbsp;10.5 Subject to clause 10.3, our maximum aggregate liability to you under, arising from or in connection with your Contract, whether arising in contract, tort (including negligence) breach of statutory duty or otherwise, shall not exceed the Fees actually received by us from you under your Contract in the twelve (12) months prior to the month in which the event or series of events arose (and in the event less than 12 months have elapsed, our aggregate liability shall be limited to the Fees payable by you in the first 12 months of your Contract).
                                </p><br />
    
                                <h3 className="text-header3">11. INTELLECTUAL PROPERTY RIGHTS</h3><br/>
    
                                <p>&nbsp;&nbsp;11.1 We and/or our licensors own all rights in the Intellectual Property Rights relating to the Service and the Website. All right, title and interest in and to the Service and the website will remain exclusively with us and/or our licensors.
                                </p><br />
    
                                <p>&nbsp;&nbsp;11.2 You are expressly prohibited from:
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;11.2.1 reproducing, copying, editing, transmitting, uploading or incorporating into any other materials, any of the Service or the Website; and
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;11.2.2 removing, modifying, altering or using any registered or unregistered marks/logos/design owned by us and/or its licensors, and doing anything which may be seen to take unfair advantage of our reputation and goodwill or could be considered an infringement of any of the rights in the Intellectual Property Rights owned by and/or licensed to us.
                                </p><br />
    
                                <h3 className="text-header3">12. DATA PROTECTION</h3><br/>
    
                                <p>&nbsp;&nbsp;12.1 You shall ensure that your and any Use of the Service is compliant with all relevant applicable laws, regulations and policies relating to data protection, including the Data Protection Act 1998, as may be updated, amended, re-enacted or consolidated and in force from time to time (“Act”). Where applicable, expressions defined in the Act and used in this clause 12 shall have the meanings given to them in the Act.
                                </p><br />
    
                                <p>&nbsp;&nbsp;12.2 To the extent that any Content contains Personal Data, you shall ensure that you are entitled to transfer such Personal Data to us so that we may lawfully process the Personal Data for the purpose of performing our obligations under these Terms and that the relevant third parties have given their consent to our processing of the Personal Data in accordance with these Terms.
                                </p><br />
    
                                <p>&nbsp;&nbsp;12.3 We may collect and process the following information:
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.3.1 information that you or your Users provide to us from time to time, including information provided at the time of registering to use our Service, Content or any requests for further information or services. We may also ask you for information when you report a problem with our Service;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.3.2 if you or any User contacts us, we may keep a record of that correspondence;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.3.3 details of Users’ use of the Service, including page response times, lengths of visit, login information, browser type and version, traffic data and other communication data, and the resources that Users access, so we may compile statistics relating to use of the Service.
                                </p><br />
    
                                <p>&nbsp;&nbsp;12.4 You shall ensure that your and any Use of the Service is compliant with all relevant applicable laws, regulations and policies relating to data protection, including the Data Protection Act 1998, as may be updated, amended, re-enacted or consolidated and in force from time to time (“Act”). Where applicable, expressions defined in the Act and used in this clause 12 shall have the meanings given to them in the Act.
                                </p><br />
    
                                <p>&nbsp;&nbsp;12.5 To the extent that any Content contains Personal Data, you shall ensure that you are entitled to transfer such Personal Data to us so that we may lawfully process the Personal Data for the purpose of performing our obligations under these Terms and that the relevant third parties have given their consent to our processing of the Personal Data in accordance with these Terms.
                                </p><br />
    
                                <p>&nbsp;&nbsp;12.6 We may collect and process the following information:
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.6.1 to ensure that our Service is presented in the most effective manner for you and your Users;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.6.2 to carry out our obligations arising from any contracts entered into between you and us;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.6.3 to notify you about changes to our Service;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.6.4 as part of our efforts to keep our Service safe and secure;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.6.5 to make suggestions and recommendations to you and Users about services that may be of interest to you or them; and
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.6.6 to make improvements to the Service.
                                </p><br />
    
                                <p>&nbsp;&nbsp;12.7 We may disclose User’s Personal Data to:
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.7.1 business partners, suppliers and sub-contractors for the performance of any contract we enter into with them or you;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.7.2 providers that assist us in the improvement and optimisation of the Service;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.7.3 in the event that we sell or buy any business or assets, in which case we may disclose User personal data to the prospective seller or buyer of such business or assets;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.7.4 if we or substantially all of our assets are acquired by a third party, in which case personal data held by us will be one of the transferred assets;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.7.5 if we are under a duty to disclose or share User personal data in order to comply with any legal obligation, or in order to enforce or apply our Terms and other agreements; or
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;12.7.6 to protect the rights, property, or safety of Talent Ninja Limited, the Service and any third party we interact with to provide the Website.
                                </p><br />
    
                                <h3 className="text-header3">13. VIRUSES, HACKING AND OTHER OFFENCES</h3><br/>
    
                                <p>&nbsp;&nbsp;13.1 You will not, and procure that the User will not, misuse the Website by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to the Website, the server on which the Website is stored or any server, computer or database connected to our Website. You must not attack the Website via a denial-of-service attack or a distributed denial-of service attack.
                                </p><br />
    
                                <p>&nbsp;&nbsp;13.2 By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right, together with any User’s right, to use the Website will cease immediately.
                                </p><br />
    
                                <p>&nbsp;&nbsp;13.3 We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your, or any User’s, use of the Website or to your, or any User downloading of any material posted on it, or on any website linked to it.
                                </p><br />
    
                                <h3 className="text-header3">14. PUBLICITY AND MARKETING</h3><br/>
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;14.1 We may in any of our marketing material refer to you as our customer and refer to the type of services that we have provided to you.
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;14.2 Subject to your prior approval, we may publish and circulate a case study describing the Service supplied by us to you, including aggregate figures relating to your use of the Service and the benefits it has brought to your business (for use by us as a marketing tool).
                                </p><br />
    
                                <h3 className="text-header3">15. CONFIDENTIALITY</h3><br/>
    
                                <p>&nbsp;&nbsp;15.1 Unless otherwise set out to the contrary in these Terms, each party (the "Receiving Party") shall keep confidential all information and documentation disclosed by the other party (the "Disclosing Party") to the Receiving Party or of which the Receiving Party becomes aware which in each case relates to any operations, products, processes, dealings, trade secrets or the business of the Disclosing Party or which is identified by the Disclosing Party as confidential ("Confidential Information") and will not use any Confidential Information for any purpose other than the performance of its obligations under these Terms and/or improving performance of the Service. Other than to its employees and sub-contractors to the extent that it is reasonably necessary for the purpose of performing its obligations under these Terms, the Receiving Party shall not disclose Confidential Information to any third party without the prior written consent of the Disclosing Party.
                                </p><br />
    
                                <p>&nbsp;&nbsp;15.2 The obligations contained in Clauses 15.1 shall not apply to any Confidential Information which is:
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;15.2.1 on the date your Contract comes into effect, or at any time after that date, in the public domain other than through breach of these Terms by the Receiving Party;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;15.2.2 furnished to the Receiving Party without restriction by a third party having a bona fide right to do so;
                                </p><br />
    
                                <p style={{ 'padding-left': '20px' }}>&nbsp;&nbsp;15.2.3 required to be disclosed by the Receiving Party by law or regulatory requirements of any stock exchange, provided that the Receiving Party shall give the Disclosing Party as much notice as reasonably practicable of the requirement for such disclosure.
                                </p><br />
    
                                <h3 className="text-header3">16. GENERAL</h3><br/>
    
                                <p>&nbsp;&nbsp;16.1 If we fail at any time to insist upon strict performance of our obligations under these Terms, or if it fails to exercise any of the rights or remedies to which it is entitled to under these Terms, this will not constitute a waiver of any such rights or remedies and shall not relieve you from compliance with such obligations.
                                </p><br />
    
                                <p>&nbsp;&nbsp;16.2 You shall comply with all foreign and local laws and regulations which apply to your Use of the Website in whatever country you are physically located, including without limitation, export control laws and regulations.
                                </p><br />
    
                                <p>&nbsp;&nbsp;16.3 Neither party will be responsible for delays or failure to comply with obligations resulting from circumstances beyond the reasonable control of such party, provided that the nonperforming party uses reasonable efforts to avoid or remove such causes of non-performance and continues performance hereunder with reasonable dispatch whenever such causes are removed.
                                </p><br />
    
                                <p>&nbsp;&nbsp;16.4 A waiver by us of any default shall not constitute a waiver of any subsequent default.
                                </p><br />
    
                                <p>&nbsp;&nbsp;16.5 No waiver by us of any of the Terms shall be effective unless it is expressly stated to be a waiver and is communicated to you in writing.
                                </p><br />
    
                                <p>&nbsp;&nbsp;16.6 All notification and communication should be sent to the contact details set out in clause 17 below (in the case of Talent Ninja) or the contact details given by you in the online registration form on the Website. A notice or communication is deemed given: (i) if delivered personally, when left at the relevant party’s address; (ii) if sent by post, two working days after posting it; (iii) if sent by e-mail on completion of its transmission.
                                </p><br />
    
                                <p>&nbsp;&nbsp;16.7 If any of these Terms are determined by any competent authority to be invalid, unlawful or unenforceable to any extent, such term, condition or provision will to that extent, be severed from the remaining terms, conditions and provisions which shall continue to be valid to the fullest extent permitted by law.
                                </p><br />
    
                                <p>&nbsp;&nbsp;16.8 Your Contract represents the entire agreement between you and us in respect of your use of the Website and shall supersede any prior agreement, understanding or arrangement between us, whether oral or in writing.
                                </p><br />
    
                                <p>&nbsp;&nbsp;16.9 You acknowledge that in entering into these Terms, you have not relied on any representations, undertaking or promise given by or implied from anything said or written whether on the Website, the Internet or in negotiation between us (whether made innocently or negligently) except as expressly set out in these Terms.
                                </p><br />
    
                                <p>&nbsp;&nbsp;16.10 These Terms are governed by and construed in accordance with English law. The Courts of England shall have exclusive jurisdiction over any disputes arising out of these Terms.
                                </p><br />
    
                                <p>&nbsp;&nbsp;16.11 We may alter or amend these Terms by giving reasonable notice on our Website. By continuing (or Users continuing) to Use the Service after expiry of the notice period, you will be deemed to have accepted any amendment to these Terms.
                                </p><br />
    
                                <h3 className="text-header3">17. CONTACT DETAILS</h3><br/>
                                
                                <p>&nbsp;&nbsp;17.1 Please direct any queries about these Terms (preferably by email) to: support@talent-ninja.com
                                </p><br />
                            </div>
                        </ModalBody>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default TermsOfService;