import React from 'react';
import qs from 'query-string';
import { Helmet } from 'react-helmet';

const About = ({match, location}) => {
    const query = qs.parse(location.search);
    const detail = query.detail === 'true';
    const { name } = match.params;

    return (
        <div>
            <Helmet>
                <title>{`About ${name ? name : ''}`}</title>
            </Helmet>
            <h2>
                About {match.params.name}
                {detail && 'detail: adfafd'}
            </h2>
        </div>
    );
}

export default About;