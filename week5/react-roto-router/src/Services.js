import React from 'react';

class Services extends React.Component {

    render() {
        return (
        <div className="mainSection">
            <ul id="serviceList">
                <li className="serviceItem">Plumbing Installations</li>
                <p>Residential and commercial installations for new construction</p>
                <li className="serviceItem">Plumbing Repairs</li>
                <p>Residential and commercial repairs</p>
                <li className="serviceItem">Plumbing Renovations</li>
                <p>Residential and commercial renovations on existing buildings</p>
                <li className="serviceItem">Emergency Services</li>
                <p>Call our after hours number for emergency services.
                    <br/>
                    An after hours urgency fee may apply.
                    <br/>
                    999-555-7878
                </p>

            </ul>

        </div>
        )
    }
}

export default Services;