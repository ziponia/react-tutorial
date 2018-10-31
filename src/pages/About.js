import React from 'react';
import qs from 'query-string';

const About = ({match, location}) => {
    const query = qs.parse(location.search);
    const detail = query.detail === 'true';

    return (
        <div>
            <h2>
                About {match.params.name}
                {detail && 'detail: adfafd'}
            </h2>
        </div>
    );
}

export default About;