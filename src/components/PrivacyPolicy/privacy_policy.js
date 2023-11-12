import React, {useState, useEffect} from 'react';
import './privacy_policy.css';
import { Link } from 'react-scroll';
import times_to_click from '../../assets/choose_file_times_to_click.png';
import write from '../../assets/write.png';
import search_n_copy from '../../assets/search_and_copy.png';
import paste from '../../assets/paste.png';




const PrivacyPolicy = () => {


  return (
    <section id="PrivacyPolicy">
        <h2>Privacy Policy</h2>
        <span>

        Last Updated: 08.11.2023

        <h2>1. Introduction</h2>
        Thank you for choosing to download Automator from our website. Your privacy and trust are important to us. This Privacy Policy outlines how we collect and use data when you download our software.

        <h2>2. Information We Collect</h2>
        We do not collect any personal information or data when you download Automator. We do not request, store, or process any personal details such as your name, email address, or contact information.

        <h2>3. Data Usage</h2>
        We do not track, store, or analyze any personal data or usage information from our users. We do not use cookies or other tracking technologies.

        <h2>4. Third-Party Services</h2>
        We do not use any third-party services or integrations that would collect data from our website or the downloaded software.

        <h2>5. Security</h2>
        While we do not collect personal data, we take reasonable measures to protect the security and integrity of our website and software. We regularly update and maintain our systems to provide a safe environment for our users.

        <h2>6. Changes to this Privacy Policy</h2>
        This Privacy Policy may be updated in the future. Any changes will be posted on this page with a revised "Last Updated" date. It is recommended that you review this policy periodically to stay informed.

        <h2>7. Contact Us</h2>
        If you have any questions or concerns regarding this Privacy Policy or our software, please contact us at <a href="mailto:drabikdominik@op.pl">drabikdominik@op.pl</a>.
    </span>

    </section>
  )
}

export default PrivacyPolicy;